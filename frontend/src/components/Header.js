import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { unSetIsAuth } from '../redux/slice/AuthSlice';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header(props) {

    const [show, setShow] = useState(false);
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
    return (
        <div class="container-fluid">
            <div class="row ">
                <div className="col-lg-6 d-flex">
                    <div class="p-2 flex-grow-1">
                        <h1>LOGO</h1>
                    </div>
                    <div class="p-2 ">
                        <button type="button" class="navbar-mobile-toggler d-lg-none" data-toggle="app-sidebar-mobile">
                            <i class="bi bi-layout-text-sidebar" onClick={handleShow}></i>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 d-flex ">
                    <div class="p-2 flex-grow-1">
                        <div class="form-group has-search">
                            <span class="bi bi-search form-control-feedback"></span>
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                    </div>
                    <div class="p-2 ">
                        <button type="button" class="navbar-mobile-toggler" onClick={() => logoutUser()} data-toggle="app-sidebar-mobile">
                            Logout
                        </button>
                    </div>
                </div>

                <div class=" col-xl-2 col-lg-3">
                    <Navbar.Offcanvas className="offcanvas-start" show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className='bg-primary p-4' >
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

                <div class=" col-xl-10 col-lg-9 col-md-12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Header

