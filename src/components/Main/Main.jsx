import React from 'react';
import { GiHighGrass, GiStoneBlock } from 'react-icons/gi';
import { TbShovel } from 'react-icons/tb';
import { PiNotePencilFill, PiBugBeetleBold, PiHandshakeFill } from 'react-icons/pi';

import './main.css';

export default function Main() {
  return (
    <main className='main'>
        <img className='main-banner' src='../../../public/assets/banner.png' alt='banner' />

        <h1 className='main-title' id='servicios'>Servicios de <span style={{color: '#5BC82C'}}>Jardinería</span> a Tu Medida</h1>
        <h2 className='main-subtitle'>Transforma Tu Espacio con Nosotros</h2>
        
        <section className='main-servicios'>
          <div className='main-servicios-container'>
            <PiNotePencilFill className='main-servicios-container-icon' />
            <h2 className='main-servicios-container-title'>Diseño Personalizado</h2>
            <p className='main-servicios-container-text'>Creamos diseños de paisajes únicos y personalizados que se adaptan a tu espacio y estilo, transformando tu jardín en un oasis de belleza</p>
          </div>
          <div className='main-servicios-container'>
            <TbShovel className='main-servicios-container-icon' />
            <h2 className='main-servicios-container-title'>Mantenimiento Profesional</h2>
            <p className='main-servicios-container-text'>Nuestro equipo de expertos cuidará de tu jardín con servicios de poda, riego, fertilización y más, para mantenerlo siempre en su mejor forma</p>
          </div>
          <div className='main-servicios-container'>
            <PiHandshakeFill className='main-servicios-container-icon' />
            <h2 className='main-servicios-container-title'>Asesoramiento Expertos</h2>
            <p className='main-servicios-container-text'>Nuestros expertos en jardinería están disponibles para brindarte consejos personalizados y responder a tus preguntas sobre el cuidado de tu jardín</p>
          </div>
          <div className='main-servicios-container'>
            <GiStoneBlock className='main-servicios-container-icon' />
            <h2 className='main-servicios-container-title'>Jardines de Rocas</h2>
            <p className='main-servicios-container-text'>Creamos impresionantes jardines de rocas con suculentas y elementos decorativos que aportarán una estética única a tu espacio exterior</p>
          </div>
          <div className='main-servicios-container'>
            <GiHighGrass className='main-servicios-container-icon' />
            <h2 className='main-servicios-container-title'>Césped Perfecto</h2>
            <p className='main-servicios-container-text'>Ofrecemos servicios de instalación de césped de alta calidad para que disfrutes de un jardín verde y saludable</p>
          </div>
          <div className='main-servicios-container'>
            <PiBugBeetleBold className='main-servicios-container-icon' />
            <h2 className='main-servicios-container-title'>Control de Plagas</h2>
            <p className='main-servicios-container-text'>Mantén tus plantas sanas y libres de plagas con nuestro servicio de control de plagas y enfermedades especializado</p>
          </div>
        </section>
    </main>
  )
}
