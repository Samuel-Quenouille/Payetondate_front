import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Welcome() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Recherche de :', searchTerm);
    // Vous pouvez maintenant utiliser la valeur de searchTerm pour effectuer la recherche appropriée dans votre application.
  };

    return (
    <div className='container welcome'>
      <img className='logo' src='src/assets/img/logo.png' alt='Logo' style={{ display: 'block', margin: '0 auto', width: '30%' }}/>
      <h2 className='welcome-title'>Repère le lieu idéal pour<br></br>LE Date !</h2>
      <br></br>
      <p className='welcome-text'>
        5 catégories, 5 types de date. A vous de choisir !
      </p>
      <br></br>
      <form className="form-inline d-flex justify-content-center" onSubmit={handleSearch}>
        <input
          className="search-bar mr-sm-2"
          type="search"
          placeholder="Je cherche un bar, une sortie ..."
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" style={{color: 'white', background: 'transparent',}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        </button>
      </form>
    </div>
  );
}
