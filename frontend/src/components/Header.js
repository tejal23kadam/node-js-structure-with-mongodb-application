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
                {/* offcanvas setion start */}
                <div className='d-flex '>
                    {(!show) ? (
                        <div className='px-2 mx-2 mx-md-0 px-md-3 py-3 d-none d-lg-block'>
                            <h1>L</h1>
                        </div>
                    ) :
                        (
                            <div>
                                <div class="px-5 py-3 bd-highlight col-xl-2 d-none d-lg-block ">
                                    <h1>LOGO</h1>
                                </div>

                            </div>
                        )}
                    {/* offcanvas setion end */}



                    {/* pages section start */}


                    <button className='border-0 bg-light' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={handleClose} class="bi bi-text-indent-right" viewBox="0 0 16 16">
                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 
                                                    1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 
                                                    0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                    <div class="p-2 flex-grow-1 d-none d-lg-block">
                        <div class="form-group has-search">
                            <span class="bi bi-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div class="p-lg-4 px-2 py-4 flex-grow-1 d-block d-lg-none">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setVisibleSearchBar(true)} width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 
                                        1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5
                                         0 0 1 11 0" />
                        </svg>
                    </div>
                    <div class=" py-4 px-2 ">
                        <Link to="/"><i className="bi bi-bell-fill" onClick={handleShow}></i>                                         </Link>
                    </div>
                    <div class="py-4 px-2">
                        <Link to="/"><i className='bi bi-gear'></i></Link>
                    </div>
                    <div class="py-1 px-2 ">
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
                    </div>
                    {(visibleSearchBar) ? (
                        <div className='search-section d-lg-none d-flex w-100 p-4'>
                            <div class="has-search flex-grow-1 ">
                                <span class="bi bi-search form-control-feedback p-2"></span>
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                            <CloseButton className="p-2" onClick={() => setVisibleSearchBar(false)} />
                        </div>) : (<></>)}


                    {/* pages section end  */}

                </div>


                {/* offcanvas setion start */}
                <div className='d-flex'>
                    {(!show) ? (
                        <div className='px-1 px-md-3 py-2 d-none d-lg-block'>

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
                            <div>
                                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                                    <Offcanvas.Header  className=' px-4' closeButton>
                                        <h1>LOGO</h1>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div style={{ maxWidth: '200px' }}>
                                            <p className="mb-0">
                                                <div className=' px-2' >                                                   
                                                    <div className="profile-img">
                                                        <img src={require('../images/User-Profile-PNG-Image.png')} alt="" className="img-fluid rounded-circle" />
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

                    <div className='section-color h-100 flex-grow-1'>
                        <Outlet />
                    </div>                  
                    {/* pages section end  */}    

                </div>   
            </div>
        </div >
    )
}
export default Header

