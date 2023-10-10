import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Nav from 'react-bootstrap/Nav';

/*
Header for CookingMode
Includes progress bar and navbar components
*/

function Header({ currIndex, listLength, name }) {
  const headerStyle = {
    fontSize: '30px',
    width: '100%',
    textAlign: 'left',
    position: 'fixed',
    top: '0',
    zIndex: '1',
  };

  const progressBarStyle = {
    position: 'absolute',
    top: '70px',
    left: '-5px', 
    right: '-5px', 
    zIndex: '2',
  };

  const containerStyle = {
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
      <Navbar bg="secondary" data-bs-theme="secondary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" style={{  fontWeight: 'bold', color: 'white' }}>
              {name}
            </Nav.Link>
            <Nav.Link href="/Menu" style={{  color: 'white', }}> Home </Nav.Link>
            <Nav.Link href="/SelectionPage" style={{  color: 'white', }}> Selection </Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
      <ProgressBar now={(currIndex / (listLength - 1)) * 100} style={progressBarStyle} />
    </div>
  );
}

export default Header;
