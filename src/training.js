import React from 'react';
import Navigation from './components/navbar.js';
import Footer from './components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Trainer from './images/training.jpg';
import Don from './images/don.jpg';
import Bella from './images/bella.jpg';
import James from './images/james.jpg';
import Box from './images/box.jpg';
import Header from './images/header.svg';
import styled from 'styled-components';

const headerImage = {
  backgroundImage: `url(${Header})`,
  backgroundSize: 'cover',
  height: '275px',
  margin: '0 0 40px 0'
};

const blue = {
  backgroundColor: '#CADDEF',
  margin: '60px 0',
  padding: '50px 0'
};

const Image = styled.img`
  max-width: 100%;
  border-radius: 3px;
  }
`

const ProgrammeTitle = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.3em;
  color: #353535;
  text-transform: uppercase;
  }
`

const Title = styled.h1`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 70px 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2.8em;
  color: #353535;
  @media (max-width: 492px) {
    margin: 30px 0 15px 0;
  }
`

const Testimonials = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 0 0 40px 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2.8em;
  color: #353535;
`

const SubHeadingBottom = styled.p`
  font-family: 'Barlow', sans-serif;
  color: #353535;
  margin: 0 50px 0 0;
  @media (max-width: 992px) {
    margin: 0 0 50px 0;
  }
`

const SubHeadingTop = styled.p`
  font-family: 'Barlow', sans-serif;
  color: #353535;
  margin: 0 0 0 50px;
  @media (max-width: 992px) {
    margin: 50px 0 0 0;
  }
`

const TestimonialName = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 25px 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.3em;
  color: grey;
  text-align: center;
  padding: 0 30px;
`

const TestimonialParagraph = styled.p`
  font-family: 'Barlow', sans-serif;
  margin: 0 0 30px 0;
  color: #353535;
`

function Training() {
  return (
    <div>
      <Navigation />
      <div style={headerImage}>
        <Container>
          <Row className='justify-content-center text-center'>
            <Col lg='8'>
              <Title>Personal Training</Title>
              <ProgrammeTitle>Training sessions will last 60 mins and be 1-1</ProgrammeTitle>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='justify-content-center h-100'>
          <Col xs='12' lg='6'>
            <Image src={Box} className='image mr-5' alt='website logo' />
          </Col>
          <Col xs='12' lg='6' className='my-auto'>
            <SubHeadingTop>At Bailey Coaching, personal training is much more than exercise instruction in a gym environment.
              <br /><br />It is about having the support and expert guidance to give you the confidence to transform your mind and body into the healthier, happier you. Training sessions will last 60 mins and be 1-1. Support and accountability are a must so any questions outside of the sessions will be promptly replied to by email or phone.
              <br /><br /><strong>With our constant support you will be amazed the changes you'll make to your body and well-being.</strong>
            </SubHeadingTop>
          </Col>
        </Row>
      </Container>
      <div style={blue}>
        <Container>
          <Row className='justify-content-center h-100'>
            <Col xs='12' lg='6' className='my-auto'>
              <SubHeadingBottom>When designing the program, frequency, intensity and volume will be made to match your goals, abilities and priorities.
              <br /><br />Phased training cycles are put in place to progress you to attain your goals. Exercises, sets, reps, tempo, rest period and progressive overload will be structured specifically and clear in a training diary for every training session.
              <br /><br />Our foundation is built around the fact that every person is totally individual with different health and body goals, commitment and social responsibilities.
              </SubHeadingBottom>
            </Col>
            <Col xs='12' lg='6'>
              <Image src={Trainer} className='image' alt='website logo' />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='justify-content-center text-center'>
            <Col lg='8'>
              <Testimonials>Testimonials</Testimonials>
            </Col>
          </Row>
        <Row>
          <Col xs='12' lg='4'>
            <Image src={Don} alt='Don' />
            <TestimonialName>He has gone above and beyond what would be expected of him</TestimonialName>
            <TestimonialParagraph>Throughout the entire time Bailey has been encouraging and supportive. He has gone above and beyond what would be expected of him. <br /><br />This was extremely evident when I recently injured both rotator cuff joints whilst training on my own. Bailey came to my osteopathy appointment with me and rehab training in order that he could best understand the injuries and how he could adapt my routines and exercises to allow me to recover and how to protect the joint in future.</TestimonialParagraph>
          </Col>
          <Col xs='12' lg='4'>
            <Image src={Bella} alt='Bella' />
            <TestimonialName>I’m much stronger and fitter than I’ve ever been before</TestimonialName>
            <TestimonialParagraph>I really look forward to training with Bailey every week! Every session he tailors the exercises to help me meet my goals, and he also wrote me a personalised diet plan to help with my nutrition. <br /><br />I used to find going to the gym really boring but with Bailey it is so much more fun and he really helps you to feel comfortable using the equipment and pushing yourself to meet your goals. I’ve managed to drop at least one jeans size and I’m much stronger and fitter than I’ve ever been before – he really has changed my life for the better.</TestimonialParagraph>
          </Col>
          <Col xs='12' lg='4'>
            <Image src={James} alt='James' />
            <TestimonialName>I love waking up every day to the healthier and happier me</TestimonialName>
            <TestimonialParagraph>After struggling in the first few months I gradually got better and  now fitness is a massive part of my life. <br /><br />My weight loss and muscle gain has impressed my friends and family and given me so much confidence. If it was not for Bailey’s support I would not have been able to see the strength and confidence I had in myself as well as all the new workouts and techniques that are still helping me to this day in which I am still improving my physique. I love waking up every day to the healthier me!</TestimonialParagraph>
          </Col>
        </Row>
      </Container>
    <Footer />
    </div>
  );
}

export default Training;
