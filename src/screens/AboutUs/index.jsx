import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image from '../../assets/images/image-about.jpg'
import Asesores from '../../components/AgentsContainer';
import ReviewContainer from '../../components/ReviewsContainer/reviews-container';
export const AboutUs = () => {
    return (
        <>
            <Container fluid style={{ background: 'linear-gradient(to bottom, #000 50%, #fff 50%)',  marginTop:"6rem" }}>
                <Row className="justify-content-md-center p-4" >
                    <h1 style={{ color: '#E8CA93', fontSize: '72px' }}>Conoce cómo puede ayudarte nuestro Grupo Elite</h1>
                    <p style={{color:"white", fontSize:"24px"}}>Te ofrecemos la llave hacia un nuevo capítulo de tu vida y te guiamos en cada paso del camino</p>
                </Row>
            
            
                <Row>
                    <Col style={{display:"flex", justifyContent:"center", marginBottom:"1rem"}}>
                        <Image src={image} fluid />
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{paddingInline:"10rem"}}>
                <h1 style={{ color: 'black', fontSize: '48px' }}>Titulo atractivo</h1>
                    <p style={{color:"black"}}>Te ofrecemos la llave hacia un nuevo capítulo de tu vida y te guiamos en cada paso del camino</p>
                    <Col >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </Col>
                    <Row className='p-4'>
                        <p style={{textAlign:"center", color:"#D09426", fontSize:"32px", borderLeft:"2px solid black"}}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>

                    </Row>
                </Row>
            
            </Container>
            <Asesores/>
            <Row style={{padding:"2rem"}}>
            <ReviewContainer />

            </Row>
        </>
    );
};

export default AboutUs;
