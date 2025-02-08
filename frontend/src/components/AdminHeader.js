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









    //make responsive each page by adding margin left property (i.e. dashboard page,order page etc)
    const [eachPageMargine, setEachPageMargine] = useState(0);

    const location = useLocation();
    const data = location.state;
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    {/* <nav class="navbar navbar-light bg-light">
                       
                        <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>

                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav> */}
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll ">
                                <Nav className="me-auto ">
                                    <Form className="d-flex ">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>

                                    </Form>
                                    <Button className="d-block d-lg-none" variant="outline-success">log out </Button>
                                </Nav>
                            </Navbar.Collapse>
                            <Button className="d-flex d-none d-lg-block" variant="outline-success">log out </Button>
                        </Container>
                    </Navbar>

                </div>

                <div class=" col-xl-2 col-lg-3 col-md-4">

                    <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                        Launch
                    </Button>

                    <Navbar.Offcanvas className="offcanvas-start" show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <p className="mb-0">
                                <div className='bg-primary' >
                                    <div className="profile-img">
                                        <img src={require('../images/User-Profile-PNG-Image.png')} alt="" className="img-fluid rounded-circle" />
                                    </div>
                                    <h1 className="sitename text-capitalize">{(data !== null) ? (data.name) : ("admin")}</h1>
                                    <nav id="navmenu" className="navmenu">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/admin"><i class="bi bi-building-fill-dash"></i>Dashboard</Link>
                                </li> */}
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
                            </p>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>

                <div class=" col-xl-10 col-lg-9 col-md-8">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
export default AdminHeader

