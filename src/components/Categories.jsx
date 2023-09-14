import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Categories() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src='src/assets/img/tonnerre.png' className="card-icon" alt="storm Icon" />
          <img src="src/assets/img/baby-foot.jpg" className="card-img-top custom-image" alt="Histoire de" />
          <a href="#" className="btn btn-custom">Le date “histoire de”</a> 
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src='src/assets/img/cloud.png' className="card-icon" alt="Cloud Icon" />
          <img src="src/assets/img/lebisou.jpeg" className="card-img-top custom-image" alt="Spots à bisous" />
          <a href="#" className="btn btn-custom-2">Le date “spots à bisou(s)”</a> 
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src='src/assets/img/coeurs.png' className="card-icon" alt="heart Icon" />
          <img src="src/assets/img/bouquet.jpg" className="card-img-top custom-image" alt="on sort le grand jeu" />
          <a href="#" className="btn btn-custom-3">Le date “on sort le grand jeu”</a> 
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src='src/assets/img/les-yeux.png' className="card-icon" alt="eyes Icon" />
          <img src="src/assets/img/montgolfière.jpg" className="card-img-top custom-image" alt="insolite" />
          <a href="#" className="btn btn-custom-4">Le date “insolite”</a> 
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src='src/assets/img/star.png' className="card-icon" alt="star Icon" />
          <img src="src/assets/img/balade.jpg" className="card-img-top custom-image" alt="insolite" />
          <a href="#" className="btn btn-custom-5">Le date “gratuit”</a> 
        </div>
      </div>
    </div>
  );
}
