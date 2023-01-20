import styles from "./Header.module.css"
import cn from "classnames"
import Link from "next/link"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
    <>
    <div className="main-header" style={{height: "70px"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"  style={{height: "70px"}}>
            <div className="container">
                <Link href='/' className={styles["nav-item"]}>
                    <img src="/images/logo.jpg" className={styles["logo-elite"]} width="50" height="30" alt=""/>     
                </Link>
            
            {/*<a className={styles["title-elite"]} href="#">GRUPO ELITE</a>*/}
            <button className="navbar-toggler" type="button"  data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                
                <ul className="navbar-nav">
                    {/*} <li className="nav-item active">
                        <a className="nav-link fw-bold" href="#">Inicio</a>
                        </li>*/}
                    <li className="nav-item ">
                        <Link href='/estatesPage/1' className={styles["nav-item"]}>
                             Comprar
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <a href='#' className={styles["nav-item"]}>
                            Vender
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a href='#' className={styles["nav-item"]}>
                            Alquilar
                        </a>
                    </li>
                </ul>
        
            </div>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link href='/about' className={styles["nav-item"]}>
                            Sobre Nosotros!
                        </Link>
                    </li>
                    {/*<li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle fw-bold" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Languages</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Español</a>
                        <a className="dropdown-item" href="#">Ingles</a>
                        <a className="dropdown-item" href="#">Chino</a>
                    <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"></a>
                    </div>
                    </li>*/}
                   <li className="nav-item active">
                        
                        <Button variant="primary" onClick={handleShow} className={styles['btn-modal']}>
                            Contactanos
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
                        
                    </li>
                </ul>
            </div>
            </div>
    </nav>

  
  </div>
  </>
    )
}