import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/servicesPage.scss';
import eventImg from '/Users/keyan/Desktop/coding/personal_projects/rice-and-shine/my-catering-website/src/assets/images/home_page_image.png'


const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Corporate Event Catering',
      description:
        'We provide catering services for corporate events, including lunches, dinners, and networking events.',
    },
    {
      title: 'Wedding Catering',
      description:
        "Make your special day even more memorable with our wedding catering services. We provide everything from hors d'oeuvres to the wedding cake.",
    },
    {
      title: 'Farmers Market Stand',
      description:
        'Visit us at the local farmers market to enjoy fresh, locally-sourced food from our stand.',
    },
    {
      title: 'Private Parties and Celebrations',
      description:
        "Host your next celebration with us! Whether it's a birthday party, anniversary, or holiday gathering, we'll provide delicious food and exceptional service.",
    },
  ];

  return (
    <div className = 'page-container'>
      <img className = 'top-img' src= {eventImg} ></img>
      <Container className='home-container'>
        <h2>Our Services</h2>
          <Row>
        
        {services.map((service) => (
          <Col md={6} className = 'services' key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Col>
        ))}
      </Row>
      </Container>
      </div>
  );
};

export default ServicesPage;
