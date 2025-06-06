import React from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Modal from 'react-bootstrap/Modal';


function SingleProductDetailPageNew({ isOpen, onClose, productId }) {
    //const id = useSelector((state) => state.productIDFilter.productID);
    const data = useSelector((state) => state.allData.data.products);

    console.log("product id single page product detail page " + productId)
    if (!isOpen) {
        return null;
    } else {

        return (
            <div>
                <section className="page-title">
                    {/* <!-- Container Start --> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-center">
                                {/* <!-- Title text --> */}
                                <h3>Product Detail</h3>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Container End --> */}
                </section>
                <div >
                    {
                        data.filter(item => item.id === productId).map(product => {
                            return (
                                <>
                                    <section className="section bg-gray">
                                        {/* <!-- Container Start --> */}
                                        <div className="container">
                                            <div className="row">
                                                <h3 className="product-title">{product.title}</h3>
                                                {/* <!-- Left sidebar --> */}
                                                <div className="col-lg-6">
                                                    <div className="product-details">
                                                        {/* <!-- product slider --> */}
                                                        <div >
                                                            <div className=" my-4" data-image="images/products/products-1.jpg">
                                                                <img className="img-fluid w-100" src={product.image} alt="product-img" />
                                                            </div>

                                                        </div>
                                                        {/* <!-- product slider --> */}


                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="sidebar">
                                                        <div className="widget price text-center my-4">
                                                            <h4>old Price : <s>${product.price}.00</s> </h4>
                                                            <h4>New Price : ${Math.trunc(product.price - ((product.price * product.discount) / 100))}.00 ({product.discount}%)</h4>
                                                        </div>
                                                        <div className="widget user">

                                                            <div className="tab-content" id="pills-tabContent">
                                                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                                    <h3 className="tab-title pb-3 text-center">About this item</h3>
                                                                    <p>{product.description}</p>
                                                                    <p>Brand : <span>{product.brand}</span></p>
                                                                    <p>Modal : <span>{product.model}</span></p>
                                                                    <p>Color : <span>{product.color}</span></p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- Rate Widget --> */}
                                                        <div className="widget rate">
                                                            {/* <!-- Heading --> */}
                                                            <h5 className="widget-header text-center">Rating of Product</h5>
                                                            {/* <!-- Rate --> */}
                                                            <div className="starrr">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <i className="bi bi-star-fill"></i>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <i className="bi bi-star-fill"></i>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <i className="bi bi-star-fill"></i>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <i className="bi bi-star-fill"></i>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <i className="bi bi-star"></i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Container End --> */}
                                    </section>

                                </>
                            );
                        })
                    }
                </div >
            </div>

        )
    }
}

export default SingleProductDetailPageNew