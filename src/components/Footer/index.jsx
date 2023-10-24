import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import facebook  from '../../assets/icons/facebook.svg';
import  instagram  from '../../assets/icons/instagram.svg';
import  tiktok  from '../../assets/icons/tiktok.svg';

const Footer = () => {
  return (
    <Row style={{ backgroundColor: 'black', color: '#D09426', padding:"2rem", maxHeight:"506px" }}>
      <Col>
        <h2>Tienes alguna consulta?</h2>
        <p>Contactanos via e-mail</p>
        <Form style={{display:"flex", flexDirection:"column", gap:"1rem", marginBottom:"1rem"}}>
          <Form.Group controlId="formName">
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder="Correo Electrónico" />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Control type="tel" placeholder="Número de Contacto" />
          </Form.Group>
          <Button variant="dark" style={{ borderColor: '#D09426', color: '#D09426' }}>
            Contactar
          </Button>
        </Form>
        <span>O escribenos al +58 4144567854</span>
      </Col>
      <Col>
        {/* Asegúrate de reemplazar la URL del iframe con la ubicación correcta en Google Maps */}
       <div style={{width: "351px", height: "270px", overflow: "hidden"}}>
        <iframe style={{width:"351px", height:"226px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.638104013978!2d-68.00504368520438!3d10.229978992713748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e80933001716f03%3A0x12d14a8e75300619!2sEl%20Vi%C3%B1edo%2C%20Valencia%2C%20Carabobo%2C%20Venezuela!5e0!3m2!1sen!2sus!4v1634583124386!5m2!1sen!2sus" width="600" height="450"  allowFullScreen="" loading="lazy"></iframe>
        </div>
        <span>Oficina corporativa</span>
        <p>Oficina 00, Piso 4, Torre intligente, Valencia, Carabobo, Venezuela</p>
      </Col>
      <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
       <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <img src={facebook} width={30} height={30} alt="Facebook Icon" />
        <img src={instagram} width={30} height={30} alt="Instagram Icon" />
        <img src={tiktok} width={30} height={30} alt="TikTok Icon" />

       </div>
          
        
        <span style={{textAlign:"end"}}>Aviso legal | Politica de privacidad</span>
      </Col>
    </Row>
  );
};

export default Footer;

