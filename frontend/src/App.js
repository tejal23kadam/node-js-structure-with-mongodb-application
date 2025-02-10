import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios';
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

import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth } from './redux/slice/AuthSlice';







function App() {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const verify = async () => {
    try {

      const tokenStr = localStorage.getItem("token");
      const config = {
        headers: {
          "Authorization": `${tokenStr}`
        }
      }
      const res = await axios.post('http://localhost:2000/api/authVerify', {}, config)

      if (res.data.status === true) {
        dispatch(setIsAuth(res.data.data.data));
      }
    }
    catch (error) {
    }
  }

  useEffect(() => {
    verify();
  },[])

  return (
    <>
      {/* <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<RegistrationPage />} />

        {isAuth && <Route path="/admin" element={(user.userType === 1) ? <AdminLayout /> : <Navigate to="/" />} >
          <Route index element={<Dashboard123 />} />
          <Route path="order" element={<Order />} />
          <Route path="products" element={<Products />} />
          <Route path="newEmployee" element={<NewEmployee />} />
          <Route path="settings" element={<Settings />} />
        </Route>}
        {isAuth ? (<Route path="/" element={<EnduserLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        )
          : (
            <>
               {navigate("/login")}
            </>
          )}
      </Routes> */}

      <Routes>
        <Route path='/' element={
          (!isAuth) ?
            (<LoginPage />)
            : (
              (user.userType === 1) ? <Navigate to="/admin" /> : <Navigate to="/user" />
            )} />
        <Route path='/signup' element={(!isAuth) && <RegistrationPage />} />

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
