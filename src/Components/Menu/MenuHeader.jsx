import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ApplianceDropdown from './ApplianceDropdown.jsx';

/*
Menu Header
Header component for the menu plage 
*/

function MenuHeader(props) {
  return (
    <Navbar bg="secondary" data-bs-theme="secondary">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="" style={{ color: 'white', fontWeight: 'bold' }}>
            {props.selectedProfile ? props.selectedProfile.name : 'Menu'}
          </Nav.Link>
          <Nav.Link
            href="#"
            style={{ color: 'white' }}
            onClick={props.onProfileSelect}
          >
            {props.isProfileSelect ? '' : 'Change User'}
          </Nav.Link>
        </Nav>
        <ApplianceDropdown
          selectedProfileDefaultAppliances={props.selectedProfileDefaultAppliances}
          setSelectedProfileDefaultAppliances={props.setSelectedProfileDefaultAppliances}
          kitchenAppliances={props.kitchenAppliances}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuHeader;
