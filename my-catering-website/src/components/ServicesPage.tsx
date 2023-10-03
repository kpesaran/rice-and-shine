import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/servicesPage.scss';
import eventImg from '/Users/keyan/Desktop/coding/personal_projects/rice-and-shine/my-catering-website/src/assets/images/home_page_image.png';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Private Parties and Celebrations',
      description:
        "Host your next celebration with us for a meal your friends & family won't forget. Whether it's a birthday party, graduation celebration, or just a gathering with your loved ones, we'll provide the delicious food. We can deliver pre-made paella up to 250 people. For added entertainment at your next event we offer  on-site paella in pans up to 3 feet wide",
    },
    {
      title: 'Corporate Event Catering',
      description:
        'We provide catering services for corporate events, including lunches, dinners, and networking events',
    },
    {
      title: 'Paella Cooking Demonstration',
      description:
        'Are you and your friends foodies that are interested in learning and seeing the entire process of cooking delicious paella? Host both an entertaining, educating, and interactive evening with one of our trained chefs who will show you the entire process of making paella',
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
                <h2 id='services-heading'>Our Services</h2>
                <Row>
                  {services.map((service) => (
                    <Col md={6} className='services' key={service.title}>
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
