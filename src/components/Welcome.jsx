import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Welcome() {

  return (
    <div className='container welcome'>
      <img className='logo' src='src/assets/img/logo.png' alt='Logo' style={{ display: 'block', margin: '0 auto', width: '30%' }}/>
      <h2 className='welcome-title'>Repère le lieu idéal pour<br></br>LE Date !</h2>
      <br></br>
      <p className='welcome-text'>
        5 catégories, 5 types de date. A vous de choisir !
      </p>
      <div>

      </div>
    </div>
  );
}
