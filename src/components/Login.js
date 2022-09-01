import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Menu from "./Menu";

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
    let navigate = useNavigate();
    const login = () => {
        console.log(2222)
        console.log(loginValue,passValue);
        const trueLogin=names.some(item => item.login === loginValue && item.password === passValue)
        if(trueLogin){
            navigate("/menu");
            
        }
    }

    return (
        <div>
            <input type='text' value={loginValue} onChange={(e) => handleChange(e)} placeholder="Enter your name" />
            <input type='password' value={passValue} onChange={(e) => Changeit(e)} placeholder="Enter your password" />
            <button onClick={() => login()} >Login</button>
        </div>
    )
    
}

export default Login;
