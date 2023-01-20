import styles from './CardAgentEstate.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed, 
    faToilet,
    faRuler, 
    faCar
} from "@fortawesome/free-solid-svg-icons";

interface CardEstateProps {
    estateName?: string,
    estateDescription?: string,
    estatePrice?: string,
    estatePictures?: string[],
    estateSalesType?: string,
    estateFeatures?: EstateFeatures,
    width?: string | number,
    estatusType?: string,
    nameType?: string
}

interface EstateFeatures {
    bathrooms?: string | number,
    area?: string | number, 
    rooms?: string | number,
    parkingSpots?: string | number,
    pozo?: boolean | undefined,
    planta?: boolean | undefined,
}

export const CardAgentEstate = ({estateName,  estateSalesType, estatePictures, estatePrice, estateFeatures, width, estatusType, nameType, estateDescription }:CardEstateProps) => {
    return ( 
        <div className={styles["estate-card-container"]} style={{width: "100%"}}>
        
                <div className="images-container" >
                    <Carousel>
                        {   estatePictures && estatePictures.length?
                            estatePictures.map((pic:string) => (
                            <Carousel.Item>
                                <img style={{width: "100%", height: "200px"}} className={styles["image-estate"]} src={pic} />
                            </Carousel.Item>
                        ))
                        :
                        null
                        }
                    </Carousel>
                    
                </div>
                
                <span className={styles["estate-name"]}>{estateName}</span>
                <span className={styles["estate-description"]}>{estateDescription}</span>
                <span className={styles["estate-price"]}><span className={styles['price-simbol']}>$</span>{estatePrice}</span>
                <div className={styles["estate-features"]}>
                    <div className={styles["estate-bedrooms"]}>
                        <div style={{fontSize: 18}} >{estateFeatures?.rooms}<FontAwesomeIcon icon={faBed} style={{ fontSize: 20, padding:"3px"}} /></div>
                    </div>
                    <div className={styles['box-icons']}>
                        <div style={{fontSize: 18}}>{estateFeatures?.bathrooms}<FontAwesomeIcon icon={faToilet} style={{ fontSize: 20,padding:"3px" }} /></div>
                    </div>
                    <div className={styles['box-icons']}>
                        <div  style={{fontSize: 18}}>{estateFeatures?.area} m<span className={styles["position-meters"]} style={{position: "relative", fontSize:" 75%", top: "-5px"}}>2</span><FontAwesomeIcon icon={faRuler} style={{ fontSize: 20,padding:"3px"}}/></div>
                    </div>
                    <div></div>
                    <div className={styles['box-icons']}>
                        <div  style={{fontSize: 18}}>{estateFeatures?.parkingSpots}<FontAwesomeIcon icon={faCar} style={{ fontSize: 20,padding:"3px" }}/> </div>
                    </div>
                </div>
                
                
    </div>
    )
}