import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function Testimonies() {
    const [testimonies, setTestimonies] = useState([]);

    useEffect(() => {
        const fetchDataTestimony = async () => {
          try {
            const response = await fetch('http://localhost:3000/testimonies', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
            });
  
            if (!response.ok) {
              console.error('Erreur lors de la récupération des données. Code d\'état HTTP :', response.status);
                throw new Error('Erreur lors de la récupération des données');
            }
  
            const responseData = await response.json();
              setTestimonies(responseData);
          } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
            }
        }
  
        fetchDataTestimony();
    }, []);

    const handleValidateTestimony = async (testimonyId) => {
        try {
          const response = await fetch(`http://localhost:3000/testimonies/${testimonyId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ is_validate: true }),
          });
  
          if (response.ok) {
            console.log("Témoignage validé avec succès");
            setTestimonies((prevState) =>
              prevState.map((testimony) =>
              testimony.id === testimonyId ? { ...testimony, is_validate: true } : testimony
              ).filter((testimony) => !testimony.is_validate)
            );
          } else {
            console.error("Erreur lors de la validation du témoignage");
          }
        } catch (error) {
          console.error("Erreur lors de la validation du témoignage :", error)
        }
    }

    const handleDeleteTestimony = async (testimonyId) => {
        try {
          const response = await fetch(`http://localhost:3000/testimonies/${testimonyId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
  
          if (response.ok) {
            console.log("Le témoignage a été supprimé avec succès");
            // Vous pouvez mettre à jour l'état ou rediriger l'utilisateur après la suppression
            setTestimonies((prevTestimonies) =>
            prevTestimonies.filter((testimony) => testimony.id !== testimonyId)
            );
          } else {
            console.error("Erreur lors de la suppression du témoignage");
          }
        } catch (error) {
          console.error("Erreur lors de la suppression du témoignage :", error);
        }
    };

    return (
      <>
      <h3 className="subtitle-admin px-5">Validation de témoignages</h3>
      <div className="d-flex  justify-content-center">
        {testimonies.map((testimony) => (
          !testimony.is_validate && (
          <div key={testimony.id} className="col">
              <form className="d-flex flex-column align-items-center">
              <div className="row g-3">
                <div className="col">
                  <input type="text" className="input-admin-first_name" id="first_name" value={testimony.first_name} readOnly />
                </div>
                <div className="col">
                  <input type="text" className="input-admin-age" id="age" value={testimony.age} readOnly />
                </div>
              </div>
              <br></br>
                <div className="mb-3">
                  <textarea className="input-admin-description" id="description" rows="6" value={testimony.description} readOnly />
                </div>
                <div className="mb-3 text-center">
                  <button type="button" className="btn btn-validate-testimony" onClick={() => handleValidateTestimony(testimony.id)}>
                    Valider
                  </button>
                  {' '}
                  <button type="button" className="btn btn-delete-testimony" onClick={() => handleDeleteTestimony(testimony.id)}>
                    Supprimer
                  </button>
                </div>
              </form>
          </div>
          )
        ))}
      </div>
      </>
    )
}