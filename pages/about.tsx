import { Page } from "../components/Page"
import {Slider } from "../components/Slider/Slider"
import styles from "./about/about.module.css"
import {useEffect, useState} from "react"
import { CardZone } from "../components/CardZones"

const mockZoneData = [
  {
    city: "Valencia",
    descriptionCity:"Rodeada de colinas al oeste, parte de la Cordillera de la Costa al norte y sabanas al sur ",
    imageCity:"images/parral.jpg"
  },

  {
    city:'Naguanagua',
    descriptionCity:"Av. Universidad 2005, Carabobo",
    imageCity:"images/prebo.jfif"
  },

  {
    city:'La Viña',
    descriptionCity:"Av. 105, Valencia 2001, Carabobo",
    imageCity:"images/viña.jpg"
  },

  {
    city:'El Parral',
    descriptionCity:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.",
    imageCity:"images/parral.jpg"                 
  },

  {
    city:'Prebo',
    descriptionCity:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.",
    imageCity:"images/prebo.jfif"
  },

  {
    city:'El Trigal',
    descriptionCity:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.",
    imageCity:"images/apart1.jpg"
  },

  {
    city:'Trigaleña',
    descriptionCity:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.",
    imageCity:"images/trigaleña.jpg"
  },

  {
    city:'San Diego',
    descriptionCity:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.o",
    imageCity:"images/viña.jpg"
  },

  {
    city:'Guacara',
    descriptionCity:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.",
    imageCity:"images/prebo.jfif"
  }

]

export const about = () => {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [info, setInfo] = useState([...mockZoneData].slice(0,3));
    const [sliceValue, setSliceValue] = useState(0);

    useEffect(() => {
     if (left)  {
       const value = [...mockZoneData].length
        if (sliceValue === 0) {
          setSliceValue(value -3)
          setInfo([...mockZoneData].slice(value-3, value))
        } else {
          setInfo([...mockZoneData].slice(sliceValue-3, sliceValue))
          setSliceValue(sliceValue - 3);
        }
      }
    }, [left])

    useEffect(() => {
      if (right) {
        const value = [...mockZoneData].length
        if (sliceValue == value -3) {
          setSliceValue(0);
          setInfo([...mockZoneData].slice(0,3))
        } else {
          setInfo([...mockZoneData].slice(sliceValue + 3, sliceValue + 3*2))
          setSliceValue((sliceValue + 3))
        }
      }
    }, [right])

    return ( 
        <Page>
            <Slider
              left={left}
              setLeft={setLeft}
              right={right}
              setRight={setRight}
            >
            <div className="row">
                  {info.map((i:any) => (
                    <div className="col">
                      <CardZone
                        city={i.city}
                        descriptionCity={i.descriptionCity}
                        imageCity={i.imageCity}

                      />
                    </div>
                  ))}
              </div>
            </Slider>
            <div className={styles["container-about-us"]} style={{display: "none"}}>
                <div className="row">
                    <div className="col-8">
                        <div className={styles["container-description"]}>
                        <div className={styles["box-about-us"]}>
                        <img src="images/citys2.webp" alt="" className="about-us-img" width="100%"/>
                    <h4 className={styles["about-us-img-top"]}> GRUPO ELITE INMOBILIARIO...</h4>
                    <h6 className={styles["title-about-us"]}>About Us</h6>
                    <span className={styles["text-about-us"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae debitis dolorem nemo amet earum vitae, perspiciatis repellat sapiente nobis dolores fugit ipsa officiis delectus quasi consequuntur dolorum aliquid ipsum! Quia, eius vero. Voluptate molestiae reprehenderit ratione nemo nostrum possimus totam at vero culpa et dolorum, eum reiciendis repudiandae deleniti expedita.</span>
                    <div className={styles["socials"]}>
                        <div className={styles["socials-box"]}>
        
                          <a href="#" target="_blank" title="Facebook" className={styles["socials-item"]}>
                            <i className="fab fa-facebook-f facebook"></i>
                          </a>
                          <a href="#" target="_blank" title="Twitter" className={styles["socials-item"]}>
                            <i className="fab fa-twitter twitter"></i>
        
                          </a>
                          <a href="#" target="_blank" title="Instagram" className={styles["socials-item"]}>
                            <i className="fab fa-instagram instagram"></i>
                          </a>
                          <a href="#" target="_blank" title="YouTube" className={styles["socials-item"]}>
                            <i className="fab fa-youtube youtube"></i>
                          </a>
                          <a href="#" target="_blank" title="Telegram" className={styles["socials-item"]}>
                            <i className="fab fa-telegram telegram"></i>
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
                  <div className={styles["goals"]}>
                      <h4 className={styles["goals-title"]}>ELITE Agents</h4>
                      {/*<img src="images/team.jpg" alt="" className="goals-team-img" width="100%"> */}
                      <span className={styles["vision-goals-text"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis qui, repellat optio beatae quod laboriosam vero quis inventore est mollitia ratione! Doloribus suscipit unde optio magnam omnis minus dolor inventore? Obcaecati excepturi illum recusandae iste, quibusdam adipisci dolores culpa! Deserunt.</span>
                  </div>
              </div> 
            </div>  
          </div>
          <div className="col-3 px-2" >
            <div className={styles["box-contact-us"]} >
                <div className={styles["estate-agent-container"]} >
                <h1 className={styles["estate-agent-top"]}>Contact us</h1>
                <img className={styles["estate-agent-img"]} style={{width:"150px", height:"120px"}}   src="images/logo.jpg" />
                <div className={styles["estate-agent-name"]}>
                    <span className={styles["name-top"]}>ELITE Broker:</span>
                    <h1 className={styles["agent-name"]}>M. Jose Pacheco</h1>
                    <div className={styles["estate-agent-features"]}>
                        <div className={styles["agent-phone"]}>
                            <i className="fa fa-phone" aria-hidden="true"></i><span className={styles["phone-top"]}> Phone:</span>
                            <a href="">+58-4144092789</a>
                        </div>
                        <div className={styles["agent-email"]}>
                            <i className="fa-regular fa-envelope"></i><span className={styles["email-top"]}> Email Oficina:</span>
                             <a href="">gerenciaelite@gmail.com</a>
                        </div>
                    </div>
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