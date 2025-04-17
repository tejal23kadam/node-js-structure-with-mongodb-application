
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCategoryFilter } from '../../redux/slice/CategoryFilterSlice';


function NavBar() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light navigation">                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto main-nav ">
                                <li class="nav-item dropdown ">
                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category <span><i class="bi bi-chevron-compact-down"></i></span>
                                    </a>
                                    {/* <!-- Dropdown list --> */}
                                    <ul class="dropdown-menu">
                                        <li className=" dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('audio')) }}><Link to="/audio">audio</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('appliances')) }} ><Link to="/appliances">appliances</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('gaming')) }}><Link to="/gaming">gaming</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('laptop')) }}><Link to="/laptop">laptop</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('mobile')) }}><Link to="/mobile">mobile</Link></li>
                                        <li className="dropdown-item nav-item" onClick={() => { dispatch(addToCategoryFilter('tv')) }}><Link to="/tv">tv</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link to="/about">About US</Link></li>
                                <li className="nav-item"><Link to="/eWest">E-Waste</Link></li>
                                <li className="nav-item"><Link to="/contactUs">Contact Us</Link></li>
                                <li className="nav-item"><Link to="/termsAndConditions">Terms & Conditions</Link></li>
                                <li class="nav-item">
                                    <div className='cartCount'>
                                        <Link to="/cartData"><i className="bi bi-cart"></i></Link>
                                        <span class="quantity">{cart.length}</span>
                                    </div>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default NavBar 