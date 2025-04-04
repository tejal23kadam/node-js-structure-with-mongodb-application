
import NavBar from './NavBar'
import Slider from './Slider'
import TrendingItems from './TrendingItems'
import IndexPageAllCategory from './IndexPageAllCategory'
import Footer from './Footer'
import FetchAllCategoryData from './FetchAllCategoryData'
import UserHeader from '../UserHeader'

function IndexPage() {
    return (
        <div>
            <UserHeader />
            <NavBar />
            <Slider />
            {/* <TrendingItems /> */}
            <IndexPageAllCategory />
            <Footer />
            <FetchAllCategoryData />
        </div>
    )
}

export default IndexPage