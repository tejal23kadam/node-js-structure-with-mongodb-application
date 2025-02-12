import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { unSetIsAuth } from '../redux/slice/AuthSlice';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Dropdown } from 'react-bootstrap';
import Modal from 'react-modal';

function Header(props) {

    const [show, setShow] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const naviget = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const logoutUser = () => {
        localStorage.removeItem("token");
        dispatch(unSetIsAuth());
        naviget("/");

    }
    const customStyles = {
        content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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

    return (
        <div class="container-fluid">
            <div class="row ">
                <div className='top-navbar'>
                    <div class="container-fluid">
                        <div class="row ">

                            <div class="d-flex">
                                <div class="px-5 py-3 bd-highlight d-none d-lg-block col-xl-2 col-lg-3">
                                    <h1>LOGO</h1>
                                </div>


                                <button type="button" class="navbar-mobile-toggler border-0 " data-toggle="app-sidebar-mobile">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white" }} width="30" height="30" onClick={handleShow} class="bi bi-text-indent-right" viewBox="0 0 16 16">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={openModal} width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
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


                            </div>

                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal" >
                                <div className="container bg-light">

                                    <div className="row rounded-border">
                                        <div className="col-12 text-end">
                                            <button onClick={closeModal}>X</button>
                                        </div>
                                        <div className="col-12 ">
                                            <div class="form-group has-search">
                                                <span class="bi bi-search form-control-feedback"></span>
                                                <input type="text" class="form-control" placeholder="Search" />

                                            </div>

                                        </div>
                                    </div >
                                </div>


                            </Modal >
                            {/* 
                            <div className="d-flex col-lg-2 ">
                                <div >
                                    <div class="my-3 px-4 col-lg-2 col-md-6">
                                        <h1>LOGO</h1>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-right">
                                    <div class=" py-4 px-2 ">
                                        <button type="button" class="navbar-mobile-toggler border-0 " data-toggle="app-sidebar-mobile">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white" }} width="30" height="30" onClick={handleShow} class="bi bi-text-indent-right" viewBox="0 0 16 16">
                                                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 
                                                    1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 
                                                    0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="p-2 flex-grow-1 d-none d-lg-block">
                                        <div class="form-group has-search">
                                            <span class="bi bi-search form-control-feedback"></span>
                                            <input type="text" class="form-control" placeholder="Search" />
                                        </div>
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
                                                    <div class="user text-capitalize text-start">
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
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div class=" col-xl-2 col-lg-3 h-100">
                    <Navbar.Offcanvas className="offcanvas-start" show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className=' p-4' >
                                <div className="profile-img">
                                    <img src={require('../images/User-Profile-PNG-Image.png')} alt="" className="img-fluid rounded-circle" />
                                </div>
                                <h1 className="sitename text-capitalize">{(user !== null) ? (user.name) : ("admin")}</h1>
                                <nav id="navmenu" className="navmenu">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        {props.navSections.map((section, i) => (
                                            <li key={i} className="nav-item">
                                                <Link className="nav-link" to={section.linkTo} ><i class={section.icon}></i>{section.secName}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>

                <div class=" col-xl-10 col-lg-9 col-md-12 section-color mt-1 h-100" >
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Header

