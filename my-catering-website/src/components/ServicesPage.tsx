import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/servicesPage.scss';
import eventImg from '/Users/keyan/Desktop/coding/personal_projects/rice-and-shine/my-catering-website/src/assets/images/home_page_image.png';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Private Parties and Celebrations',
      description:
        "Host your next celebration with us! Whether it's a birthday party, anniversary, holiday gathering, or just a gathering with your loved ones, we'll provide delicious food and exceptional service",
    },
    {
      title: 'Wedding Catering',
      description:
        "Make your special day even more memorable with our wedding catering services"
    },
    {
      title: 'Corporate Event Catering',
      description:
        'We provide catering services for corporate events, including lunches, dinners, and networking events',
    },
    {
      title: 'Farmers Market Stand',
      description:
        'Visit us at the local farmers market to enjoy fresh, locally-sourced food from our stand.',
    },
   
  ];

  return (
    <div className='page-container'>
      <img className='top-img' src={eventImg}></img>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'>
            <div className='content-container'>
              <Container className='home-container'>
                <h2 id = 'services-heading'>Our Services</h2>
                <Row>
                  {services.map((service) => (
                    <Col md={6} className='services' key={service.title}>
                      <h3 className = 'services-subheading'>{service.title}</h3>
                      <p className = 'services-body'>{service.description}</p>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
