import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../sliceComponent/CartSlice';


function SingleProductDetailPage({ isOpen, onClose, productId }) {
    const data = useSelector((state) => state.allData.data.products);
    const dispatch = useDispatch();
    if (!isOpen) {
        return null;
    } else {
        return (
            <div className='closeModal' >               
                {                    
                    data.filter(item => item.id === productId).map(product => {
                        return (
                            <>
                                <div className='allProdutDiv'>
                               
                                    <section id="product-info">

                                        <div class="item-image-parent">

                                            <div class="item-image-main">
                                                <img src={product.image} alt="Product" />
                                            </div>
                                        </div>

                                        <div class="item-info-parent">

                                            <div className="main-info">
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

                                            <div class="select-items">
                                                <h5>About This Product</h5>
                                                <p>{product.description}</p>
                                            </div>
                                            <div>
                                                <button className="addToCartBtn" type="button" onClick={() => { dispatch(addToCart(product)) }} >Add to Cart</button>
                                            </div>
                                        </div>
                                    </section>
                                    <i className="bi-x closeBtn " onClick={onClose}></i>
                                </div>
                            </>
                        );
                    })
                }
            </div >
        );
    }
}
export default SingleProductDetailPage

