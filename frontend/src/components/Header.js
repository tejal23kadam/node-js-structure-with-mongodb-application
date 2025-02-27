import React, { useState, useEffect, use } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { unSetIsAuth } from '../redux/slice/AuthSlice';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';

function Header(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(!show);
    const handleShow = () => setShow(true);

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
        <div class="container-fluid">
            <div class="row ">

                <div className='d-flex top-navbar ' >
                    {/* {(!show) ? (
                        <div className='px-2 mx-2 mx-md-0 px-md-3 py-3 d-none d-lg-block'>
                            <img src={require('../images/logo.png')} />
                        </div>
                    ) :
                        (
                            <div>
                                <div class="py-4 px-4 bd-highlight col-xl-2 d-none d-lg-block ">
                                    <img src={require('../images/logo.png')} />
                                </div>
                            </div>
                        )} */}
                    <div>
                        <div class="py-4 px-4 bd-highlight col-xl-2 d-none d-lg-block ">
                            <img src={require('../images/logo.png')} />
                        </div>
                    </div>
                    <div class=" py-4 px-2 ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={handleClose} class="bi bi-text-indent-right text-center" viewBox="0 0 16 16">
                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 
                                                    1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 
                                                    0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                    <div class="p-2 flex-grow-1 d-none d-lg-block">
                        <div class="form-group has-search">
                            <span class="bi bi-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div class=" py-4 px-2 d-block flex-grow-1 d-lg-none text-center ">
                        <img src={require('../images/logo.png')} />
                    </div>

                    <div class=" py-4 px-2 d-none d-lg-block ">
                        <Link to="/"><i className="bi bi-bell-fill" onClick={handleShow}></i>                                         </Link>
                    </div>
                    <div class="py-4 px-2 d-none d-lg-block">
                        <Link to="/"><i className='bi bi-gear'></i></Link>
                    </div>
                    {/* <div class="py-1 px-2 ">
                        <Dropdown>
                            <Dropdown.Toggle variant="transparent" className='btn-outline-light text-dark '>
                                <div class="profile">
                                    <div class="img-box">
                                        <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="some user image" />
                                    </div>
                                    <div class="user text-capitalize text-start d-none d-lg-block">
                                        <h4>{(user !== null) ? (user.name) : ("admin")}</h4>
                                        <p>FrontEnd Developer </p>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item ><i class="bi bi-gear px-2"></i>Sign In</Dropdown.Item>
                                <Dropdown.Item><i class="bi bi-gear px-2"></i>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div> */}
                    <div class="py-3 px-2 ">
                        <div class="profile">
                            <div class="img-box">
                                <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" onClick={handleRightShow} alt="some user image" />
                            </div>
                        </div>
                        <Offcanvas show={rightshow} onHide={handleRightClose} placement='end'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li key={0} className="nav-item">
                                        <Link to="/" ><i class="bi bi-gear px-2"></i>Sign In</Link>
                                    </li>
                                    <li key={0} className="nav-item">
                                        <Link to="/" onClick={() => logoutUser()} ><i class="bi bi-gear px-2"></i>Sign Out</Link>
                                    </li>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                    {/* searchbar section start  */}
                    {(visibleSearchBar) ? (
                        <div className='search-section d-lg-none d-flex w-100 p-4'>
                            <div class="has-search flex-grow-1 ">
                                <span class="bi bi-search form-control-feedback p-2"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                            <CloseButton className="p-2" onClick={() => setVisibleSearchBar(false)} />
                        </div>) : (<></>)}


                    {/* searchbar section end  */}

                </div>
                {/* top navbar section end */}


                {/* offcanvas setion start */}
                <div className='d-flex main-section'>
                    {(!show) ? (
                        <div className='px-1 px-md-3 py-2 d-none d-lg-block verticleNavbar'>
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
                            <div className='verticleNavbar'>
                                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                                    <Offcanvas.Header className=' px-4' closeButton>
                                        <img src={require('../images/logo.png')} />
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className='px-4'>
                                            <p className="mb-0">
                                                <div className=' px-2' >
                                                    <div className="profile-img">
                                                        <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="" className="img-fluid rounded-circle" />
                                                    </div>
                                                    <h1 className="sitename text-capitalize">{(user !== null) ? (user.name) : ("admin")}</h1>
                                                    <nav id="navmenu" className="navmenu">
                                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        )}
                    {/* offcanvas setion end */}



                    {/* pages section start */}

                    <div className='container-fluid section-color h-100'>
                        <Outlet />
                    </div>
                    {/* pages section end  */}


                </div>
            </div>

            <div className='d-block d-lg-none'>
                <nav id="navmenu" className="navmenu">
                    <ul className="navbar-nav me-auto mb-lg-0 list-group-horizontal bottom-navbar d-flex justify-content-around">
                        {props.navSections.map((section, i) => (
                            <li key={i} className="nav-item d-flex justify-content-between flex-column ">
                                <Link className={activeLink === section.secName ? "active text-white" : "" + "text-dark"}
                                    onClick={() => setActiveLink(section.secName)}
                                    to={section.linkTo} >
                                    <i className={section.icon}></i>
                                </Link>
                            </li>
                        ))}
                        <li className={(activeLink) ? 'text-dark' : " text-white " + " nav-item d-flex justify-content-between flex-column"} onClick={() => setVisibleSearchBar(true)}>
                            <i class="bi bi-search"></i>

                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}
export default Header

