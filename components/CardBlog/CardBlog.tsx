import styles from "./CardBlog.module.css"
import Link from "next/link"

interface CardBlogProps {
    blogTitle ?: string,
    blogDescription ?: string,
    imageBlog ?: string
    datePost ?: string
}

export const CardBlog = ({blogTitle, blogDescription, imageBlog, datePost}: CardBlogProps) => {
    return (
        <>
        <div className={styles["blogContainer"]}>
            
                <img style={{width: "100%", }} className={styles["blogImage"]} src={imageBlog} />
                <div className={styles["blogDate"]}>
                   {/*<span>Publicado</span> */}
                    <span >{datePost}</span>
                    <h1 className={styles["blogTitle"]}>{blogTitle}</h1>
                    <h4 className={styles["blogDescription"]}>{blogDescription}</h4>
                </div>
                <div className={styles["blog-overlay"]}>
                    <Link href='/blog' className={styles["nav-item"]}>
                            Ver Noticias
                    </Link>
                </div>

            
        </div>
        </>
    )
}