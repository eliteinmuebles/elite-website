import Carousel from 'react-bootstrap/Carousel';
import styles from "./CardEstate.module.css"

interface CardEstateProps {
    estateName?: string,
    estateDescription?: string,
    estatePrice?: string,
    estatePictures?: string[],
    estateSalesType?: string,
    estateFeatures?: EstateFeatures,
    estateAgent?: EstateAgent

}

interface EstateFeatures {
    bathrooms?: string | number,
    area?: string | number, 
    rooms?: string | number,
    parkingSpots?: string | number,
    pozo?: boolean | undefined,
    planta?: boolean | undefined,
}

interface EstateAgent {
    firstName?: string,
    lastName?: string,
    userId?: string | number, 
    profilePic?: string,
}

export const CardEstate = ({estateName, estateDescription, estateSalesType, estatePictures, estatePrice, estateFeatures, estateAgent}:CardEstateProps) => {
    return (
        <div className={styles["estate-card-container"]}>
        {/*<ul id="carousel-card" className={styles["estate-carousel"]}>
            <li className={styles["estate-sale-type"]}>
                <span>{estateSalesType}</span>
            </li>
            <li className={styles["estate-carousel-prev-left"]}>
                <i className="fa-solid fa-chevron-left estate-carousel-button"></i>
            </li>
            <li className={styles["estate-carousel-prev-right"]}>
                <i className="fa-solid fa-chevron-right estate-carousel-button"></i>
            </li>
            <li className={styles["estate-carousel-content"]}>
                <img width="100%" id="estate-card-image-carousel" src="images/apart1.jpg" />
            </li>
            </ul>*/}
        <div className="images-container" >
        <Carousel>
            <Carousel.Item>
                <img style={{width: "100%"}} className={styles["image-estate"]} src="images/apart1.jpg" />
        
            </Carousel.Item>

            <Carousel.Item>
                <img style={{width: "100%"}} className={styles["image-estate"]} src="images/apart1.jpg" />
            </Carousel.Item>

            <Carousel.Item>
                <img style={{width: "100%"}} className={styles["image-estate"]} src="images/apart1.jpg" />
            </Carousel.Item>

        </Carousel>
            
        </div>
        
        <span className={styles["estate-name"]}>{estateName}</span>   
        <span className={styles["estate-descrption"]}>{estateDescription}</span>
        <span className={styles["estate-price"]}>{estatePrice}</span>
        <div className={styles["estate-features"]}>
            <div className={styles["estate-bedrooms"]}>
                <div >{/*<i className="fa-solid fa-bed">*/}{estateFeatures?.rooms}{/*</i>*/}</div>
            </div>
            <div className={styles["estate-bathrooms"]}>
                <div>{/*<i className="fa-solid fa-shower"> */}{estateFeatures?.bathrooms}{/*</i> */}</div>
            </div>
            <div className={styles["estate-area"]}>
                <div><i className="fa-solid fa-vector-square">{estateFeatures?.area} m<span className={styles["position-meters"]} style={{position: "relative", fontSize:" 75%", top: "-5px"}}>2</span></i></div>
            </div>
            <div></div>
            <div>
                <div><i className="fa-solid fa-car"> {estateFeatures?.parkingSpots}</i></div>
            </div>
        </div>
        <div className={styles["estate-agent-container"]}>
            <img className={styles["estate-agent-img"]} width="40px" height="40px" src={estateAgent?.profilePic? estateAgent?.profilePic : "images/avatar.jpg" } />
            <span className={styles["estate-agent-name"]}>{`${estateAgent?.firstName} ${estateAgent?.lastName}` }</span>
        </div>
    </div>
    )
}