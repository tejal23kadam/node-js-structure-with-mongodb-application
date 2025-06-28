import React, { useEffect, useState, useRef } from 'react'
import profileImage from '../../src/images/User-Profile.png'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios'


import LoginModal from './LoginModal';
import { unSetIsAuth } from '../redux/slice/AuthSlice';
import { addToCategoryFilter } from '../redux/slice/CategoryFilterSlice';



function Header(props) {

    const [show, setShow] = useState(false);
    const [isDropDownOpen, setDropDownOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0)

    const [showmodal, setShowModal] = useState(false); //shows modal
    const handleClose = () => setShow(!show);
    const [rightshow, setRightShow] = useState(false);
    const handleRightClose = () => setRightShow(false);

    const [visibleSearchBar, setVisibleSearchBar] = useState(false);
    const [activeLink, setActiveLink] = useState("Dashboard");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dropdownRef = useRef();
    const user = useSelector((state) => state.auth.user);
    console.log("user in indx page " + JSON.stringify(user))
    const cart = useSelector((state) => state.cart);

    const openLoginModal = () => {

        setShowModal(true);
    }
    const logoutUser = () => {
        localStorage.removeItem("token");
        dispatch(unSetIsAuth());
        navigate("/");
    }

    const toggleDropdown = () => {
        setDropDownOpen(!isDropDownOpen);
    };

    useEffect(() => {
        getUserOrderDetail();
        /*this is the logic for the auto close of the dropdown box on the outside click on the page  */
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropDownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    const getUserOrderDetail = async () => {
        console.log("thi is called")
        try {

            const res = await axios.get('http://localhost:2000/api/getUserCartDetail', {
                params: {
                    userId: user._id
                }
            })
            console.log("res get user order detail= " + JSON.stringify(res.data.data.data.products));
            setCartCount(res.data.data.data.products.length);

        }
        catch (error) {
            console.log("error = " + error)
        }
    }



    return (
        <div>
            <div className="row ">
                <div className='d-flex top-navbar ' >
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


                    {/* <div className="flex-grow-1 d-none d-lg-block ">
                        <img className='py-4 px-5 ' src={require('../images/logo.png')} alt='no img' />
                    </div> */}

                    <div className=' px-5 py-3 d-flex justify-content-center d-none d-lg-block flex-lg-grow-1'>
                        <div>
                            <img src={require('../images/logo.png')} alt="User" />
                        </div>
                    </div>

                    <div className="d-none d-lg-block d-flex flex-wrap  flex-lg-grow-1 justify-content-center align-items-center py-2">
                        <ul className="nav ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')); setShow(false); }}>
                                <Link to="/audio" className="nav-link">Audio</Link>
                            </li>
                            <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')); setShow(false); }}>
                                <Link to="/appliances" className="nav-link">Appliances</Link>
                            </li>
                            <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')); setShow(false); }}>
                                <Link to="/gaming" className="nav-link">Gaming</Link>
                            </li>
                            <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')); setShow(false); }}>
                                <Link to="/laptop" className="nav-link">Laptop</Link>
                            </li>
                            <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')); setShow(false); }}>
                                <Link to="/mobile" className="nav-link">Mobile</Link>
                            </li>
                            <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')); setShow(false); }}>
                                <Link to="/tv" className="nav-link">TV</Link>
                            </li>
                            <li className="nav-item">
                                <div className="position-relative">
                                    <Link to="/cartData" className="nav-link text-decoration-none position-relative">
                                        <i className="bi bi-cart3 fs-4"></i>
                                        {(
                                            <span
                                                className="badge bg-danger rounded-pill text-white position-absolute start-50"
                                                style={{ fontSize: '0.75rem' }}
                                            >
                                                {cartCount}
                                            </span>
                                        )}
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className=' px-lg-5 d-flex justify-content-center flex-lg-grow-1'>
                        <div className="dropdown-wrapper">
                            <div className="avatar-container" onClick={toggleDropdown}>
                                <img
                                    src={
                                        (user && user.image)
                                            ? (user.image[0].path)
                                            : (profileImage)
                                    }
                                    alt="User" className="avatar" />
                            </div>

                            {isDropDownOpen && (
                                <div className="dropdown-card" ref={dropdownRef}>
                                    <div className="user-info">
                                        <h4>Welcome!!</h4>
                                        <p>{user.name}</p>
                                    </div>
                                    <ul className="menu-list">
                                        {(user._id) ? (
                                            <li onClick={logoutUser}><i className="fa fa-sign-out-alt"></i> Logout</li>
                                        ) : (
                                            <li onClick={openLoginModal}><i className="fa fa-sign-in-alt"></i> Login</li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="py-3 px-2 ">
                            <div className="profile">
                                {/* <div className="img-box">
                                    <img
                                        src={
                                            (user && user.image)
                                                ? (user.image[0].path)
                                                : (profileImage)
                                        }
                                        // onClick={handleRightShow}
                                        onClick={openLoginModal}
                                        alt="profile"
                                    />
                                </div> */}
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

                    {/*login modal start */}

                    <LoginModal isOpen={showmodal} handleClose={() => setShowModal(false)} ></LoginModal>
                    {/*login modal ends*/}


                    {/* searchbar section end  */}

                </div>
                {/* top navbar section end */}
                <div className='main-section d-flex'>

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
                                                <li className="nav-item"><Link to="/">home</Link></li>
                                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                                <li className="nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>

                                                {/* <li className="nav-item"><Link to="/contactUs">Contact Us</Link></li> */}
                                                {/* <li className="nav-item"><Link to="/termsAndConditions">Terms & Conditions</Link></li> */}
                                                <li className="nav-item">
                                                    <div className='cartCount'>
                                                        <Link to="/cartData"><i className="bi bi-cart"></i></Link>
                                                        <span className="quantity">{cartCount}</span>
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

