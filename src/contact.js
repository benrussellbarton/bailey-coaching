import React from 'react';
import Navigation from './components/navbar.js';
import Footer from './components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Background from './images/group.jpg';
import styled from 'styled-components';

const backgroundImage = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  backgroundImage: `url(${Background})`
};

const box = {
  backgroundColor: 'white',
  borderRadius: '0 30px 0 30px',
  padding: '60px 40px',
  margin: '50px 0'
};

const submit = {
  textAlign: 'center',
  marginTop: '50px',
  fontFamily: 'Barlow Condensed'
};

const ProgrammeTitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.3em;
  color: #353535;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
  }
`

const Title = styled.h1`
  font-family: 'Barlow Condensed', sans-serif;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2.8em;
  text-align: center;
  color: #353535;
`

function Contact() {
  return (
    <div>
      <Navigation />
      <div style={ backgroundImage }>
        <Container>
          <Row className='justify-content-md-center'>
            <Col lg='8'>
              <div style={box}>
                <Title>Get in touch</Title>
                <ProgrammeTitle>If you have any questions send our<br /> awesome team a message below</ProgrammeTitle>
                <Form>
                  <Form.Group controlId='exampleForm.ControlInput1'>
                    <Form.Control type='email' placeholder='Email Address' />
                  </Form.Group>
                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Control as='textarea' rows='8' placeholder='Enter your message here' />
                  </Form.Group>
                </Form>
                <div style={submit}>
                  <Button size='lg' as='input' type='submit' value='SEND 🚀' variant='success' />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
