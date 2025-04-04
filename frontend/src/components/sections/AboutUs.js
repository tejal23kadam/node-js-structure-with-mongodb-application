import React from 'react'

function AboutUs() {
    return (
        <div>
            <section class="page-title">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>About Us</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>

            <section class="section">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 pt-5 pt-lg-0">
                            <div class="about-img">
                                <img class="card-img-top img-fluid" src={require('../../images/aboutUs.jpg')}  alt="no img" />
                            </div>
                            <div class="about-content">
                                <h3 class="font-weight-bold">Introduction</h3>
                                <p>With 150+ products across 30 brands our store is brand for electronics. we have a wide range of assortment, the right advice from their trusted electronics experts & lifetime assurance on electronics purchased from us.
                                    products in the Own Label category that use the latest technology and are curated by in-house experts with competitive pricing. The range is a perfect fit for those who desire a completely feature-packed and quality product.

                                </p>
                                <h3 class="font-weight-bold">How we can help</h3>
                                <p>To help you with your post-purchase service needs in a hassle-free manner, we will launched ZipCare. It has two primary service segments for all devices - Protect and Maintain. ZipCare Protect aims to protect your newly purchased devices against any manufacturing defects or accidental or liquid damage that might occur in the future.

we will introduce an Express Delivery service for all last-minute shoppers, ensuring product delivery on the same day for all orders placed before 4 PM. This service covers a vast range of categories. Customers who forget an important occasion or need last-minute electronics for their travels can order the products on our app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default AboutUs