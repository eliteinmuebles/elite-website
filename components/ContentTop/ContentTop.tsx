import styles from './ContentTop.module.css'
import Link from 'next/link'


export const ContentTop = () => {



    return(
        <>
          <header className={styles["search-container"]}>
            <img src="/images/team.jpg" alt="" className={styles["header-bg"]}/>
            <div className={styles["header-content"]}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={styles["container-content"]}>
                            <div className="col-md-8">
                                <h1 className={styles["title-search"]}>Somos Grupo Elite Inmobiliario </h1>
                                <h4 className={styles["short-description"]}>Encuentra con ellos la propiedad de tus sueños</h4>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}