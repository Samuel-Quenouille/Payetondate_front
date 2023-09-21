import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import tonnerre from "../assets/img/tonnerre.png"
import baby_foot from "../assets/img/baby_foot.jpg"
import cloud from "../assets/img/cloud.png"
import bisou from "../assets/img/bisou.jpg"
import coeur from "../assets/img/coeur.png"
import bouquet from "../assets/img/bouquet.jpg"
import yeux from "../assets/img/yeux.png"
import montgolfière from "../assets/img/montgolfière.jpg"
import star from "../assets/img/star.png"
import balade from "../assets/img/balade.jpg"

export default function Categories() {
  
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src={tonnerre} className="card-icon" alt="storm Icon" />
          <img src={baby_foot} className="card-img-top custom-image" alt="Histoire de" />
          <Link to="/historyof" className="btn btn-custom">Le date “histoire de”</Link> 
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={cloud} className="card-icon" alt="Cloud Icon" />
          <img src={bisou} className="card-img-top custom-image" alt="Spots à bisous" />
          <Link to="/kiss" className="btn btn-custom-2">Le date “spots à bisou(s)”</Link> 
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={coeur} className="card-icon" alt="heart Icon" />
          <img src={bouquet} className="card-img-top custom-image" alt="on sort le grand jeu" />
          <Link to="/biggame" className="btn btn-custom-3">Le date “on sort le grand jeu”</Link> 
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={yeux} className="card-icon" alt="eyes Icon" />
          <img src={montgolfière} className="card-img-top custom-image" alt="insolite" />
          <Link to="/unusual" className="btn btn-custom-4">Le date “insolite”</Link> 
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src={star} className="card-icon" alt="star Icon" />
          <img src={balade} className="card-img-top custom-image" alt="insolite" />
          <Link to="/free" className="btn btn-custom-5">Le date “gratuit c’est encore mieux”</Link>
        </div>
      </div>
    </div>
  );
}
