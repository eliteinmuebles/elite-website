import Link from "next/link"
import styles from './AboutAgents.module.css'


export const AboutAgents = () => {
   
    
    
    return(
        <>
         <div className={styles["about"]}>
            <div className={styles["container"]}>
            <div className="row">
                <div className="col">
                        <div className={styles[""]}>
                            <img src="images/team.jpg" className={styles["img-about"]} width="100%"/>
                        </div>
                    </div>  
                <div className="col">
                    <div className={styles["box-info"]}>
                        <h2 className={styles["elite-title"]}>Equipo grupo elite inmobiliario...</h2>
                        <h6 className={styles["box-description"]}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</h6>
                        <Link href='/agentsPage' className={styles["linkpage"]}>
                            Leer mas!
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}