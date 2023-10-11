import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/homePage.scss';
import homeImg from '../assets/images/another.png';
import tile from '../assets/images/background-spanish-1.png'
import photo_passing_paella2 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_2026-lowres.jpg';
import photo_passing_paella1 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_1358-lowres.jpg';
import photo_passing_paella5 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_0228-lowres.jpg';
import photo_passing_paella3 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_0940-lowres.jpg' ;
import photo_passing_paella4 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_1690-lowres.jpg';
const HomePage: React.FC = () => {
  return (
    <div className='page-container'>
      <div className='img-container' id='home-img-container'>
        <img className='top-img' src={homeImg} id='home-img'></img>
      </div>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'>
            <div  id = 'home-content-container' >
              <div className='content-container'>
                {/* <h1>Tapaya</h1> */}
                {/* <h3 id='home-heading'>
                  Welcome to Rice & Shine: Your gateway to the vibrant flavors of
                  paella
                </h3> */}
                <h5 className='home-subheading' id='top-subheading'>
                  {' '}
                  A Culinary Journey Awaits at the Boulder Farmers Market!
                </h5>
              
              
                <p className='home-body'>
                  {' '}
                  Join us every Saturday from 9 am to 2 pm and Wednesday from 4 pm
                  to 8 pm to delight in our authentic and locally-inspired
                  culinary offerings. Our paella is meticulously crafted on 3 ft pans by our trained chefs. At Rice & Shine, we invite you to savor the
                  rich flavors of our freshly made paellas and refreshing
                  beverages.
                </p>
              
                <div className = 'body-img-container'>
                  <img
                    className='middle-img-home not-in-phone'
                    src={photo_passing_paella3}
                  ></img>
                  <img
                    className='middle-img-home '
                    src={photo_passing_paella5}
                  ></img>
                  {/* <img
                    className='middle-img-home not-in-phone'
                    src={photo_passing_paella2}
                  ></img> */}
                  <img
                    className='middle-img-home not-in-phone'
                    src={photo_passing_paella1}
                  ></img>
                </div>
                <h5 className='home-subheading'>
                  The Secret Behind Our Signature Paellas{' '}
                </h5>
                <img
                    className='middle-img-home not-in-browser'
                    src={photo_passing_paella1}
                  ></img>
                <p className='home-body'>
                  Our pride resides in our signature paellas, a masterpiece
                  crafted with a blend of authentic and premium ingredients. We
                  use Valencia rice, which is imported from Spain, and also use
                  aromatic saffron, two types of paprika, olive oil. We take it a
                  step further by infusing our dishes with fresh, local produce
                  like mushrooms, bridging Spain's paella tradition with local
                  Colorado agricultural.
                </p>
                <h5 className='home-subheading'>
                  Catering Services Tailored to Your Occasion
                </h5>
                <p className='home-body'>
                  Looking to elevate your next event with a touch of Spanish
                  flair? We are delighted to extend our catering services,
                  bringing a unique experience for both you and your guests directly to your
                  table.
                </p>
                {/* <div className = 'body-img-container'>
                  <img
                    className='tile-row'
                    src={tile}
                  ></img>
                  <img
                    className='tile-row'
                    src={tile}
                  ></img>
                  <img
                    className='tile-row'
                    src={tile}
                  ></img>
                  <img
                    className='tile-row'
                    src={tile}
                  ></img>
                </div> */}
                <Link to='/contact'>
                  <Button className='btn'>View Contact Page</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
