import styles from "./Header.module.css"
import cn from "classnames"



export const Header = () => {
    return (
    <>
    <div className="main-header" style={{height: "70px"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"  style={{height: "70px"}}>
            <div className="container">
            {/*<!--<img src="" className="logo-elite" width="50" height="30" alt="">-->*/}
            <a className={styles["title-elite"]} href="#">GRUPO ELITE</a>
            <button className="navbar-toggler" type="button"  data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link fw-bold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">Buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">Sell</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">Rent</a>
            </li>
            </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link fw-bold" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle fw-bold" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Languages</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Español</a>
                        <a className="dropdown-item" href="#">Ingles</a>
                        <a className="dropdown-item" href="#">Chino</a>
                    <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#"></a>
                    </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fw-bold" href="#">Contact us</a>
                    </li>
                </ul>
            </div>
            </div>
    </nav>

  
  </div>
  </>
    )
}