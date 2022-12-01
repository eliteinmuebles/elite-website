import { Footer } from "../Footer"
import { Header } from "../Header"

export const Page = ({children}:any) => {
    return (
        <>
            <Header /> 
                <div className="container-remaining">
                    {children}
                    <Footer />
                </div>
        </>
    )
}
