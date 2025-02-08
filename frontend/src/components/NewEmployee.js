import { React, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios'
import { useOutletContext } from "react-router-dom";

function NewEmployee() {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    // const [LoginStatus, setLoginStatus] = useState("");
    const [address, setAddress] = useState("");
    const { eachPageMargine } = useOutletContext();

    const customStyles = {
        content: {
            // top: '55%',
            // left: '55%',
            // right: 'auto',
            // bottom: 'auto',
            // marginRight: '-50%',
            // transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'none',
            overflow: 'hidden',
            // z-index:'2000'
        },
    };
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const employee = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobileNo,
        address: address,
        email: email,
        password: password,

    };
    const addEmployee = async () => {
        try {
           
            const tokenStr = localStorage.getItem('token');
            const config = {
                headers: {
                    "Authorization": `${tokenStr}`
                }
            }
            const res = await axios.post('http://localhost:2000/api/addnewEmployee', employee, config)



            console.log(res)

        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={(window.innerWidth < 768) ? "header-left-Zero" : eachPageMargine}>
            <button className='btn m-5' onClick={openModal}>Add New Employee</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal" >
                <div className="container mt-3 main-content ">

                    <div className="row p-5 bg-color rounded-border text-white">
                    <div className="col-12 text-end">
                            <button onClick={closeModal}>X</button>
                        </div>
                        <div className="col-12 ">
                            <h2 className="text-center text-xl ">Welcome To Registration</h2>
                        </div>
                       
                    </div >
                    {/* <form > */}
                    <div className="row bg-light p-5 p-sm-none ">

                        <div className="col-sm-12 col-lg-4 form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First name." onChange={e => setFirstName(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 col-lg-4 form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last name." onChange={e => setLastName(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 col-lg-4 form-group">
                            <label >Mobile No.</label>
                            <input type="mobile" className="form-control" placeholder="Mobile No." onChange={e => setMobileNo(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 form-group">
                            <label >Address</label>
                            <input type="address" className="form-control" placeholder="Address" onChange={e => setAddress(e.target.value)} required />
                        </div>

                        <div className="col-sm-12 form-group">
                            <label >Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email." onChange={e => setEmail(e.target.value)} required />
                        </div>

                        <div className="col-sm-12 form-group">
                            <label >Password</label>
                            <input type="Password" name="password" className="form-control" placeholder="Enter your password." onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className="col-sm-12 form-group mb-0">
                            <button className="form-control btn bg-color btn-outline text-white" onClick={() => addEmployee()} >Submit</button>
                        </div>
                    </div>
                    {/* </form> */}
                </div>


            </Modal >
        </div >
    )
}

export default NewEmployee