import { AiFillPhone } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

import './contact.css';

export default function Contact() {
  return (
    <section className='main-contact' id='contacto'>
      <h2 className='main-contact-title'>CONTACTO!</h2>
      <h3 className='main-contact-subtitle'>Contanos que necesitas</h3>

      <div className='main-contact-container'>
        <div className='main-contact-container-info'>
          <AiFillPhone  className='main-contact-container-info-icon' />
          <p className='main-contact-container-info-text'>Llamanos al</p>
          <p className='main-contact-container-info-text'><b>11 3056 9210</b></p>
        </div>

        <div className='main-contact-container-info'>
          <IoLocationSharp  className='main-contact-container-info-icon' />
          <p className='main-contact-container-info-text'>Estamos en</p>
          <p className='main-contact-container-info-text'><b>Buenos Aires, Argentina</b></p>
        </div>

        <div className='main-contact-container-info'>
          <MdEmail  className='main-contact-container-info-icon' />
          <p className='main-contact-container-info-text'>Email al</p>
          <p className='main-contact-container-info-text'><b>botanica@gmail.com</b></p>
        </div>
      </div>

    </section>
  )
}
