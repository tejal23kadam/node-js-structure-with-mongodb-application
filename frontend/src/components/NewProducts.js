import { React, useState } from 'react';
//import Modal from 'react-modal';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//toast.config;


const NewProduct = () => {
        const [show, setShow] = useState(false);      
        const [formdata, setFormdata] = useState()

        const initialState = {
                title: '',
                price: '',
                description: '',
                brand: '',
                modal: '',
                color: '',
                category: '',
                discount: 0

        };
        const addProduct = async () => {
                try {

                        const tokenStr = localStorage.getItem('token');
                        const config = {
                                headers: {
                                        "Authorization": `${tokenStr}`
                                }
                        }
                        const res = await axios.post('http://localhost:2000/api/addnewProduct', formdata, config)
                        console.log(res)
                        setShow(false);
                        alert("successfully added")

                }
                catch (error) {
                        console.log(error)
                }
        }
        const handleChange = (e) => {
                const { name, value } = e.target;
                setFormdata({ ...formdata, [name]: value })
        }
        return (
                <div>
                        <Button variant="primary" onClick={() => setShow(true)}>
                                Add new product
                        </Button>

                        <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                        >
                                <Modal.Header className='bg-color text-white text-center' closeButton>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                                Welcome To Registration
                                        </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                        <div className="container mt-3 ">

                                                {/* <div className="row bg-light p-5 p-sm-none "> */}

                                                <div className="col-sm-12 form-group">
                                                        <label>Title</label>
                                                        <input type="text" className="form-control" name="title" placeholder="Title" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label>price</label>
                                                        <input type="text" className="form-control" name="price" placeholder="price" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >Description</label>
                                                        <input type="mobile" className="form-control" name="Description" placeholder="Description" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >brand</label>
                                                        <input type="address" className="form-control" name="brand" placeholder="brand" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >modal</label>
                                                        <input type="address" className="form-control" name="modal" placeholder="modal" onChange={handleChange} required />
                                                </div>

                                                <div className="col-sm-12 form-group">
                                                        <label >color</label>
                                                        <input type="address" className="form-control" name="color" placeholder="color" onChange={handleChange} required />
                                                </div>
                                                <div className="col-sm-12 form-group">
                                                        <label >category</label>
                                                        <input type="address" className="form-control" name="category" placeholder="category" onChange={handleChange} required />
                                                </div>
                                               
                                                <div className="col-sm-12 form-group mb-0">
                                                        <button type="button" className="form-control btn bg-color btn-outline text-white" onClick={() => { addProduct(); }} >Submit</button>
                                                </div>
                                        </div>

                                        {/* </div> */}
                                </Modal.Body>
                        </Modal>
                </div >
        )
}

export default NewProduct 