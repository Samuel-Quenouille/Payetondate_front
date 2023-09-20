import React, { useEffect, useState } from 'react';
import '../index.css';

export default function LoveLetters() {
    const [testimonies, setTestimonies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/testimonies', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    console.error('Erreur lors de la récupération des données. Code d\'état HTTP :', response.status);
                    throw new Error('Erreur lors de la récupération des données');
                }

                const responseData = await response.json();

                const validatedTestimonies = responseData.filter(testimony => testimony.is_validate);

                setTestimonies(validatedTestimonies);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    },  []);

  return (
    <>
    <h3 className='top-title'>Vos lettres d'amour</h3>

    <div className="row row-cols-1 row-cols-md-3 g-4">
        {testimonies.map((testimony) => (
        <div className="col" key={testimony.id}>
            <div className="card h-100">
                <div className="card-body">
                    <p className="card-loveletter">"{testimony.description}"</p>
                    <h5 className="card-firstname">{testimony.first_name}, {testimony.age} ans</h5>
                </div>
            </div>
        </div>
        ))}
    </div>
    </>
  )
} 