import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './market-container.css';
import marketSection from '../../assets/images/market-section.jpg';


const MarketContainer = () => {
  const cities = ['Valencia', 'Trigal', 'San Diego', 'Prebo', 'Naguanagua', 'Trigalena', 'Guataparo', 'Tazajal','Manongo']; 

  return (
    <section className="about-container p-4">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={5}>
            <img src={marketSection} alt="AboutUs" className="img-fluid h-60 w-100" />
          </Col>
          <Col xs={5} className="d-flex flex-column justify-content-center p-0">
            <h1 className="">¿Tienes un lugar en mente?</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="d-flex flex-wrap">
              {cities.map((city, index) => (
                <Button key={index} variant="outline-custom" className="m-2 p-2">
                  {city}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MarketContainer;
