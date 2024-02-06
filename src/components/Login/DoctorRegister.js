import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css';
import DoctorReg1 from './picture (59).png';

//
const DoctorRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialization: '',
    contactNumber: '',
    address: '',
    licenseCertification: '',
  });
  
  const [validEmail, setValidEmail] = useState(false);
  const [validContactNumber, setValidContactNumber] = useState(false);
  const [successMessage, setSuccessMessage] = useState(' ');
  const [errorMessage, setErrorMessage] = useState(' ');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      email: value,
    });
    setValidEmail(emailRegex.test(value));
  };

  const handleContactNumberChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      contactNumber: value,
    });
    setValidContactNumber(contactNumberRegex.test(value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form fields
    if (validateForm()) {
      try {
        // Make a POST request to the doctor registration endpoint
        const response = await axios.post(
          'http://localhost:5000/api/register/doctor',
          formData
        );

        // Check the response status
        if (response.status === 201) {
          const data = response.data;
          console.log('Doctor Registration Successful');
          console.log('Generated Doctor ID:', data.doctorId);

          // Reset the form fields
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            specialization: '',
            contactNumber: '',
            address: '',
            licenseCertification: '',
          });

          // Show success message
          setSuccessMessage('Registration successful! Proceed to login.');

          // Clear error message
          setErrorMessage('');
        } else {
          console.log('Doctor Registration Failed');
          // Handle registration failure here
          // Display an error message to the user
          setErrorMessage('Registration failed. Please try again.');

          // Clear success message
          setSuccessMessage('');
        }
      } catch (error) {
        console.error('An error occurred during doctor registration:', error);
        // Handle the error appropriately, display an error message, etc.
        setErrorMessage('An error occurred during registration.');

        // Clear success message
        setSuccessMessage('');
      }
    }
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      specialization,
      contactNumber,
      address,
      licenseCertification,
    } = formData;

    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      specialization.trim() === '' ||
      contactNumber.trim() === '' ||
      address.trim() === '' ||
      licenseCertification.trim() === ''
    ) {
      alert('Please fill in all the required fields.');
      return false;
    }

    if (!validEmail) {
      alert('Please enter a valid email address.');
      return false;
    }

    if (!validContactNumber) {
      alert('Please enter a valid 10-digit contact number.');
      return false;
    }

    return true;
  };

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactNumberRegex = /^\d{10}$/;
  

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-container">
            <div className="image-container">
              
            </div>
            <form className="register-form">
            <h2 className="register-title">Doctor Registration</h2>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`register-input form-control ${formData.firstName ? 'is-valid' : 'is-invalid'
                    }`}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`register-input form-control ${formData.lastName ? 'is-valid' : 'is-invalid'
                    }`}
                    required
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  className={`register-input form-control ${formData.email? (validEmail ? 'is-valid' : 'is-invalid') :''
                    }`}
                    required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`register-input form-control ${formData.password ? 'is-valid' : 'is-invalid'
                    }`}
                    required
                />
              </div>
              
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className={`register-input form-select ${formData.specialization ? 'is-valid' : 'is-invalid'}`}
                  required
                >
                  <option value="">Select Specialization</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="c">C</option>
                </select>
              
              <div className="form-row">
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleContactNumberChange}
                  placeholder="Contact Number"
                  className={`register-input form-control ${formData.contactNumber
                      ? 'is-valid'
                      : 'is-invalid'
                    }`}
                    required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className={`register-input form-control ${formData.address ? 'is-valid' : 'is-invalid'
                    }`}
                    required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="licenseCertification"
                  value={formData.licenseCertification}
                  onChange={handleChange}
                  placeholder="License/Certification"
                  className={`register-input form-control ${formData.licenseCertification
                      ? 'is-valid'
                      : 'is-invalid'
                    }`}
                    required
                />
              </div>
              <button className="register-button" onClick={handleSubmit}>
                Register
              </button>
              <div className="login-link">
            Already have an account? <Link to="/login/doctor">Login Here</Link>
          </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;
