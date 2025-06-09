import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { addToCart } from '../sliceComponent/CartSlice';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

function CheckOutModal({ isOpen, handleClose }) {
    const cartData = useSelector((state) => state.cart.orders);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const initialState = {
        name: '',
        phoneNo: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    };
    const [formdata, setFormdata] = useState(initialState)
    console.log("form data at initial starte " + JSON.stringify(formdata))
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }
    const addOrder = async () => {
        try {
            const tokenStr = localStorage.getItem('token');
            const config = {
                headers: {
                    "Authorization": `${tokenStr}`
                }
            }
            const payload = {
                ...formdata,
                userId: user._id,
                products: cartData.map(item => ({
                    product: item._id,     
                    quantity: item.quantity
                }))
            };

            console.log("form data for checkout modal  " + JSON.stringify(payload))
            const res = await axios.post('http://localhost:2000/api/addOrder', payload, config)
            console.log("add new order api response  " + res)
            //    setShow(false);

        }
        catch (error) {
            console.log(error)
        }
    }


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
                    Shipping Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container mt-3 ">

                    {/* <div className="row bg-light p-5 p-sm-none "> */}

                    <div className="col-sm-12 form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Full name" onChange={handleChange} required />
                    </div>
                    <div className="col-sm-12 form-group">
                        <label >Phone No</label>
                        <input type="number" className="form-control" name="phoneNo" placeholder="phone no" onChange={handleChange} required />
                    </div>

                    <div className="col-sm-12 form-group">
                        <label >Address</label>
                        <textarea className="form-control" name="address" placeholder="address" onChange={handleChange} required />
                    </div>
                    <div className="col-sm-12 form-group">
                        <label >City</label>
                        <input type="text" className="form-control" name="city" placeholder="city" onChange={handleChange} required />
                    </div>
                    <div className="col-sm-12 form-group">
                        <label >State</label>
                        <input type="text" className="form-control" name="state" placeholder="state" onChange={handleChange} required />
                    </div>
                    <div className="col-sm-12 form-group">
                        <label >Zip</label>
                        <input type="text" className="form-control" name="zip" placeholder="zip" onChange={handleChange} required />
                    </div>

                    <div className="col-sm-12 form-group mb-0">
                        <button type="button" className="form-control btn bg-color btn-outline text-white" onClick={() => { addOrder(); }} >Submit</button>
                    </div>
                </div>

                {/* </div> */}
            </Modal.Body>
        </Modal>


    )
}
export default CheckOutModal

