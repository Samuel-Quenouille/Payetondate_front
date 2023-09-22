import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import '../index.css';
import tonnerre from '../assets/img/tonnerre.png';
import player_one from '../assets/img/player_one.jpg';
import adada from '../assets/img/adada.jpg';

export default function HistoryOf() {
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

          const validatedPlaces = responseData.filter(place => place.is_validate && place.category === 'Histoire de');

          setPlaces(validatedPlaces);
      } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
      }
    }

    fetchData();
  },  []);


    return (
      <div className="container">
        <img src={tonnerre} alt="Cloud Icon" className="category-icon" style={{ width: '7%', position: 'absolute', marginLeft: '510px', marginTop: '-15px' }} />
        <h1 className="title_categoriespage" style={{position: 'relative'}}>Histoire de</h1>
        <h6 className='subtitle_categoriespage' style={{position: 'relative'}}>avant de conclure</h6>

        <div className="image-and-content">
            <img src={player_one} alt='Bar Player One' style={{width:'20%'}} className='buttes-chaumont-img' />
            <div className="content">
              <p alt='Photo cabine' style={{color:'white'}}><b>Player One</b>, 224 rue Saint-Denis, 75002 Paris</p>
              <p className='spot-description'>Décoré dans le style des années 90, ce lieu propose des jeux vidéo rétro et un sous-sol dédié aux jeux de société.</p>
              <p>Fourchette de prix: 0 - 15€</p>
              <button type="submit" className="circle-btn btn-map">Voir sur la map</button>
            </div>
        </div>
        <div className="image-and-content">
            <img src={adada} alt='Bar Adada' style={{width:'20%'}} className='buttes-chaumont-img' />
            <div className="content">
              <p alt='Photo cabine' style={{color:'white'}}><b>L'Adada Bar</b>, 15 rue du Maine, 75014 Paris</p>
              <p className='spot-description'>Restaurant de brunch prisé avec cocktails maison et musique tendance dans un cadre animé peint de couleur vive.</p>
              <p>Fourchette de prix: 0 - 15€</p>
              <button type="submit" className="circle-btn btn-map">Voir sur la map</button>
            </div>
        </div>

        {places.map((place) => (  
            <div className="image-and-content" key={place.id}>
                <img src={beaubourg} alt='Musée Beaubourg' style={{width:'20%'}} className='buttes-chaumont-img' />
                <div className="content">
                  <h3>{place.title}</h3>
                  <br></br>
                  <p alt='Photo cabine' style={{color:'white'}}>{place.address}, {place.city} {place.borough}</p>
                  <p className='spot-description'>{place.description}</p>
                  <p>Fourchette de prix: {place.price}</p>
                  <br></br>
                  <button type="submit" className="circle-btn btn-map">Voir sur la map</button>
                </div>
            </div>
        ))}
      </div>

  );
}