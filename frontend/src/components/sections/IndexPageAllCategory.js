import React from 'react'
import '../../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    loop: true,
    center: true,
    items: 8,
    margin: 30,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        375: {
            items: 3
        },
        768: {
            items: 5
        },
        1440: {
            items: 7
        }
    }
};

function IndexPageAllCategory() {
    return (
        <div>
            <section class=" section">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            {/* <!-- Section title --> */}
                            <div class="section-title">
                                <h2>All Categories</h2>
                               
                            </div>
                            <div class="row">
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-tv icon-bg-1" viewBox="0 0 16 16">
                                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2 " />
                                            </svg>
                                            <h4><Link to="/appliances">Appliances</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-mic-fill icon-bg-2" viewBox="0 0 16 16">
                                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                            <h4><Link to="/audio">Audio</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cassette icon-bg-3" viewBox="0 0 16 16">
                                                <path d="M4 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 6a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2z" />
                                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zM1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-.691l-1.362-2.724A.5.5 0 0 0 12 10H4a.5.5 0 0 0-.447.276L2.19 13H1.5a.5.5 0 0 1-.5-.5zM11.691 11l1 2H3.309l1-2z" />
                                            </svg>
                                            <h4><Link to="/gaming">Gaming</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-laptop-fill icon-bg-4" viewBox="0 0 16 16">
                                                <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                                            </svg>
                                            <h4><Link to="/laptop">Laptop</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}

                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-phone-vibrate-fill icon-bg-5" viewBox="0 0 16 16">
                                                <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M1.807 4.734a.5.5 0 1 0-.884-.468A8 8 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A7 7 0 0 1 1 8c0-1.18.292-2.292.807-3.266m13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 16 8a8 8 0 0 0-.923-3.734M3.34 6.182a.5.5 0 1 0-.93-.364A6 6 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A5 5 0 0 1 3 8c0-.642.12-1.255.34-1.818m10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818s-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8s-.145-1.505-.41-2.182" />
                                            </svg>
                                            <h4><Link to="/mobile">Mobile</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-2 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pip icon-bg-6" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
  <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
</svg>
                                            <h4><Link to="/tv">Tv</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>

          
            <section class="call-to-action">
                {/* <!-- Container Start --> */}
                <div className='bg-3 section-sm"'>
                    <div class="container ">
                        <div class="row justify-content-md-center text-center">
                            <div class="col-md-12 col-lx-8">
                                <div class="content-holder mt-5">
                                    <h2>Sustainable Electronics, Responsible Disposal</h2>
                                    <img class="e-waste-img img-fluid mb-5 mt-5" src={require('../../images/green-e-waste-logo.png')} alt="no img" />
                                    <div class="row">
                                        <div class=" col-md-4 col-ms-12 mb-5 ">
                                            <h3>1</h3>
                                            <h4>Collect e-Waste</h4>
                                            <h5>Gather electronic waste for eco-friendly disposal and recycling.</h5>
                                        </div>
                                        <div class=" col-md-4 col-ms-12 mb-5 ">
                                            <h3>2</h3>
                                            <h4>Drop Off</h4>
                                            <h5>Drop off your e-waste at designated centers for responsible recycling.</h5></div>
                                        <div class=" col-md-4 col-ms-12 mb-5">
                                            <h3>3</h3>
                                            <h4>Contribute to Change</h4>
                                            <h5>Join us to make a difference and shape a better future together.</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>

            <section class=" section">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                                                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                            </svg>
                                            <h4>Extended Warranty</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                            </svg>
                                            <h4>Free Delivery</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}
                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                            </svg>
                                            <h4>Same day shipping</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}


                                {/* <!-- Category list --> */}
                                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6">
                                    <div class="category-block">
                                        <div class="header-text">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                            <h4>Easy installment</h4>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Category List --> */}



                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>




        </div>
    )
}

export default IndexPageAllCategory