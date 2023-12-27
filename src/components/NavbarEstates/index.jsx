import React from 'react';
import './index.css';
import imageHeader from '../../assets/images/image-header.jpg';

const NavbarEstates = () => {
    return (
        <div className="" style={{position:"relative"}}>
            <img src={imageHeader} alt="Imagen de encabezado" className="background-image"/>
            
            <div className="content" style={{display: 'flex',flexDirection:'column', justifyContent: 'center'}}>
                <h1 className="title">Encuentra tu próxima propiedad aquí</h1>
                <div style={{display:'flex', gap:'1rem', marginBlock:'2rem'}}>
                    <button className="button-nav">Comprar</button>
                    <button className="button-nav">Venta</button>
                    <button className="button-nav">Alquiler</button>
                </div>
            </div>
        </div>
    );
}

export default NavbarEstates;