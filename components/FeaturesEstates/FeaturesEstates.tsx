import { CardEstate } from '../CardEstate'
import styles from './FeaturesEstates.module.css'
import { Slider } from "../Slider";
import { useState, useEffect} from "react"
import useWindowSize from '../../hooks/useScreenSize';

const mockEstatesData = [
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'Calle 204 Valencia, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'10.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Residencia',
    estateName:'1137 Valencia, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'10.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Oficina',
    estateName:'1024 La Viña, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'10.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Apto Soltero',
    estateName:'Calle 15 Trigal, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'80.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Casa de familia',
    estateName:'1045 Valencia, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'70.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'1137 Trigaleña, CA 2007',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'200.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'2540 Mañongo, CA 2003',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'40.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'Av 205 Naguanagua, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'80.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Apartamento Familiar',
    estateName:'Calle 135 Viñedo, CA 2002',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'25.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Condominio',
    estateName:'Calle 204 Valencia, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'10.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Residencia',
    estateName:'1137 Valencia, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'10.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
  {
    estatePictures:[
      "/images/estate1.jfif",
      "/images/apart1.jpg",
      "/images/parral.jpg"
    ],
    nameType: 'Oficina',
    estateName:'1024 La Viña, CA 2005',
    estateDescription:'Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público',
    estatePrice:'10.000',
    estateSalesType:'venta',
    estateFeatures:{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0},
    estateAgent:{
      firstName: "Jose",
      lastName: "Perez",
      userId: 9,
      profilePic:  "images/fotoperfil1.jfif"
    },
  },
]

export const FeaturesEstates = () => {

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [info, setInfo] = useState([...mockEstatesData].slice(0,3));
  const [sliceValue, setSliceValue] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [cardEstateWidth, setCardEstateWidth] = useState("360px")
  const [limit, setLimit] = useState(3)
  const screen = useWindowSize()


  useEffect(() => {
    if (left)  {
      const value = [...mockEstatesData].length
       if (sliceValue === 0 ) {
         setSliceValue(value - limit)
         setInfo([...mockEstatesData].slice(value-limit, value))
       } 
     
       else {
         setInfo([...mockEstatesData].slice(sliceValue-limit, sliceValue))
         setSliceValue(sliceValue - limit);
       }
     }
   }, [left])

   useEffect(() => {
     if (right) {
       const value = [...mockEstatesData].length
       if (sliceValue == value -limit ) {
         setSliceValue(0);
         setInfo([...mockEstatesData].slice(0, limit))
        }
      
       else {
         setInfo([...mockEstatesData].slice(sliceValue + limit, sliceValue + limit*2))
         setSliceValue((sliceValue + limit))
       }
     }
   }, [right])

   useEffect(() => {
    if (screen && screen.width? screen.width <= 576 : null) {
      setLimit(1)
      setInfo([...mockEstatesData].slice(0,1))
      setCardEstateWidth("330px")
    };
    if (screen && screen.width? screen.width < 1200 && screen.width > 800   : null) {
      setLimit(2)
      setInfo([...mockEstatesData].slice(0,2))
      setCardEstateWidth("340px")
     
    };
    if (screen && screen.width? screen.width < 800 && screen.width > 500   : null) {
      setLimit(2)
      setInfo([...mockEstatesData].slice(0,2))
      setCardEstateWidth("290px")
     
    };
    if (screen && screen.width? screen.width >= 1200   : null) {
      setLimit(3)
      setInfo([...mockEstatesData].slice(0,3))
    };
    console.log(screen)
   }, [screen])

    return ( 
      <>
        <div className={styles['container-features']} > 
            <div className='container-title' style={{marginBottom:"40px"}}>
              <h1 className={styles['title-estates']}>Inmuebles Destacados!</h1>
            </div>

          <Slider
              left={left}
              setLeft={setLeft}
              right={right}
              setRight={setRight}
              
            >
              <div className="row">
                          {info.map((i:any, index: number) => (
                            <div className="col" key={`feature-estates-${index}`}>
                              <CardEstate
                                width={cardEstateWidth}
                                estatePictures={i.estatePictures}
                                nameType={i.nameType}
                                estateName={i.estateName}
                                estateDescription={i.estateDescription}
                                estatePrice={i.estatePrice}
                                estateFeatures={i.estateFeatures}
                                estateAgent={i.estateAgent}
                              />
                            </div>
                          ))}
                </div>
            </Slider>
            
          
        </div>  
      </>
    )
}