import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './featured-properties.css'; 
import CardProperty from '../CardProperty/card-property';
import marketSection from '../../assets/images/market-section.jpg';

const properties = [
  { id: 1, title: 'Res. Onix.',address:'Trigal Centro, Valencia' ,image: marketSection, price: '$80.700' },
  { id: 2, title: 'Res. Valle Alto.',address:'El Bosque, Valencia.' ,image: marketSection, price: '$60.400' },
  { id: 3, title: 'Res. Sigmund.', address:'Trigal Norte, Valencia', image: marketSection, price: '$100.400' },
];

const FeaturedProperties = () => {
  return (
    <Container fluid className="featured-container">
      <h1 className="text-center featured-title">Destacados</h1>
      <Row className="justify-content-md-center">
        {properties.map((property) => (
          <Col xs={12} md={4} key={property.id}>
            <CardProperty property={property} />
          </Col>
        ))}
      </Row>
      <Button variant="custom" className="more-properties-button" style={{backgroundColor:"#D09426", color:"black"}}>Ver más propiedades</Button>
    </Container>
  );
};

export default FeaturedProperties;
