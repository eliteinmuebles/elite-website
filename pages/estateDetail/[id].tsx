import Carousel from 'react-bootstrap/Carousel';
import styles from './estateDetail.module.css'
import { CardEstate } from '../../components/CardEstate';
import { useState, useEffect} from "react"
import { Page } from '../../components/Page';
import { Slider } from '../../components/Slider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faBed, 
  faToilet,
  faCarSide,
  faLightbulb,
  faRuler, 
  faCar,
  faSquare,
  faDroplet,
  faRulerCombined
} from "@fortawesome/free-solid-svg-icons";
import{
  faFacebook,
  faInstagram,
  faTiktok
}  from '@fortawesome/free-brands-svg-icons'

const mockEstatesData = [
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'Calle 204 Valencia, CA 2005',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Residencia',
    estateName:'1137 Valencia, CA 2005',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Oficina',
    estateName:'1024 La Viña, CA 2005',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Apto Soltero',
    estateName:'Calle 15 Trigal, CA 2005',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Casa de familia',
    estateName:'1045 Valencia, CA 2005',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'1137 Trigaleña, CA 2007',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'2540 Mañongo, CA 2003',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'Av 205 Naguanagua, CA 2005',
    estatePrice:'10.000$',
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
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Apartamento Familiar',
    estateName:'Calle 135 Viñedo, CA 2002',
    estatePrice:'10.000$',
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

export const estateDetail = () => {
  
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [info, setInfo] = useState([...mockEstatesData].slice(0,3));
  const [sliceValue, setSliceValue] = useState(0);

  useEffect(() => {
    if (left)  {
      const value = [...mockEstatesData].length
       if (sliceValue === 0) {
         setSliceValue(value -3)
         setInfo([...mockEstatesData].slice(value-3, value))
       } else {
         setInfo([...mockEstatesData].slice(sliceValue-3, sliceValue))
         setSliceValue(sliceValue - 3);
       }
     }
   }, [left])

   useEffect(() => {
     if (right) {
       const value = [...mockEstatesData].length
       if (sliceValue == value -3) {
         setSliceValue(0);
         setInfo([...mockEstatesData].slice(0,3))
       } else {
         setInfo([...mockEstatesData].slice(sliceValue + 3, sliceValue + 3*2))
         setSliceValue((sliceValue + 3))
       }
     }
   }, [right])


    return (
        <>
        <Page>
          <div className={styles["estate-page"]}>
            <div className="row" >
              <div className="col-9">
                
                <div className={styles["estate-container"]}>
                    
                    <div className={styles["estate-pictures"]}>
                      <Carousel>
                        <Carousel.Item>
                            <img src="/images/apart1.jpg" className={styles['estate-image']} />
                            <span className={styles["estate-type"]}>For Sale</span>
                            <span className={styles["estate-date"]}>Open House 04/11/22</span>
                        </Carousel.Item>

                        <Carousel.Item>   
                            <img src="/images/estate1.jfif" className={styles['estate-image']} />
                            <p className={styles["estate-type"]}>For Sale</p>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src="/images/citys2.webp"className={styles['estate-image']} />
                            <p className={styles["estate-type"]}>For Sale</p>
                        </Carousel.Item>
                      </Carousel>
                    </div>

                    
                    <div className={styles["estate-content"]}>
                      
                      <div className={styles["estate-type"]}>
                        <span>For Sale</span>
                      </div>
                      
                      <div className={styles["box"]}>
                          <span className={styles["text"]}>Precio</span>
                          <h1 className={styles["estate-price"]}><span className={styles['price-simbol']}>$</span>20.000</h1>
                      </div>

                      <div className={styles["box"]}> 
                            <span className={styles["text"]}>Ubicacion</span>
                            <h1 className={styles["estate-locate"]}>Urb. La Viña</h1>
                            <h2 className={styles["estate-name"]}>Res. Valle Fresco 3, torre D, Apart 4-3</h2>
                      </div>
                      
                      <div className={styles["box"]}>
                            <span className={styles["text"]}>El Inmueble:</span>
                            <h1 className={styles["estate-description-text"]}>Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público</h1>
                      </div>
                      
                      <div className={styles["box"]}>
                      <span className={styles["text"]}>Caracteristicas</span>
                            <div className={styles["estate-features-icons"]}>
                                <div>
                                    <div className={styles['estate-item']}  style={{fontSize:20}} >
                                      <FontAwesomeIcon
                                            icon={faBed}
                                            style={{ fontSize: 25,  }}
                                          />4 habitaciones</div>
                                </div>
                                <div >
                                    <div className={styles['estate-item']}  style={{fontSize:20}}>
                                      <FontAwesomeIcon
                                            icon={faToilet}
                                            style={{ fontSize: 25,  }}
                                          />3 baños</div>
                                </div>
                                <div >
                                    <div className={styles['estate-item']}  style={{fontSize:20}}>
                                      <FontAwesomeIcon
                                            icon={faCar}
                                            style={{ fontSize: 25,}}
                                          />2 puestos</div>
                                </div>
                                <div>
                                    <div className={styles['estate-item']} style={{fontSize:20}}>
                                      <FontAwesomeIcon
                                            icon={ faRulerCombined}
                                            style={{ fontSize: 25, backgroundColor: "white" }}
                                          /> 180 m^2</div>
                                </div>
                                <div >
                                    <div className={styles['estate-item']}  style={{fontSize:20}}>
                                      <FontAwesomeIcon
                                            icon={ faLightbulb}
                                            style={{ fontSize: 25,  }}
                                          /> Planta Electrica</div>
                                </div>
                                <div className={styles['item']}>
                                    <div className={styles['estate-item']}  style={{fontSize:20}}>
                                      <FontAwesomeIcon
                                            icon={ faDroplet}
                                            style={{ fontSize: 25,  }}
                                          />Pozo de agua</div>
                                </div>
                            </div>
                      </div>

                    </div>
                    <div className={styles['container-features']}> 
                        
                        <h1 className={styles['title-related-estates']}>Inmuebles Relacionados!</h1>
                        

                        <Slider
                            left={left}
                            setLeft={setLeft}
                            right={right}
                            setRight={setRight}
                            marginBottom="30px"
                            >
                            <div className="row">
                                        {info.map((i:any) => (
                                            <div className="col">
                                            <CardEstate
                                                estatePictures={i.estatePictures}
                                                nameType={i.nameType}
                                                estateName={i.estateName}
                                                estatePrice={i.estatePrice}
                                                estateFeatures={i.estateFeatures}
                                                estateAgent={i.estateAgent}
                                            />
                                            </div>
                                        ))}
                                </div>
                        </Slider>
                    </div>

                </div>
              
              </div>
              <div className="col-3">
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
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: 15, padding:"6px", color: "black", background:"white",  borderRadius:"8px"}} /><a className="phone" href=""> +58-4144092789</a>
                            </div>
                            <div className={styles["agent-email"]}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} /><a className="email" href=""> gerenciaelite@gmail.com</a>
                            </div>
                        </div>
                    </div>
                
                    
                    
                    <form action="#" className={styles["contact-form"]}>
                      <h1 className={styles["contact-title"]}>¿Tienes alguna consulta?</h1>
                      <input type="text" name="name" placeholder="Name" className={styles['form-control']}/>
                      <input type="text" name="email" placeholder="Email Address" />
                      <textarea name="comment" placeholder="Your Question or Comment"></textarea>
                      <button className={styles["contact-btn"]}>Contact me</button>
                    </form>
                    
                    </div>
               
                </div>
              </div>
              </div>
            </div>
            </div>
        </Page>
        </>
    )
}

export default estateDetail