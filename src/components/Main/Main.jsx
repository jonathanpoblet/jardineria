import React from 'react';
import Services from '../Services/Services';
import Us from '../Us/Us';

import './main.css';

export default function Main() {
  return (
    <main className='main'>
        <img className='main-banner' src='../../../public/assets/banner.png' alt='banner' />

        <h1 className='main-title' id='servicios'>Servicios de <span style={{color: '#5BC82C'}}>Jardinería</span> a Tu Medida</h1>
        <h2 className='main-subtitle'>Transforma Tu Espacio con Nosotros</h2>
        
        <Services />

        <Us />
    </main>
  )
}
