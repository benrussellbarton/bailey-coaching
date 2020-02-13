import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar.js';
import Background from './images/home.jpg';
import Logo from './images/bc-logo-white.svg';
import Signature from './images/signature.svg';
import Bailey from './images/bailey.jpg';
import Footer from './components/footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const backgroundImage = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${Background})`
};

const Portrait = {
  borderRadius: '5px',
  margin: '20px 0 30px 0'
};

const Sig = {
  margin: '0',
  maxWidth: '43%'
};

const Image = styled.img`
  max-width: 100%;
  margin: 80px 0 30px 0;
  }
`

const Title = styled.h1`
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2em;
  color: white;
`

const Slogan = styled.h2`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 80px 0 40px 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 2.8em;
  color: #353535;
`

const Paragraph = styled.p`
  font-family: 'Barlow', sans-serif;
  margin: 0 0 30px 0;
  color: #353535;
  }
`

const SubTitle = styled.p`
  font-family: 'Barlow', sans-serif;
  margin-bottom: 50px;
  color: #353535;
  font-size: 1.2em;
  }
`

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    // eslint-disable-next-line
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={backgroundImage}>
        <Container>
          <Row className='justify-content-center'>
            <Col xs='8' md='6' lg='4'>
              <Image src={Logo} alt='Bailey Coaching Logo' />
            </Col>
          </Row>
          <Row className='justify-content-center text-center'>
            <Col xs='10' md='10' lg='6'>
              <Title><strong>Constructing healthy and happy bodies</strong></Title>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col xs='10' md='8'>
            <FadeInSection>
              <Slogan>What is Bailey Coaching?</Slogan>
            </FadeInSection>
            <SubTitle>Bailey Coaching is a unique Kent-based personal training service that combines expert knowledge, nutritional guidance, and lifestyle advice to achieve outstanding results.</SubTitle>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col lg='12'>
            <hr className='d-none d-lg-block d-xl-none mb-5'/>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col lg='10'>
            <hr className='d-none d-xl-block mb-5'/>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs='10' md='6' lg='5' xl='4'>
            <Image src={Bailey} style={Portrait} alt='Bailey Portrait' />
          </Col>
          <Col xs='12' lg='7' xl='6'>
            <Paragraph className="mt-3">From being a semi professional football player I gained a love for sport, health, and fitness, fuelling my desire to help others with their fitness journey. <br /><br />With 10 years experience in the fitness industry I have trained individuals of various nationalities and abilities, including CEOs of financial institutes, professional athletes, celebrities and your every day person determined to have a healthier, happier body.<br /><br /> With my interest of travelling and learning about other cultures I have lived and trained clients in London, Mexico, Vancouver and the Middle East. This has given me a wealth of knowledge allowing me to help many people achieve their goals! I am dedicated to further enabling the growth and improvement of those that enter into this journey with me.</Paragraph>
            <Image src={Signature} style={Sig} alt='Bailey Signature' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
