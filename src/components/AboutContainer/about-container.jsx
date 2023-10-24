import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './about-container.css';
import imageAbout from '../../assets/images/image-about.jpg';
import image1 from '../../assets/images/about1.jpg'
import image2 from '../../assets/images/about2.jpg'
import image3 from '../../assets/images/about3.jpg'
import image4 from '../../assets/images/about4.jpg'
import image5 from '../../assets/images/about5.jpg'

export const AboutContainer = () => {

    const agents = [image1, image2, image3, image4, image5];

    return (
    <section className="about-container p-4">
      <Container fluid>
        <Row className="justify-content-center">
        
          <Col xs={5} className="d-flex flex-column justify-content-center p-0">
            <h1 className="">Conoce al Grupo Èlite</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="d-flex flex-wrap m-3">
                {agents.map((agent, index) => (
                    <Col key={index}>
                    <img src={agent} alt={`Agent ${index + 1}`} />
                    </Col>
                ))}
            </div>
            <Button variant="custom" className="more-properties-button">BUSCAR ASESORES</Button>
          </Col>
          <Col xs={5}>
            <img src={imageAbout} alt="Market" className="img-fluid h-60 w-100" />
          </Col>
        </Row>
      </Container>
    </section>
    )
}

export default AboutContainer;