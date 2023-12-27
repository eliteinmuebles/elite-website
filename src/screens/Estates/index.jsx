import React, {useState, useEffect} from 'react';
import CardProperty from '../../components/CardProperty/card-property';
import NavbarEstates from '../../components/NavbarEstates';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getEstates } from '../../api/estates';


export const EstatesPage = () => {
   const [properties, setProperties] = useState([]);

   useEffect(() => {
    fetchEstates();
  }, []);

   const fetchEstates = async () => {
    const estates = await getEstates();
    setProperties(estates);
  }; 

    return (
        <>

        <NavbarEstates/>
        <Container fluid className="featured-container">
        
        <Row className="justify-content-md-center">
            {properties.map((property) => (
            <Col xs={12} md={4} key={property.id} style={{marginBlock:'2rem'}}>
                <CardProperty property={property} />
            </Col>
            ))}
        </Row>
        <Button variant="custom" className="more-properties-button" style={{backgroundColor:"#D09426", color:"black"}}>Ver más propiedades</Button>
        </Container>
        </>
    );
};

export default EstatesPage;


