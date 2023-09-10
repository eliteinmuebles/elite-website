import styles from './Market.module.css'
import Link from 'next/link'

const mockMarketData = [
    {
        marketCity: "Valencia"
    },
    {
        marketCity: "Trigal"
    },
    {
        marketCity: "Naguanagua"
    },
    {
        marketCity: "San Diego"
    },
    {
        marketCity: "Trigalena"
    },
    {
        marketCity: "Guataparo"
    },
    {
        marketCity: "Prebo"
    },
]

export const Market = () => {
    return (
        <>
        <h1 className={styles['title']}>Market</h1>
        <div className={styles["market"]}>
            {mockMarketData.map((city, index) => (
            <Link href='/estatesPage/1'>
            <div  key={`market-key-${index}`} className={styles["marketContainer"]}>
                 <h4  className={styles["marketTitle"]}>
                    {city.marketCity}
                </h4>
            </div>
            </Link>
            ))}
        </div>
        </>
    )
}