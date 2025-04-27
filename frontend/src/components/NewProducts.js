import { React, useEffect, useState } from 'react';
//import Modal from 'react-modal';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//toast.config;


const NewProduct = () => {

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

        const [imgPrev, setImgPrev] = useState([]);
        const [selectedFile, setSelectedFile] = useState([]);
        const [show, setShow] = useState(false);
        const [formdata, setFormdata] = useState(initialState)


        const handleImageChange = (e) => {

                const files = e.target.files;
                const fileArray = Array.from(files);

                const imagePreview = fileArray.map(file => {
                        const reader = new FileReader()
                        return new Promise((resolve) => {
                                reader.onloadend = () => {
                                        resolve({
                                                src: reader.result,
                                                name: file.name
                                        })
                                }
                                reader.readAsDataURL(file)
                        })
                })
                Promise.all(imagePreview).then(image => {
                        setImgPrev(image)

                        setSelectedFile(fileArray)
                        console.log("selected files  : " + selectedFile)
                })

        }

        useEffect(() => {
                console.log(selectedFile)
        }, [selectedFile])

        const handleSubmit = async () => {
                // const formData = new FormData();
                // // formData.append("folder", "user/profile");
                // formData.append("folder", "user/profile");

                // selectedFile.forEach(file => {
                //         formData.append('image', file)
                // })

                // formdata.
                // const formValues = Object.fromEntries(formData)
                // console.log("form values " + JSON.stringify(formData))


        }
        const addProduct = async (req, res) => {
                try {
                        const imgdata = new FormData();
                        imgdata.append("folder", "user/profile");

                        selectedFile.forEach(file => {
                                imgdata.append('image', file)
                        })

                        for (let key in formdata){
                                imgdata.append(key, formdata[key] )
                        }
                        imgdata.forEach((value, key) => {
                                console.log(key, value);
                              });
                        const tokenStr = localStorage.getItem('token');
                        const config = {
                                headers: {
                                        'Content-Type': 'multipart/form-data',
                                        "Authorization": `${tokenStr}`
                                }
                        }
                        const res = await axios.post('http://localhost:2000/api/addnewProduct', imgdata, config)
                        console.log("add new product api response ] "+res)
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
                                                        <input type='file' name="image" accept='image/*' multiple onChange={handleImageChange} style={{ height: "200px", width: "200px" }}></input>
                                                        <Button type="button" onClick={handleSubmit}> submit</Button>
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