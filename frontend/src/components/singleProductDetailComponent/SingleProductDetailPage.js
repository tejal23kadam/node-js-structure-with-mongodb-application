
import { useSelector, useDispatch } from 'react-redux';
//import { addToCart } from '../sliceComponent/CartSlice';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'

function SingleProductDetailPage({ isOpen, handleClose, productId }) {
    const data = useSelector((state) => state.allData.data);




    console.log("data is " + data)
    const dispatch = useDispatch();
    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header className='bg-color text-white text-center' closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Product Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <div className='row  '>
                        <div>
                            <div className='bg-white '>
                                <div >
                                    <div >
                                        {
                                            (data) ? (
                                                data.filter(item => item._id === productId).map(product => {
                                                    return (
                                                        <>
                                                            <div className='allProdutDiv'>

                                                                <section >
                                                                    <div >
                                                                        <div className="main-info">
                                                                            <div className="item-image-main">
                                                                                <img src={product.image[0].path} alt="Product" />
                                                                            </div>

                                                                            <h4>{product.title}</h4>
                                                                            <div className='discountDiv'>
                                                                                <h5><s>{product.price}</s> </h5>
                                                                                <h4>${Math.trunc(product.price - ((product.price * product.discount) / 100))}</h4>
                                                                                <p className="discount">{product.discount}%</p>
                                                                                <p>off</p>

                                                                            </div>
                                                                            <h6>Brand : <span>{product.brand}</span></h6>
                                                                            <h6>Modal : <span>{product.model}</span></h6>
                                                                            <h6>Color : <span>{product.color}</span></h6>
                                                                        </div>

                                                                        <div className="select-items">
                                                                            <h5>About This Product</h5>
                                                                            <p>{product.description}</p>
                                                                        </div>
                                                                        <div>
                                                                            {/* <button className="addToCartBtn" type="button" onClick={() => { dispatch(addToCart(product)) }} >Add to Cart</button> */}
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                                {/* <i className="bi-x closeBtn " onClick={onClose}></i> */}
                                                            </div>
                                                        </>
                                                    );
                                                })) :
                                                (<h1>dfaajf</h1>)

                                        }
                                    </div >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </Modal.Body>
        </Modal>


    )
}
export default SingleProductDetailPage

