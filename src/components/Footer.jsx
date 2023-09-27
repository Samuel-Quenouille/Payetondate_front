import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/img/logo.png';

export default function Footer() {
  
    return (
      <>
        <div className="footer mt-5 pb-5">
        <div className="row align-items-start">
          <div className="col text-center">
            <div className='spacetext_footer'>
              <Link to="/articles">
                <span>Articles</span>
              </Link>
            </div>

            <div className='spacetext_footer col1'>
              <Link to="#">
                <span>Notre top 5 de la semaine</span>
              </Link>
            </div> 

            <div className='spacetext_footer col1'>
              <Link to="#">
                <span>Vos lettres d'amour</span>
              </Link>
            </div>  

            <div className='spacetext_footer col1'>
              <Link to="#">
                <span>Racontes-nous</span>
              </Link>
            </div>  
          </div>

          <div className="col text-center">
            <h5 className='title-footer'>Catégories :</h5>

            <div className='spacetext_footer col2'>
              <Link to="/historyof">
                <span>Histoire de</span>
              </Link>
            </div>  

            <div className='spacetext_footer col2'>
              <Link to="/biggame">
                <span>On sort le grand jeu</span>
              </Link>
            </div>  

            <div className='spacetext_footer col2'>
              <Link to="/unusual">
                <span>Insolite</span>
              </Link>
            </div>  

            <div className='spacetext_footer col2'>
              <Link to="/free">
                <span>Gratuit c'est encore mieux</span>
              </Link>
            </div>  

            <div className='spacetext_footer col2'>
              <Link to="/unusual">
                <span>Spot à bisou(s)</span>
              </Link>
            </div>  
          </div>

          <div className="col text-center">
            <div className='spacetext_footer col3'>
              <Link to="#">
                <span>A propos de nous</span>
              </Link>
            </div>  

            <div className='spacetext_footer col3'>
                <Link to="#">
                  <span>Politique de confidentialité</span>
                </Link>
            </div>

            <div className='spacetext_footer col3'>
              <Link to="#">
                <span>Mentions légales</span>
              </Link>
            </div>  

            <p className='contact-info col3'>Pour nous contacter :<br></br>contact@payetondate.fr</p>
          </div>
        </div>
        <img src={logo} alt='Paye ton date' className="centered-logo pt-4" style={{width:'5%'}} />
        <p className='text-center subtitlelogo_footer'>© Paye ton date - 2023</p>
        </div>
      </>
    )
}
