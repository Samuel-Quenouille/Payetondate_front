import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

export default function CreatePlace() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');
  const [zip_code, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [borough, setBorough] = useState('');
  const [url, setUrl] = useState('');
  const [user] = useAtom(userAtom);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    
  }

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleBoroughChange = (event) => {
    setBorough(event.target.value);
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPlace = {
      place: {
        title: title,
        description: description,
        price: price,
        category: category,
        address: address,
        zip_code: zip_code,
        city: city,
        borough: borough,
        url: url,
        user_id: user.id,
      }
    };

    try {
      const response = await fetch('http://localhost:3000/places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newPlace),
      });

      if (response.ok) {
        console.log('Votre annonce a été créée avec succès');
      } else {
        console.error("Erreur lors de la création de l'annonce");
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'annonce :", error);
    }
  };

  return (
    <div className="create_place container">
      <h2>Création d'un lieu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <br></br>
          <input
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <br></br>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="price">Prix :</label>
          <br></br>
          <select
            id="price"
            value={price}
            onChange={handlePriceChange}
          >
            <option value="Gratuit">Gratuit</option>
    		    <option value="0 - 15 €">0 - 15 €</option>
            <option value="15 - 30 €">15 - 30 €</option>
            <option value="A partir de 30 €">A partir de 30 €</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Catégorie :</label>
          <br></br>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="Histoire de">Histoire de</option>
    		    <option value="Spots à bisou(s)">Spots à bisou(s)</option>
    		    <option value="On sort le grand jeu">On sort le grand jeu</option>
    		    <option value="Insolite">Insolite</option>
            <option value="Gratuit">Gratuit</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Adresse :</label>
          <br></br>
          <input
            id="address"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="zip_code">Code Postal :</label>
          <br></br>
          <input
            id="zip_code"
            value={zip_code}
            onChange={handleZipCodeChange}
          />
        </div>
        <div>
          <label htmlFor="city">Ville :</label>
          <br></br>
          <input
            id="city"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div>
          <label htmlFor="borough">Arrondissement :</label>
          <br></br>
          <select
            id="borough"
            value={borough}
            onChange={handleBoroughChange}
          >
            <option value="1er">1er</option>
    		    <option value="2e">2e</option>
            <option value="3e">3e</option>
            <option value="4e">4e</option>
            <option value="5e">5e</option>
            <option value="6e">6e</option>
            <option value="7e">7e</option>
            <option value="8e">8e</option>
            <option value="9e">9e</option>
            <option value="10e">10e</option>
            <option value="11e">11e</option>
            <option value="12e">12e</option>
            <option value="13e">13e</option>
            <option value="14e">14e</option>
            <option value="15e">15e</option>
            <option value="16e">16e</option>
            <option value="17e">17e</option>
            <option value="18e">18e</option>
            <option value="19e">19e</option>
            <option value="20e">20e</option>
          </select>
        </div>
        <div>
          <label htmlFor="url">URL :</label>
          <br></br>
          <input
            id="url"
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <br></br>
        <button type="submit">Créer l'annonce</button>
      </form>
    </div>
  );
}