import React from 'react'
import Footer from './Footer'


function ContactUs() {
    return (
        <div>
            
            <section class="page-title">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            {/* <!-- page title --> */}

            {/* <!-- contact us start--> */}
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-us-content p-4">
                                <h5>Contact Us</h5>
                                <h1 class="pt-3">Hello, what's on your mind?</h1>
                                <p class="pt-3 pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit dolor, blandit vel euismod ac, lentesque et dolor. Ut id tempus ipsum.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form action="#">
                                <fieldset class="p-4">
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-lg-6 py-2">
                                                <input type="text" placeholder="Name *" class="form-control" required />
                                            </div>
                                            <div class="col-lg-6 pt-2">
                                                <input type="email" placeholder="Email *" class="form-control" required />
                                            </div>
                                        </div>
                                    </div>
                                    <select name="" id="" class="form-control w-100">
                                        <option value="1">Select Category</option>
                                        <option value="1">Laptop</option>
                                        <option value="1">iPhone</option>
                                        <option value="1">Monitor</option>
                                        <option value="1">I need</option>
                                    </select>
                                    <textarea name="message" id="" placeholder="Message *" class="border w-100 p-3 mt-3 mt-lg-4"></textarea>
                                    <div class="btn-grounp">
                                        <button type="submit" class="btn btn-primary mt-2 float-right">SUBMIT</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- contact us end --> */}

            <Footer/>
        </div>
    )
}

export default ContactUs