
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/slice/AuthSlice';
import { useEffect } from 'react';
import axios from 'axios';

const AuthProvider = ({ children }) => {
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
                        console.log("res.data" + JSON.stringify(res.data))
                        if (res.data.status === true) {
                                dispatch(setIsAuth(res.data.data.data));
                        }
                }
                catch (error) {
                }
        }

        useEffect(() => {
                verify();
        }, [])

        return (
                <>
                        {children}
                </>
        )
}

export default AuthProvider;

