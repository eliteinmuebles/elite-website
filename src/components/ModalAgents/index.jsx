import React from 'react';
import {  Row, Col, Button, Modal } from 'react-bootstrap';
import './index.css';
import emblem from '../../assets/icons/Emblema.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import tiktokIcon from '../../assets/icons/tiktok.svg';


const ModalAgents = ({ show, onHide, content, image, nombre }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ maxWidth: '100%' }}
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Asesor Inmobiliario
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{ overflow: 'auto' }}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:"1rem"}}>

            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
              <img src={facebookIcon} alt="Facebook" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={tiktokIcon} alt="TikTok" />
            </div>
          
          
            <img src={image} alt="Asesor" className="asesor-image" />
          
            <div>
            <div style={{display:"flex", gap:"1rem"}}>
              <div>
                <img src={emblem} alt="Emblema" className="emblem" />
              </div>
              <div>
                <h2 style={{color: '#D09426', marginBottom:"0"}} >{nombre}</h2>
                <p className="asesor-email">{nombre}@correo.com</p>
              </div>
            </div>
            <div>
              <p className="asesor-interview">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
              </p>
            </div>
            </div>
          </div>
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};



  
  export default ModalAgents;
  
  