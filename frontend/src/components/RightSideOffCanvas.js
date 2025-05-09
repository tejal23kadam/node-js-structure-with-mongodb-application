import Offcanvas from 'react-bootstrap/Offcanvas';
const RightSideOffCanvas = () => {
    const [rightshow, setRightShow] = useState(false);
    const handleRightClose = () => setRightShow(false);
    

    return (
        <>
            <div >
                <Offcanvas show={rightshow} onHide={handleRightClose} placement='end' className='navbar-bg-color'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="sitename text-capitalize text-center text-white">{(user !== null) ? (user.name) : ("User")}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <ul className="navmenu navbar-nav me-auto mb-2 mb-lg-0">
                            <li key={0} className="nav-item mx-3">
                                <Link to="/" onClick={() => logoutUser()} ><i className="bi bi-gear px-2"></i>Sign Out</Link>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default RightSideOffCanvas