import React from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css';

export default function TopFive () {

    return (
        <div className='container card-top'>
            <h3 className="top-title">Notre top 5 de la semaine</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="src/assets/img/amélie poulain.jpg" className="card-img-top custom-image" alt="café des deux moulins" />
                        <div className="card-body custom-body-1">
                            <h5 className="card-title">Café des deux moulins, 75018 Paris</h5>
                            <p className="card-text">Bistrot mythique du quartier Montmartre, que l'ont retrouve dans le film d'Amélie Poulain. </p>
                        </div>
                    </div>
                </div>
        <div className="col">
          <div className="card h-100">
            <img src="src/assets/img/recyclerie.jpg" className="card-img-top custom-image" alt="Histoire de" />
                <div className="card-body custom-body-2">
                    <h5 className="card-title">La Recyclerie, 75017 Paris</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="src/assets/img/grand rex.jpg" className="card-img-top custom-image" alt="Histoire de" />
                <div className="card-body custom-body-3">
                    <h5 className="card-title">Le Grand Rex, 75002</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="src/assets/img/palais de tokyo.jpg" className="card-img-top custom-image" alt="Palais de Tokyo" />
                    <div className="card-body custom-body-4">
                        <h5 className="card-title">Palais de Tokyo, 75116 Paris</h5>
                        <p className="card-text">Bistrot mythique du quartier Montmartre, que l'ont retrouve dans le film d'Amélie Poulain. </p>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src="src/assets/img/parc.jpg" className="card-img-top custom-image" alt="Palais de Tokyo" />
                    <div className="card-body custom-body-5">
                        <h5 className="card-title">Parc Monceau, 75008 Paris</h5>
                        <p className="card-text">Pour les amoureux de la nature, faites une balade romantique au parc Monceau, célèbre parc datant du 18ème siècle. </p>
                    </div>
            </div>
        </div>
    </div>
</div>
    );
}