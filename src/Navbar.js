import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Components/Untitled design_20240330_054917_0000.png'; // Import the logo image

function ColorSchemesExample() {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home">
            <img
              src={logo} // Use the imported logo as the source
              alt="Logo" // Provide alt text for accessibility
              style={{ height: '45px', marginRight: '10px' }} // Adjust height and margin as needed
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link font-weight-bold">Home</Nav.Link>
            <Nav.Link href="#features" className="nav-link font-weight-bold">LabDairies</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link font-weight-bold">Jobs</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link font-weight-bold">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
