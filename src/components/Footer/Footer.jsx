import {
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
} from 'react-icons/bs';

import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-copyright'>
        <div className='footer-copyright-container'>
          <p style={{ textAlign: 'center' }}>
            ©2024 Botánica | Powered by{' '}
            <a
              href='https://virtualdesigns.tech'
              style={{ color: '#e54787', textDecoration: 'none' }}
              target='_blank'
            >
              Virtual Designs
            </a>
          </p>
          <div>
            <BsWhatsapp onClick={() => window.open('https://wa.me/541130565913', '_blank')} />
            <BsInstagram
              onClick={() => window.open('https://www.instagram.com', '_blank')}
            />
            <BsFacebook
              onClick={() => window.open('https://www.facebook.com', '_blank')}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
