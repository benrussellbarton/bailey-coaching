import React from 'react';
import Navigation from './components/navbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Trainer from './images/training.jpg';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  border-radius: 3px;
  }
`

function Training() {
  return (
    <div>
      <Navigation />
      <Container>
        <Row className='justify-content-md-center text-center'>
          <Col lg='8'>At Mark Bailey Coaching, personal training is much more than exercise instruction in a gym environment.
            <br />It is about having the support and expert guidance to give you the confidence to transform your mind and body into the healthier, happier you.
          </Col>
        </Row>
        <Row>
          <Col xs='12' md='8' lg='6'><Image src={Trainer} className='image' alt='website logo' /></Col>
          <Col>Training sessions will last 60 mins and be 1-1. Support and accountability are a must so any questions outside of the sessions will be promptly replied to by email or phone.
            <br />With the constant support you will receive you will be amazed the changes we will make to your body and total overall well-being.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Training;
