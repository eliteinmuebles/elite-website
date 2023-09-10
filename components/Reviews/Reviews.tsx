import styles from "./Reviews.module.css"
import { reviewsData } from "../../helpers/constantData"
import { ReviewsCards } from "../ReviewsCards"
import { Carousel } from "react-bootstrap"
import Link from "next/link"

export const Reviews = () => {


    return (
        <>
            <div className={styles["container-reviews"]}>
            <div className='containerTitleBlog'>
                <h1 className={styles['titleReview']}>
                    Comentarios de nuestros clientes
                </h1>
            </div>
            <Carousel>
                   {
                       reviewsData.map(({id, review, name, photo}) => (
                        <Carousel.Item key={`reviews-${id}`}>
                        <div className='d-flex flex-row justify-content-center align-items-center gap-5 mt-2'>
                            <ReviewsCards
                                photo={photo}
                                name={name}
                                review={review}
                            />
                        </div>
                </Carousel.Item>
                    ))
                   }
            </Carousel>
            </div>
        </>
    )
}