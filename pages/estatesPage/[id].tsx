import { useRouter } from 'next/router'
import styles from './estatesPage.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { CardEstate } from '../../components/CardEstate';
import { EstateCard } from '../../components/EstateCard';
import { useState, useEffect} from "react"
import { Page } from '../../components/Page';
import { Slider } from '../../components/Slider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBuildingWheat,
  faShop,
  faMountainCity,
  faBuilding,
  faMagnifyingGlass,
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { estateType } from '../../helpers/constantData';
import { estate } from '../../helpers/constantData';

const mockEstatesData = [
    [
     {
       id:1,
       estateImage:"/images/apart1.jpg",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
    
   },
   {
       id:2,
       estateImage:"/images/estate1.jfif",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
   },
   {
       id:3,
       estateImage:"/images/estate1.jfif",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
   },],
   [
     {
       id:4,
       estateImage:"/images/apart1.jpg",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
    
   },
   {
       id:5,
       estateImage:"/images/estate1.jfif",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
   },
   {
       id:6,
       estateImage:"/images/estate1.jfif",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
   },],
   [
     {
       id:7,
       estateImage:"/images/apart1.jpg",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
    
   },
   {
       id:8,
       estateImage:"/images/estate1.jfif",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
   },
   {
       id:9,
       estateImage:"/images/estate1.jfif",
       estateLocation:"Av. Bolivar Torre  BOD, Valencia",
       estatePrice:'20.000$',
       estateAgent:{
           agentName:'Jose',
           agentPhone: '0414356758',
           agentEmail: 'elite@gmail.com'
       }
   },],
   
    
     
   ]


export const estatesPage = () => { 
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cardEstateWidth, setCardEstateWidth] = useState("360px")
    const [cardEstateHeight, setCardEstateHeight] = useState("390px")

    const [info, setInfo] = useState([...mockEstatesData].slice(0,mockEstatesData.length));
   
    useEffect(() => {
      const value = [...mockEstatesData].length
      setInfo([...mockEstatesData].slice(0,value))
     }, [])
  
    
  
    return (
      
        <Page>
            <div className={styles["estates-filter"]}>
                
                <div className="row">
                    <div className={styles['category-filter-bar']} style={{marginBottom:"20px", paddingBottom:"10px"}}>

                        <Form.Select aria-label="Casa" style={{width: '20%'}}>
                        {
                        estateType.map(({id, type}) => (
                            <option value={id} >{type}</option>
                            ))
                        }                     
                        </Form.Select>
                    

                    <Form.Select aria-label="Casa" style={{width: '20%'}}>
                        {
                            estate.map(({id, estate}) => (
                                <option value={id}>{estate}</option>
                            ))
                        }
                    </Form.Select>


                            {/* <div>
                                <div className={styles['estate-item']}  style={{fontSize:15}}>
                                <FontAwesomeIcon
                                    icon={faHouseChimney}
                                    style={{ fontSize: 25,  }}
                                    />Casas
                                </div>
                            </div>
                            <div>
                                <div className={styles['estate-item']}  style={{fontSize:15}}>
                                <FontAwesomeIcon
                                    icon={faBuildingWheat}
                                    style={{ fontSize: 25,  }}
                                    />Apartamentos
                                </div>
                            </div>
                            <div>
                                <div className={styles['estate-item']}  style={{fontSize:15}}>
                                <FontAwesomeIcon
                                    icon={faShop}
                                    style={{ fontSize: 25,  }}
                                    />Locales
                                </div>
                            </div>
                            <div>
                                <div className={styles['estate-item']}  style={{fontSize:15}}>
                                <FontAwesomeIcon
                                    icon={faMountainCity}
                                    style={{ fontSize: 25,  }}
                                    />Terrenos
                                </div>
                            </div>
                            <div>
                                <div className={styles['estate-item']}  style={{fontSize:15}}>
                                <FontAwesomeIcon
                                    icon={faBuilding}
                                    style={{ fontSize: 25,  }}
                                    />Oficinas
                                </div>
                            </div> */}

                            <InputGroup size='sm' style={{width: '40%'}}>
                            <Form.Control />
                            <InputGroup.Text className={styles['search']}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </InputGroup.Text>
                            </InputGroup>   

                        
                    </div>
                
                  <div className={styles['estates-container']}>
                       {info.map((estates, index) => (
                            <div className='d-flex flex-row justify-content-center align-items-center gap-5 mb-4'>
                                  {estates.map((estate) => (
                                    <EstateCard
                                        key={estate.id}
                                        width={cardEstateWidth}
                                        height={cardEstateHeight}
                                        estateImage={estate.estateImage}
                                        estateAgent={estate.estateAgent}
                                        estateLocation={estate.estateLocation}
                                        estatePrice={estate.estatePrice}
                                        />
                                    ))}
                                </div>
                            ))}
                        
                        
                    
                    </div>
                </div>
            </div>
        </Page>
        
    )
}

export default estatesPage