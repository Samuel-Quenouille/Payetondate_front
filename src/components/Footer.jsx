import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Logo from '../assets/img/logo.png';
import Articles from '../pages/articles';



export default function Footer() {
    return (
      <>
      
        <div className="footer mt-5 pb-4">
        <div className="row align-items-start">
          <div className="col text-center">
            <div className='spacetext_footer_col1'>
              <Link to="/articles">
                <span>Articles</span>
              </Link>
            </div>

            <div className='spacetext_footer_col1'>
              <Link to="#">
                <span>Notre top 5 de la semaine</span>
              </Link>
            </div> 

            <div className='spacetext_footer_col1'>
              <Link to="#">
                <span>Vos lettres d'amour</span>
              </Link>
            </div>  

            <div className='spacetext_footer_col1'>
              <Link to="#">
                <span>Racontes-nous</span>
              </Link>
            </div>  
          </div>

          <div className="col text-center">
            <h5 className='text-white'>Les dates :</h5>

            <div className='spacetext_footer_col2'>
              <Link to="/historyof">
                <span>Histoire de</span>
              </Link>
            </div>  

            <div className='spacetext_footer_col2'>
              <Link to="/biggame">
                <span>On sort le grand jeu</span>
              </Link>
            </div>  

            <div className='spacetext_footer_col2'>
              <Link to="/unusual">
                <span>Insolite</span>
              </Link>
            </div>  

            <div className='spacetext_footer_col2'>
              <Link to="/free">
                <span>Gratuit c'est encore mieux</span>
              </Link>
            </div>  

            <div className='spacetext_footer_col2'>
              <Link to="/unusual">
                <span>Spot à bisou(s)</span>
              </Link>
            </div>  
          </div>

          <div className="col text-center">
            <div className='spacetext_footer_col3'>
              <Link to="#">
                <span>A propos de nous</span>
              </Link>
            </div>  

            <div className='spacetext_footer_col3'>
                <Link to="#">
                  <span>Politique de confidentialité</span>
                </Link>
            </div>

            <div className='spacetext_footer_col3'>
              <Link to="#">
                <span>Mentions légales</span>
              </Link>
            </div>  

            <p className='contact-info text-white'><strong>Pour nous contacter :</strong></p>
            <p className='contact-info text-white'>contact@payetondate.fr</p>
          </div>
        </div>
        <img src={Logo} alt='Paye ton date' className="centered-logo pt-4" style={{width:'5%'}} />
        <p className='text-center subtitlelogo_footer'>© The Real WHOOP - 2023</p>
        </div>
        </>
    )
}
