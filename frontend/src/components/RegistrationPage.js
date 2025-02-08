import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";

function RegistrationPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [Standard, setStandard] = useState("");
  const navigate = useNavigate(); 
  const [userType, setUserType] = useState(0);
  const student = {
    name: name,
    std: Standard,
    mobile: mobileNo,
    email: email,
    password: password,
    userType: userType
  };
  const addStudent = async () => {
    try {
      const res = await axios.post('http://localhost:2000/api/addnewStudent', student)
      // setLoginStatus(res.data.data.message);
      console.log(res);
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = () => {


    if (password !== confirmPassword) {
      console.log(password + " " + confirmPassword + "  Passwords Don't Match")
    } else {
      console.log("password match done")
      addStudent();
      navigate("/");
    }

  }
  return (
    <div>
      <div className="container mt-3 main-content ">
        <div className="row p-5 bg-color rounded-border text-white">
          <h2 className="text-center ">Welcome To Registration</h2>
        </div>
        <form className='needs-validation was-validated' novalidate  >
          <div className="row p-sm-5 bg-light p-none pt-3">
            <div className="col-sm-6 form-group">
              <label>Name</label>
              <input type="text" className="form-control" onChange={e => setName(e.target.value)} placeholder="Enter your name." required />
              <div class="invalid-feedback">Name field is required.</div>
            </div>
            <div className="col-sm-6 form-group">
              <label>Standard</label>
              <input type='text' className="form-control" onChange={e => setStandard(e.target.value)} placeholder="Enter Standard." required />
              <div class="invalid-feedback">standard field is required.</div>
            </div>
            <div className="col-sm-6 form-group">
              <label >Mobile No.</label>
              <input type="address" className="form-control" onChange={e => setMobileNo(e.target.value)} placeholder="Enter your Mobile No." required />
              <div class="invalid-feedback">Mobile No. is required.</div>
            </div>
            <div className="col-sm-6 form-group">
              <label >Email</label>
              <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Enter your email." required />
              <div class="invalid-feedback">Email is required.</div>
            </div>

            <div className="col-sm-6 form-group">
              <label >Password</label>
              <input type="Password" name="password" className="form-control" onChange={e => setPassword(e.target.value)} placeholder="Enter your password." required />
              <div class="invalid-feedback">Password is required.</div>
            </div>
            <div className="col-sm-6 form-group">
              <label >Confirm Password</label>
              <input type="Password" name="cnf-password" onKeyUp={(e) => { setConfirmPassword(e.target.value) }} className="form-control" id="pass2" placeholder="Re-enter your password." required />
              <div class="invalid-feedback">Confirm Password is required.</div>
            </div>
            <div className="col-sm-12 form-group">
              <label >User Type</label>
              <input type="number" className="form-control" placeholder="Enter your user type" onChange={e => setUserType(e.target.value)} required />
              <div class="invalid-feedback">Please select user type</div>
            </div>
            <div className="col-sm-12 form-group mb-0">
              <button className="form-control btn bg-color btn-outline text-white" onClick={() => handleSubmit()}>submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default RegistrationPage