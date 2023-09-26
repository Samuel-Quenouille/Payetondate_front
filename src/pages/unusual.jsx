import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from "../../config";
import Map from '../components/Map/Map';
import yeux from '../assets/img/yeux.png'
import fromage from '../assets/img/fromage.jpg'
import arcade from '../assets/img/arcade.jpg'

export default function Unusual() {
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

                const validatedPlaces = responseData.filter(place => place.is_validate && place.category === 'Insolite');

                setPlaces(validatedPlaces);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchData();
    },  []);

    return (
        <div className="container">
        <img src={yeux} alt="Eye Icon" className="eye-icon" style={{ width: '5%', position: 'absolute', marginLeft: '39%', marginTop: '-2%' }} />
        <h1 className="title_categoriespage" style={{position: 'relative'}}>Insolite</h1>
        <div className="d-flex justify-content-start">
            <Link to="/">
                <span className='return-link'>Retour</span>
            </Link>
        </div>
        <div className="image-and-content">
                <img src={fromage} alt='Fromage' style={{width:'20%'}} className='spot-img' />
                <div className="content">
                    <p className='spot-title' style={{color:'white'}}><b>Fromagerie COW</b>, 30 boulevard Saint-Germain 75005 Paris</p>
                    <p className='spot-description'>Amateurs de fromage et de vin, embarquez pour un voyage insolite ! Accompagnés par des fromagers experts, plongez dans l'univers des fromages et explorez leurs nuances uniques. 
                    Laissez-vous emporter par cette expérience sensorielle qui éveillera vos sens et fera danser vos papilles.</p>
                    <p>Fourchette de prix: 70€</p>
                    <button type="submit" className="circle-btn btn-map-4">Voir sur la map</button>
                </div>
            </div>
        <div className="image-and-content">
            <img src={arcade} alt='Arcade' style={{width:'20%'}} className='spot-img' />
            <div className="content">
                <p className='spot-title' style={{color:'white'}}><b>La tête dans les nuages</b>, 5 Bd des Italiens, 75002 Paris</p>
                <p className='spot-description'>La salle de jeux 'La Tête dans les Nuages' est un paradis ludique, un monde d'amusement débordant où les rires et la joie règnent en maîtres. 
                    Ses étages regorgent de jeux d'arcade, de défis interactifs et d'activités divertissantes. 
                    C'est l'endroit parfait pour créer des souvenirs mémorables.</p>
                <p>Fourchette de prix: 15-20€</p>
                <button type="submit" className="circle-btn btn-map-4">Voir sur la map</button>
            </div>
        </div>
        {places.map((place) => (  
            <div className="image-and-content" key={place.id}>
                <img src={place.image} alt='' style={{width:'20%'}} className='spot-img' />
                <div className="content">
                    <p style={{color:'white'}}><b>{place.title}</b>, {place.address}, {place.zip_code} {place.city}</p>
                    <p className='spot-description'>{place.description}</p>
                    <p>Fourchette de prix: {place.price}</p>
                    <br></br>
                    <button type="submit" onClick={openMap} className="circle-btn btn-map-4">Voir sur la map</button>
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