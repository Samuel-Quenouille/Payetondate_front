import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { Link } from 'react-router-dom';

export default function CreatePlace() {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [zip_code, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [borough, setBorough] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [user] = useAtom(userAtom);
  const [showAlert, setShowAlert] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleBoroughChange = (event) => {
    setBorough(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  }

  const handleImageChange = (event) => {
    setImage(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPlace = {
      place: {
        title: title,
        address: address,
        zip_code: zip_code,
        city: city,
        borough: borough,
        category: category,
        description: description,
        price: price,
        url: url,
        image: image,
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
        console.log('Votre lieu a été ajouté avec succès');
        setShowAlert(true);
        setTitle('');
        setDescription('');
        setPrice('');
        setCategory('');
        setAddress('');
        setZipCode('');
        setCity('');
        setBorough('');
        setUrl('');
        setImage('');
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        console.error("Erreur lors de la création de l'annonce");
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'annonce :", error);
    }
  };

  return (
    <div className="create_place container">
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Ton lieu a été envoyé à l'administrateur dans l'attente d'une validation
        </div>
      )}
      <h1 className="title-placeform">Ajouter un lieu</h1>
      <div className="subtitle-placeform container">
        <p>Pour proposer un lieu, ça se passe ici !</p>
        <p>Un grand merci à vous qui faite exister la communauté Paye ton date.</p>
      </div>
      <form className="form-place-container" onSubmit={handleSubmit}>
      <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}> 
          <input
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="custom-input-placeform"
            placeholder="Nom du lieu"
          />
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <input
            id="address"
            value={address}
            onChange={handleAddressChange}
            className="custom-input-placeform"
            placeholder="Adresse"
          />
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <input
            id="zip_code"
            value={zip_code}
            onChange={handleZipCodeChange}
            className="custom-input-placeform"
            placeholder="Code Postal"
          />
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <select
            id="city"
            value={city}
            onChange={handleCityChange}
            className="custom-input-placeform"
            placeholder="Ville"
          >
            <option value="" disabled>Sélectionner la ville</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <select
            id="borough"
            value={borough}
            onChange={handleBoroughChange}
            className="custom-input-placeform"
          >
            <option value="" disabled>Sélectionner l'arrondissement</option>
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
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="custom-input-placeform"
          >
            <option value="" disabled>Sélectionner la catégorie</option>
            <option value="Histoire de">Histoire de</option>
    		    <option value="Spots à bisou(s)">Spots à bisou(s)</option>
    		    <option value="On sort le grand jeu">On sort le grand jeu</option>
    		    <option value="Insolite">Insolite</option>
            <option value="Gratuit">Gratuit</option>
          </select>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="custom-input-placeform"
            placeholder="Description"
          />
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <select
            id="price"
            value={price}
            onChange={handlePriceChange}
            className="custom-input-placeform"
          >
            <option value="" disabled>Sélectionner le prix</option>
            <option value="Gratuit">Gratuit</option>
    		    <option value="0 - 15 €">0 - 15 €</option>
            <option value="15 - 30 €">15 - 30 €</option>
            <option value="A partir de 30 €">A partir de 30 €</option>
          </select>
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <input
            id="url"
            value={url}
            onChange={handleUrlChange}
            className="custom-input-placeform"
            placeholder="URL du site"
          />
        </div>
        <br></br>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <input
            id="image"
            value={image}
            onChange={handleImageChange}
            className="custom-input-placeform"
            placeholder="URL de l'image"
          />
        </div>
        <br></br>
        <div className="btn-placeform">
          <button type="submit" className="circle-btn text-circle-btn">Envoyer</button>
        </div>
      </form>
    </div>
  );
}