import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import '../index.css';

export default function CreateTestimony() {
  const [first_name, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [user] = useAtom(userAtom);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

  const newTestimony = {
    testimony: {
      first_name: first_name,
      age: age,
      description: description
    }
  }

  try {
    const response = await fetch('http://localhost:3000/testimonies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTestimony),
    });

    if (response.ok) {
      console.log('Votre témoignage a été créé avec succès');
    } else {
      console.error("Erreur lors de la création du témoignage");
    }
  } catch (error) {
    console.error("Erreur lors de la création du témoignage : ", error);
  }
  };

  return (
    <>
      <h3 className='top-title'>Racontez-nous</h3>
      <br></br>
      <p className="text-tellus small-interline">Ici, partagez nous votre témoignage.</p> 
      <p className="text-tellus small-interline">Dites-nous où était votre date et comment ça s’est passé.</p>
      <p className="text-tellus small-interline">Votre message pourrait être partagé dans la rubrique “Vos lettres d’amour” !</p>
      <p className="text-tellus small-interline">N’oubliez de nous préciser votre prénom et votre âge.</p>
      <br></br>
      <br></br>

      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="row g-3 text-tellus">
          <div className="col">
            <label htmlFor="first_name" className="form-label">Ton prénom</label>
            <input value={first_name} onChange={handleFirstNameChange} type="text" className="form-control input-tellus-first_name" id="first_name" placeholder="First_name"/>
          </div>
          <div className="col">
            <label htmlFor="age" className="form-label">Ton âge</label>
            <input value={age} onChange={handleAgeChange} type="integer" className="form-control input-tellus-age" id="age" placeholder="Age"/>
          </div>
        </div>
        <br></br>

        <div className="mb-3 text-tellus">
          <label htmlFor="description" className="form-label">Ton message</label>
          <textarea value={description} onChange={handleDescriptionChange} type="message" className="form-control input-tellus" id="description" rows="6" placeholder="Dites-nous tout ici !"/>
        </div>
        <br></br>
        <button type="submit" className="circle-btn text-circle-btn">Envoyer</button>
      </form>

      <br></br>
    </>
  )
}
