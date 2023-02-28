import Carousel from 'react-bootstrap/Carousel';
import styles from "./CardEstate.module.css"
import Link from 'next/link';
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
    estateAgent?: EstateAgent,
    width?: string | number,
    estatusType?: string,
    nameType?: string,
    classNameOuterContainer?: string,
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

export const CardEstate = ({estateName,  estateSalesType, estatePictures, estatePrice, estateFeatures, estateAgent, width, estatusType, nameType,estateDescription, classNameOuterContainer }:CardEstateProps) => {
    return (
    <div className={styles["estate-card-container"]} style={{width: width? width: "", marginBottom:"20px"}}>
            <div className="images-container" >
                <Carousel>
                    {   estatePictures && estatePictures.length?
                        estatePictures.map((pic:string) => (
                        <Carousel.Item>
                            <Link href='/estatesPage/1' className={styles["nav-item"]}>
                                <img style={{width: "100%", height: "200px"}} className={styles["image-estate"]} src={pic} />
                            </Link>
                        </Carousel.Item>
                    ))
                    :
                    null
                    }
                </Carousel>
                </div>
                    <Link href='/estateDetail/1' className={styles["estate-name-container"]} >
                        <span className={styles["estate-name"]}>{estateName}</span> 
                    </Link>
                    
                    <span className={styles["estate-description"]}>{estateDescription}</span>
                    <span className={styles["estate-price"]}><span className={styles['price-simbol']}>$</span>{estatePrice}</span>
                    {/*<span className={styles['caracteristicas']}>Caracteristicas:</span>*/}
                    <div className={styles["estate-features"]}>
                        <div className={styles["estate-bedrooms"]}>
                            <div style={{fontSize: 20}} >{estateFeatures?.rooms}<FontAwesomeIcon icon={faBed} style={{ fontSize: 20, padding:"3px"}} /></div>
                        </div>
                        <div className={styles['box-icons']}>
                            <div style={{fontSize: 20}}>{estateFeatures?.bathrooms}<FontAwesomeIcon icon={faToilet} style={{ fontSize: 20,padding:"3px" }} /></div>
                        </div>
                        <div className={styles['box-icons']}>
                            <div  style={{fontSize: 20}}>{estateFeatures?.area} m<span className={styles["position-meters"]} style={{position: "relative", fontSize:" 75%", top: "-5px"}}>2</span><FontAwesomeIcon icon={faRuler} style={{ fontSize: 20,padding:"3px"}}/></div>
                        </div>
                        <div></div>
                        <div className={styles['box-icons']}>
                            <div  style={{fontSize: 20}}>{estateFeatures?.parkingSpots}<FontAwesomeIcon icon={faCar} style={{ fontSize: 20,padding:"3px" }}/> </div>
                        </div>
                    </div>
                
               
                <Link href='/agent/1' className={styles["estate-agent-container"]}>
                    <img className={styles["estate-agent-img"]} width="40px" height="40px" src={estateAgent?.profilePic? estateAgent?.profilePic : "images/predet.jpg" } />
                    <span className={styles["estate-agent-name"]}>{`${estateAgent?.firstName} ${estateAgent?.lastName}` }</span>
                </Link>
                
    </div>
    )
}