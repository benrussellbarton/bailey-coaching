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
  margin: '0 0 50px 0'
};

const Hover = styled.div`
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`

const ProgrammeParagraph = styled.p`
  font-family: 'Barlow', sans-serif;
  margin: 0 0 30px 0;
  color: #353535;
  }
`

const ProgrammeTitle = styled.p`
  font-family: 'Barlow', sans-serif;
  margin: 0;
  color: #353535;
  text-transform: uppercase;
  }
`

const Title = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 70px 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2.8em;
  line-height: 8vh;
  color: #353535;
  @media (max-width: 492px) {
    margin: 30px 0 15px 0;
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
        <h3>Nutrition Guide</h3>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
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
        <h3>Conditioning</h3>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
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
        <h3>Conditioning</h3>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
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
        <h3>Conditioning</h3>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
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
              <ProgrammeTitle>Custom programmes tailored around your goals</ProgrammeTitle>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
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
