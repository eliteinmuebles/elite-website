import styles from "./Slider.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useEffect, useState} from "react"
import {
    faChevronLeft,
    faChevronRight
  } from "@fortawesome/free-solid-svg-icons";

interface Props {
    children: JSX.Element,
    left: boolean,
    setLeft: (arg:boolean) => void,
    right: boolean,
    setRight: (arg:boolean) => void,
    marginBottom?: string 
}


export const Slider = ({children, setLeft, left, right, setRight, marginBottom}: Props) => {
    const [marginBottomProp, setMarginBottomProp] = useState("")
    
    useEffect(() => {
        if (left) setLeft(false)
    }, [left])

    useEffect(() => {
        if (right) setRight(false)
    }, [right])

    useEffect(() => {
        if (marginBottom) setMarginBottomProp(marginBottom)
    }, [marginBottom])
    
    return (
        <section className={styles['slider']} style={{
              marginBottom: marginBottomProp? marginBottomProp : "20px"
          }}>
          <div className={styles['left-arrow']} onClick={() => setLeft(true)}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: 40, color: "black"}} />
          </div>
          <div className={styles['right-arrow']} onClick={() => setRight(true)}>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 40, color: "black"}} />
          </div>
          <div
            className={true ? styles['slide active' ]: styles['slide']}
            >
            {children}
           </div>
         
        </section>
    )
}