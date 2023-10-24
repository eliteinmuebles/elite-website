import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './card-property.css'; 
import isotipoHeader from '../../assets/icons/isotipo-header.svg';

const CardProperty = ({ property }) => {
  return (
    <Card className="property-card full-height-card">
     <Card.Img variant="top" src={property.image} className="property-image" />
      <img src={isotipoHeader} alt="Isotipo" className="isotipo" />
      <Button variant="custom" className="more-button">Ver más...</Button>
      <Card.Title className='property-title'>{property.title}</Card.Title>
      <Card.Text className="text-description">{property.address}</Card.Text>
      <p className="price-text">{property.price}</p>
    </Card>
  );
};

export default CardProperty;
