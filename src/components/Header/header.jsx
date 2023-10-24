import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';
import logo from '../../assets/icons/logo-header.svg';
import isotipo from '../../assets/icons/isotipo-header.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    return (
        <Navbar fixed="top" expand="lg" className='header p-3'>
             <Navbar.Brand className="d-lg-none" >
                <img
                    src={isotipo}
                    className="d-inline-block align-top"
                    alt="Isotipo de la empresa"
                    onClick={() => navigate('/home')}
                />
          
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" style={{color: '#D09426'}} />
             <Navbar.Collapse id="basic-navbar-nav" className='header'>
                <Nav className="mr-auto mt-3" style={{display:"flex", gap:"40px"}}>
                    <Nav.Link  style={{color: '#E8CA93', fontSize: '18px'}}>INICIO</Nav.Link>
                        <Nav.Link 
                            style={{color: '#E8CA93', fontSize: '18px'}}
                            onClick={() => navigate('/about')}
                            >CONÓCENOS
                            </Nav.Link>
                </Nav>
                <Navbar.Brand className="d-none d-lg-block" >
               
                    <img
                        src={logo}
                        className="d-inline-block align-top header-image"
                        alt="Logo de la empresa"
                        onClick={() => navigate('/home')}
                    />
                
                </Navbar.Brand>
                <Nav className="ml-auto mt-3" style={{display:"flex", gap:"40px"}}>
                    <Nav.Link href="#propiedades" style={{color: '#E8CA93', fontSize: '18px'}}>PROPIEDADES</Nav.Link>
                    <Nav.Link href="#contactanos" style={{color: '#E8CA93', fontSize: '18px'}}>CONTÁCTANOS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
