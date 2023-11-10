

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css'
import { loginUser } from '../features/authentication/UserSlices';
import { Link, useNavigate } from 'react-router-dom';


const LoginComponent = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = () => {
       
        const { email, password } = formData;
    
        if (formData){
            // If user credentials match, dispatch login action and navigate to home page
            dispatch(loginUser(formData));
            Navigate("/");
        } else {
            // If no matching user is found, show an error message
            alert("Wrong email or password. Please try again.");
        }
    };
    


    return (
        <div>
            <div className='login-set'>

                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
                <div className='link'>
                <Link to={'/register'} >
                <span>Create Account</span>
            </Link>
                </div>
                <button onClick={handleLogin}>Login</button>

            </div>

        </div>
    );
};

export default LoginComponent;
