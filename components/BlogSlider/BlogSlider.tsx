import styles from "./BlogSlider.module.css"
import { CardBlog } from "../CardBlog"
import { Slider } from "../Slider";
import { useState, useEffect} from "react"

const mockBlogData = [
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

    {
        blogTitle : "",
        blogDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor earum alias. Omnis doloribus fuga impedit explicabo ipsum vero enim.",
        imageBlog : "images/trigaleña.jpg",
        datePost : "10 Nov"
    }

]

export const BlogSlider = () => {

    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [info, setInfo] = useState([...mockBlogData].slice(0,3));
    const [sliceValue, setSliceValue] = useState(0);
  
    useEffect(() => {
      if (left)  {
        const value = [...mockBlogData].length
         if (sliceValue === 0) {
           setSliceValue(value -3)
           setInfo([...mockBlogData].slice(value-3, value))
         } else {
           setInfo([...mockBlogData].slice(sliceValue-3, sliceValue))
           setSliceValue(sliceValue - 3);
         }
       }
     }, [left])
  
     useEffect(() => {
       if (right) {
         const value = [...mockBlogData].length
         if (sliceValue == value -3) {
           setSliceValue(0);
           setInfo([...mockBlogData].slice(0,3))
         } else {
           setInfo([...mockBlogData].slice(sliceValue + 3, sliceValue + 3*2))
           setSliceValue((sliceValue + 3))
         }
       }
     }, [right])
  
    return (
     <>
        <div className={styles['containerBlog']}> 
          <div className='containerTitleBlog'>
            <h1 className={styles['titleBlog']}>Noticias Mundo Inmobiliario</h1>
          </div>
        
          <Slider
                left={left}
                setLeft={setLeft}
                right={right}
                setRight={setRight}
              >
                
            <div className="row">
                  {info.map((i:any) => (
                    <div className="col">
                      <CardBlog
                        blogTitle={i.blogTitle}
                        blogDescription={i.blogDescription}
                        imageBlog={i.imageBlog}
                        datePost={i.datePost}
                      />
                    </div>
                  ))}
              </div>
          </Slider>
    </div>  

    </>
    )
}