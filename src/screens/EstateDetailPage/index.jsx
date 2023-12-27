import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { getEstate } from '../../api/estates';
import roomIcon from '../../assets/icons/room.svg'
import bathIcon from '../../assets/icons/bath.svg'
import areaIcon from '../../assets/icons/area.svg'

const EstateDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchEstateDetail();
    console.log(property)
  }, []);

  const fetchEstateDetail = async () => {   
    const estate = await getEstate(id);
    setProperty(estate);
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Container className='estate-container' style={{marginTop:'9rem'}}>
        <h1 style={{fontSize:'24px', color:'#E8CA93'}}>
            <FontAwesomeIcon icon={faArrowLeft} style={{color:'#E8CA93'}} /> Volver
        </h1>

        <div style={{display:'flex', justifyContent:'space-between'}}>
        <h1 style={{fontSize:'42px', fontWeight:'bold'}}>{property.title}</h1>
        <p style={{fontSize:'24px', color:'#D09426'}}>{property.price}</p>

        </div>
        <p style={{fontSize:'24px', color:'#E8CA93'}}>{property.address}</p>
        <img src={property.image} style={{width:'100%', height:'80vh'}} alt={property.title} />
        <div style={{display:'flex', justifyContent:'center', gap:'1rem', marginTop:'1rem'}}>
        {property.images.map((image, index) => (
            <img src={image}  alt={property.title} style={{width:'100%'}}/>
        ))  }
        </div>
        <div className='container-props' style={{display:'flex', gap:'3rem', marginTop:'3rem'}}>
            <div className='props' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
                <img src={roomIcon} width={100} height={100}/>
                <p style={{fontSize:'24px'}}>{property.props.rooms} Habitaciones</p>
            </div>
            <div className='props' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
                <img src={bathIcon} width={100} height={100}/>
                <p style={{fontSize:'24px'}}>{property.props.bathrooms} Baños </p>
            </div>
            <div  className='props' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
                <img src={areaIcon} width={100} height={100}/>
                <p style={{fontSize:'24px'}}>{property.props.parking} Estacionamiento</p>
            </div>
        </div>
    </Container>
    </>
  );
};

export default EstateDetail;