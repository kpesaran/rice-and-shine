import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/contactPage.scss';
import axios from 'axios';
import contactImg from '/Users/keyan/Desktop/coding/personal_projects/rice-and-shine/my-catering-website/src/assets/images/contact.png';

//github private repos, add David as contributer...

//frontend: data not being set correctly, console.log the data
//backend: manually hardcode the post request
const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const backendURL = 'http://localhost:5002';
      await axios.post(backendURL + '/contact', {
        name: name,
        email: email,
        message: message,
      });
      alert('Email sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };
  return (
    <div className='page-container'>
      <img className='top-img' src={contactImg}></img>
      <div id='top-border'>
        <div id='middle-border'>
          <div id='bottom-border'></div>
          <div className='content-container'>
            <Container className='container'>
              <Row className='justify-content-md-center'>
                <Col md={6}>
                  <div className='text-center'>
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you!</p>
                    <form onSubmit={handleSubmit}>
                      <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='email'>Email address</label>
                        <input
                          type='email'
                          className='form-control'
                          value={email}
                          id='email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                          className='form-control'
                          id='message'
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <button type='submit' className='btn btn-primary'>
                        Submit
                      </button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
