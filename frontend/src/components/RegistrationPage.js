import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToast } from '../redux/slice/toastSlice';
import Button from 'react-bootstrap/Button';


function RegistrationPage({ isOpen, handleClose }) {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // // const [name, setName] = useState("");
  // const [mobileNo, setMobileNo] = useState("");
  // const [Standard, setStandard] = useState("");
  //const navigate = useNavigate();
  //const [userType, setUserType] = useState(0);






  const initialState = {
    name: '',
    email: '',
    password: '',
    userType: ''
  };

  const [imgPrev, setImgPrev] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [formdata, setFormdata] = useState(initialState)
  const [showmodal, setShowModal] = useState(false); //shows modal



  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value })
  }

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


  const addUser = async () => {
    const allFormData = new FormData();
    allFormData.append("folder", "userImg");

    selectedFile.forEach(file => {
      allFormData.append('image', file)
    })

    for (let key in formdata) {
      allFormData.append(key, formdata[key])
    }
    allFormData.forEach((value, key) => {
      console.log("new user " + key, value);
    });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }

    try {
      console.log("formdata = " + JSON.stringify(allFormData))
      const res = await axios.post('http://localhost:2000/api/addUser', allFormData, config)
      // setLoginStatus(res.data.data.message);
      console.log("post response " + res);
      dispatch(setToast({ message: res.data.data.message, type: "success" }));
    }
    catch (error) {
      console.log(error)
    }
  }

  return (

    <div>

      <Modal
        show={isOpen}
        onHide={handleClose}
        //  dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header className='bg-color text-white text-center' closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Welcome to Helix Registration
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="container">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div>
              {imgPrev.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={image.name} style={{ width: '150px', height: 'auto', borderRadius: '10px' }} />
                </div>
              ))}
              <input type='file' name="image" accept='image/*' multiple onChange={handleImageChange} style={{ height: "200px", width: "200px" }}></input>
              <Button type="button" > submit</Button>
            </div>
            <div>
              <label>E-mail</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="ConfirmPassword"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div>
              <label >User Type</label>
              <input type="number" className="form-control" placeholder="Enter your user type" name="userType" onChange={handleChange} required />
             
            </div>

            <div className="mb-3">
              <button
                type="button"
                className="form-control btn bg-color btn-outline text-white btn-animation"
                onClick={addUser()}
              >
                Sign In
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>




      {/* <div className="container mt-3 main-content ">
        <div className="row p-5 bg-color rounded-border text-white">
          <h2 className="text-center ">Welcome To Registration</h2>
        </div>

        <div className="row p-sm-5 bg-light p-none pt-3">
          <div className="col-sm-12 form-group">
            {imgPrev.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.name} style={{ width: '150px', height: 'auto', borderRadius: '10px' }} />
              </div>
            ))}
            <input type='file' name="image" accept='image/*' multiple onChange={handleImageChange} style={{ height: "200px", width: "200px" }}></input>
            <Button type="button" > submit</Button>
          </div>
          <div className="col-sm-6 form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" onChange={handleChange} placeholder="Enter your name." required />
            <div className="invalid-feedback">Name field is required.</div>
          </div>
          <div className="col-sm-6 form-group">
            <label >Email</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Enter your email." required />
            <div className="invalid-feedback">Email is required.</div>
          </div>

          <div className="col-sm-6 form-group">
            <label >Password</label>
            <input type="Password" name="password" className="form-control" onChange={handleChange} placeholder="Enter your password." required />
            <div className="invalid-feedback">Password is required.</div>
          </div>
          <div className="col-sm-6 form-group">
            <label >Confirm Password</label>
            <input type="Password" name="cnf-password" onKeyUp={(e) => { setConfirmPassword(e.target.value) }} className="form-control" id="pass2" placeholder="Re-enter your password." required />
            <div className="invalid-feedback">Confirm Password is required.</div>
          </div>
          <div className="col-sm-12 form-group">
            <label >User Type</label>
            <input type="number" className="form-control" placeholder="Enter your user type" name="userType" onChange={handleChange} required />
            <div className="invalid-feedback">Please select user type</div>
          </div>
          <div className="col-sm-12 form-group mb-0">
            <button className="form-control btn bg-color btn-outline text-white" onClick={addUser}>submit</button>
          </div>
        </div>

      </div> */}
    </div>
  )
}


export default RegistrationPage