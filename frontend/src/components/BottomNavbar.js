import { useState } from 'react'
import { Link } from 'react-router-dom';

import CloseButton from 'react-bootstrap/esm/CloseButton';

const BottomNavbar = (props) => {
    const [activeLink, setActiveLink] = useState("Dashboard");
    const [visibleSearchBar, setVisibleSearchBar] = useState(true);


    return (
        <>
            {/*   searchbar section start  */}
            {(visibleSearchBar) ? (
                <div className='search-section d-lg-none d-flex w-100 p-4'>
                    <div className="has-search flex-grow-1 ">
                        <span className="bi bi-search form-control-feedback p-2"></span>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <CloseButton className="p-2" onClick={() => { setVisibleSearchBar(false); setActiveLink(activeLink); }} />
                </div>) : (<></>)}



            {/* searchbar section end  */}



            <div class="navbar1 d-lg-none bg-color">

                {props.navSections.map((section, i) => (
                    <div key={i} className="nav-item">
                        <Link className={activeLink === section.secName ? "active" : ""}
                            onClick={() => setActiveLink(section.secName)}
                            to={section.linkTo} >
                            <i className={section.icon}></i>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
export default BottomNavbar
