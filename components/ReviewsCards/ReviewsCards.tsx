import styles from "./ZoneSliding.module.css"
import Carousel from 'react-bootstrap/Carousel';
import { CardZone } from "../CardZones"
import { Slider } from "../Slider";
import { useState, useEffect} from "react"

export const ReviewsCards = () => {
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
 {/*}   const [info, setInfo] = useState([...mockZoneData].slice(0,3)); */}
    const [sliceValue, setSliceValue] = useState(0);
  
   {/*} useEffect(() => {
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
     }, [left]) */}
  
    {/*} useEffect(() => {
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
     }, [right]) */}

    return (
        <>
        
        </>
    )
} 