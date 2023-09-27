import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from "../../config";
import Map from '../components/Map/Map';
import buttes_chaumont from '../assets/img/buttes_ chaumont.jpg';
import beaubourg from '../assets/img/beaubourg.jpg'
import cloudIcon from '../assets/img/cloud.png';

export default function Kiss() {
    const [places, setPlaces] = useState([]);
    const [showMap, setShowMap] = useState(false);

    const openMap = () => {
        setShowMap(true);
    };
      
      const closeMap = () => {
        setShowMap(false);
    };
      

    useEffect(() => {
        const fetchData = async () => {
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
            <img src={cloudIcon} alt="Cloud Icon" className="cloud-icon" style={{ width: '5%', position: 'absolute', marginLeft: '35%', marginTop: '-1%' }} />
            <h1 className="title_categoriespage" style={{position: 'relative'}}>Spots à bisou(s)</h1>
            <div className="d-flex justify-content-start">
                <Link to="/">
                    <span className='return-link'>Retour</span>
                </Link>
            </div>
            
            {places.map((place) => (  
            <div className="image-and-content" key={place.id}>
            <img src={place.image} alt='' style={{width:'20%'}} className='spot-img' />
              <div className="content">
                  <p className='spot-place' style={{color:'white'}}><b>{place.title}</b>, {place.address}, {place.zip_code} {place.city}</p>
                  <p className='spot-description'>{place.description}</p>
                  <p className='spot-price'>Fourchette de prix: {place.price}</p>
                  <br></br>
                  <button type="submit" onClick={openMap} className="circle-btn btn-map">Voir sur la map</button>
                  {showMap && (
                    <div className="map-modal">
                        <button onClick={closeMap} className="close-button">
                          Fermer
                        </button>
                        <Map address={place.address} zip_code={place.zip_code} city={place.city} />
                    </div>
                    )}
                </div>
            </div>
            ))}

        </div>
    );
}