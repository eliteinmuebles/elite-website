import Header from "../../components/Header/header";
import Footer from "../../components/Footer";

export const Page = ({children}) => {
    return (
        <>
            <Header/>  
            {children}
            <Footer/>
        </>
    )
}

export default Page;
