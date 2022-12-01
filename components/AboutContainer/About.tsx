import styles from "./About.module.css"

export const About = () => (
    <>
    <div className={styles["about"]}>
        <div className={styles["container"]}>
        <div className="row">
            <div className="col">
                <div className={styles["box-info"]}>
                    <h2 className={styles["elite.title"]}>Grupo Elite Sobre Nosotros...</h2>
                    <h6 className={styles["box-description"]}>The most followed real estate brand in the world, calibrated for the marketplace of tomorrow, delivering proven results for buyers, sellers, and developers. ELITE. revolutionizes the traditional brokerage model by innovating through media and content creation, and is powered by a full-service in-house film studio as well as an amplification platform that puts our properties in front of more people than anyone else.</h6>
                    <a href="#" className={styles["linkpage"]}>Leer mas</a>
                </div>
                </div>
                <div className="col">
                    <div className={styles["box-img"]}>
                        <img src="images/apart1.jpg" width="100%"/>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    </>
)