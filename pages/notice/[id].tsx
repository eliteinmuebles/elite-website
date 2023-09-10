import styles from './notice.module.css'
import Link from 'next/link'
import { Page } from '../../components/Page'
import { BlogSlider } from '../../components/BlogSlider'

export const notice = () => {

    return (
        <>
        <Page>
         <div className={styles["about"]}>
                <div className={styles["container-info-2"]}>
                    <div className="row">
                        <div className="col">
                            <div className={styles["box-info"]}>
                                <h2 className={styles["elite-title"]}>¿Como vender tu inmueble?</h2>
                                <p className={styles["box-description"]}>The most followed real estate brand in the world, calibrated for the marketplace of tomorrow, delivering proven results for buyers, sellers, and developers. ELITE. revolutionizes the traditional brokerage model by innovating through media and content creation, and is powered by a full-service in-house film studio as well as an amplification platform that puts our properties in front of more people than anyone else.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className={styles["box-img"]}>
                                <img src="/images/apart1.jpg" width="100%"  className={styles['blog-img']}/>
                            </div>
                        </div>  
                    </div>
                    <div className={styles['content-bottom']}>
                        <p className={styles['box-description-1']}> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                </div>
            <BlogSlider/>
            </div>
        </Page>    
        </>
    )
}

export default notice