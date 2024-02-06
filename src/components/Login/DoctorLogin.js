import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import Cookies from 'js-cookie';

// -------------------------------------------Doctor Login function-------------------------------------------
const DoctorLogin = () => {
  const history = useHistory();
  const [doctorId, setDoctorId] = useState('');
  const [doctorPassword, setDoctorPassword] = useState('');

  // -------------------------------------------Handle doctor login-------------------------------------------
  const handleDoctorLogin = async (event) => {
    event.preventDefault();
    if (validateDoctorForm()) {
      try {
        // Perform login for doctors
        const response = await fetch('/api/login/doctor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: doctorId, password: doctorPassword }),
        });

        if (response.ok) {
          // Login successful
          const { token } = await response.json();
          // Store the token securely in a cookie
          Cookies.set('token', token, { secure: true, sameSite: 'strict' });
          console.log('Doctor Login Successful');
          history.push('/dashboard/doctor'); // Redirect to doctor dashboard
        } else {
          // Login failed
          console.log('Doctor Login Failed');
        }
      } catch (error) {
        console.error('An error occurred during doctor login:', error);
      }
    }
  };

  // ---------------------------Validate the doctor login form---------------------------
  const validateDoctorForm = () => {
    if (doctorId.trim() === '' || doctorPassword.trim() === '') {
      alert('Please fill in all the fields for doctor login.');
      return false;
    }
    return true;
  };

  // ---------------------------------Handle form field changes---------------------------------
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Doctor Login</h2>
          <form className="login-form">
            <input
              type="text"
              name="doctorId"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              placeholder="Doctor ID"
              className="login-input"
            />
            <input
              type="password"
              name="doctorPassword"
              value={doctorPassword}
              onChange={(e) => setDoctorPassword(e.target.value)}
              placeholder="Password"
              className="login-input"
            />
            <button className="login-button" onClick={handleDoctorLogin}>
              Login
            </button>
          </form>
          <div className="register-link">
            New User? <Link to="/register/doctor">Register Here</Link>
          </div>
          <div className="dashboard-link">
            <Link to="/dashboard/doctor">Access Doctor Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
