import styles from "./CardBlog.module.css"
import Link from "next/link"

interface CardBlogProps {
    blogTitle ?: string,
    blogDescription ?: string,
    imageBlog ?: string
    datePost ?: string
    width?: string,
    heigth?: string
}

export const CardBlog = ({blogTitle, blogDescription, imageBlog, datePost, width, heigth}: CardBlogProps) => {
    return (
        <>
        
        <div className={styles["blogContainer"]} style={{width: width? width: "", height: heigth? heigth:""}}>
                <img style={{width: "100%", }} className={styles["blogImage"]} src={imageBlog} />
                <div className={styles["blogData"]}>
                    <span className={styles["blogDate"]}>{datePost}</span>
                    <Link href='/notice/1' className={styles["blogTitle"]}>
                        {blogTitle}
                    </Link>
                   
                    {/* <h4 className={styles["blogDescription"]}>{blogDescription}</h4> */}
                </div>
        </div>
        </>
    )
}