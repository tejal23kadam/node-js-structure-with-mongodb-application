import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="footer section section-sm">
            {/* <!-- Container Start --> */}
            <div class="container">
                <div class="row">
                    <div class=" col-sm-6 mb-5 ">
                        {/* <!-- About --> */}
                        <div class="block about">
                            {/* <!-- footer logo --> */}
                            {/* <img src="images/logo-footer.png" alt="logo" /> */}
                            {/* <!-- description --> */}
                            <h4 class="alt-color">Stay in touch with us, get product updates, offers, discounts directly to your inbox</h4>
                            <input type="text" class="form-control my-2 my-lg-1" placeholder="Enter Email Id " />
                        </div>
                    </div>
                    {/* <!-- Link list --> */}
                    <div class=" col-sm-3 mb-5 ">
                        <div class="block">
                            <h4>Pages</h4>
                            <div><Link to="/aboutUs">About US</Link></div>
                            <div><Link to="/eWest">E-Waste</Link></div>
                            <div><Link to="/contactUs">Contact Us</Link></div>
                            <div><Link to="/termsAndConditions">Terms & Conditions</Link></div>

                        </div>
                    </div>

                    <div class=" col-sm-3 mb-5 ">
                        <div class="block">
                            <h4>Trending Products</h4>
                            <div>iPhone16 Pro</div>
                            <div>Lenovo Laptops</div>
                            <div>JBL Headphones</div>
                            <div>Samsung Tv</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Container End --> */}
        </footer>
    )
}

export default Footer