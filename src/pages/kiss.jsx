import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import buttes_chaumont from '../assets/img/buttes_ chaumont.jpg';
import beaubourg from '../assets/img/beaubourg.jpg'
import cloudIcon from '../assets/img/cloud.png';

export default function Kiss() {
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

                const validatedPlaces = responseData.filter(place => place.is_validate && place.category === 'Spots à bisou(s)');

                setPlaces(validatedPlaces);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    },  []);

    return (
        <div className="container">
            <img src={cloudIcon} alt="Cloud Icon" className="category-icon" style={{ width: '5%', position: 'absolute', marginLeft: '510px', marginTop: '-15px' }} />
            <h1 className="kiss-title" style={{position: 'relative'}}>Spots à bisou(s)</h1>
            {places.map((place) => (  
            <div className="image-and-content" key={place.id}>
                <img src={beaubourg} alt='Musée Beaubourg' style={{width:'20%'}} className='buttes-chaumont-img' />
                <div className="content">
                    <h3>{place.title}</h3>
                    <br></br>
                    <p alt='Photo cabine' style={{color:'white'}}>{place.address}, {place.city} {place.borough}</p>
                    <p className='spot-description'>{place.description}</p>
                    <p>Fourchette de prix : {place.price}</p>
                    <br></br>
                <button type="submit" className="circle-btn btn-map">Voir sur la map</button>
            </div>
            </div>
            ))}
            <div className="return d-flex justify-content-end">
                <Link to="/">
                    <span>Retour</span>
                </Link>
            </div>
            
            <div className="image-and-content">
                <img src={buttes_chaumont} alt='buttes chaumont' style={{width:'20%'}} className='buttes-chaumont-img' />
                <div className="content">
                    <p alt='Photo cabine' style={{color:'white'}}>Photo cabine, Avenue Darcel, parc des Buttes Chaumonts, 75019 Paris</p>
                    <p className='spot-description'>Situé dans le parc des Buttes Chaumont au pied du Pavillon Puebla, ce photomaton est idéal pour capturer un moment magique.</p>
                    <p>Fouchette de prix: 3€</p>
                    <button type="submit" className="circle-btn btn-map">Voir sur la map</button>
                </div>
            </div>
        </div>
    );
}