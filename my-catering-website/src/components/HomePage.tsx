import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/homePage.scss';
import homeImg from '../assets/images/another.png';
import tile from '../assets/images/tile.png';
import photo_passing_paella2 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_2026-lowres.jpg';
import photo_passing_paella1 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_1358-lowres.jpg';
import photo_passing_paella5 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_0228-lowres.jpg';
import photo_passing_paella3 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_0940-lowres.jpg';
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
            <div id='home-content-container'>
              <div className='content-container'>
                {/* <h1>Tapaya</h1> */}
                {/* <h3 id='home-heading'>
                  Welcome to Rice & Shine: Your gateway to the vibrant flavors of
                  paella
                </h3> */}
                <h5 className='home-subheading' id='top-subheading'>
                  {' '}
                  A CULINARY JOURNEY AWAITS AT THE BOULDER FARMERS MARKET
                </h5>

                <p className='home-body'>
                  {' '}
                  Join us every Saturday, from 9 am to 2 pm, to indulge in our
                  authentic and locally-inspired culinary offerings.  Watch our paella
                  get meticulously crafted on expansive 3-foot pans by our trained chefs. Rice & Shine welcomes you to discover the depth of flavors in our freshly prepared paellas, complemented by our array of freshly made beverages.
                </p>

                <div className='body-img-container'>
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
                  THE SECRET BEHIND OUR SIGNAUTURE PAELLAS{' '}
                </h5>
                <img
                  className='middle-img-home not-in-browser'
                  src={photo_passing_paella1}
                ></img>
                <p className='home-body'>
                  Our pride resides in our signature paellas, crafted with a
                  blend of both authentic and premium ingredients. We then roast Valencia
                  rice, a prized import from the fields of Spain, and enhance it with the exotic fragrance of saffron and the distinct, smoky nuances of two varieties of paprika, all unified by the richness of olive oil. . We enrich our paellas with fresh, local produce such as earthy mushrooms, seamlessly merging Spain's revered paella heritage with the abundant harvest of Colorado..
                </p>
                <h5 className='home-subheading'>
                  CATERING SERVICES TAILORED TO YOUR OCCASION
                </h5>
                <p className='home-body'>
                Seeking more than just catering for your next event? Let Rice & Shine transcend ordinary catering by delivering an immersive experience that captivates you and your guests. Our services are not just about serving food; they're about bringing a memorable culinary journey right to your gathering..
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
