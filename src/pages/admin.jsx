import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


export default function Admin() {
  const [places, setPlaces] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/places', {
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
            setPlaces(responseData);
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
          }
      }

      fetchData();
    }, []);

    const handleDelete = async (placeId) => {
      try {
        const response = await fetch(`http://localhost:3000/places/${placeId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        if (response.ok) {
          console.log("Votre annonce a été supprimée avec succès");
          // Vous pouvez mettre à jour l'état ou rediriger l'utilisateur après la suppression
        } else {
          console.error("Erreur lors de la suppression de l'annonce");
        }
      } catch (error) {
        console.error("Erreur lors de la suppression de l'annonce :", error);
      }
    };

    const handleValidate = async (placeId) => {
      try {
        const response = await fetch(`http://localhost:3000/places/${placeId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ is_validate: true }),
        });

        if (response.ok) {
          console.log("Lieu validé avec succès");
          setPlaces((prevState) =>
            prevState.map((place) =>
            place.id === placeId ? { ...place, is_validate: true } : place 
            )
          );
        } else {
          console.error("Erreur lors de la validation du lieu");
        }
      } catch (error) {
        console.error("Erreur lors de la validation du lieu :", error)
      }
    }

    return (
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {places.map((place) => (
            <div key={place.id} className="col">
              <div className="card">
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="category" value={place.category} readOnly />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="title" value={place.title} readOnly />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" id="description" value={place.description} readOnly />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="price" value={place.price} readOnly />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="address" value={place.address} readOnly />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="creator_email" value={place.creator_email} readOnly />
                  </div>
                    <button type="submit" className="btn btn-primary" onClick={() => handleValidate(place.id)}>Valider</button>
                    <button type="submit" className="btn btn-primary">Modifier</button>
                    <button type="submit" className="btn btn-danger" onClick={() => handleDelete(place.id)}>Supprimer</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}