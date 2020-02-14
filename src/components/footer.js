import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterImg from '../images/footer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const footerImage = {
  backgroundImage: `url(${FooterImg})`,
  backgroundSize: 'cover',
  height: '200px',
  marginTop: '30px'
};

const grey = {
  color: 'darkgrey',
  margin: '100px 10px 0 10px',
  fontSize: '1.6em',
};

const Hover = styled.div`
  margin: 0 auto;
  display: inline-block;
  cursor: pointer;
  max-width: 50px;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const Concept = styled.p`
  font-family: 'Barlow', sans-serif;
  margin-top: 10px;
  color: #353535;
  font-size: 0.85em;
  }
`

function Footer() {
  return (
    <div>
      <div style={ footerImage }>
        <Container>
          <Row className='text-center'>
            <Col>
              <Hover><FontAwesomeIcon icon={faLinkedinIn} style={grey} /></Hover>
              <Hover><FontAwesomeIcon icon={faTwitter} style={grey} /></Hover>
              <Hover><FontAwesomeIcon icon={faYoutube} style={grey} /></Hover>
              <Concept><em>Bailey Coaching Website Concept v1</em></Concept>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
