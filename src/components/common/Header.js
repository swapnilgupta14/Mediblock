import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="navbar-bg-blur navbar-popped-out">
      <Navbar.Brand as={Link} to="/" className="ml-3 mediblock-header">MediBlock</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FaBars />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" style={{ color: '#000' }}>Home</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ color: '#000' }}>Contact</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/login/patient" style={{ color: '#000' }}>Patient Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/register/patient" style={{ color: '#000' }}>Patient Register</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/login/doctor" style={{ color: '#000' }}>Doctor Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/register/doctor" style={{ color: '#000' }}>Doctor Register</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" style={{ color: '#000' }}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/" onClick={() => window.scrollTo({ top: document.getElementById('section3').offsetTop, behavior: 'smooth' })} style={{ color: '#000' }}>Overview</Nav.Link>
          <Nav.Link as={Link} to="/" onClick={() => window.scrollTo({ top: document.getElementById('section4').offsetTop, behavior: 'smooth' })} style={{ color: '#000' }}>Features</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/KnowMyTeam" style={{ color: '#000' }}>Developers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="development-banner">Under Development</div>
    </Navbar>
  );
};

export default Header;
