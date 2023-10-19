import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../';
import '../styles/findUsPage.scss'; // Import the new styling file
import findusImg from '../assets/images/homeoption-1.png';
import photo_1 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_1295-lowres.jpg';
import photo_2 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_1347-lowres.jpg';
import photo_3 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_2014-lowres.jpg';
import photo_4 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_0589-lowres.jpg';
import photo_5 from '../assets/images/Rice and Shine Photos/Low Res/EE_RiceandShine23_1629-lowres.jpg';
import background_tile from '../assets/images/background-spanish-1.png';

const FindUsPage: React.FC = () => {
  return (
    <div className='page-container'>
      <div className='background'>
        <div className='findus-display'>
          {/* <h3 id='find-us-heading'>Find Us </h3> */}
          <h3 id='find-us-subheading'>
            <span id='at-the-text'>Find Us At the </span>
            <strong>Boulder Farmers Market</strong>
          </h3>
          <div id='display-info'>
            <p className='subHeading'>
              8:30am-2pm on Saturdays (April - November)
            </p>
            {/* <p className='subHeading'>
              4pm-8pm on Wednesdays (May - September)
            </p> */}
          </div>
        </div>
        <div className='pictures-container'>
          <img src={photo_3} id='left-large'></img>
          <div className='right-half-pictures'>
            <img src={photo_4} id='right-upper'></img>
            <div className='bottom-row'>
              <img src={photo_1} className='small-pics'></img>
              <img src={photo_2} className='small-pics'></img>
              <img src={photo_5} className='small-pics'></img>
            </div>
          </div>
        </div>
      </div>
      {/* <img className='top-img' src={findusImg}></img> */}
      {/* <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'>
            <div className='content-container' id='findUs-content'>
              <section id='find-us'>
                {/* <div className='findus-image'></div> */}

      {/* </section>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FindUsPage;
