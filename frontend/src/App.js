import React, { useEffect } from 'react'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Products from './components/Products';
import Settings from './components/Settings';
import AdminLayout from './layout/AdminLayout';
import EnduserLayout from './layout/EnduserLayout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import NewEmployee from './components/NewEmployee';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector} from 'react-redux';
import IndexPage from './components/sections/IndexPage';

function App() {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  return (
    <>     
      <Routes>
        <Route path='/' element={
          (!isAuth) ?
            (<IndexPage />)
            : (
              (user.userType === 1) ? <Navigate to="/admin" /> : <Navigate to="/user" />
            )} />

        <Route path='/signup' element={(!isAuth) && <RegistrationPage />} />        
        <Route path='/login' element={(!isAuth) && <LoginPage />} />        

        {isAuth && <Route path="/admin" element={(user.userType === 1) ? <AdminLayout /> : <Navigate to="/" />} >
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Order />} />
          <Route path="products" element={<Products />} />
          <Route path="newEmployee" element={<NewEmployee />} />
          <Route path="settings" element={<Settings />} />
        </Route>}
        {isAuth && <Route path="/user" element={(user.userType === 0) ? <EnduserLayout /> : <Navigate to="/" />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        }
      </Routes>
    </>
  );
}

export default App;
