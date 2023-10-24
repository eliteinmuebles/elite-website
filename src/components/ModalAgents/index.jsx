import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import './index.css';
import emblem from '../../assets/icons/Emblema.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';


const ModalAgents = ({ show, onHide, image, nombre }) => (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body >
       
          <Col xs={1}>
            <div className="social-icons">
              <img src={facebookIcon} alt="Facebook" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={tiktokIcon} alt="TikTok" />
            </div>
          </Col>
          <Col xs={3}>
            <img src={image} alt="Asesor" className="asesor-image" />
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={2}>
                <img src={emblem} alt="Emblema" className="emblem" />
              </Col>
              <Col xs={10}>
                <h2 className="asesor-title">{nombre}</h2>
                <p className="asesor-email">{nombre}@correo.com</p>
              </Col>
            </Row>
            <Row>
              <p className="asesor-interview">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
              </p>
            </Row>
          </Col>
        
      </Modal.Body>
    </Modal>
  );
  
  export default ModalAgents;
  
  