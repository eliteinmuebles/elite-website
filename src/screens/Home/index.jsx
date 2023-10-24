import SectionImageHeader from "../../components/HeaderImage/section-image-header"
import MarketContainer from "../../components/MarketContainer/market-container"
import FeaturedProperties from "../../components/FeaturedProperties/featured-properties"
import AboutContainer from "../../components/AboutContainer/about-container"
import ReviewContainer from "../../components/ReviewsContainer/reviews-container"
import BlogComponent from "../../components/BlogComponent"


export const Home = () => {



    return(
        <>
            <SectionImageHeader/>
            <MarketContainer />
            <FeaturedProperties />
            <AboutContainer />
            <ReviewContainer />
            <BlogComponent />
        </>
    )
}