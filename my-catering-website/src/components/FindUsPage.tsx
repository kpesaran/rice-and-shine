import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../';
import '../styles/findUsPage.scss'; // Import the new styling file
import findusImg from '/Users/keyan/Desktop/coding/personal_projects/rice-and-shine/my-catering-website/src/assets/images/home_page_image.png';

const FindUsPage: React.FC = () => {
  return (
    <div className='page-container'>
      <img className='top-img' src={findusImg}></img>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'>
            <div className='content-container'>
              <section id='find-us'>
                <div className='findus-image'></div>
                <h3 id = 'find-us-heading'>Find Us... </h3>
                <h3 id = 'find-us-subheading'>
                  At the <strong>Boulder Farmer Market</strong>
                </h3>
                <div id='display-info'>
                  <p className='subHeading'>8:30am-2pm on Saturdays (April - November)</p>
                  <p className='subHeading'>4pm-8pm on Wednesdays (May - September)</p>
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
