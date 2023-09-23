import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './zodiacpost'

export default function Categories() {
  
    return (
      <div className='container card-top'>
      <h1 className="title_postspage">Articles</h1>
      <h6 className="subtitle_postspage pb-5" style={{position: 'relative'}}>Retrouvez ici l'intégralité de nos articles et nos tips pour des dates réussis.</h6>
          <div className="row row-cols-1 row-cols-md-3 g-4 py-4">
              <div className="col">
                  <div className="card h-100">
                      <img src="src/assets/img/zodiac.jpg" className="card-img-top custom-image" alt="café des deux moulins" />
                  <div className="card-body custom-body-1">
                      <h5 className="card-title">Où emmener son date selon son signe astro ?</h5>
                      <p className="card-text">Céline a accepté votre rendez-vous. La date et l’heure sont fixées, youpi ! Oui, mais pour aller où ?! Ah, qu’est-ce que vous feriez sans nous ? Comme on est sympas, on vous propose cette semaine, quelques idées de lieux selon le signe astro de votre date.</p>
                      <Link to="/zodiacpost">
                      <span className='btn-readpost'><strong>Lire l'article</strong></span>
                      </Link>
                  </div>
                  </div>
              </div>
          </div>
      </div>
    )
}        