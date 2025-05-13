import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { setCanvasState } from '../redux/slice/RightSideOffCanvasSlice';
import RightSideOffCanvas from './RightSideOffCanvas';

const BottomNavbar = () => {
    const [activeLink, setActiveLink] = useState("Dashboard");
    const [visibleSearchBar, setVisibleSearchBar] = useState(false);


    return (
        <>
            {/* searchbar section start  */}
            {/* {(visibleSearchBar) ? (
                <div className='search-section d-lg-none d-flex w-100 p-4'>
                    <div className="has-search flex-grow-1 ">
                        <span className="bi bi-search form-control-feedback p-2"></span>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <CloseButton className="p-2" onClick={() => { setVisibleSearchBar(false); setActiveLink(activeLink); }} />
                </div>) : (<></>)}


*/}
            {/* searchbar section end  */}


            <nav className="navbar d-lg-none bottom-navbar bg-color px-3">
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
                        to="/admin/NewProduct" >
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
                {/* <div>
                    <Link className={(visibleSearchBar === true ? "active text-white" : "") + "text-dark"}
                        onClick={() => { setVisibleSearchBar(true) }}>
                        <i className="bi bi-search px-2"></i>
                    </Link>
                </div> */}
            </nav>
        </>
    )
}
export default BottomNavbar
