import React, { useState } from 'react';

function Login() {
    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('')
    const names = [
        { login: 'zaruhi', password: 'pass' },
        { login: 'karine', password: 'pass' },
        { login: 'lilit', password: 'pass' },
        { login: 'verjine', password: 'pass' }
    ]

    const handleChange = (e) => {
        setLoginValue(e.target.value);
    }
    const Changeit = (e) => {
        setPassValue(e.target.value);
    }

    const login = () => {
        console.log(loginValue);
    }

    

    return (
        <div>
            <input type='text' value={loginValue} onChange={(e) => handleChange(e)} placeholder="Enter your name" />
            <input type='password' value={passValue} onChange={(e) => Changeit(e)} placeholder="Enter your password" />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;
