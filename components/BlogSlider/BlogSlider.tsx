import styles from "./BlogSlider.module.css"
import { CardBlog } from "../CardBlog"
import { Slider } from "../Slider";
import { useState, useEffect} from "react"
import useWindowSize from "../../hooks/useScreenSize";
import { Carousel } from 'react-bootstrap';
import Link from "next/link";

const mockBlogData = [
  [
    {
        blogTitle : "¿Como vender tu inmueble?",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/apart1.jpg",
        datePost : "30 Ene"
    },

    {
        blogTitle : "Mercado mas destacado Valencia",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/citys2.webp",
        datePost : "22 Jun"
    },

    {
        blogTitle : "¿Como convertirte en asesor?",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/inversion.jpg",
        datePost : "14 Ago"
    },
  ],
  [
    {
        blogTitle : "¿Por que una agencia inmobiliaria?",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/parral.jpg",
        datePost : "20 Nov"
    },

    {
        blogTitle : "Realtors destacados 2022",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/estate1.jfif",
        datePost : "04 Nov"
    },

    {
        blogTitle : "Grupo Elite en 2022",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/viña.jpg",
        datePost : "18 Sept"
    },],
    [
    {
        blogTitle : "¿Casas Remodeladas?",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/apart1.jpg",
        datePost : "14 Oct"
    },

    {
        blogTitle : "¿Cual es el costo de tu inmueble?",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/inversion.jpg",
        datePost : "24 Dic"
    },

    {
        blogTitle : "",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "/images/trigaleña.jpg",
        datePost : "10 Nov"
    },],

]

export const BlogSlider = () => {

    const [info, setInfo] = useState([...mockBlogData].slice(0,3));
    const [sliceValue, setSliceValue] = useState(0);
    const [cardEstateWidth, setCardEstateWidth] = useState("360px")
    const [cardEstateHeight, setCardEstateHeight] = useState("250px")
    const screen = useWindowSize()

  

     useEffect(() => {
      if (screen && screen.width? screen.width <= 576 : null) {
        setInfo([...mockBlogData].slice(0,1))
        setCardEstateWidth("330px")
      };
      if (screen && screen.width? screen.width < 1200 && screen.width > 800   : null) {
        setInfo([...mockBlogData].slice(0,2))
        setCardEstateWidth("340px")
       
      };
      if (screen && screen.width? screen.width < 800 && screen.width > 500   : null) {
        setInfo([...mockBlogData].slice(0,1))
        setCardEstateWidth("420px")
        setCardEstateHeight("330px")
      };
      if (screen && screen.width? screen.width >= 1200   : null) {
        setInfo([...mockBlogData].slice(0,3))
      };
      console.log(screen)
     }, [screen])

  
    return (
     <>
        <div className={styles['containerBlog']}> 
          <div className='containerTitleBlog'>
            <Link href='/blog' className={styles['titleBlog']}>
               Noticias Mundo Inmobiliario
            </Link>
          </div>
        
          
            <Carousel> 
                {mockBlogData.map((blogs, index) => (
                  <Carousel.Item key={`blogs-${index}`}>
                     <div className='d-flex flex-row justify-content-center align-items-center gap-5 mb-2'>
                      {blogs.map((i:any, index: number) => (
                        <div key={`blog-key-${index}`} className="col">                        
                          <CardBlog
                            width={cardEstateWidth}
                            heigth={cardEstateHeight}
                            blogTitle={i.blogTitle}
                            blogDescription={i.blogDescription}
                            imageBlog={i.imageBlog}
                            datePost={i.datePost}
                          />                    
                        </div>
                      ))}
                     </div>
                  </Carousel.Item>
                ))}
                   
                
            </Carousel>   
         
    </div>  

    </>
    )
}