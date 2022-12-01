import styles from "./Searcher.module.css"

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
                            <a href="" className={styles["link"]}>Buy</a>
                            <a href="" className={styles["link"]}>Sell</a>
                            <a href="" className={styles["link"]}>Rent</a>
                            <a href="" className={styles["link"]}>Pre-Approval</a>
                            <a href="" className={styles["link"]}>Just Sold</a>
                            <a href="" className={styles["link"]}>Home Value</a>                        
                        </div>
                    <div className="input-group mb-3 mt-3 p-20 w-70">
                                <input type="text" className="form-control" placeholder="Valencia, CA" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
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