import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../index.css';

export default function Welcome() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Recherche de :', searchTerm);
  };

  return (
    <div className='container welcome'>
      <img className='logo' src={logo} alt='Logo' style={{ display: 'block', margin: '0 auto', width: '30%' }}/>
      <h2 className='welcome-title'>
        Repère le lieu idéal pour<br></br>LE Date !
      </h2>
      <br></br>
      <p className='welcome-text'>
        5 catégories, 5 types de date. À vous de choisir !
      </p>
      <form className="form-inline d-flex justify-content-center" onSubmit={handleSearch}>
        <input
          className="search-bar mr-sm-2"
          type="text"
          placeholder="Je cherche un bar, musée ..."
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
        <img src='src/assets/img/fleche-droite.png' style={{width:'50%'}}></img>
        </button>
      </form>
    </div>
  );
}
