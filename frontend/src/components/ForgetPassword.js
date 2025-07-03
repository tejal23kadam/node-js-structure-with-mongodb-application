import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:2000/api/forget-password', { email });
        setMsg(res.data.message);
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <button onClick={handleSubmit}>Send Reset Link</button>
            <p>{msg}</p>
        </div>
    );
}

export default ForgotPassword
