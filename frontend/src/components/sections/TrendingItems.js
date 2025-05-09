import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addToProductIDFilter } from '../../redux/slice/ProductIdSlice';
import { addToCart } from '../../redux/slice/CartSlice';



function TrendingItems() {

    const data = useSelector((state) => state.allData.data.products);

    const [randomItems, setRandomItems] = useState([]);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        if (data) {
            // Generate 4 random items from the data
            let selectedItems = [];
            for (let i = 0; i < 4; i++) {
                let randomIndex = Math.floor(Math.random() * data.length);
                selectedItems.push(data[randomIndex]);

            }
            setRandomItems(selectedItems); // Update the state with random items
        }
    }, [data]); // Trigger effect when data changes
    console.log("random items ++ ", randomItems);

    return (
        <section className="popular-deals section bg-gray">


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Trending Items</h2>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    {/* <!-- offer 01 --> */}

                     {/* <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        infinite={true}
                        partialVisible={false}
                        dotListclassName="custom-dot-list-style"
                    />  */}
                        {randomItems.length > 0 ? (
                            randomItems.map((item) => (
                                <div className="card mb-3" >

                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <div >
                                                <div className="des">
                                                    <Link to="/product-details" onClick={() => addToProductIDFilter(item.id)}>
                                                        <img className='card-img-top' src={item.image} alt="noImage" />
                                                    </Link>
                                                    <h5 className="overme">{item.title}</h5>
                                                    <div>
                                                        {item.discount ? (
                                                            <div>
                                                                <h5>
                                                                    <s>{item.price}</s>{' '}
                                                                </h5>
                                                                <h4>
                                                                    <span>&#8377;</span>
                                                                    {Math.trunc(
                                                                        item.price - (item.price * item.discount) / 100
                                                                    )}
                                                                </h4>
                                                                <div style={{ display: 'flex' }}>
                                                                    <p className="trending-discount">{item.discount}%</p>
                                                                    <p>off</p>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <h4>
                                                                <span>&#8377;</span>
                                                                {item.price}
                                                            </h4>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="cardbuttons">
                                                    <button className="atc-btn" >
                                                        <i onClick={() => addToCart(item)} className="fal bi bi-cart "></i>
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))
                        ) : (
                            <h3>No trending items available</h3>
                        )}



                        {/* </OwlCarousel>  */}




                </div>


            </div>



        </section >

    )
}

export default TrendingItems
