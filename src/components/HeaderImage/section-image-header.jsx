import React from 'react';
import './section-image-header.css';
import imageHeader from '../../assets/images/image-header.jpg';

const SectionImageHeader = () => {
    return (
        <div className="" style={{position:"relative"}}>
            <img src={imageHeader} alt="Imagen de encabezado" className="background-image"/>
            <div className="content">
                <h1 className="title">Explora oportunidades exclusivas en bienes raíces</h1>
                <p className="paragraph" style={{marginBlock:"2rem"}}>Te ofrecemos la llave hacia un nuevo capítulo de tu vida y te guiamos en cada paso del camino.</p>
                <button className="btn-view-estates">Ver propiedades</button>
            </div>
        </div>
    );
}

export default SectionImageHeader;
