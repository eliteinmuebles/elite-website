import styles from "./ZoneSliding.module.css"
import Carousel from 'react-bootstrap/Carousel';
import { CardZone } from "../CardZones"
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


export const ZoneSliding = () => {
    return(
        <>
        <div className={styles['container-features']}> 
        <div className='container-title'>
          <h1 className={styles['title-estates']}>Nearby Areas</h1>
        </div>
        
        <Carousel>

            <Carousel.Item>
              <div className="row">
                  <div className="col">
                    <CardZone
                      city='Valencia'
                      descriptionCity="Rodeada de colinas al oeste, parte de la Cordillera de la Costa al norte y sabanas al sur "
                      imageCity="images/parral.jpg"
                     />   
                  </div>
                  <div className="col">
                  <CardZone
                      city='Naguanagua'
                      descriptionCity="Av. Universidad 2005, Carabobo"
                      imageCity="images/prebo.jfif"
                     /> 
                  </div>
                  <div className="col">
                  <CardZone
                      city='La Viña'
                      descriptionCity="Av. 105, Valencia 2001, Carabobo"
                      imageCity="images/viña.jpg"
                     /> 
                  </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row">
                  <div className="col">
                  <CardZone
                      city='El Parral'
                      descriptionCity="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure."
                      imageCity="images/parral.jpg"
                     /> 
                  </div>
                  <div className="col">
                  <CardZone
                      city='Prebo'
                      descriptionCity="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure."
                      imageCity="images/prebo.jfif"
                     /> 
                  </div>
                  <div className="col">
                  <CardZone
                      city='El Trigal'
                      descriptionCity="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure."
                      imageCity="images/apart1.jpg"
                     /> 
                  </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row">
                  <div className="col">
                  <CardZone
                      city='Trigaleña'
                      descriptionCity="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure."
                      imageCity="images/trigaleña.jpg"
                     /> 
                  </div>
                  <div className="col">
                  <CardZone
                      city='San Diego'
                      descriptionCity="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.o"
                      imageCity="images/viña.jpg"
                     /> 
                  </div>
                  <div className="col">
                  <CardZone
                      city='Guacara'
                      descriptionCity="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure."
                      imageCity="images/prebo.jfif"
                     /> 
                  </div>

              </div>
            </Carousel.Item>

    </Carousel>
    </div>  
        </>
    )
}