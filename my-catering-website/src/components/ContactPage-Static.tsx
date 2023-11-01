import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/images/contact.png';
import '../styles/contactPage.scss';
import tile from '../assets/images/background-spanish-1.png'
import '../styles/contactPage-Static.scss';
//github private repos, add David as contributer...

//frontend: data not being set correctly, console.log the data
//backend: manually hardcode the post request
const ContactPage_Static: React.FC = () => {
 
  
  return (
    <div className='page-container'>
      <img className='top-img' src={contactImg}></img>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'></div>
          <div id='contact-content-container '
            className='content-container'>
           
            <Container className='container'>
              <Row className='justify-content-md-center'>
                <Col md={6}>
                  <div className='text-center'>
                    <h1 className='contact-heading'>CONTACT US</h1>
                    {/* <p className='contact-subheading'>
                      We'd love to hear from you!
                    </p> */}
                   
              
                  </div>
                  <div>
                      <h3 id = 'heading-email'>EMAIL:</h3>
                     
                    </div>
                  <p id ='subheading-email'>contact@riceandshinepaella.com</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage_Static;
