import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/homePage.scss';
import homeImg from '../assets/images/homeoption-1.png';

const HomePage: React.FC = () => {
  return (
    <div className = 'page-container'>
      <img className = 'top-img' src= {homeImg} ></img>
      <div id = "top-border">
        <div id = "middle-border">
          <div id = "bottom-border">
            <div className='content-container'>
                  {/* <h1>Tapaya</h1> */}
                  <h3 id='home-heading'>
                welcome to Rice & Shine:  your gateway to the vibrant flavors of
                paella</h3>
             
              <h5> a culinary journey Awaits at the Boulder Farmers Market!</h5>
               <p className ="home-body"> Join us every Saturday from 9 am to 2 pm and Wednesday from 4 pm to 8 pm to delight in our authentic and locally-inspired culinary offerings. At Rice & Shine, we invite you to savor the rich flavors of our meticulously crafted paellas and refreshing beverages.
              </p>
              <h5>The Secret Behind Our Signature Paellas </h5>
                  <p className ="home-body">Our pride resides in our signature paellas, a masterpiece crafted with a blend of authentic and premium ingredients. We use Valencia rice, which is imported from Spain, and also use aromatic saffron, two types of paprika, olive oil. We take it a step further by infusing our dishes with fresh, local produce like mushrooms, bridging Spain's paella tradition with local Colorado agricultural. 
              </p>
              <h5>Catering Services Tailored to Your Occasion</h5>
              <p className ="home-body">Looking to elevate your next event with a touch of Spanish flair? We are delighted to extend our catering services, bringing the unique gastronomic experience directly to your table.</p>
                  <Button variant='primary' size='lg'>
                    View Contact Page
                  </Button>
                  </div>
                  </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
