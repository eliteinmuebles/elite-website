import Carousel from 'react-bootstrap/Carousel';
import { CardEstate } from '../CardEstate'
import styles from './FeaturesEstates.module.css'

export const FeaturesEstates = () => {
    return ( 
        <>
     <div className={styles['container-features']}> 
        <div className='container-title'>
          <h1 className={styles['title-estates']}>Features Estates</h1>
        </div>
        
        <Carousel>

            <Carousel.Item>
              <div className="row">
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>
                  <div className="col ">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row">
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>

              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row">
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>
                  <div className="col">
                    <CardEstate 
                      estateName='Res. Valle Fresco 3, torre D, Apart 4-3'
                      estateDescription='Lujoso apartamrnto con 3 habitaciones, 2 baños, cocina integral, terraza con excelente vista hacia las montañas. Cercano a colegios, parques, hospitales, centros comerciales y con fácil acceso a transporte público'
                      estatePrice='20.000$'
                      estateSalesType='venta'
                      estateFeatures={{bathrooms: 2, rooms: 2, area: 180, parkingSpots: 0}}
                      estateAgent={{
                        firstName: "Mo",
                        lastName: "Salah",
                        userId: 9,
                        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPviYbseOJ_GOb0HPrmHyIIvVyhS4YOyuYwm83BjZICg&s"
                      }}
                    />   
                  </div>

              </div>
            </Carousel.Item>

      </Carousel>
    </div>  
        </>
    )
}