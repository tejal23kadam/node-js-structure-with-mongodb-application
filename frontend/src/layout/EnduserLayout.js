import React from 'react'
import Header from '../components/Header'
import { navSections } from '../layout/EndUseNavSections';
import NavBar from '../components/sections/NavBar';
import Slider from '../components/sections/Slider';
import IndexPageAllCategory from '../components/sections/IndexPageAllCategory';
import Footer from '../components/sections/Footer';
import FetchAllCategoryData from '../components/sections/FetchAllCategoryData';

function EnduserLayout() {
    return (
        <>
            <Header navSections={navSections} />
            <NavBar/>
            <Slider/>
            {/* <TrendingItems /> */}
            <IndexPageAllCategory/>
            <Footer/>
            <FetchAllCategoryData/>
        </>
    )
}

export default EnduserLayout