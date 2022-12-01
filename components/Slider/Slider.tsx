import styles from "./Slider.module.css"
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import {useEffect} from "react"

interface Props {
    children: JSX.Element,
    left: boolean,
    setLeft: (arg:boolean) => void,
    right: boolean,
    setRight: (arg:boolean) => void,
}


export const Slider = ({children, setLeft, left, right, setRight}: Props) => {
    useEffect(() => {
        if (left) setLeft(false)
    }, [left])

    useEffect(() => {
        if (right) setRight(false)
    }, [right])
    
    return (
        <section className={styles['slider']} >
        <button className={styles['left-arrow']} onClick={() => setLeft(true)}>
            {/*<img src="{leftArrow}" /> */}
            {"<"}
        </button>
        <div className={styles['right-arrow']} onClick={() => setRight(true)}>
           {/* <img src="{rightArrow}" /> */}
           {">"}
        </div>
       
            <div
              className={true ? styles['slide active' ]: styles['slide']}
            >
              {children}
            </div>
         
      </section>
    )
}