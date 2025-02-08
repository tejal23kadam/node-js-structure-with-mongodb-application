import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function EndUserHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [showHide, setShowHide] = useState("header");
    const location = useLocation();
    const data = location.state;
    const toggle = () => {
        setIsOpen(!isOpen);
        !isOpen ? setShowHide("header") : setShowHide("leftZero");
        showHide !== "header" ? setShowHide("header") : setShowHide("leftZero");
    }
    return (
        <div id="header" className="header dark-background d-flex flex-column">
            <i className="headerToggle d-xl-none " onClick={toggle}>
                <span className={isOpen ? 'bi bi-x' : 'bi bi-list'}></span>
            </i>
            <div className={showHide}>
                <div className="profile-img">
                    <img src={require('../images/User-Profile-PNG-Image.png')} alt="" className="img-fluid rounded-circle" />
                </div>
                <h1 className="sitename text-capitalize">
                    {
                        (data !== null) ? (data.name) : ("user")
                    }
                </h1>
                <nav id="navmenu" className="navmenu">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link class="nav-link" to="/user"><i class="bi bi-house"></i>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/user/about"><i class="bi bi-person"></i>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/user/contact"><i class="bi bi-telephone navicon"></i>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default EndUserHeader