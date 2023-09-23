import React, { useState } from 'react';
import '../index.css';

export default function CreateTestimony() {
  const [first_name, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
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
      setShowAlert(true);
      setFirstName('');
      setAge('');
      setDescription('');
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      console.error("Erreur lors de la création du témoignage");
    }
  } catch (error) {
    console.error("Erreur lors de la création du témoignage : ", error);
  }
  };

  return (
    <>
      <h3 className='top-title'>Racontes-nous</h3>

      {showAlert && (
        <div className="alert alert-success" role="alert">
          Ton témoignage a été envoyé à l'administrateur dans l'attente d'une validation
        </div>
      )}
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="row g-3">
          <div className="col">
            <input
              id="first_name" 
              value={first_name} 
              onChange={handleFirstNameChange} 
              className="input-tellus-first_name" 
              placeholder="Ton prénom"
            />
          </div>
          <div className="col">
            <input 
              id="age"
              value={age} 
              onChange={handleAgeChange} 
              type="integer" 
              className="input-tellus-age" 
              placeholder="Ton âge"
            />
          </div>
        </div>
        <br></br>
        <div className="mb-3">
          <textarea 
            id="description"
            value={description} 
            onChange={handleDescriptionChange} 
            className="input-tellus-description" 
            rows="6" 
            placeholder="Ici, partages-nous ton témoignage. Dis-nous comment s'est déroulé ton date et où s'est-il passé. Ton message pourrait apparaître dans la rubrique Vos lettres d'amour !"
          />
        </div>
        <br></br>
        <button type="submit" className="circle-btn text-circle-btn">Envoyer</button>
      </form>
      <br></br>
    </>
  )
}
