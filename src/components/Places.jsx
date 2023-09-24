import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function Places() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchDataPlace = async () => {
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
  
        fetchDataPlace();
    }, []);

    const handleValidatePlace = async (placeId) => {
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
              ).filter((place) => !place.is_validate)
            );
          } else {
            console.error("Erreur lors de la validation du lieu");
          }
        } catch (error) {
          console.error("Erreur lors de la validation du lieu :", error)
        }
    }

    const handleDeletePlace = async (placeId) => {
        try {
          const response = await fetch(`http://localhost:3000/places/${placeId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
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

    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {places.map((place) => (
          !place.is_validate && (
            <div key={place.id} className="col">
              <form className="form-place-container">
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="title" value={place.title} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="address" value={place.address} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <textarea className="custom-input-placeform" id="zip_code" value={place.zip_code} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="city" value={place.city} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="category" value={place.category} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="description" value={place.description} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="price" value={place.price} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="image" value={place.image} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="url" value={place.url} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="email" className="custom-input-placeform" id="user_id" value={place.user_id} readOnly />
                </div>
                  <button type="submit" className="btn btn-primary" onClick={() => handleValidatePlace(place.id)}>Valider</button>
                  <button type="submit" className="btn btn-danger" onClick={() => handleDeletePlace(place.id)}>Supprimer</button>
              </form>
            </div>
          )
        ))}
      </div>
    )
}