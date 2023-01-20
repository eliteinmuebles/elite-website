import styles from "./ZoneSliding.module.css"
import Carousel from 'react-bootstrap/Carousel';
import { CardZone } from "../CardZones"
import { Slider } from "../Slider";
import { useState, useEffect} from "react"

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

    return(
        <>
    <div className={styles['container-features']}> 
          <div className='container-title'>
            <h1 className={styles['title-estates']}>Zona Elite</h1>
          </div>
        
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
    </div>  
        </>
    )
}