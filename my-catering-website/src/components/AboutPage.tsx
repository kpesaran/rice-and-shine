import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/aboutPage.scss'; // Import the new styling file
import aboutImg from '/Users/keyan/Desktop/coding/personal_projects/rice-and-shine/my-catering-website/src/assets/images/mental_kama_sutra_Illustration_art_style_old_spanish_town.png';

const AboutPage: React.FC = () => {
  return (
    <div className='page-container'>
      <img className='top-img' src={aboutImg}></img>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'></div>
          <div className='content-container'>
            <section id='about'>
              <Container>
                <Row>
                  <Col className='main-container'>
                    <h2 id ="about-us-heading">About Us</h2>
                    <p id = 'about-us-body'>
                      Boulder Paella was founded with a vision to combine a love
                      for saffron-based rice dishes and a passion for fresh,
                      local ingredients. Our founder embarked on this journey
                      in 2022, creating a one-of-a-kind culinary experience
                      that marries traditional Spanish flavors with Colorado's produce. Paella, a dish with deep roots in
                      Valencia, Spain, is celebrated for its rich saffron
                      flavors and stunning presentation. As an integral part of
                      Spanish cuisine, paella showcases saffron, the world's
                      most expensive spice, which is extracted from the saffron
                      crocus flower. By cherishing the history of saffron and
                      paella, we strive to provide an
                      unforgettable and declicous dining experience.
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
