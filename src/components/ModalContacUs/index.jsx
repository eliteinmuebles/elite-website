import React from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import emblem from '../../assets/icons/Emblema.svg';
import image from '../../assets/images/image-about.jpg';

export const ModalContactUs = ({ onHide, show, content }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ maxWidth: '100%', padding:"0" }}
        >
            <Modal.Body style={{ padding:"0" }}>
               
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div style={{position: "relative"}}>
                    <img src={image} alt="Nosotros" style={{width:"100%"}} />
                    <img src={emblem} alt="Emblema" style={{position: "absolute", top: "0", left: "0", padding:"0.5rem"}} />
                </div>

                <Col xs={6} style={{backgroundColor:"#D09426"}}>
                <div style={{padding:"1rem"}}>
                        <h3>Tienes alguna consulta</h3>
                        <p>Rellena este formulario</p>
                        <Form style={{display:"flex", gap:"1rem", flexDirection:"column"}}>
                            <Form.Group controlId="formBasicName" >
                                <Form.Control type="text" placeholder="Nombre" style={{backgroundColor:"#E8CA93"}} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" style={{backgroundColor:"#E8CA93"}} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPhoneNumber">
                                <Form.Control type="text" placeholder="Número de contacto(opcional)" style={{backgroundColor:"#E8CA93"}} />
                            </Form.Group>
                        </Form>
                </div>
                </Col>
            </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
};



  
  export default ModalContactUs;
  
  