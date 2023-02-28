import styles from './FeaturesTest.module.css'
import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useScreenSize';
import { Slider } from '../Slider';
import { EstateCard } from '../EstateCard';

const mockEstatesData = [
    {
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
      estateImage:"/images/estate1.jfif",
      estateLocation:"Av. Bolivar Torre  BOD, Valencia",
      estatePrice:'20.000$',
      estateAgent:{
          agentName:'Jose',
          agentPhone: '0414356758',
          agentEmail: 'elite@gmail.com'
      }
  }
    
  ]

export const FeatureTest = () => {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [info, setInfo] = useState([...mockEstatesData].slice(0,3));
    const [sliceValue, setSliceValue] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [cardEstateWidth, setCardEstateWidth] = useState("360px")
    const [cardEstateHeight, setCardEstateHeight] = useState("390px")
    const [limit, setLimit] = useState(3)
    const screen = useWindowSize()

    useEffect(() => {
        if (left)  {
          const value = [...mockEstatesData].length
           if (sliceValue === 0 ) {
             setSliceValue(value - limit)
             setInfo([...mockEstatesData].slice(value-limit, value))
           } 
         
           else {
             setInfo([...mockEstatesData].slice(sliceValue-limit, sliceValue))
             setSliceValue(sliceValue - limit);
           }
         }
       }, [left])
    
       useEffect(() => {
         if (right) {
           const value = [...mockEstatesData].length
           if (sliceValue == value -limit ) {
             setSliceValue(0);
             setInfo([...mockEstatesData].slice(0, limit))
            }
          
           else {
             setInfo([...mockEstatesData].slice(sliceValue + limit, sliceValue + limit*2))
             setSliceValue((sliceValue + limit))
           }
         }
       }, [right])
    
       useEffect(() => {
        if (screen && screen.width? screen.width <= 576 : null) {
          setLimit(1)
          setInfo([...mockEstatesData].slice(0,1))
          setCardEstateWidth("330px")
        };
        if (screen && screen.width? screen.width < 1200 && screen.width > 800   : null) {
          setLimit(2)
          setInfo([...mockEstatesData].slice(0,2))
          setCardEstateWidth("340px")
         
        };
        if (screen && screen.width? screen.width < 800 && screen.width > 500   : null) {
          setLimit(2)
          setInfo([...mockEstatesData].slice(0,2))
          setCardEstateWidth("290px")
         
        };
        if (screen && screen.width? screen.width >= 1200   : null) {
          setLimit(3)
          setInfo([...mockEstatesData].slice(0,3))
        };
        console.log(screen)
       }, [screen])
    
    
    return (
      <>
         <div className={styles['container-features']} style={{marginBottom:"20px"}}> 
            <div className='container-title' style={{marginBottom:"40px"}}>
              <h1 className={styles['titleEstates']}>Inmuebles Destacados!</h1>
            </div>

          <Slider
              left={left}
              setLeft={setLeft}
              right={right}
              setRight={setRight}
            >
              <div className="row">
                  {info.map((i:any, index:number) => (
                      <div className="col" key={`feature-estates-${index}`}>
                        <EstateCard
                          width={cardEstateWidth}
                          height={cardEstateHeight}
                          estateImage={i.estateImage}
                          estateAgent={i.estateAgent}
                          estateLocation={i.estateLocation}
                          estatePrice={i.estatePrice}
                        />
                      </div>
                    ))}
              </div>
            </Slider>
        </div>  
      </>
    )
}