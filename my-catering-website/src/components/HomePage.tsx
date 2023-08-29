import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/homePage.scss';
import homeImg from '../assets/images/homeoption-1.png';

const HomePage: React.FC = () => {
  return (
    <div className = 'page-container'>
      <img className = 'top-img' src= {homeImg} ></img>
      <div className='home-container'>
            <h1>Tapaya</h1>
            <h3>
              Welcome to Boulder Paella, your gateway to the vibrant flavors of
              Spain, right here in Colorado! Visit us at the Boulder Farmers
              Market every Saturday (9am-2pm) and Wednesday (4pm-8pm) to indulge
              in our authentic, locally-inspired paellas, tapas, and beverages.
              We also offer catering services and participate in special events
              across the state.
            </h3>
            <p>
              We take pride in our signature paellas and are crafted using the authentic ingredients,
              such as saffron, paprika, and valencia rice which is imported from Spain. We take pride in
              incorporating fresh, local mushrooms and farm fresh eggs  to create a truly unique culinary
            experience.
            <p></p>
            Alongside paella, we serve a variety of tapas and
              refreshing drinks to elevate your dining adventure.{' '}
            </p>
            <Button variant='primary' size='lg'>
              View Contact Page
            </Button>
            </div>
      </div>
  );
};

export default HomePage;
