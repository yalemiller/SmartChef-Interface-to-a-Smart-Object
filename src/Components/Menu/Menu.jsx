import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import MenuCard from './MenuCard';
import MenuGrid from './MenuGrid';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ApplianceDropdown from './ApplianceDropdown.jsx';
import { useMenu } from '../MenuContext';


/*
Menu Parent Component
Parent component for the menu screen. 
*/


function Menu() {
  const { menuItems, setMenuItems } = useMenu();
  const [isProfileSelect, setProfileSelect] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const [selectedProfileDefaultAppliances, setSelectedProfileDefaultAppliances] = useState(() => {
    if (selectedProfile) {
      setSelectedProfileDefaultAppliances(profileDefaultAppliances[selectedProfile.name] || []);
      return profileDefaultAppliances[selectedProfile.name] || [];
    } else {
      return [];
    }
  });

  const [filteredMenuItems, setFilteredMenuItems] = useState([]);


  //this useEffect code was ai generated using Chatgpt
  useEffect(() => {
    const filteredItems = menuItems.filter((item) => {
      return item.appliances.every((appliance) => selectedProfileDefaultAppliances.includes(appliance));
    });
    setFilteredMenuItems(filteredItems);
  }, [selectedProfileDefaultAppliances]);
      useEffect(() => {
        if (selectedProfile) {
          setSelectedProfileDefaultAppliances(profileDefaultAppliances[selectedProfile.name] || []);
        } else {
          setSelectedProfileDefaultAppliances([]);
        }
      }, [selectedProfile]);


    const profile = [
        {
          name: 'Henry Wu',
          image: 'https://www.hospicevaughan.com/wp-content/uploads/2021/01/portrait-square-03.jpg',

        },
        {
          name: 'Madison Martinez',
          image: 'https://circle.so/wp-content/uploads/person-2.png',
        },
        {
          name: 'Clark Evans',
          image: 'https://socialchangesemester.files.wordpress.com/2013/01/personal-photo.jpg',
        },
      ];


      const profileDefaultAppliances = {
        'Henry Wu': ['Air Fryer', 'Stove-top', 'Oven'],
        'Madison Martinez': [  'Instapot',,'Oven'],
        'Clark Evans': [ 'Air Fryer','Grill','Instapot','Juicer','Microwave','Oven','Rice Cooker','Stove-top','Toaster Oven','Waffle Iron',]
      };


      const kitchenAppliances = [
        'Air Fryer',
        'Grill',
        'Instapot',
        'Juicer',
        'Microwave',
        'Mixer',
        'Oven',
        'Rice Cooker',
        'Stove-top',
        'Toaster',
        'Toaster Oven',
        'Waffle Iron',
      ];

  const imageStyle = {
    width: '75%',
    height: '75%',
  };

  const rowStyle = {
    marginTop: '25%',
  };

  const headerStyle = {
    fontSize: '30px',
    width: '100%',
    textAlign: 'left',
    position: 'fixed',
    top: '0',
    zIndex: '1',
  };

  const containerStyle = {
    paddingTop: '4vh',
  };

  const imageButtonStyle = {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    padding: 0,
  };

  const handleImageClick = (profile) => {
    setSelectedProfile(profile);
    setSelectedProfileDefaultAppliances(profileDefaultAppliances[profile.name] || []);
    setProfileSelect(false);
  };

  const handleMenuCardClick = (item) => {
    console.log('Clicked Menu Card:', item);
  };

  return (
    <div className="App">
      <div style={containerStyle}>
        <div style={headerStyle}>
          <Navbar bg="secondary" data-bs-theme="secondary">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="" style={{ color: 'white', fontWeight: 'bold' }}>
                  {selectedProfile ? selectedProfile.name : 'Menu'}
                </Nav.Link>
                <Nav.Link
                  href="#"
                  style={{ color: 'white' }}
                  onClick={() => setProfileSelect(true)}
                >
                  {isProfileSelect ? '' : 'Change User'}
                </Nav.Link>
              </Nav>
              <ApplianceDropdown
                selectedProfileDefaultAppliances={selectedProfileDefaultAppliances}
                setSelectedProfileDefaultAppliances={setSelectedProfileDefaultAppliances}
                kitchenAppliances={kitchenAppliances}
              />
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>

      {isProfileSelect ? (
       <Container>
       <Row style={rowStyle}>
         {profile.map((profile, index) => (
           <Col key={index} xs="4" className="text-center">
             <div className="circle-image" style={{ marginTop: '-10vh' }}>
               <button className="image-button" style={imageButtonStyle} onClick={() => handleImageClick(profile)}>
                 <Image src={profile.image} roundedCircle style={imageStyle} />
               </button>
               <div className="image-text" style={{ fontWeight: 'bold', fontSize: '120%' }}>
                 {profile.name}
               </div>
             </div>
           </Col>
         ))}
       </Row>
     </Container>
      ) : (
        <div style={containerStyle}>
          <MenuGrid>
            {filteredMenuItems.map((item, index) => (
              <MenuCard
                key={index}
                item={item}
                profile={selectedProfile}
                onClick={handleMenuCardClick}
              />
            ))}
          </MenuGrid>
        </div>
      )}
      </div>
  );
}

export default Menu;