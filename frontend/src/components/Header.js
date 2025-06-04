import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios';
import { unSetIsAuth, setIsAuth } from '../redux/slice/AuthSlice';
import { addToCategoryFilter } from '../redux/slice/CategoryFilterSlice';
import { setToast } from '../redux/slice/toastSlice';

function Header(props) {

    const [show, setShow] = useState(false);
    const [showmodal, setShowModal] = useState(false); //shows modal
    const handleClose = () => setShow(!show);
    const [rightshow, setRightShow] = useState(false);
    const handleRightClose = () => setRightShow(false);
    const handleRightShow = () => setRightShow(true);
    const [visibleSearchBar, setVisibleSearchBar] = useState(false);
    const [activeLink, setActiveLink] = useState("Dashboard");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const cart = useSelector((state) => state.cart);
    
    const initialState = {
        email: '',
        password: ''

    };

    const [formdata, setFormdata] = useState(initialState)


    const openLoginModal = () => {

        setShow(!show);
        setShowModal(true);
    }


    const logoutUser = () => {
        localStorage.removeItem("token");
        dispatch(unSetIsAuth());
        navigate("/");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }

    const CheckStudent = async () => {
        
        try {
            const res = await axios.post('http://localhost:2000/api/validateUser', formdata)
            console.log("res = " + res.data.status);
            console.log("formdata = " + formdata);
            if (res.data.status) {
                localStorage.setItem("token", res.data.data.token)
                dispatch(setIsAuth(res.data.data.user));
                dispatch(setToast({ message: res.data.data.message, type: "success" }));
                console.log("res.data123" + res.data)
                if (res.data.data.user.userType === 1) {
                    navigate("/admin", { state: { name: res.data.data.user.name, image: res.data.data.user.image[0].name } });
                }
                else {
                    navigate("/user", { state: { name: res.data.data.user.name } })
                }
            }
        }
        catch (error) {
            console.log("error = "+error)
        }
    }
   


    return (
        <div>
            <div className="row ">
                <div className='d-flex top-navbar ' >
                    <div>
                        <div className="py-4 px-4 bd-highlight col-xl-2 d-none d-lg-block ">
                            <img src={require('../images/logo.png')} alt='no img' />
                        </div>
                    </div>
                    <div className=" py-4 px-2 d-lg-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={handleClose} className="bi bi-text-indent-right text-center" viewBox="0 0 16 16">
                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 
                                                    1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 
                                                    0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>

                    <div className=" py-4 px-2 d-block flex-grow-1 d-lg-none text-center ">
                        <img src={require('../images/logo.png')} alt='no img' />
                    </div>
                    <div className='d-flex justify-content-end flex-lg-grow-1'>
                        <div className="d-flex px-2 py-4 d-none d-lg-block">
                             <ul >
                                {/* <li className="nav-item dropdown ">
                                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category <span><i className="bi bi-chevron-compact-down"></i></span>
                                    </a>
                                    
                                    <ul className="dropdown-menu">
                                        <li className=" dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item"><Link to="/">home</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>

                                <li className="nav-item"><Link to="/contactUs">Contact Us</Link></li>
                                {/* <li className="nav-item"><Link to="/termsAndConditions">Terms & Conditions</Link></li> */}
                                <li className="nav-item">
                                    <div className='cartCount'>
                                        <Link to="/cartData"><i className="bi bi-cart"></i></Link>
                                        {/* <span className="quantity">{cart.length}</span> */}
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="p-2 d-none d-lg-block">
                            <div className="form-group has-search">
                                <span className="bi bi-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>
                        
                        <div className=" py-4 px-2 d-none d-lg-block ">
                            <Link><i className="bi bi-bell-fill"></i></Link>
                        </div>
                        <div className="py-4 px-2 d-none d-lg-block">
                            <Link><i className='bi bi-gear'></i></Link>
                        </div>
                        <div className="py-3 px-2 ">
                            <div className="profile">
                                <div className="img-box">
                                 <img src="https://tse2.mm.bing.net/th?id=OIP.B39-1EvwOFXOffOfIKZT0AHaEK&pid=Api&P=0&h=220" onClick={handleRightShow} alt="no img" /> 
                                </div>
                            </div>

                            {/* right side off canvas start */}
                            <div >
                                <Offcanvas show={rightshow} onHide={handleRightClose} placement='end' className='navbar-bg-color'>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title className="sitename text-capitalize text-center text-white">{(user !== null) ? (user.name) : ("User")}</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <ul className="navmenu navbar-nav me-auto mb-2 mb-lg-0">
                                            <li key={0} className="nav-item mx-3" >
                                                <Link onClick={openLoginModal} ><i className="bi bi-gear px-2"></i>Sign In</Link>

                                            </li>
                                            <li key={1} className="nav-item mx-3">
                                                <Link to="/" onClick={() => logoutUser()} ><i className="bi bi-gear px-2"></i>Sign Out</Link>
                                            </li>
                                        </ul>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                            {/* right side off canvas end */}
                        </div>
                    </div>
                    {/* searchbar section start  */}
                    {(visibleSearchBar) ? (
                        <div className='search-section d-lg-none d-flex w-100 p-4'>
                            <div className="has-search flex-grow-1 ">
                                <span className="bi bi-search form-control-feedback p-2"></span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <CloseButton className="p-2" onClick={() => { setVisibleSearchBar(false); setActiveLink(activeLink); }} />
                        </div>) : (<></>)}

                    {/*login modal start */}

                    <Modal
                        show={showmodal}
                        onHide={() => setShowModal(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                        centered
                    >
                        <Modal.Header className='bg-color text-white text-center' closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Welcome To Registration
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='container'>
                                <div className='row  '>
                                    <div>
                                        <div className='bg-white '>
                                            <div >
                                                <form>
                                                    <div>
                                                        <label >Email Id</label>
                                                        <input type="email" name="email" className="form-control" onChange={handleChange} />

                                                    </div>


                                                    <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                                        <label >Password</label>
                                                        <input type="password" name="password" className="form-control" onChange={handleChange} />
                                                    </div>


                                                    <div className="col-sm-none pl-0 pr-0 pl-md-4 pr-md-4">
                                                        <button type="button" className="form-control btn bg-color btn-outline text-white btn-animation" onClick={CheckStudent}>Sign  in123</button>
                                                    </div>

                                                    <div className='text-wrap p-1 text-center '>
                                                        <div className='text '>
                                                            <p>Don't have an account ?<Link to="/signup"> Sign Up</Link></p>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </Modal.Body>
                    </Modal>
                    {/*login modal ends*/}


                    {/* searchbar section end  */}

                </div>
                {/* top navbar section end */}



                <div className='main-section d-flex'>
                    {/* <div className='section-color' style={(show) ? { marginLeft: "250px" } : { marginLeft: "0px" }}> */}
                    {/*left sidebar setion start */}
                    {/* <div className='section-color' >
                        {(!show) ? (
                            <div className='px-1 py-3 d-none d-lg-block verticleNavbar navbar-bg-color'>
                                <nav id="navmenu" className="navmenu">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        {props.navSections.map((section, i) => (
                                            <li key={i} className="nav-item">
                                                <Link className={activeLink === section.secName ? "active" : ""}
                                                    onClick={() => setActiveLink(section.secName)}
                                                    to={section.linkTo} >
                                                    <i className={section.icon}></i>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        ) :
                            (*/}

                                {/*  left side navbar with icons and title view */}
                                {/* <div className=' d-none d-lg-block'>
                                    <div className='verticleNavbar navbar-bg-color'>
                                        <div className="mb-0">
                                            <div >
                                                <h1 className="py-4 sitename text-capitalize">{(user !== null) ? (user.name) : ("admin")}</h1> 
                                                <nav id="navmenu" className="navmenu">
                                                    <ul className="navbar-nav me-auto mb-2 py-3 mb-lg-0" style={{ width: "250px" }}>
                                                        {props.navSections.map((section, i) => (
                                                            <li key={i} className="nav-item">
                                                                <Link className={activeLink === section.secName ? "active" : ""}
                                                                    onClick={() => setActiveLink(section.secName)}
                                                                    to={section.linkTo} >
                                                                    <i className={section.icon}></i>
                                                                    {section.secName}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )} */}

                    {/* </div>  */}
                    {/* left side bar setion end */}
                    <Offcanvas show={show} onHide={handleClose} className="d-block d-lg-none navbar-bg-color" responsive="lg">
                        <Offcanvas.Header className=' px-4 text-white' closeButton>
                            <h1>Menu</h1>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>
                                <div className="mb-0">
                                    <div className=' px-2' >
                                        <nav id="navmenu" className="navmenu">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-primary">
                                                {/* {props.navSections.map((section, i) => (
                                                    <li key={i} className="nav-item ">
                                                        <Link className={activeLink === section.secName ? "active" : ""}
                                                            onClick={() => { setActiveLink(section.secName); handleClose(); }}
                                                            to={section.linkTo} >
                                                            <i className={section.icon}></i>
                                                            {section.secName}
                                                        </Link>
                                                    </li>
                                                ))} */}
                                               <li className="nav-item"><Link to="/">home</Link></li>
                                                                               <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                                                               <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                                                               <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                                                               <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                                                               <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                                                               <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>
                                               
                                                                               <li className="nav-item"><Link to="/contactUs">Contact Us</Link></li>
                                                                               {/* <li className="nav-item"><Link to="/termsAndConditions">Terms & Conditions</Link></li> */}
                                                                               <li className="nav-item">
                                                                                   <div className='cartCount'>
                                                                                       <Link to="/cartData"><i className="bi bi-cart"></i></Link>
                                                                                       <span className="quantity">{cart.length}</span>
                                                                                   </div>
                                                                               </li>
                                               
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>


                    {/* pages section start */}

                    {/* if screeen size is greater than lg */}
                    <div className='container-fluid section-color h-100 d-lg-none d-block'>
                        <Outlet />
                    </div>


                    {/* pages section end  */}
                </div>
            </div>

            
        </div >
    )
}
export default Header

