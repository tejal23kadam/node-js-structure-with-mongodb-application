import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Settings from './components/Settings';
import AdminLayout from './layout/AdminLayout';
import NewProduct from './components/NewProducts';
import EnduserLayout from './layout/EnduserLayout';
import NewEmployee from './components/NewEmployee';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from 'react-redux';
import IndexPage from './components/sections/IndexPage';
import AboutUs from './components/sections/AboutUs';
import AudioCategory from './components/sections/AudioCategory';
import AppliancesCategory from './components/sections/AppliancesCategory';
import GamingCategory from './components/sections/GamingCategory';
import LaptopCategory from './components/sections/LaptopCategory';
import MobileCategory from './components/sections/MobileCategory';
import TvCategory from './components/sections/TvCategory';
import ShoppingCartData from './components/sections/ShoppingCartData';
import SingleProductDetailPageNew from './components/singleProductDetailComponent/SingleProductDetailPageNew';
import ContactUs from './components/sections/ContactUs';
import EWest from './components/sections/EWest';
import NewCategory from './components/NewCategory';


function App() {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Routes>
        {/* <Route path='/' element={
          (!isAuth) ?
            (<EnduserLayout />)
            : (
              (user.userType === 1) ? <Navigate to="/admin" /> : <Navigate to="/user" />
            )} />
 */}

        <Route path='/' element={<EnduserLayout />} />


        <Route path='/signup' element={(!isAuth) && <RegistrationPage />} />
        <Route path='/login' element={(!isAuth) && <LoginPage />} />

        {isAuth && <Route path="/admin" element={(user.userType === 1) ? <AdminLayout /> : <Navigate to="/" />} >
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Order />} />
          <Route path="products" element={<NewProduct />} />
          <Route path="newEmployee" element={<NewEmployee />} />
          <Route path="newCategory" element={<NewCategory />} />
          <Route path="settings" element={<Settings />} />
        </Route>}
        {/* {isAuth && <Route path="/user" element={(user.userType === 0) ? <EnduserLayout /> : <Navigate to="/" />}> */}
        {isAuth && <Route path="/user" element={<IndexPage />}>

          <Route index element={<IndexPage />} />
        </Route>
        }
        <Route path="about" element={<AboutUs />} />
        <Route path="audio" element={<AudioCategory />} />
        <Route path="appliances" element={<AppliancesCategory />} />
        <Route path="gaming" element={<GamingCategory />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="laptop" element={<LaptopCategory />} />
        <Route path="mobile" element={<MobileCategory />} />
        <Route path="tv" element={<TvCategory />} />
        <Route path="product-details" element={<SingleProductDetailPageNew />} />
        <Route path="cartData" element={<ShoppingCartData />} />
        <Route path="eWest" element={<EWest />} />
      </Routes>
    </>
  );
}

export default App;
