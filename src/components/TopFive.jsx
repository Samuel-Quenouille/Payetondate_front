import React from 'react';
import amélie_poulain from '../assets/img/amélie_poulain.jpg';
import recyclerie from '../assets/img/recyclerie.jpg';
import grand_rex from '../assets/img/grand_rex.jpg';
import palais_de_tokyo from '../assets/img/palais_de_tokyo.jpg';
import parc from '../assets/img/parc.jpg';
import '../index.css';

export default function TopFive () {

    return (
        <div className='container card-top'>
            <h3 className="top-title">Notre top 5 de la semaine</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={amélie_poulain} className="card-img-top custom-image" alt="Café des deux moulins" />
                        <div className="card-body custom-body-1">
                            <h5 className="card-title">Café des deux moulins, 75018 Paris</h5>
                            <p className="card-text">Bistrot mythique du quartier Montmartre, que l'ont retrouve dans le film d'Amélie Poulain. </p>
                        </div>
                    </div>
                </div>
        <div className="col">
          <div className="card h-100">
            <img src={recyclerie} className="card-img-top custom-image" alt="Recyclerie" />
                <div className="card-body custom-body-2">
                    <h5 className="card-title">La Recyclerie, 75017 Paris</h5>
                    <p className="card-text">Pour les moureux des mobiliers chinés et d'un bon chocolat chaud, c'est l'endroit idéal pour chiller entouré de belles plantes et vu sur la petite ceinture !</p>
                </div>
            </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={grand_rex} className="card-img-top custom-image" alt="Le Grand Rex" />
                <div className="card-body custom-body-3">
                    <h5 className="card-title">Le Grand Rex, 75002</h5>
                    <p className="card-text">Le Grand Rex, situé au cœur de Paris, est un cinéma emblématique au charme Art déco, offrant une atmosphère romantique idéale pour un rendez-vous. Avec son impressionnant plafond étoilé et une grande histoire cinématographique, il incarne le glamour du cinéma à la française. Parfait pour une soirée mémorable à deux ou plus !</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src={palais_de_tokyo} className="card-img-top custom-image" alt="Palais de Tokyo" />
                    <div className="card-body custom-body-4">
                        <h5 className="card-title">Palais de Tokyo, 75116 Paris</h5>
                        <p className="card-text">Le Palais de Tokyo, niché près de la Tour Eiffel à Paris, est un lieu contemporain captivant, alliant art moderne, design et culture. Sa structure unique et ses expositions stimulantes en font un cadre parfait pour un rendez-vous artistique mémorable. L'atmosphère créative et avant-gardiste en fait une expérience inoubliable à partager.</p>
                    </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img src={parc} className="card-img-top custom-image" alt="Parc Monceau" />
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