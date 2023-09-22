import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import coeur from '../assets/img/coeur.png'
import restaurant_theleme from '../assets/img/theleme.jpg';
import restaurant_terra from '../assets/img/terra.jpg'

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
          <img src={coeur} alt="Heart Icon" className="heart-icon" style={{ width: '3%', position: 'absolute', marginLeft: '450px', marginTop: '115px' }} />
            <h1 className="kiss-title" style={{position: 'relative'}}>On sort le grand jeu</h1>
          <div className="d-flex justify-content-start">
                <Link to="/">
                    <span className='return-link'>Retour</span>
                </Link>
            </div>
            <div className="image-and-content">
                <img src={restaurant_theleme} alt='La Scène Thélème' style={{width:'20%'}} className='spot-img' />
                <div className="content">
                    <p className='spot-title' style={{color:'white'}}><b>La Scène Thélème</b>, 18 Rue Troyon, 75017 Paris</p>
                    <p className='spot-description'> Ce restaurant marie l'art et la gastronomie, proposant parfois des représentations théâtrales avant le dîner. 
                    Le chef japonais Yoshitaka Takayanagi offre une cuisine fine et subtile avec des produits de qualité. 
                    Une expérience idéale pour sortir le grand jeu lors d'un rendez-vous amoureux à Paris.</p>
                    <p>Fourchette de prix: 100€</p>
                    <button type="submit" className="circle-btn btn-map-3">Voir sur la map</button>
                </div>
            </div>
            <div className="image-and-content">
                <img src={restaurant_terra} alt='Terra' style={{width:'20%'}} className='spot-img' />
                <div className="content">
                    <p className='spot-title' style={{color:'white'}}><b>Terra</b>, 21 rue des Gravilliers, Paris, 75003</p>
                    <p className='spot-description'> Ce restaurant marie l'art et la gastronomie, proposant parfois des représentations théâtrales avant le dîner. 
                    Le chef japonais Yoshitaka Takayanagi offre une cuisine fine et subtile avec des produits de qualité. 
                    Une expérience idéale pour sortir le grand jeu lors d'un rendez-vous amoureux à Paris.</p>
                    <p>Fourchette de prix: 100€</p>
                    <button type="submit" className="circle-btn btn-map-3">Voir sur la map</button>
                </div>
            </div>
            {places.map((place) => (
              <li key={place.id}>
                <h3>{place.title}</h3>
                <p className="text-big_game">Description : {place.description}</p>
                <p className="text-big_game">Adresse : {place.address}, {place.city} {place.borough}</p>
                <p className="text-big_game">Prix : {place.price}</p>
              </li>
            ))}
        </div>
    );
}