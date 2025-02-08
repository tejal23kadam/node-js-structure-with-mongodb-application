import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvasContent from './OffCanvasContent';

function AdminHeader() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation();
    const data = location.state;

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
                        <button type="button" class="navbar-mobile-toggler" data-toggle="app-sidebar-mobile">
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
                            <div className='bg-primary p-5' >
                                <div className="profile-img">
                                    <img src={require('../images/User-Profile-PNG-Image.png')} alt="" className="img-fluid rounded-circle" />
                                </div>
                                <h1 className="sitename text-capitalize">{(data !== null) ? (data.name) : ("admin")}</h1>
                                <nav id="navmenu" className="navmenu">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin"><i class="bi bi-building-fill-dash"></i>Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/order"><i class="bi bi-box-seam"></i>order</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/products"><i class="bi bi-card-list"></i>products</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/newEmployee"><i class="bi bi-person-add"></i>New Employee</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin/settings"><i class="bi bi-gear"></i>settings</Link>
                                        </li>
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
export default AdminHeader

