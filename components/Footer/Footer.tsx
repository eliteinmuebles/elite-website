import styles from "./Footer.module.css"
import cn from "classnames"

export const Footer = () => {
    return (
        <div className={styles["footer"]}>
          <img
          className={styles["footer-top-bg"]}
          src="images/newyork.webp"
          alt=""
          />
          <div className={styles["footer-top"]}>
            
            <div className={styles["pt-exebar"]}>
            
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-3 footer-col-2">
                  <div className={styles["widget"]}>
                    <div className={styles["container-logo"]}>
                      {/*<img className="logo-footer" src="images/logo.jpg" alt=""> */}
                     <img alt="White S logo followed by a period." width="73" data-src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/footer-logo.png" className={styles["lazyloaded"]} src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/footer-logo.png"/>
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
                            [styles["contact"]]:true })}>Contactanos</h5>
                          <div className={styles["gem-contacts-item gem-contacts-phone"]}><i className="fa fa-phone" aria-hidden="true"></i> Phone: <a href="">+58-4144092789</a></div>
                          <div className={styles["gem-contacts-item gem-contacts-phone"]}><i className="fa-regular fa-envelope"></i> Email: <a href="">elite@gmail.com</a></div>

                          <div id="footer-socials">
                            <div className={cn({
                              [styles["socials"]]:true,
                              [styles["inline-inside"]]:true, 
                              [styles["socials-colored"]]:true
                            })}>
            
                              <a href="#" target="_blank" title="Facebook" className={styles["socials-item"]}>
                                <i className="fab fa-facebook-f facebook"></i>
                              </a>
                              <a href="#" target="_blank" title="Twitter" className={styles["socials-item"]}>
                                <i className="fab fa-twitter twitter"></i>
            
                              </a>
                              <a href="#" target="_blank" title="Instagram" className={styles["socials-item"]}>
                                <i className="fab fa-instagram instagram"></i>
                              </a>
                              <a href="#" target="_blank" title="YouTube" className={styles["socials-item"]}>
                                <i className="fab fa-youtube youtube"></i>
                              </a>
                              
                            </div>
                          </div>
                          </div>
                      </div>
                    </div>
                    <div className="col-8 col-lg-6 col-md-6 col-sm-6">
                      <div className={styles["widget"]}>
                        <h5 className={styles["footer-title"]}>Email Us</h5>
                       {/* <div className={styles["textwidget"]}>
                          <div role="form" className="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">
    
                            <form method="post" className="wpcf7-form" >
    
                              <div className="contact-form-footer">
                                <p><span className="wpcf7-form-control-wrap your-first-name"><input type="text" name="your-first-name" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Your name"></span></p>
                                <p><span className="wpcf7-form-control-wrap your-email_1"><input type="email" name="your-email_1" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" placeholder="Your email"></span></p>
                                <p><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your message"></textarea></span></p>
                                <input type="submit" value="Contact me">
                              </div>
                            </form> 
                          </div>
                        </div> */}
                      </div>
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
                 {/* <nav id="footer-navigation" className="site-navigation footer-navigation centered-box" role="navigation">
                    <ul id="footer-menu" className="nav-menu styled clearfix inline-inside">
                      <li id="menu-item-26" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"><a href="#">Inicio</a></li>
                      <li id="menu-item-27" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"><a href="#">Contact Us</a></li>
                      <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#">Realtors</a></li>
                      <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"><a href="#">Estates</a></li>
                    </ul>
                  </nav>
                 </div>--> */}
    
                <div className="col-md-1">
                 {/* <div id="footer-socials">
                    <div className="socials inline-inside socials-colored">
    
                      <a href="#" target="_blank" title="Facebook" className="socials-item">
                        <i className="fab fa-facebook-f facebook"></i>
                      </a>
                      <a href="#" target="_blank" title="Twitter" className="socials-item">
                        <i className="fab fa-twitter twitter"></i>
    
                      </a>
                      <a href="#" target="_blank" title="Instagram" class="socials-item">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#" target="_blank" title="YouTube" class="socials-item">
                        <i class="fab fa-youtube youtube"></i>
                      </a>
                      <a href="#" target="_blank" title="Telegram" class="socials-item">
                        <i class="fab fa-telegram telegram"></i>
                      </a>
                    </div>
                </div> -->*/}
                </div>
    
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}