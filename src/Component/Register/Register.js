import React, { useState } from 'react';
import './Register.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/authentication/UserSlices';
import {  useNavigate } from 'react-router-dom';

const Registration = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: 'male',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        dispatch(registerUser(formData))

        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            gender: 'male',
            username: ''
        });
        navigate("/login")

    };

    return (
        <div className="registration-container">
            <div className='register'>

                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="name" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    </div>


                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label style={{ color: 'white' }}>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                   
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
