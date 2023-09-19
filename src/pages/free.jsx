import React, { useEffect, useState } from 'react';

export default function Free() {
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

                const validatedPlaces = responseData.filter(place => place.is_validate && place.category === 'Gratuit');

                setPlaces(validatedPlaces);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    },  []);

    return (
        <div className="container">
          <h1 className="free-title">Gratuit</h1>
            {places.map((place) => (
              <li key={place.id}>
                <h3>{place.title}</h3>
                <p className="text-free">Description : {place.description}</p>
                <p className="text-free">Adresse : {place.address}, {place.city} {place.borough}</p>
                <p className="text-free">Prix : {place.price}</p>
              </li>
            ))}
        </div>
    );
}