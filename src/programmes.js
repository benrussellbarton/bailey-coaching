import React from 'react';
import Navigation from './components/navbar.js';
import Footer from './components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Food from './images/food.jpg';
import Rogue from './images/rogue.jpg';
import Lean from './images/yoga.jpg';
import Man from './images/man.jpg';
import Header from './images/header.svg';
import Background from './images/white.jpg';
import styled from 'styled-components';

const backgroundImage = {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundImage: `url(${Background})`
};

const modalHead = {
  fontFamily: 'Barlow Condensed',
  textTransform: 'uppercase',
  letterSpacing: '4px',
  color: 'grey'
};

const headerImage = {
  backgroundImage: `url(${Header})`,
  backgroundSize: 'cover',
  height: '275px',
  margin: '0 0 40px 0'
};

const Hover = styled.div`
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`

const SubHeading = styled.p`
  font-family: 'Barlow', sans-serif;
  margin-bottom: 60px;
  color: #353535;
  }
`

const ProgrammeParagraph = styled.p`
  font-family: 'Barlow', sans-serif;
  margin: 0 0 30px 0;
  color: #353535;
  }
`

const ProgrammeName = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 25px 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.3em;
  color: grey;
  text-align: center;
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

const Step = styled.h3`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 20px 0 15px 0;
  letter-spacing: 3px;
  color: #353535;
  text-align: center;
`

const Image = styled.img`
  max-width: 100%;
  border-radius: 3px;
  }
`

function NutritionModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="modal-vcenter" centered>
      <Modal.Header closeButton style={ backgroundImage }>
        <Modal.Title id="modal-vcenter" style={ modalHead }>
          Nutrition Guide
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Step>STEP 1</Step>
        <ProgrammeParagraph>A face to face consultation will allow the coach to obtain all the relevant information on dietary habits, medical conditions, allergies/deficiencies and lifestyle. You can explain your goals and will start a 7 day food diary writing down everything that passes your lips, with time of day and amount.</ProgrammeParagraph>
        <hr />
        <Step>STEP 2</Step>
        <ProgrammeParagraph>A second meet would be arranged to review the food diary with the coach. The body composition of the client will then be taken, allowing the coach to make some important calculations for your nutrition plan. We can work out the number of calories needed to gain muscle or lose fat, depending on your goals.</ProgrammeParagraph>
        <hr />
        <Step>STEP 3</Step>
        <ProgrammeParagraph>The coach will calculate the right macro nutrient ratios and send you an easy to follow nutrition plan, tailored to you. Two further review sessions will be booked where we can monitor your progress and tweak your plan if needed, making sure we attain your goals.</ProgrammeParagraph>
      </Modal.Body>
    </Modal>
  );
}

function ConditioningModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="modal-vcenter" centered>
      <Modal.Header closeButton style={ backgroundImage }>
        <Modal.Title id="modal-vcenter" style={ modalHead }>
          Conditioning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Step>WEIGHTS</Step>
        <ProgrammeParagraph>Lifting weights not only help a person become physically stronger and overpower opponents, it also helps strengthen bones and prevent injuries. Weight lifting routines are especially helpful in preventing injuries for athletes who play sports that require sudden landing, sprinting, or physical contact, such as football or rugby.</ProgrammeParagraph>
        <hr />
        <Step>CARDIO</Step>
        <ProgrammeParagraph>Strength and conditioning training may also focus on cardiovascular exercise. Some athletes focus on cardiovascular endurance whereas others want to perform activity in quicker, more powerful bursts. Regardless of your cardiovascular goal, the coach will teach proper running form and breathing techniques.</ProgrammeParagraph>
        <hr />
        <Step>RECOVERY</Step>
        <ProgrammeParagraph>If athletes attempt to partake in a vigorous strength and cardiovascular routine without allowing time for proper recovery, they can risk injuries, such as painful joints and muscles. This balanced strength and conditioning routine will space out weight lifting and cardiovascular workouts to allow time for your body to recover.</ProgrammeParagraph>
      </Modal.Body>
    </Modal>
  );
}

function LeanModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="modal-vcenter" centered>
      <Modal.Header closeButton style={ backgroundImage }>
        <Modal.Title id="modal-vcenter" style={ modalHead }>
          Lean and Tone
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Step>THE DIFFERENCE</Step>
        <ProgrammeParagraph>So, what makes this programme different and unique? We have developed an approach that is attainable and will give you the results you desire. Nutrition is key. A bespoke nutrition plan will be designed for you that is easy to follow, and you will receive constant support and body composition reviews throughout the programme to ensure you are staying on track!</ProgrammeParagraph>
        <hr />
        <Step>THE PLAN</Step>
        <ProgrammeParagraph>During the 12 week programme you will receive one to one personal training sessions three times per week with one of our coaches. You will be pushed to near your limit but not beyond! The success of the training programme is down to intelligent structure, support and the commitment from you.</ProgrammeParagraph>
      </Modal.Body>
    </Modal>
  );
}

function HypertrophyModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="modal-vcenter" centered>
      <Modal.Header closeButton style={ backgroundImage }>
        <Modal.Title id="modal-vcenter" style={ modalHead }>
          Hypertrophy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Step>THE PROCESS</Step>
        <ProgrammeParagraph>When you start exercising a muscle there is first an increase in the nerve impulses that cause muscle contraction. This alone often results in strength gains without any noticeable change in muscle size. As you continue to exercise, there is a complex interaction of nervous system responses that result in an increase in protein synthesis over months and the muscle cells begin to grow larger and stronger.</ProgrammeParagraph>
        <hr />
        <Step>THE PLAN</Step>
        <ProgrammeParagraph>The exercises that lead to muscle growth are those that contract the muscle against resistance repeatedly. You can choose a variety of weight training methods using free weights, exercise machines, resistance bands, or bodyweight exercises. There are many suggested training regimens that vary the load weight, the number of repetitions, and the rest intervals between sets.</ProgrammeParagraph>
      </Modal.Body>
    </Modal>
  );
}

function Bespoke() {
  const [modalNut, setModalNut] = React.useState(false);
  const [modalCon, setModalCon] = React.useState(false);
  const [modalLean, setModalLean] = React.useState(false);
  const [modalHyp, setModalHyp] = React.useState(false);
  return (
    <div>
      <Navigation />
      <div style={ headerImage }>
        <Container>
          <Row className='justify-content-md-center text-center'>
            <Col lg='8'>
              <Title>Bespoke Programmes</Title>
              <ProgrammeTitle>Custom programmes tailored around <em>your</em>&nbsp;&nbsp;goals</ProgrammeTitle>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='justify-content-md-center text-center'>
          <Col xs='12' lg='8'>
            <SubHeading>Our nutrition guide aims to improve the health of an individual by adjusting the quantities, qualities, and methods of nutrient intake. Lean and tone is designed specifically for women who are looking to get into the best shape of their life. Conditioning was designed for athletes aligned to specific sports performance outcomes. Hypertrophy aims to pack on as much muscle mass as possible in the shortest time period.</SubHeading>
          </Col>
        </Row>
        <Row>
          <Col onClick={() => setModalNut(true)} xs='12' sm='6' xl='3'>
            <Hover>
              <Image src={Food} alt='Nutrition Guide' />
              <ProgrammeName>Nutrition Guide</ProgrammeName>
              <hr />
              <ProgrammeParagraph>Our plans are totally tailored to the individuals needs and coupled with the right training program we believe this is an essential service to allow the client to fully achieve their goals, whether it be muscle gain or tone, fat loss or performance.</ProgrammeParagraph>
            </Hover>
          </Col>
          <NutritionModal show={modalNut} onHide={() => setModalNut(false)} />
          <Col onClick={() => setModalCon(true)} xs='12' sm='6' xl='3'>
            <Hover>
              <Image src={Rogue} alt='Conditioning' />
              <ProgrammeName>Conditioning</ProgrammeName>
              <hr />
              <ProgrammeParagraph>Includes weight lifting, drills to increase cardiovascular fitness, and injury prevention. The training tends to be used most often for athletes and improving athletic performance, but it can also be customised to promote general fitness.</ProgrammeParagraph>
            </Hover>
          </Col>
          <ConditioningModal show={modalCon} onHide={() => setModalCon(false)} />
          <Col onClick={() => setModalLean(true)} xs='12' sm='6' xl='3'>
            <Hover>
              <Image src={Lean} alt='Lean and Tone' />
              <ProgrammeName>Lean and Tone</ProgrammeName>
              <hr />
              <ProgrammeParagraph>This is this is not just about fat loss, it’s about constructing a lean, toned, healthy and happy body. Over the years we have helped countless women wanting to drop body fat and get that shape and muscle tone that has always eluded them.</ProgrammeParagraph>
            </Hover>
          </Col>
          <LeanModal show={modalLean} onHide={() => setModalLean(false)} />
          <Col onClick={() => setModalHyp(true)} xs='12' sm='6' xl='3'>
            <Hover>
              <Image src={Man} alt='Hypertrophy' />
              <ProgrammeName>Hypertrophy</ProgrammeName>
              <hr />
              <ProgrammeParagraph>Hypertrophy refers to an increase in muscular size achieved through exercise. If you want to improve muscle size and definition, lifting weights is the most common way to increase hypertrophy and we can show you how to acheive this.</ProgrammeParagraph>
            </Hover>
          </Col>
          <HypertrophyModal show={modalHyp} onHide={() => setModalHyp(false)} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Bespoke;
