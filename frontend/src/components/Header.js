import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { unSetIsAuth } from '../redux/slice/AuthSlice';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';

function Header(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(!show);    
    const [rightshow, setRightShow] = useState(false);
    const handleRightClose = () => setRightShow(false);
    const handleRightShow = () => setRightShow(true);
    const [visibleSearchBar, setVisibleSearchBar] = useState(false);
    const [activeLink, setActiveLink] = useState("Dashboard");

    const dispatch = useDispatch();
    const naviget = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const logoutUser = () => {
        localStorage.removeItem("token");
        dispatch(unSetIsAuth());
        naviget("/");
    }

    return (
        <div>
            <div class="row ">
                <div className='d-flex top-navbar ' >
                    <div>
                        <div class="py-4 px-4 bd-highlight col-xl-2 d-none d-lg-block ">
                            <img src={require('../images/logo.png')} alt='no img' />
                        </div>
                    </div>
                    <div class=" py-4 px-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={handleClose} class="bi bi-text-indent-right text-center" viewBox="0 0 16 16">
                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 
                                                    1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 
                                                    0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>

                    <div class=" py-4 px-2 d-block flex-grow-1 d-lg-none text-center ">
                        <img src={require('../images/logo.png')} alt='no img' />
                    </div>
                    <div className='d-flex justify-content-end flex-lg-grow-1'>
                        <div class="p-2 d-none d-lg-block">
                            <div class="form-group has-search">
                                <span class="bi bi-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                        </div>
                        <div class=" py-4 px-2 d-none d-lg-block ">
                            <Link><i className="bi bi-bell-fill"></i></Link>
                        </div>
                        <div class="py-4 px-2 d-none d-lg-block">
                            <Link><i className='bi bi-gear'></i></Link>
                        </div>
                        <div class="py-3 px-2 ">
                            <div class="profile">
                                <div class="img-box">
                                    <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" onClick={handleRightShow} alt="no img" />
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
                                            <li key={0} className="nav-item mx-3">
                                                <Link to="/" ><i class="bi bi-gear px-2"></i>Sign In</Link>
                                            </li>
                                            <li key={0} className="nav-item mx-3">
                                                <Link to="/" onClick={() => logoutUser()} ><i class="bi bi-gear px-2"></i>Sign Out</Link>
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
                            <div class="has-search flex-grow-1 ">
                                <span class="bi bi-search form-control-feedback p-2"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                            <CloseButton className="p-2" onClick={() => { setVisibleSearchBar(false); setActiveLink(activeLink); }} />
                        </div>) : (<></>)}


                    {/* searchbar section end  */}

                </div>
                {/* top navbar section end */}



                <div className='main-section d-flex'>
                    {/* <div className='section-color' style={(show) ? { marginLeft: "250px" } : { marginLeft: "0px" }}> */}
                    {/*left sidebar setion start */}
                    <div className='section-color' >
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
                            (
                                /* left side navbar with icons and title view */
                                <div className=' d-none d-lg-block'>
                                    <div className='verticleNavbar navbar-bg-color'>
                                        <p className="mb-0">
                                            <div >
                                                {/* <div className="profile-img">
                                                    <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="" className="img-fluid rounded-circle" />
                                                </div> */}
                                                {/* <h1 className="py-4 sitename text-capitalize">{(user !== null) ? (user.name) : ("admin")}</h1> */}
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
                                        </p>
                                    </div>
                                </div>
                            )}

                    </div>

                    {/* left side bar setion end */}
                    <Offcanvas show={show} onHide={handleClose} className="d-block d-lg-none navbar-bg-color" responsive="lg">
                        <Offcanvas.Header className=' px-4 text-white' closeButton>
                            <h1>Menu</h1>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>
                                <p className="mb-0">
                                    <div className=' px-2' >
                                        <nav id="navmenu" className="navmenu">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-primary">
                                                {props.navSections.map((section, i) => (
                                                    <li key={i} className="nav-item ">
                                                        <Link className={activeLink === section.secName ? "active" : ""}
                                                            onClick={() => { setActiveLink(section.secName); handleClose(); }}
                                                            to={section.linkTo} >
                                                            <i className={section.icon}></i>
                                                            {section.secName}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </p>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>


                    {/* pages section start */}

                    {/* if screeen size is greater than lg */}
                    <div className='container-fluid section-color h-100 d-none d-lg-block' style={(show) ? { marginLeft: "250px" } : { marginLeft: "100px" }}>
                        <Outlet />
                    </div>

                    {/* if screeen size is greater than lg */}
                    <div className='container-fluid section-color h-100 d-lg-none d-block'>
                        <Outlet />
                    </div>


                    {/* pages section end  */}
                </div>
            </div>

            {/* bottom position fixed navbar start */}
            <nav class="navbar fixed-bottom d-lg-none bottom-navbar-bg-color px-3">
                <div>
                    <Link className={activeLink === ("Dashboard" ? "active text-white" : "") + "text-dark"}
                        onClick={() => setActiveLink("Dashboard")}
                        to="/admin" >
                        <i className="bi bi-building-fill-dash px-2"></i>
                    </Link>
                </div>
                <div>
                    <Link className={activeLink === ("Order" ? "active text-white" : "") + "text-dark"}
                        onClick={() => setActiveLink("Order")}
                        to="/admin/order" >
                        <i className="bi bi-box-seam px-2"></i>
                    </Link>
                </div>
                <div>
                    <Link className={activeLink === ("Products" ? "active text-white" : "") + "text-dark"}
                        onClick={() => setActiveLink("Products")}
                        to="/admin/products" >
                        <i className="bi bi-card-list px-2"></i>
                    </Link>
                </div>
                <div>
                    <Link className={activeLink === ("Employee" ? "active text-white" : "") + "text-dark"}
                        onClick={() => setActiveLink("Employee")}
                        to="/admin/newEmployee" >
                        <i className="bi bi-person-add px-2"></i>
                    </Link>
                </div>
                <div>
                    <Link className={activeLink === ("Settings" ? "active text-white" : "") + "text-dark"}
                        onClick={() => setActiveLink("Settings")}
                        to="/admin/settings" >
                        <i className="bi bi-gear px-2"></i>
                    </Link>
                </div>
                <div>
                    <Link className={(visibleSearchBar === true ? "active text-white" : "") + "text-dark"}
                        onClick={() => { setVisibleSearchBar(true) }}>
                        <i className="bi bi-search px-2"></i>
                    </Link>
                </div>
            </nav>
            {/* bottom position fixed navbar start */}
        </div >
    )
}
export default Header

