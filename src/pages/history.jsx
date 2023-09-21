import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import '../index.css';
import Thunder from '../assets/img/tonnerre.png';

export default function Historyof() {
  return (

    <div className="container">
    <img src={Thunder} alt="Cloud Icon" className="category-icon" style={{ width: '7%', position: 'absolute', marginLeft: '510px', marginTop: '-15px' }} />
    <h1 className="title_categoriespage" style={{position: 'relative'}}>Histoire de</h1>
    <h6 className='subtitle_categoriespage' style={{position: 'relative'}}>avant de conclure</h6>
    </div>

  );
}