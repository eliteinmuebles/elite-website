import { Page } from "../../components/Page"
import styles from "./about.module.css"
import cn from "classnames"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
  faFacebook,
  faInstagram,
  faTiktok
}  from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faCircleLeft,
  faCircleRight
} from "@fortawesome/free-solid-svg-icons";

export const about = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <Page>
            <div className={styles["container-about-us"]}>
                <div className="row">
                    <div className="col-9">
                        <div className={styles["container-description"]}>
                        <div className={styles["box-about-us"]}>
                        <img src="/images/citys2.webp" alt="" className={styles["about-us-img"]} width="100%"/>
                    <h4 className={styles["about-us-img-top"]}> GRUPO ELITE INMOBILIARIO...</h4>
                    <h1 className={styles["title-about-us"]}>About Us</h1>
                    <span className={styles["text-about-us"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis dolorem nemo amet earum vitae, perspiciatis repellat sapiente nobis dolores fugit ipsa officiis delectus quasi consequuntur dolorum aliquid ipsum! Quia, eius vero. Voluptate molestiae reprehenderit ratione nemo nostrum possimus totam at vero culpa et dolorum, eum reiciendis repudiandae deleniti expedita.</span>
                    <div className={styles["socials"]}>
                    <div className={styles["socials-box"]}>
                            <a href="#" target="_blank" title="Facebook" className={styles["socials-item"]}>
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 53, padding:"3px", color: "#4e64b5", borderRadius:"8px"}} />
                            </a>
                            <a href="#" target="_blank" title="Instagram" className={styles["socials-item"]}>
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 50, padding:"3px",  background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", color:"white",  borderRadius:"8px"}} />

                            </a>
                            <a href="#" target="_blank" title="Instagram" className={styles["socials-item"]}>
                            <FontAwesomeIcon icon={faTiktok} style={{ fontSize: 50, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} />
                            </a>
                           
                        </div>
                      </div>
                </div>
                <div className={styles["box-estate-goals"]}>
                  <div className={styles["goals"]}>
                      <h4 className={styles["goals-title"]}>Vision</h4>
                      <span className={styles["goals-text"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis qui, repellat optio beatae quod laboriosam vero quis inventore est mollitia ratione! Doloribus suscipit unde optio magnam omnis minus dolor inventore? Obcaecati excepturi illum recusandae iste, quibusdam adipisci dolores culpa! Deserunt.</span>
                  </div>
                  <div className={styles["goals"]}>
                      <h4 className={styles["goals-title"]}>Mision</h4>
                      <span className={styles["goals-text"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis qui, repellat optio beatae quod laboriosam vero quis inventore est mollitia ratione! Doloribus suscipit unde optio magnam omnis minus dolor inventore? Obcaecati excepturi illum recusandae iste, quibusdam adipisci dolores culpa! Deserunt.</span>
                  </div>
                  <div className="d-flex flex-column gap-2">
                      <h1 className={styles["title-agents"]}>ELITE Agents</h1>
                      <img src="/images/team.jpg" alt="" className="goals-team-img" width="100%"/>
                      <span className={cn("mb-3 mt-2",styles["agents-text"])}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis qui, repellat optio beatae quod laboriosam vero quis inventore est mollitia ratione! Doloribus suscipit unde optio magnam omnis minus dolor inventore? Obcaecati excepturi illum recusandae iste, quibusdam adipisci dolores culpa! Deserunt.</span>
                  </div>
              </div> 
                        </div>  
                    </div>
                    <div className="col-3" >
                    <div className={styles["contact-me-box"]}>
                              <span className={styles["name-top"]}>ELITE Agent:</span>
                              <h1 className={styles["contact-me-name"]}>Jose Perez</h1>
                              <h4 className={styles["contact-me-rol"]}>Agente Inmobiliario Grupo Elite</h4>
                              <div className={styles["socials"]}>
                              
                                  <div className={styles["socials-box"]}>
                                      <a href="#" target="_blank" title="Facebook" className={styles["socials-item"]}>
                                      <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 33, padding:"3px", color: "#4e64b5", borderRadius:"8px"}} />
                                      </a>
                                      <a href="#" target="_blank" title="Instagram" className={styles["socials-item"]}>
                                      <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30, padding:"3px",  background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", color:"white",  borderRadius:"8px"}} />

                                      </a>
                                      <a href="#" target="_blank" title="Instagram" className={styles["socials-item"]}>
                                      <FontAwesomeIcon icon={faTiktok} style={{ fontSize: 30, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} />
                                      </a>
                                    
                                  </div>
                              </div>

                          <div className={styles["box-contact-me"]} >
                              <div className={styles["estate-agent-container"]} >
                              <h1 className={styles["estate-agent-top"]}>Contact me</h1>
                              <div className={styles["estate-agent-name"]}>
                                  <div className={styles["estate-agent-features"]}>
                                      <div className={styles["agent-phone"]}>
                                      <FontAwesomeIcon icon={faPhone} style={{ fontSize: 15, padding:"6px", color: "black", background:"white",  borderRadius:"8px"}} /><span className={styles["phone-top"]}> <a className="phone" href=""> +58-4144092789</a></span>
                                      </div>
                                      <div className={styles["agent-email"]}>
                                      <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} /><span className={styles["email-top"]}> <a className="email" href=""> gerenciaelite@gmail.com</a></span>
                                      </div>
                                  </div>
                              </div>
                          
                              
                              
                              <form action="#" className={styles["contact-form"]}>
                                <h1 className={styles["contact-title"]}>¿Tienes alguna consulta?</h1>
                                <Button variant="primary" onClick={handleShow} className={styles['contact-btn']}>
                                    Quiero ser contactado
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Hola! Ayudanos a contactarte: </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Correo Electronico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            autoFocus
                                        />
                                        </Form.Group>
                                        <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                        >
                                        <Form.Label>Dejanos tu duda</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cerrar
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Enviar
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                              </form>
                              
                              </div>
                        
                          </div>
                        </div>
                   
              </div>
            </div> 
        
            </div> 
                    
       
   
            </Page>
    )
}

export default about;