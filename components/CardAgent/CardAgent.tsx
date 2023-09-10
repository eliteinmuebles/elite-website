import styles from './CardAgent.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faKey, 
  } from "@fortawesome/free-solid-svg-icons";
  import { Button } from 'react-bootstrap';

interface CardAgentProps {
    id?:number,
    agentName?: string,
    agentLastName?: string,
    agentImage?: string,
    agentPhone?: string,
    agentEmail?: string,
    width?: string,
    heigth?:string
    }

export const CardAgent = ({agentName, agentLastName, agentPhone, agentEmail,agentImage, width}: CardAgentProps) => {

    return (
        <>
         <div className={styles["agent-card-container"]} style={{width: width? width: "", marginBottom:"20px"}}>
                <div className="images-container" >
                    <Link href='/estatesPage/1' className={styles["nav-item"]}>
                        <img style={{width: "100%", height: "220px"}} className={styles["agent-image"]} src={agentImage} />
                     </Link>
                </div>
                <div className={styles["agent-content"]}>
                    <span>Agente</span>
                    <div className={styles["name-container"]}>
                        <h1 className={styles["agent-name"]}>{agentName}</h1> 
                        <h1 className={styles["agent-last-name"]}>{agentLastName}</h1>
                    </div>
                    <span>Contacto</span>
                   <div className={styles["contact-container"]}>
                        <a className={styles["agent-phone"]}><FontAwesomeIcon icon={faPhone} style={{ color: "black"}} />{agentPhone}</a>
                        <a className={styles["agent-email"]}><FontAwesomeIcon icon={faEnvelope} style={{ color: "black"}} />{agentEmail}</a>
                   </div>
                   <div className={styles["container-btn"]}>
                        <Link href='/agent/1' className={styles["nav-item"]}>
                            <Button className={styles['btn-profile']} variant="light">Ver perfil</Button>
                        </Link>
                   </div>
                  
                </div>
               
                       
        </div>
    </>
    )
}