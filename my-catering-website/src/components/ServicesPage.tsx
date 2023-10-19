import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import eventImg from '../assets/images/home_page_image.png';

import '../styles/servicesPage.scss';
// <<<<<<< HEAD
// =======
// >>>>>>> remotes/origin/david

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Private Parties and Celebrations',
      description:
      "Let us transform your next gathering into an unforgettable feast! From birthday bashes to graduation celebration or intimate gatherings with dear ones, your event deserves a memorable meal. Delight in our specialty - delivering mouth-watering,  paella for crowds of up to 250 guests. Elevate your celebration with an interactive culinary spectacle; our chefs perform on-site cooking with paella pans spanning up to 3 feet.",
    },
    {
      title: 'Corporate Event Catering',
      description:
      "Infuse business with pleasure through our exquisite catering services tailored for corporate affairs. Whether it's a formal luncheon, a classy dinner, or a bustling networking event, our culinary offerings set the perfect tone for your corporate needs. Taste the dedication, savor the professionalism.",
    },
    {
      title: 'Paella Cooking Demonstration',
      description:
        "Unleash the foodie within! Join us for a sizzling journey through the authentic art of paella cooking. Our skilled chefs bring the flavors of Spain to your personal cooking demonstration, blending entertainment, education, and hands-on experience. Witness the transformation of simple ingredients into a beautiful paella and dive into an evening where learning tastes deliciously satisfying!",
    },

    // {
    //   title: 'Paella Delivery',
    //   description:
    //     'We can deliver Paella to your house if you live within 35 miles from Boulder, CO',
    // },
  ];

  return (
    <div className='page-container'>
      <img className='top-img' src={eventImg}></img>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'>
            <div className='content-container'>
              <Container className='home-container'>
                <h2 id='services-heading'> Services</h2>
                <Row>
                  {services.map(service => (
                    <Col md={20} className='services' key={service.title}>
                      <h3 className='services-subheading'>{service.title}</h3>
                      <p className='services-body'>{service.description}</p>
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
