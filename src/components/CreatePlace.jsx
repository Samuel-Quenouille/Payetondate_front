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
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, ''); // Supprime tous les caractères non numériques

  setPrice(numericValue);
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
          <input
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <label htmlFor="category">Catégorie :</label>
          <br></br>
          <input
            id="category"
            value={category}
            onChange={handleCategoryChange}
          />
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
          <input
            id="borough"
            value={borough}
            onChange={handleBoroughChange}
          />
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