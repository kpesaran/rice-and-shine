import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/images/contact.png';
import '../styles/contactPage.scss';

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
                    <h1 className='contact-heading'>Contact Us</h1>
                    <p className='contact-subheading'>
                      We'd love to hear from you!
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className='form-group'>
                        <label className='contact-label-heading' htmlFor='name'>
                          Name
                        </label>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='name'
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          className='contact-label-heading'
                          htmlFor='email'>
                          Email address
                        </label>
                        <input
                          required
                          type='email'
                          className='form-control'
                          value={email}
                          id='email'
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label
                          className='contact-label-heading'
                          htmlFor='message'>
                          Message
                        </label>
                        <textarea
                          required
                          className='form-control'
                          id='message'
                          rows={10}
                          value={message}
                          onChange={e => setMessage(e.target.value)}></textarea>
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
