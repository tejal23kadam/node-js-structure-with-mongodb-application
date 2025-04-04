import React from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';


function SingleProductDetailPageNew() {
    const id = useSelector((state) => state.productIDFilter.productID);
    const data = useSelector((state) => state.allData.data.products);

    console.log(" id filter id=" + id);
    return (
        <div>
            <section class="page-title">
                {/* <!-- Container Start --> */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>Product Detail</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            <div >
                {
                    data.filter(item => item.id === id).map(product => {
                        return (
                            <>
                                <section class="section bg-gray">
                                    {/* <!-- Container Start --> */}
                                    <div class="container">
                                        <div class="row">
                                            <h3 class="product-title">{product.title}</h3>
                                            {/* <!-- Left sidebar --> */}
                                            <div class="col-lg-6">
                                                <div class="product-details">
                                                    {/* <!-- product slider --> */}
                                                    <div >
                                                        <div class=" my-4" data-image="images/products/products-1.jpg">
                                                            <img class="img-fluid w-100" src={product.image} alt="product-img" />
                                                        </div>

                                                    </div>
                                                    {/* <!-- product slider --> */}


                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="sidebar">
                                                    <div class="widget price text-center my-4">
                                                        <h4>old Price : <s>${product.price}.00</s> </h4>
                                                        <h4>New Price : ${Math.trunc(product.price - ((product.price * product.discount) / 100))}.00 ({product.discount}%)</h4>
                                                    </div>
                                                    <div class="widget user">

                                                        <div class="tab-content" id="pills-tabContent">
                                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                                <h3 class="tab-title pb-3 text-center">About this item</h3>
                                                                <p>{product.description}</p>
                                                                <p>Brand : <span>{product.brand}</span></p>
                                                                <p>Modal : <span>{product.model}</span></p>
                                                                <p>Color : <span>{product.color}</span></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Rate Widget --> */}
                                                    <div class="widget rate">
                                                        {/* <!-- Heading --> */}
                                                        <h5 class="widget-header text-center">Rating of Product</h5>
                                                        {/* <!-- Rate --> */}
                                                        <div class="starrr">
                                                            <ul class="list-inline">
                                                                <li class="list-inline-item">
                                                                    <i class="bi bi-star-fill"></i>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <i class="bi bi-star-fill"></i>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <i class="bi bi-star-fill"></i>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <i class="bi bi-star-fill"></i>
                                                                </li>
                                                                <li class="list-inline-item">
                                                                    <i class="bi bi-star"></i>
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

export default SingleProductDetailPageNew