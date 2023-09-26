import logo from '../assets/img/logo.png';
import '../index.css';

export default function Welcome() {

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
    </div>
  );
}
