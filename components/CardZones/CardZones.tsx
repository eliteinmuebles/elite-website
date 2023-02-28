import styles from "./CardZone.module.css"

interface Zone{
    city?: string,
    descriptionCity?:string,
    imageCity?: string
}

export const CardZone = ({city,  descriptionCity, imageCity}:Zone) => {
    return (
        <>
    <div className={styles["estate-card-container"]}>
        <img style={{width: "80%", height: "400px"}} className={styles["image-estate"]} src={imageCity} />
        <h1 className={styles["city-name"]}>{city}</h1>   
        <div className={styles["text-bottom"]}>
            <h1 className={styles["city-descrption"]}>{descriptionCity}</h1>
        </div>
    </div>
        </>
    )
}