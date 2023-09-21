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
          } else {
            console.error("Erreur lors de la suppression du témoignage");
          }
        } catch (error) {
          console.error("Erreur lors de la suppression du témoignage :", error);
        }
    };

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
         {testimonies.map((testimony) => (
          !testimony.is_validate && (
          <div key={testimony.id} className="col">
            <div className="card">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" id="category" value={testimony.first_name} readOnly />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="title" value={testimony.age} readOnly />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" id="description" value={testimony.description} readOnly />
                </div>
                  <button type="submit" className="btn btn-primary" onClick={() => handleValidateTestimony(testimony.id)}>Valider</button>
                  <button type="submit" className="btn btn-primary">Modifier</button>
                  <button type="submit" className="btn btn-danger" onClick={() => handleDeleteTestimony(testimony.id)}>Supprimer</button>
              </form>
            </div>
          </div>
          )
         ))}
        </div>
    )
}