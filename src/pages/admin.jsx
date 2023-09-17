import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function Admin() {

    const [places, setPlaces] = useState([]);
    
        useEffect(() => {
            const fecthData = async () => {
                try {
                    const response = await fetch('http://localhost:3000/places', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    console.log('Réponse de l\'API :', response);
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

            fecthData();
        }, []);

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
                      <button type="submit" className="btn btn-primary">Valider</button>
                      <button type="submit" className="btn btn-primary">Modifier</button>
                      <button type="submit" className="btn btn-primary">Supprimer</button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
}