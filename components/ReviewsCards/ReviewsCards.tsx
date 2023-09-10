import styles from "./ReviewsCards.module.css"
import { ReviewsCardsProps } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faStar,
    faStarHalfStroke
  } from "@fortawesome/free-solid-svg-icons";


export const ReviewsCards = ({id, photo, name, review}: ReviewsCardsProps) => {
    
    return (
        <>
        <div className={styles["review-card-container"]} style={{width:"90%"}}>
          <img src={photo} className={styles["photo"]}/>
          <div className="m-2">
            <h1>{name}</h1>
            <div className={styles["stars"]}>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStarHalfStroke}/>
            </div>
            <p>{review}</p>
          </div>
        </div>
        </>
    )
} 