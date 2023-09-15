import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Tellus() {

  return (
    <>
      <h3 classNameName='top-title'>Racontez-nous</h3>
      <br></br>
      <p className="text-tellus small-interline">Ici, partagez nous votre témoignage.</p> 
      <p className="text-tellus small-interline">Dites-nous où était votre date et comment ça s’est passé.</p>
      <p className="text-tellus small-interline">Votre message pourrait être partagé dans la rubrique “Vos lettres d’amour” !</p>
      <p className="text-tellus small-interline">N’oubliez de nous préciser votre prénom et votre âge.</p>
      <br></br>
      <br></br>

      <form className="d-flex flex-column align-items-center">
        <div className="mb-3 text-tellus">
          <label htmlFor="exampleInputEmail1" className="form-label">Votre email</label>
          <input type="email" className="form-control input-tellus" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
        </div>

        <div className="mb-3 text-tellus">
          <label htmlFor="exampleInputPassword1" className="form-label">Votre message</label>
          <textarea type="message" className="form-control input-tellus" id="exampleInputMessage" rows="6" placeholder="dites-nous tout ici !"/>
        </div>

        <br></br>

        <Link to="/" className="circle-btn text-circle-btn">
          Envoyer
        </Link>
      </form>

      <br></br>
    </>
  )
}
