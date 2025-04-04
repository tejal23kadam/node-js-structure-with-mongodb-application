import React from 'react'

function Slider() { 
    return (
        <section class="hero-area bg-1 text-center overly">
            {/* <!-- Container Start --> */}
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        {/* <!-- Header Contetnt --> */}
                        <div class="content-block">
                            <h1>Upto 50% Discount On Each Product</h1>
                            <p>Join the millions who buy and sell from each other everyday in local communities around the world</p>

                        </div>
                        {/* <!-- Advance Search --> */}
                        <div class="advance-search">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-xl-10 col-lg-10 col-md-8 ">
                                        <input type="text" class="form-control my-2 my-lg-1" id="inputtext4"
                                            placeholder="What are you looking for" />
                                    </div>
                                    <div class="col-xl-2 col-lg-2 col-md-4 align-self-center">
                                        <button type="submit" class="btn btn-primary active w-100">Search Now</button>
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