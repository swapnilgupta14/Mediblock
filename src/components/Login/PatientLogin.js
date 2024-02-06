import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import apiService from './apiServices.js'; // Update the path to the apiService file

const PatientLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiService.post('/login/patient', formData);

      if (response.status === 200) {
        const { token } = response.data;
        
        localStorage.setItem('token', token);
        console.log('Token:', token);
        alert('Login successful!');
        history.push('/dashboard/patient');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Patient Login</h2>
          <form className="login-form">
            <div className="form-row">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="login-input"
              />
            </div>
            <div className="form-row">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="login-input"
              />
            </div>
            <button className="login-button" onClick={handleSubmit}>
              Login
            </button>
          </form>
          <div className="register-link">
            Don't have an account? <Link to="/register/patient">Register Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
