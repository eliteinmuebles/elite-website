import styles from "./Searcher.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const Searcher = () => {
    return (
        <>
        <header className={styles["search-container"]}>
            <img src="/images/apart1.jpg" alt="" className={styles["header-bg"]}/>
            <div className={styles["header-content"]}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-md-8">
                        <h1 className={styles["title-search"]}>Encuentra la propiedad que buscas</h1>
                        <h4 className={styles["short-description"]}>Vamos a encontrar la propiedad perfecta para ti</h4>
                        <div className={styles["search-links"]}>
                            <a href="" className={styles["link"]}>Comprar</a>
                            <a href="" className={styles["link"]}>Vender</a>
                            <a href="" className={styles["link"]}>Alquilar</a>
                            <a href="" className={styles["link"]}>Pre-Order</a>
                            <a href="" className={styles["link"]}>Vendidos</a>
                            <a href="" className={styles["link"]}>Costo Inmuebles</a>                        
                        </div>
                    <div className="input-group mb-3 mt-3 p-10 w-30">
                                <input type="text" className="form-control" placeholder="Valencia, CA"/>
                                <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"><div ><FontAwesomeIcon icon={faSearch}style={{ fontSize: 20, color: "rgba(255, 166, 0, 0.733)" }}/></div></button>
                                </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}