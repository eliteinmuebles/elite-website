import styles from "./Searcher.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"

export const Searcher = () => {
    return (
        <>
        <header className={styles["search-container"]}>
            <img src="/images/team.jpg" alt="" className={styles["header-bg"]}/>
            <div className={styles["header-content"]}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={styles["container-content"]}>
                            <div className="col-md-8">
                            <h1 className={styles["title-search"]}>Grupo Elite Inmobialirio</h1>
                            <h4 className={styles["short-description"]}>Vamos a encontrar la propiedad perfecta para ti</h4> 
                             <div className={styles["search-links"]}>
                            <Link href='/estatesPage/3' className={styles["nav-item"]}>
                                Comprar
                            </Link>
                            <Link href='/estatesPage/2' className={styles["nav-item"]}>
                                Vender 
                            </Link>      
                            <Link href='/estatesPage/1' className={styles["nav-item"]}>
                                Alquilar
                            </Link>                 
                            </div>
                        </div>
                       
                    {/*<div className="input-group mb-3 mt-3 p-10 w-30">
                            <input type="text" className="form-control" placeholder="Valencia, CA"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"><div ><FontAwesomeIcon icon={faSearch}style={{ fontSize: 20, color: "rgba(255, 166, 0, 0.733)" }}/></div></button>
                            </div>
                    </div>*/}
                    </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}