import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { isAdminAtom } from '../atom'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function Login() {
  const [, setUser] = useAtom(userAtom);
  const [isAdmin, setIsAdmin] = useAtom(isAdminAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password
          }
        }),
      });

      if (response.ok) {
        console.log('Vous êtes connecté');
        const data = await response.json();
        const is_admin = data.user.is_admin

        Cookies.set('token', response.headers.get("Authorization"));
        Cookies.set('id', data.user.id);


        navigate('/')

        if (is_admin) {
          setIsAdmin(true);
      } else {
          setIsAdmin(false);
      }

        setUser({
          isLoggedIn: true,
        });
      } else {
        setError('Identifiants invalides');
      }
    } catch (error) {
      setError('Une erreur s\'est produite');
    }
  };

  return (
    <div className="form_signin container d-flex justify-content-center">
      <div className="return-link d-flex justify-content-start">
        <Link to="/">
          <span>Retour</span>
        </Link>
        </div>
      <form onSubmit={handleLogin}>
        <h1 className="top-title-login">Se connecter</h1>
          {error && <p>{error}</p>}
        <div className="label-input-container">
          <label htmlFor="email" className="custom-label">Ton email :</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
            className="custom-input"
          />
        </div>
        <div className="label-input-container">
          <label htmlFor="password" className="custom-label">Ton mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="custom-input"
            placeholder="mot de passe"
          />
        </div>
        <div className='link-register'>
          <p className="text-end"> Pas encore de compte ? <Link className="nav-link" to="/register">S'inscrire</Link></p>
        </div>
        <div className="button-login">
          <button type="submit">Se connecter</button>
        </div>
      </form>
    </div>
  );
}