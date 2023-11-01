import React from 'react';
import '../styles/footer.scss';
import { Link } from 'react-router-dom';
import insta_logo from '../assets/images/Instagram_Glyph_Black.png';
import contact_logo from '../assets/images/contact-icon.png';

const Footer: React.FC = () => {
  return (
    <div id='footer-top-border'>
      <div id='footer-outter-middle-border'>
        <div id='footer-inner-middle-border'>
          <div id='footer-inner-border'>
            <div className='fixed-footer'>
              <div className='brand-footer'>
                <div id='name-container'>
                  <h6 id='footer-heading'>RICE & SHINE</h6>
                  <p id='footer-subheading'>A Paella Stand in Boulder, CO</p>
                </div>
              </div>
              <a href='http://instagram.com/riceandshinepaella/'>
                <img id='insta-logo' src={insta_logo}></img>
              </a>
              <a href='/contact'>
                <img id='contact-logo' src={contact_logo}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
