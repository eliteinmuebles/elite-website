import styles from "./BlogCards.module.css"

export const BlogCards =() => {
    return (
     <>
        <div className={styles["blog-container"]}>
        
        
            <div className="row">
            
                <div className="col-md-4">
                    <div className={styles["single-blog"]}>
                        <img src="images/inversion.jpg"/> 
                        <span className={styles["blog-meta"]}>September, 04, 2022</span>
                        <h2 ><a className={styles["title-blog"]} href="#">Learn how to make a website</a></h2>
                        <p className={styles["blog-text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa maxime nam, fugit aliquam odio?</p>
                        <p><a href="" className={styles["read-more-btn"]}>Read More</a></p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className={styles["single-blog"]}>
                        <img src="images/inversion.jpg"/> 
                        <span className={styles["blog-meta"]}>September, 04, 2022</span>
                        <h2 ><a className={styles["title-blog"]} href="#">Learn how to make a website</a></h2>
                        <p className={styles["blog-text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa maxime nam, fugit aliquam odio?</p>
                        <p><a href="" className={styles["read-more-btn"]}>Read More</a></p>
                    </div>
                </div>
            
                <div className="col-md-4">
                    <div className={styles["single-blog"]}>
                        <img src="images/inversion.jpg"/>
                        <span className={styles["blog-meta"]}>September, 04, 2022</span>
                        <h2 ><a className={styles["title-blog"]} href="#">Learn how to make a website</a></h2>
                        <p className={styles["blog-text"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa maxime nam, fugit aliquam odio?</p>
                        <p><a href="" className={styles["read-more-btn"]}>Read More</a></p>
                    </div>
                </div>
            
            </div>
             <p><a href="" className={styles["linkpage"]}>Read More</a></p>
        </div>

    </>
    )
}