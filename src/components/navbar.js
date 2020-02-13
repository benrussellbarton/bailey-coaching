import React from 'react';
import Logo from '../images/bc-logo.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Background from '../images/white.jpg';
import styled from 'styled-components';

var backgroundImage = {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundImage: `url(${Background})`
};

const NavText = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  margin: 0 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const NavLogo = styled.img`
  height: 40px;
  margin: 5px;
`

function Navigation() {
  return (

    <Navbar style={ backgroundImage } collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/"><NavLogo src={Logo} className="logo" alt="Bailey Coaching Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="barlow-nav" as={Link} to="/">
            <NavText>About</NavText>
          </Nav.Link>
          <Nav.Link className="barlow-nav" as={Link} to="../programmes">
            <NavText>Bespoke Programmes</NavText>
          </Nav.Link>
          <Nav.Link className="barlow-nav" as={Link} to="../training">
            <NavText>Personal Training</NavText>
          </Nav.Link>
          <Nav.Link className="barlow-nav" as={Link} to="../contact">
            <NavText>Contact</NavText>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Navigation;
