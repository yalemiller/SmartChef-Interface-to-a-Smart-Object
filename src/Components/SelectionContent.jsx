import React from 'react';
import RightButton from './Bumpers/RightButton';
import LeftButton from './Bumpers/LeftButton';
import CenterButton from './Bumpers/CenterButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";

/*
SelectionContent
Parent component for selection page
*/

function SelectionContent({ description, ingredients, image }) {
    
  const imageStyle = {
    maxHeight: '25vh', 
    width: 'auto',
  };

  const columnContainer = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
    paddingTop: '2vh',
  };

  const columnBig = {
    width: '66%',
  };

  const columnSmall = {
    width: '33%',
  };

  let navigate = useNavigate(); 
  
  const routeChange = () => { 
    let path = `/CookingMode`; 
    navigate(path);
  }

  const handleLeftButtonClick = () => {
    let path = `/Menu`; 
    navigate(path);
  };

  const handleCenterButtonClick = () => {};

  return (
    <div className="row" style={columnContainer}>
      <LeftButton
        onClick={handleLeftButtonClick}
        title="Home"
        color="blue"
      />
      <CenterButton
        onClick={handleCenterButtonClick}
        title={"\u00A0"}
        color="gray"
      />
      <RightButton
        onClick={routeChange}
        title="Start Cooking"
        color="blue"
      />
      
      <div style={columnSmall}>
      <div style={{ maxWidth: '100%', paddingLeft: '5%', textAlign: 'left' }}>
      <Image src={image} rounded style={imageStyle} />
      <p style={{ paddingTop: '2vh' }}>{description}</p>
      </div>
      </div>

      <div style={columnBig}>
        <div style={{ maxWidth: '100%', padding: '0%', textAlign: 'left' }}>
          <ListGroup>
            {ingredients.map((ingredient, index) => (
              <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default SelectionContent;
