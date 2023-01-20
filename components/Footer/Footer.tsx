import styles from "./Footer.module.css"
import cn from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
import{
  faFacebook,
  faInstagram,
  faTiktok
}  from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className={styles["footer"]}>
          
          <div className={styles["footer-top"]}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 footer-col-2">
                  <div className={styles["widget"]}>
                    <div className={styles["container-logo"]}>
                      <img className={styles["logo-footer"]}  src="/images/logo.jpg" alt=""/> 
                     {/*<img alt="White S logo followed by a period." width="73" data-src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/footer-logo.png" className={styles["lazyloaded"]} src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/footer-logo.png"/>*/}
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-12 col-sm-12 footer-col-3">
                  <div className={styles["widget"]}>
                    <h5 className={styles["footer-title"]}>Explore</h5>
                    <ul className={styles["posts"]} style={{listStyle: "none", paddingLeft: 0}}>
                      <li className={cn({
                        [styles["clearfix"]]: true, 
                        [styles["gem-pp-posts-item"]]:true})
                      }>
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a  style={{color: "white"}} href="#">ABOUT
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className="clearfix gem-pp-posts">
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a style={{color: "white"}} href="#">REAL ESTATE
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className="clearfix gem-pp-posts">
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a style={{color: "white"}} href="#">BUY
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className="clearfix gem-pp-posts">
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a  href="#">RENT
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className="clearfix gem-pp-posts">
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a  href="#">SELL
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>

                    </ul>
                  </div>
    
                </div>
                      
                <div className="col-lg-2 col-md-12 col-sm-12 footer-col-3">
                  <div className={styles["widget"]}>
                    <h5 className={styles["footer-title"]}>Regions</h5>
                    <ul className={styles["posts"]} style={{listStyle: "none", paddingLeft: 0}}>
                      <li className={cn({
                        [styles["clearfix"]]:true,
                         [styles["gem-pp-posts"]]:true
                      })}>
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a  href="#">CALIFORNIA
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className={cn({
                        [styles["clearfix"]]: true, 
                        [styles["gem-pp-posts"]]: true
                      })}>
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a href="#">FLORIDA
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className={cn({
                        [styles["clearfix"]]: true, 
                        [styles["gem-pp-posts"]]: true
                      })}>
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a href="#">WASHINGTON
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className={cn({
                        [styles["clearfix"]]: true, 
                        [styles["gem-pp-posts"]]: true
                      })}>
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a href="#">NEBRASKA
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className={cn({
                        [styles["clearfix"]]: true, 
                        [styles["gem-pp-posts"]]: true
                      })}>
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a  href="#">BOSTON
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>
                      <li className={cn({
                        [styles["clearfix"]]: true, 
                        [styles["gem-pp-posts"]]: true
                      })}>
                        <div className={styles["gem-pp-posts-text"]}>
                          <div className={styles["gem-pp-posts-item"]}>
                            <a href="#">NEW YORK
                            </a>
                          </div>
                          <div className={styles["posts-date"]}></div>
                        </div>
                      </li>

                    </ul>
                  </div>
    
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                      <div className={styles["widget"]}>
                        <h5 className={styles["footer-title"]}>Direccion</h5>
                        <div className={styles["gem-contacts"]}>
                          <div className={styles["gem-contacts-item gem-contacts-address"]}>Oficina Coorpotativa:Centro Comercial Garibaldi
                            Calle 121, Valencia. Carabobo
                            Piso 1 Oficina 32 
                          </div>
                         
                          <h5 className={cn({
                            [styles["footer-title"]]:true,
                            [styles["contact"]]:true })} style={{marginTop: "10px"}}>Contactanos</h5>
                          <div className={styles["gem-contacts-phone"]} style={{color:"white"}}><FontAwesomeIcon icon={faPhone} style={{ fontSize: 15, padding:"3px"}} /> <a href="#" style={{color:"white", textDecoration:"transparent"}}>+58-4144092789</a></div>
                          <div className={styles["gem-contacts-phone"]}><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 15, padding:"3px"}} /> <a href="#" style={{color:"white", textDecoration:"transparent"}}>elite@gmail.com</a></div>

                          <div id="footer-socials">
                            <div className={cn({
                              [styles["socials"]]:true,
                              [styles["inline-inside"]]:true, 
                              [styles["socials-colored"]]:true
                            })}>
            
                              <a href="#" target="_blank" title="Facebook" className={styles["socials-item"]}>
                                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 33, padding:"3px", color: "#4e64b5", borderRadius:"8px"}} />
                              </a>
                              <a href="#" target="_blank" title="Twitter" className={styles["socials-item"]}>
                                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30, padding:"3px",  background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", color:"white",  borderRadius:"8px"}} />
            
                              </a>
                              <a href="#" target="_blank" title="Instagram" className={styles["socials-item"]}>
                                <FontAwesomeIcon icon={faTiktok} style={{ fontSize: 30, padding:"3px", color: "black", background:"white",  borderRadius:"8px"}} />
                              </a>
                              
                              
                            </div>
                          </div>
                          </div>
                      </div>
                    </div>
                    <div className="col">
                      
                      <h5 className={styles["footer-title"]}>Email Us</h5>
                      
                      <form className={styles["form-comtact-us"]}>
                        <h4 className={styles["contact-title"]}>¿Tienes alguna consulta?</h4>
                        <div className={styles["form-group"]}>
                          <input type="email" className={styles["form-control"]} id="exampleInputEmail1"  placeholder="Enter email"/>
                        </div>
                        <div className={styles["form-group"]}>
                          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: "100px"}}></textarea>
                        </div>
                        <button type="submit" className={styles["contact-btn"]}>Contactar</button>
                      </form>
                          
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          <div className={styles["footer-bottom"]}>
            <div className="container">
              <div className="row">
    
                <div className="col-md-1">
                 {/* <div className="footer-site-info">2022 © <span>Todos los derechos reservados Grupo Elite</span></div> */}
                </div>
    
                <div className="col-10">
                  <div className={styles["footer-site-info"]}>
                    <p>2022 © Todos los derechos reservados Grupo Elite</p>
                  </div>
                
    
                <div className="col-md-1">
                
                </div>
    
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}