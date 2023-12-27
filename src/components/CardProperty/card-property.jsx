import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import './card-property.css'; 
import isotipoHeader from '../../assets/icons/isotipo-header.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getEstate } from '../../api/estates';

const CardProperty = ({ property }) => {
  const location = useLocation();
  const navigate = useNavigate ();
  const [isHome, setIsHome] = useState(false);
  

  const handleButtonClick = () => {
    if (location.pathname === '/home') {
      navigate('/estates');
    } else if (location.pathname === '/estates') {
      navigate(`/estates/${property.id}`);
    }
  };

  return (
    <Card className="property-card full-height-card">
     <Card.Img variant="top" src={property.image} className="property-image" />
      <img src={isotipoHeader} alt="Isotipo" className="isotipo" />
      <Button variant="custom" className="more-button" onClick={handleButtonClick}>{location.pathname === '/home'? 'Ver mas...' : 'Ver detalle...'}</Button>
      <Card.Title className='property-title'>{property.title}</Card.Title>
      <Card.Text className="text-description">{property.address}</Card.Text>
      <p className="price-text">{property.price}</p>
    </Card>
  );
};

export default CardProperty;
