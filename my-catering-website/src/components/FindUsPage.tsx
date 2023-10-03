import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../';
import '../styles/findUsPage.scss'; // Import the new styling file
import findusImg from  '../assets/images/homeoption-1.png';;

const FindUsPage: React.FC = () => {
  return (
    <div className='page-container'>
      <img className='top-img' src={findusImg}></img>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'>
            <div className='content-container' id ='findUs-content'>
              <section id='find-us'>
                <div className='findus-image'></div>
                <div className='findus-display'>
                  <h3 id = 'find-us-heading'>Find Us </h3>
                  <h3 id = 'find-us-subheading'>
                    <span id = 'at-the-text'>At the  </span><strong>
                        Boulder Farmers Market</strong>
                  </h3>
                  <div id='display-info'>
                    <p className='subHeading'>8:30am-2pm on Saturdays (April - November)</p>
                    <p className='subHeading'>4pm-8pm on Wednesdays (May - September)</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUsPage;
