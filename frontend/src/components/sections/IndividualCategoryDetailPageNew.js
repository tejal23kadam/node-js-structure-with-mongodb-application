import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../paginationComponent/Pagination';
import { Link } from 'react-router-dom';
import { addToCart } from '../sliceComponent/CartSlice';
import NavBar from './NavBar'
import { addToProductIDFilter } from '../sliceComponent/ProductIdSlice';

function IndividualCategoryDetailPageNew(props) {
    const cartData = useSelector((state) => state.cart);
    const data = useSelector((state) => state.allData.data.products);
    const loading = useSelector((state) => state.allData.loading);
    const error = useSelector((state) => state.allData.error);

    let [currentPage, setCurrentPage] = useState(1);
    let [brand, setbrand] = useState(null);
    let [filterDiscount, setFilterDiscount] = useState(null);
    let [filterPrice, setFilterPrice] = useState(null);
    let [filteredData, setFilteredData] = useState(data);

    const dispatch = useDispatch();
    const [activePriceColor, setActivePriceColor] = useState(null);
    const [activeDiscountColor, setActiveDiscountColor] = useState(null);

    let brandDistinctValues;

    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    //get brand for each category
    let individualBrandData = data.filter(datas => datas.category.toLowerCase() === props.category.toLowerCase());

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    let handlebrandChange = (e) => {
        setbrand(e.target.value)
    }
    const handlePriceFilter = (min, max) => {
        setFilterPrice({ min, max });
    };
    const handleDiscountFilter = (val) => {
        setFilterDiscount(val);
    };
    const handleClearAll = () => {
        setFilteredData(individualBrandData);
        setActivePriceColor(null);
        setActiveDiscountColor(null);
        // setbrand("hello");
        // console.log("brand = " + brand);
    };

    const [searchVal, setSearchVal] = useState("");
    const handleSearchClick = () => {
        console.log("search val  = " + searchVal);
        if (searchVal === "") { setFilteredData(individualBrandData); return; }

        const filterBySearch = filteredData.filter(item => item.brand.toLowerCase().includes(searchVal.toLowerCase()))
        // const tempFilteredData = tempFilteredData.filter(data => data.brand.toLowerCase().includes(brand.toLowerCase()));
        setFilteredData(filterBySearch);
    }

    useEffect(() => {
        let tempFilteredData = individualBrandData;

        // Brand Filter
        if (brand !== '⬇️ Select a brand ⬇️' && brand != null) {
            tempFilteredData = tempFilteredData.filter(data => data.brand.toLowerCase().includes(brand.toLowerCase()));
        }

        // Price Filter
        if (filterPrice) {
            tempFilteredData = tempFilteredData.filter(data => Math.trunc(data.price - ((data.price * data.discount) / 100)) >= filterPrice.min && Math.trunc(data.price - ((data.price * data.discount) / 100)) <= filterPrice.max);
        }

        //discount filter 
        if (filterDiscount > 0) {
            tempFilteredData = tempFilteredData.filter((data) => data.discount >= filterDiscount);
        }

        setFilteredData(tempFilteredData);
    }, [brand, filterPrice, filterDiscount]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || data.length === 0) return <h1>No data available</h1>;


    //stores the unique brands for selected category

    const propertyValues = individualBrandData.map(obj => obj['brand']);
    var newArray = propertyValues.map(function (x) { return x.toLowerCase() })
    const uniqueValuesSet = new Set(newArray);
    brandDistinctValues = Array.from(uniqueValuesSet);
    console.log("brandDistinctValues = " + brandDistinctValues);

    return (
        <div>
            <NavBar />
            <section className="page-search">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-10 col-md-8 advance-search ">
                            <input type="text" onChange={e => setSearchVal(e.target.value)} className="form-control my-2 my-lg-0" id="inputtext4" placeholder="What are you looking for ?" />
                        </div>
                        <div className='col-lg-2 col-xl-2 col-md-4 advance-search align-self-center'>
                            <button type="submit" className="btn btn-primary active w-100" onClick={() => handleSearchClick()}>Search Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search-result bg-gray">
                                <h2 style={{ textTransform: "capitalize" }}>Results For {props.category}</h2>
                                <p>{filteredData ? `${filteredData.length} Results Available` : 'No data available'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="category-sidebar">
                                <div>
                                    <button type="button" data-index="0" className="btn btn-main" onClick={() => handleClearAll()}>Clear All</button>
                                </div>

                                <div className="widget filter">
                                    <h4 className="widget-header">Show Brands</h4>
                                    <form>
                                        <select onChange={handlebrandChange}>
                                            <option defaultValue="⬇️ Select a brand ⬇️"> -- Select a brand -- </option>
                                            {brandDistinctValues.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
                                        </select>
                                    </form>
                                </div>

                                <div className="widget product-shorting">
                                    <h4 className="widget-header">By Price</h4>
                                    <div>
                                        <button type="button" className={activePriceColor === "first" ? "activeButton" : ""} onClick={() => { handlePriceFilter(0, 500); setActivePriceColor("first"); }}> Under 500 </button>
                                    </div>
                                    <div>
                                        <button type="button" className={activePriceColor === "Second" ? "activeButton" : ""} onClick={() => { handlePriceFilter(500, 1000); setActivePriceColor("Second"); }}> <span>&#8377;</span>500 - <span>&#8377;</span>1000 </button>
                                    </div>
                                    <div>
                                        <button type="button" className={activePriceColor === "Third" ? "activeButton" : ""} onClick={() => { handlePriceFilter(1000, 2000); setActivePriceColor("Third"); }}>  <span>&#8377;</span>1000 - <span>&#8377;</span>2000</button>
                                    </div>
                                    <div>
                                        <button type="button" className={activePriceColor === "Fourth" ? "activeButton" : ""} onClick={() => { handlePriceFilter(2000); setActivePriceColor("Fourth"); }}>   Over <span>&#8377;</span>2000</button>
                                    </div>
                                </div>

                                <div className="widget product-shorting">
                                    <h4 className="widget-header">By Discount</h4>
                                    <div>
                                        <button type="button" className={activeDiscountColor === "first" ? "activeButton" : ""} onClick={() => { handleDiscountFilter(5); setActiveDiscountColor("first"); }}> 5%off or more </button>
                                    </div>
                                    <div>
                                        <button type="button" className={activeDiscountColor === "Second" ? "activeButton" : ""} onClick={() => { handleDiscountFilter(10); setActiveDiscountColor("Second"); }}> 10%off or more</button>
                                    </div>
                                    <div>
                                        <button type="button" className={activeDiscountColor === "Third" ? "activeButton" : ""} onClick={() => { handleDiscountFilter(15); setActiveDiscountColor("Third"); }}> 15%off or more</button>
                                    </div>
                                    <div>
                                        <button type="button" className={activeDiscountColor === "Fourth" ? "activeButton" : ""} onClick={() => { handleDiscountFilter(20); setActiveDiscountColor("Fourth"); }}> 20%off or more</button>
                                    </div>
                                    <div>
                                        <button type="button" className={activeDiscountColor === "Fifth" ? "activeButton" : ""} onClick={() => { handleDiscountFilter(25); setActiveDiscountColor("Fifth"); }}> 25%off or more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">

                            {/* <!--new comment start --> */}
                            <div className='pro-container'>
                                {(filteredData != null) ?
                                    (
                                        (filteredData.slice(indexOfFirstPost, indexOfLastPost).map((data) => (
                                            <div className="pro " key={data.id} >
                                                <div className="des" >
                                                    <Link to="/product-details"><img src={data.image} onClick={() => { dispatch(addToProductIDFilter(data.id)) }} alt="noImage" /></Link>
                                                    <h5 className="overme">{data.title} </h5>
                                                    <div>
                                                        {
                                                            (data.discount) ? (
                                                                <div style={{ display: "flex" }}>
                                                                    <h5><s>{data.price}</s> </h5>
                                                                    <h4><span>$</span>{Math.trunc(data.price - ((data.price * data.discount) / 100))}</h4>
                                                                    {/* <div style={{ display: "flex" }}>
                                                                        <p className="discount">{data.discount}%</p> off

                                                                    </div> */}
                                                                </div>
                                                            ) :
                                                                (
                                                                    <h4><span>&#8377;</span>{data.price}</h4>
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                                <div className="cardbuttons">
                                                    <button className="atc-btn"  onClick={() => { dispatch(addToCart(data)) }}>
                                                       <i  className="fal bi bi-cart " ></i>
                                                        Add to cart
                                                    </button>
                                                </div>                                                
                                                <span className='discountPercent'>{data.discount}%off</span>
                                            </div>

                                        )))
                                    ) :
                                    (<h1>data is missing</h1>)
                                }
                            </div>

                            <Pagination
                                length={filteredData.length}
                                postsPerPage={postsPerPage}
                                currentPage={currentPage}
                                handlePagination={handlePagination}
                            />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndividualCategoryDetailPageNew