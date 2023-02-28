import { Footer } from "../Footer"
import { Header } from "../Header"
import styles from "./page.module.css";
export const Page = ({children}:any) => {
    return (
        <>
            <Header /> 
                <div className={styles["container-remaining"]}>
                    {children}
                    <Footer />
                </div>
        </>
    )
}
