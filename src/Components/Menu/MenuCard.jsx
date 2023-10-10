import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useMenu } from '../MenuContext';

/*
Menu Card
Component for each card displayed on the menu screen 
*/

function MenuCard({ item, profile }) {
  const { name, image, time, buttonName } = item;
  const { setClickedMenuItem } = useMenu();

  const cardStyle = {
    width: '16rem',
  };

  const handleCardClick = () => {
    console.log('Clicked Menu Card:', item);
    setClickedMenuItem(item);
  };

  return (
    <Card style={cardStyle} onClick={handleCardClick}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{time}</Card.Text>
        <Link to="/selectionpage">
          <Button variant="primary">{buttonName}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;
