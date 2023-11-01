import React from 'react';
//import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../assets/images/mental_kama_sutra_Illustration_art_style_old_spanish_town.png';
// import '../styles/aboutPage.scss'; // Import the new styling file

const AboutPage: React.FC = () => {
  return (
    <div className='page-container'>
      {/* <img className='top-img' src={aboutImg}></img> */}
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'></div>
          <div className='content-container'>
            <section id='about'>

                  <div className='main-container'>
                    <h2 id='about-us-heading'>About Us</h2>
                    <p id='about-us-body'>
                      Rice & Shine was founded from a love for saffron. Our
                      founder embarked on this journey in 2022, creating a
                      one-of-a-kind culinary experience at her local farmers
                      market. Paella, a dish with deep roots in Valencia, Spain,
                      is celebrated for its rich saffron flavors and stunning
                      presentation. As an integral part of Spanish cuisine,
                      paella showcases saffron, which is extracted from the
                      saffron crocus flower. By cherishing the history of
                      saffron and paella, we strive to provide an unforgettable
                      and declicous dining experience.
                    </p>
                  </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;