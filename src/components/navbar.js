import React from 'react';
import Logo from '../images/bc-logo-white.svg';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/"><img src={Logo} className="App-logo" alt="Bailey Coaching Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="coda-nav" as={Link} to="/">About</Nav.Link>
          <Nav.Link className="coda-nav" as={Link} to="../training">Personal Training</Nav.Link>
          <Nav.Link className="coda-nav" as={Link} to="../bespoke">Bespoke Programmes</Nav.Link>
          <Nav.Link className="coda-nav" as={Link} to="../contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
