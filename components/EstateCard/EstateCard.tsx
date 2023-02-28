import styles from './EstateCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    
  } from "@fortawesome/free-solid-svg-icons";
  import Link from 'next/link';

interface EstateCardProps {
    estateImage?: string,
    estateLocation?: string,
    estatePrice?:string
    estateAgent?: Agent,
    width?: string,
    height?:string
}

interface Agent {
    agentName?: string,
    agentPhone?: string,
    agentEmail?: string
}

export const EstateCard = ({estateImage, estateLocation, estatePrice, estateAgent, width, height}: EstateCardProps) => {

    return (
        <>
        <div className={styles["estateCardContainer"]} >
            <div className={styles["containerImage"]}  >
                <Link href='/estateDetail/1' className={styles["nav-item"]}>
                    <img src={estateImage} alt="" className={styles["estateImage"]} style={{width: width? width: "", height: height? height:""}} />                
                </Link>
                
                <Link href='/estateDetail/2' className={styles["nav-item"]}>
                    <div className={styles["imageOverlay"]}>
                        <h1 className={styles["estateLocation1"]}>{estateLocation}</h1>
                        <h1 className={styles["estatePrice"]}>{estatePrice}</h1>
                        <div className={styles["agentInfo"]}>
                            <h1 className={styles["agentName"]}>Agente:  {estateAgent?.agentName}</h1>
                            <div className={styles["agentPhone"]}>
                                <FontAwesomeIcon icon={faPhone} style={{ fontSize: 15, padding:"6px", color: "black", background:"white",  borderRadius:"8px"}} />
                                {/*<a className={styles["phone"]} href="">{estateAgent?.agentPhone}</a>*/}
                            </div>
                            <div className={styles["agentEmail"]}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} />
                                {/*<a className={styles["email"]} href="">{estateAgent?.agentEmail}</a>*/}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        
        </>
    )
}