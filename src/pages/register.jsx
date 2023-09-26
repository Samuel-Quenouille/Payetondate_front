import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from "../../config";
import Cookies from 'js-cookie';


export default function Register() {
  const [, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_Confirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();

        Cookies.set('token', response.headers.get("Authorization"));
        Cookies.set('id', data.user.id);

        navigate('/')

        setUser({
          isLoggedIn: true,
        });
      } else {
        setError('Erreur lors de la création du compte');
      }
    } catch (error) {
      setError('Erreur lors de la création du compte');
    }
  };

  return (
    <div className="form_signup container">
      <div className="return-link d-flex justify-content-start">
        <Link to="/">
          <span>Retour</span>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className="top-title-login">S'inscrire</h1>
          {error && <p>{error}</p>}
        <div className="label-input-container">
          <label htmlFor="email" className="custom-label">Ton email :</label>
        <br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="custom-input"
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="password" className="custom-label">Créé ton mot de passe :</label>
          <br></br>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            className="custom-input"
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="password" className="custom-label">Confirme ton mot de passe :</label>
          <br></br>
          <input
            type="password"
            id="password"
            value={password_confirmation}
            onChange={(e) => setPassword_Confirmation(e.target.value)}
            placeholder="Confirme ton mot de passe"
            required
            className="custom-input"
          />
        </div>
        <div className="button-register d-flex justify-content-center">
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  );
}