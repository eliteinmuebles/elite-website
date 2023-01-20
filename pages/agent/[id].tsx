import { Page } from "../../components/Page"
import { useRouter } from 'next/router'
import styles from "../agent/agent.module.css"
import { useState, useEffect} from "react"
import { CardAgentEstate } from "../../components/CardAgentEstate/CardAgentEstate" 
import { Slider } from "../../components/Slider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faCircleLeft,
    faCircleRight
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales',
    estatePrice:'10.000',
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

export const Agent = () => {
  const router = useRouter()
  const { pid } = router.query


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
    <Page>
        <div className={styles["agent-profile-container"]} style={{marginBottom:"5px"}}>
            <div className="row">
            
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
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: 15, padding:"6px", color: "black", background:"white",  borderRadius:"8px"}} /><span className={styles["phone-top"]}> <a className="phone" href=""> +58-4144092789</a></span>
                            </div>
                            <div className={styles["agent-email"]}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} /><span className={styles["email-top"]}> <a className="email" href=""> gerenciaelite@gmail.com</a></span>
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
            
    
            <div className="col-9">
                <div className={styles["about-me-box"]}>
                  
                    <div className={styles["about-me-info"]}>
                      <div className={styles["container-image"]}>
                        <img src="/images/fotoperfil1.jfif" alt="" className={styles["about-me-image"]} style={{width:"100%"}} />
                          <div className={styles["imageOverlay"]}>
                            <h1 className={styles["name"]}>Jose Perez</h1>
                            <h4 className={styles["eslogan"]}>'Tu asesor de confianza'</h4>
                            <div className={styles["agent-phone"]}>
                              <FontAwesomeIcon icon={faPhone} style={{ fontSize: 15, padding:"6px", color: "black", background:"white",  borderRadius:"8px"}} /><span className={styles["phone-top"]}> <a className="phone" href=""> +58-4144092789</a></span>
                              </div>
                              <div className={styles["agent-email"]}>
                              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} /><span className={styles["email-top"]}> <a className="email" href=""> gerenciaelite@gmail.com</a></span>
                              </div>
                          </div>
                      </div>
                        
                        <div className={styles["name-description"]}>
                            <h4 className={styles["about-me-title"]}>About me</h4>
                            <span className={styles["about-me-text"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur consequatur fugiat, eius odit cum, porro explicabo inventore sint doloremque tempore sit nemo dolore! Voluptas, hic porro voluptatem, vel quibusdam tempora laboriosam fuga voluptate dignissimos beatae exercitationem aperiam soluta sit adipisci.</span>
                           <div className={styles["agent-pics"]}>
                              <img src="/images/asesor5.jpg" alt="" className={styles["agent-pic"]} style={{width:"100%"}} />
                              <img src="/images/agente-inmobiliario.png" alt="" className={styles["agent-pic"]} style={{width:"100%"}} />
                              <img src="/images/asesor7.webp" alt="" className={styles["agent-pic"]} style={{width:"100%"}} />
                           </div>
                            
                        </div>
                       
                    </div>
                    <div className={styles['container-features']}> 
                        <div className={styles['container-title']} >
                        <h1 className={styles['title-estates']}>Mis Captaciones!</h1>
                        </div>

                        <Slider
                            left={left}
                            setLeft={setLeft}
                            right={right}
                            setRight={setRight}
                            
                            >
                            <div className="row" style={{width:"900px"}}>
                                        {info.map((i:any) => (
                                            <div className="col">
                                            <CardAgentEstate
                                                estatePictures={i.estatePictures}
                                                estateName={i.estateName}
                                                estateDescription={i.estateDescription}
                                                nameType={i.nameType}
                                                estatePrice={i.estatePrice}
                                                estateFeatures={i.estateFeatures}
                                               />
                                            </div>
                                        ))}
                                </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Page> 
    )
}

export default Agent