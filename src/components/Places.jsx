import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { API_BASE_URL } from "../../config";

export default function Places() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchDataPlace = async () => {
          try {
            const response = await fetch(`${API_BASE_URL}/places`, {
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
          const response = await fetch(`${API_BASE_URL}/places/${placeId}`, {
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
          const response = await fetch(`${API_BASE_URL}/places/${placeId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
  
          if (response.ok) {
            console.log("Le lieu a été supprimée avec succès");
            // Vous pouvez mettre à jour l'état ou rediriger l'utilisateur après la suppression
            setPlaces((prevPlaces) =>
            prevPlaces.filter((place) => place.id !== placeId)
            );
          } else {
            console.error("Erreur lors de la suppression du lieu");
          }
        } catch (error) {
          console.error("Erreur lors de la suppression du lieu :", error);
        }
    };

    return (
      <>
      <h3 className="subtitle-admin px-5">Validation de lieux</h3>
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
                  <input className="custom-input-placeform" id="zip_code" value={place.zip_code} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="city" value={place.city} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <input type="text" className="custom-input-placeform" id="category" value={place.category} readOnly />
                </div>
                <div className="mb-3" style={{display: 'flex', justifyContent: 'center'}}>
                  <textarea type="text" className="custom-input-placeform" id="description" value={place.description} readOnly />
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
                  <input type="text" className="custom-input-placeform" id="url" value={place.user_id} readOnly />
                </div>
                <div className="mb-3 text-center">
                  <button type="button" className="btn btn-validate-place" onClick={() => handleValidatePlace(place.id)}>
                    Valider
                  </button>
                  {''}
                  <button type="button" className="btn btn-delete-place" onClick={() => handleDeletePlace(place.id)}>
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