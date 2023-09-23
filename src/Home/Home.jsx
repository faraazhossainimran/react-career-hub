import FeaturedJobs from "../FeaturedJobs/FeaturedJobs"
import Banner from "../components/Banner/Banner"
import CategoryList from "../components/CategoryList/CategoryList"


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    )
}

export default Home