import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/*
SelectionHeader
Header component for selection page
*/

function SelectionHeader({ picture, title, time }) {

  const headerStyle = {
    fontSize: '30px',
    width: '100%',
    textAlign: 'left',
    zIndex: '1',
  };

  const containerStyle = {
    position: 'relative',
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
              <Nav.Link href="#home" style={{ fontWeight: 'bold', color: 'white' }}>
                {title}
              </Nav.Link>
              <Nav.Link href="#home" style={{ color: 'white' }}>
                {time}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default SelectionHeader;
