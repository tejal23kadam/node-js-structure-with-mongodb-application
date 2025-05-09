import React from 'react'

function Slider() { 
    return (
        <section className="hero-area bg-1 text-center overly">
            {/* <!-- Container Start --> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <!-- Header Contetnt --> */}
                        <div className="content-block">
                            <h1>Upto 50% Discount On Each Product</h1>
                            <p>Join the millions who buy and sell from each other everyday in local communities around the world</p>

                        </div>
                        {/* <!-- Advance Search --> */}
                        <div className="advance-search">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-10 col-lg-10 col-md-8 ">
                                        <input type="text" className="form-control my-2 my-lg-1" id="inputtext4"
                                            placeholder="What are you looking for" />
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4 align-self-center">
                                        <button type="submit" className="btn btn-primary active w-100">Search Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Container End --> */}
        </section>
    )
}

export default Slider