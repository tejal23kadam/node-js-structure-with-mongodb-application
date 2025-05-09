import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, minusFromCart, deleteFromCart } from '../sliceComponent/CartSlice';

function ShoppingCartData() {
    const cartOrdersData = useSelector((state) => state.cart.orders);
    const cartTotalPayableAmout = useSelector((state) => state.cart.totalPayableAmount);
    console.log("cart amount " + JSON.stringify(cartTotalPayableAmout));
    console.log("cart orders " + JSON.stringify(cartOrdersData));    
    const dispatch = useDispatch();
    return (
        <div>
            <section className="page-title">
                {/* <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            {/* <!-- Title text --> */}
                            <h3>Shopping Cart</h3>
                        </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
            </section>
            {
                (cartOrdersData.length > 0) ?
                    (<div className="pt-4 pb-4 container" >
                        <h1 className='text-center'>Cart Items</h1>
                        <div className="mt-5 gap-3 gap-md-0 gap-lg-0 row">
                            <div className="col-lg-8 col-md-7" >
                                <div className="card">
                                    {
                                        cartOrdersData.map((product) => {
                                            return (
                                                <div className="mt-2 store-item bottom-line pb-3" >
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <img className="image-store" src={product.image} alt='no data' />
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
                                                                <h5>{product.title}</h5>
                                                                <div>
                                                                    <div className="btn-quantity-container d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                                                        <button className="btn-quantity btn btn-default" onClick={() => { dispatch(minusFromCart(product)) }}>−</button>
                                                                        <span className="p-quantiry">{product.quantity}</span>
                                                                        <button className="btn-quantity btn btn-default" onClick={() => { dispatch(addToCart(product)) }}>+</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="list-store d-flex align-items-center justify-content-between" >
                                                                <h6> Original Price : ${product.price} </h6>
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between" >
                                                                {
                                                                    (product.discount) ? (
                                                                        <h6> Discount : {product.discount}% </h6>)
                                                                        : (
                                                                            <h6> Discount : NIL </h6>
                                                                        )
                                                                }
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between mb-3" >
                                                                {(product.discount) ? (
                                                                    < h6 > Total Price : ${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h6>)
                                                                    : (
                                                                        < h6 > Total Price : ${product.price} </h6>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="list-store d-flex align-items-center justify-content-between">
                                                                <div className="d-flex gap-2">
                                                                    <button className="btn-list btn btn-xs btn-default" onClick={() => { dispatch(deleteFromCart(product.id)) }} >
                                                                        <i className="bi bi-trash" ></i>
                                                                        Remove Item
                                                                    </button>
                                                                </div>
                                                                <div className="d-flex">
                                                                    {(product.discount) ? (
                                                                        <h5>${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h5>)
                                                                        : (
                                                                            < h5 >${product.price} </h5>
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5">
                                <div className="gap-3 row">
                                    <div>
                                        <div className="card">
                                            <h4>The total amount of</h4>
                                            <div className="store-item mt-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="p-total-label" >No. of Items</p>
                                                    </div>
                                                    <div className="col-6" data-reactid=".0.1.1.0.0.0.1.1.1">
                                                        <p className="p-total">{
                                                            cartOrdersData.reduce((totalQty, item) => {
                                                                return totalQty += item.quantity;
                                                            }, 0)
                                                        }</p>
                                                    </div>
                                                </div>
                                                <div className="mt-2 row">
                                                    <div>
                                                        <div className="list-store d-flex align-items-center justify-content-between">
                                                            <p>Sub Total</p>
                                                            <p>${cartTotalPayableAmout}</p>
                                                        </div>
                                                        <div className="bottom-line" ></div>
                                                    </div>
                                                </div>

                                                <div className="mt-2 row">
                                                    <div className="col-6">
                                                        <p className="p-total-label" >total amount</p>
                                                    </div>
                                                    <div className="col-6" data-reactid=".0.1.1.0.0.0.1.1.1">
                                                        <p className="p-total"> <p>${cartTotalPayableAmout}</p></p>
                                                    </div>
                                                </div>
                                                <div className="mt-1 row">
                                                    <div>
                                                        <button type="button" className="w-100 btn btn-md btn-primary btn-block">Go To Checkout</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    ) : (
                        <h1 className="text-center mt-5" >oops!!   Your Cart is Empty</h1>
                    )
            }
        </div >
    )
}
export default ShoppingCartData