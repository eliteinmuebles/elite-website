import styles from './blog.module.css'
import Link from 'next/link'
import { Page } from "../../components/Page"
import { useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useScreenSize'
import { CardBlog } from '../../components/CardBlog'


const mockBlogData = [
    [
      {
          blogTitle : "¿Como vender tu inmueble?",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/apart1.jpg",
          datePost : "30 Ene"
      },
  
      {
          blogTitle : "Mercado mas destacado Valencia",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/citys2.webp",
          datePost : "22 Jun"
      },
  
      {
          blogTitle : "¿Como convertirte en asesor?",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/inversion.jpg",
          datePost : "14 Ago"
      },
    
      {
          blogTitle : "¿Por que una agencia inmobiliaria?",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/parral.jpg",
          datePost : "20 Nov"
      },
    ],
  [
      {
          blogTitle : "Realtors destacados 2022",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/estate1.jfif",
          datePost : "04 Nov"
      },
  
      {
          blogTitle : "Grupo Elite en 2022",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/viña.jpg",
          datePost : "18 Sept"
      },
    
      {
          blogTitle : "¿Casas Remodeladas?",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/apart1.jpg",
          datePost : "14 Oct"
      },
  
      {
          blogTitle : "¿Cual es el costo de tu inmueble?",
          blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
          imageBlog : "images/inversion.jpg",
          datePost : "24 Dic"
      },
    ],
    [
        {
            blogTitle : "Realtors destacados 2022",
            blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
            imageBlog : "images/estate1.jfif",
            datePost : "04 Nov"
        },
    
        {
            blogTitle : "Grupo Elite en 2022",
            blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
            imageBlog : "images/viña.jpg",
            datePost : "18 Sept"
        },
      
        {
            blogTitle : "¿Casas Remodeladas?",
            blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
            imageBlog : "images/apart1.jpg",
            datePost : "14 Oct"
        },
    
        {
            blogTitle : "¿Cual es el costo de tu inmueble?",
            blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
            imageBlog : "images/inversion.jpg",
            datePost : "24 Dic"
        },
      ],
  
  ]

export const blog = () => {

    const [info, setInfo] =  useState([...mockBlogData].slice(0,mockBlogData.length));
    const [cardEstateWidth, setCardEstateWidth] = useState("340px")
    const [cardEstateHeight, setCardEstateHeight] = useState("250px")
    const screen = useWindowSize()

    useEffect(() => {
        const value = [...mockBlogData].length
        setInfo([...mockBlogData].slice(0,value))
       }, [])
    

    useEffect(() => {
        if (screen && screen.width? screen.width <= 576 : null) {
          setCardEstateWidth("330px")
        };
        if (screen && screen.width? screen.width < 1200 && screen.width > 800   : null) {
          setCardEstateWidth("340px")
        };
        if (screen && screen.width? screen.width < 800 && screen.width > 500   : null) {
          setCardEstateWidth("290px")
        };
        if (screen && screen.width? screen.width >= 1200   : null) {
         
        };
        console.log(screen)
    }, [screen])

    return(
        <>
        <Page>
            <div className={styles["about"]}>
                <div className={styles["container-info-2"]}>
                    <div className="row">
                        <div className="col">
                            <div className={styles["box-info"]}>

                                <h2 className={styles["elite-title"]}>¿Como vender tu inmueble?</h2>
                                <h6 className={styles["box-description"]}>The most followed real estate brand in the world, calibrated for the marketplace of tomorrow, delivering proven results for buyers, sellers, and developers. ELITE. revolutionizes the traditional brokerage model by innovating through media and content creation, and is powered by a full-service in-house film studio as well as an amplification platform that puts our properties in front of more people than anyone else.</h6>
                                <Link href='/notice/1' className={styles["linkpage"]}>
                                    Leer mas!
                                </Link>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center">
                            <div className={styles["box-img"]}>
                                <img src="images/apart1.jpg" width="100%"  className={styles['blog-img']}/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={styles['estates-container']} >
                  {info.map((notices, index) => (
                     <div className='d-flex justify-content-center align-items-center gap-5 m-4 '>
                     {notices.map((notice) => (
                     <CardBlog
                         width={cardEstateWidth}
                         heigth={cardEstateHeight}
                         blogTitle={notice.blogTitle}
                         blogDescription={notice.blogDescription}
                         imageBlog={notice.imageBlog}
                         datePost={notice.datePost}
                         />
                     ))}
                 </div>
                  ))}
                       
                </div>
            </div>
            


        </Page>
        </>
    )
}

export default blog