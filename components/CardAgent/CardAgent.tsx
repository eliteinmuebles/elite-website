import styles from './CardAgent.module.css'
import Link from 'next/link'


interface CardAgentProps {
    id?:number,
    agentName?: string,
    agentLastName?: string,
    agentImage?: string,
    agentPhone?: string,
    agentEmail?: string,
    width?: string
}

export const CardAgent = ({agentName, agentLastName, agentPhone, agentEmail,agentImage, width}: CardAgentProps) => {


    return (
        <>
         <div className={styles["agent-card-container"]} style={{width: width? width: "", marginBottom:"20px"}}>
                <div className="images-container" >
                    <Link href='/estatesPage/1' className={styles["nav-item"]}>
                        <img style={{width: "100%", height: "200px"}} className={styles["agent-image"]} src={agentImage} />
                     </Link>
                </div>
                <h1 className={styles["agent-name"]}>{agentName}</h1> 
                <h1 className={styles["agent-last-name"]}>{agentLastName}</h1>
                
                <span className={styles["estate-price"]}>{agentPhone}</span>
                <span className={styles["estate-price"]}>{agentPhone}</span>
                       
        </div>
    </>
    )
}