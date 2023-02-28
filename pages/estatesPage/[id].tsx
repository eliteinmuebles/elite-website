import { useRouter } from 'next/router'
import styles from './estatesPage.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { CardEstate } from '../../components/CardEstate';
import { useState, useEffect} from "react"
import { Page } from '../../components/Page';
import { Slider } from '../../components/Slider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBuildingWheat,
  faShop,
  faMountainCity,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";


const mockEstatesData = [
    {
      estatePictures:[
        "/images/estate1.jfif",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'10.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 2},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/citys2.webp",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'20.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 2},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/realtors2.jpg",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'20.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 2},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/viña.jpg",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'20.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 1},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/trigaleña.jpg",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'20.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 1},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/naguanagua.jfif",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'80.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 3},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/mañongo.jpg",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'140.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/parral.jpg",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'90.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
    {
      estatePictures:[
        "/images/prebo.jfif",
        "/images/apart1.jpg",
        "/images/parral.jpg"
      ],
      estateName:'Res. Valle Fresco 3, torre D, Apart 4-3',
      estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
      estatePrice:'250.000$',
      estateSalesType:'venta',
      estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
      estateAgent:{
        firstName: "Jose",
        lastName: "Perez",
        userId: 9,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
      },
    },
  ]


export const estatesPage = () => { 

    const [info, setInfo] = useState([...mockEstatesData].slice(0,mockEstatesData.length));
   
    useEffect(() => {
      const value = [...mockEstatesData].length
      setInfo([...mockEstatesData].slice(0,value))
     }, [])
  
    
  
    return (
      
        <Page>
            <div className={styles["estates-filter"]}>
                <div className="row">
                
                  <div className={styles['category-filter-bar']} style={{marginBottom:"20px"}}>

                        <div>
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
                        </div>
                        
                  </div>
                
                  <div className={styles['estates-container']}>
                        <div className="row">
                            {info.map((i:any) => (
                                <div className="col">
                                  <CardEstate
                                    width="380px"
                                    estatePictures={i.estatePictures}
                                    estateName={i.estateName}
                                    estateDescription={i.estateDescription}
                                    estatePrice={i.estatePrice}
                                    estateFeatures={i.estateFeatures}
                                    estateAgent={i.estateAgent}
                                  />
                                </div>
                          ))}
                        </div>
                        
                        
                    
                    </div>
                </div>
            </div>
        </Page>
        
    )
}

export default estatesPage