import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BigGame() {
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

                const validatedPlaces = responseData.filter(place => place.is_validate && place.category === 'On sort le grand jeu');

                setPlaces(validatedPlaces);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    },  []);

    return (
        <div className="container">
          <h1 className="big_game-title">On sort le grand jeu</h1>
            {places.map((place) => (
              <li key={place.id}>
                <h3>{place.title}</h3>
                <p className="text-big_game">Description : {place.description}</p>
                <p className="text-big_game">Adresse : {place.address}, {place.city} {place.borough}</p>
                <p className="text-big_game">Prix : {place.price}</p>
              </li>
            ))}
            <div className="return d-flex justify-content-end">
                <Link to="/">
                    <span>Retour</span>
                </Link>
            </div>
        </div>
    );
}