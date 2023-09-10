import styles from './FeaturesEstates.module.css'
import { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useScreenSize';
import { EstateCard } from '../EstateCard';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

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

export const FeatureEstates = () => {
    const [info, setInfo] = useState([...mockEstatesData].slice(0,3));
    const [sliceValue, setSliceValue] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [cardEstateWidth, setCardEstateWidth] = useState("290px")
    const [cardEstateHeight, setCardEstateHeight] = useState("390px")
    const screen = useWindowSize()

   
    
     
       useEffect(() => {
        if (screen && screen.width? screen.width <= 576 : null) {
          setInfo([...mockEstatesData].slice(0,1))
          setCardEstateWidth("330px")
        };
        if (screen && screen.width? screen.width < 1200 && screen.width > 800   : null) {
          setInfo([...mockEstatesData].slice(0,2))
          setCardEstateWidth("340px")
         
        };
        if (screen && screen.width? screen.width < 800 && screen.width > 500   : null) {
          setInfo([...mockEstatesData].slice(0,2))
          setCardEstateWidth("290px")
         
        };
        if (screen && screen.width? screen.width >= 1200   : null) {
          setInfo([...mockEstatesData].slice(0,3))
        };
        console.log(screen)
       }, [screen])
    
    
    return (
      <>
         <div className={styles['container-features']} > 
            <div className='container-title' >
            <Link href='/estatesPage/1' className={styles['titleEstates']}>
              Inmuebles destacados
            </Link>  
            </div>

         <Carousel indicators={false}>
          {mockEstatesData.map((estates, index) => (
            <Carousel.Item key={`estates-${index}`}>
              <div className='d-flex flex-row justify-content-center align-items-center gap-5 mt-2'>
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
            </Carousel.Item>
          )
          )}
          </Carousel>
        </div>  
      </>
    )
}