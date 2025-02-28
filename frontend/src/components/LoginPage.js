
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/slice/AuthSlice';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [LoginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const studentData = {
        email: email,
        password: password
    };

    const CheckStudent = async () => {
        try {
            const res = await axios.post('http://localhost:2000/api/validateStudent', studentData)
            setLoginStatus(res.data.data.message);
            if (res.data.status) {
                localStorage.setItem("token", res.data.data.token)
                dispatch(setIsAuth(res.data.data.user));

                if (res.data.data.user.userType === 1) {
                    navigate("/admin", { state: { name: res.data.data.user.name } });
                }
                else {
                    navigate("/user", { state: { name: res.data.data.user.name } })
                }
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className="sign-in__wrapper"
        >
            <div className='container'>
                <div className='row  '>
                    <div className='col-md-6 d-none d-md-block bg-color p-5 sign-up-left'>
                        <div className='text-wrap text-center container w-75  '>
                            <div className='text text-white pl-lg-5 pr-lg-5 pt-md-5'>

                                <h1>Welcome to Login</h1>
                                <p className='text-center py-4'>Welcome to Helix where fashion knows no boundries and style is limitless. At Helix, we celebrate individuality , self-expression, and the dynamic fusion of street style with modern fashion.  

                                </p>
                                <p>Don't have an account ?</p>
                            </div>
                            {/* <button className='btn btn-white btn-outline text-white bg-transparent form-control '><Link className='text-white' to="/signup">Sign Up</Link></button> */}
                            <button type="button" className="form-control btn  btn-outline text-white btn-animation" ><Link style={{ textDecoration: 'none' }} to="/signup">Sign Up</Link></button>
                        </div>
                    </div>

                    <div className='col-md-6 bg-white ml-3 mr-3 ml-md-0 mr-md-0 p-3 sign-up-right'>
                        <div className='w-100 text-center '>
                            <img src={require('../images/Borcelle2.png')} />
                            <h3>Log in</h3>
                        </div>
                        <div className='container w-75'>
                            <form>
                                {/* <!-- Email input --> */}
                                <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                    <label >Email Id</label>
                                    <input type="email" class="form-control" onChange={e => setEmail(e.target.value)} />

                                </div>

                                {/* <!-- Password input --> */}
                                <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                    <label >Password</label>
                                    <input type="password" class="form-control" onChange={e => setPassword(e.target.value)} />
                                </div>

                                {/* <!-- Submit button --> */}
                                <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                    <button type="button" className="form-control btn bg-color btn-outline text-white btn-animation" onClick={() => CheckStudent()}>Sign  in</button>
                                </div>

                                <div className='text-wrap p-1 text-center '>
                                    <div className='text '>
                                        <p>Don't have an account ?<Link to="/signup"> Sign Up</Link></p>
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center ">
                                    <p>{LoginStatus}</p>
                                </div>
                            </form>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage