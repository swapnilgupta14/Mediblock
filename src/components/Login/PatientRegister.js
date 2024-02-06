import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css';
import PatientReg from './picture (58).png';

// -------------------------------------------Patient Registration function-------------------------------------------
const PatientRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    address: '',
  });

  // this is to check if the email and contact number are valid
  const [validEmail, setValidEmail] = useState(false);
  const [validContactNumber, setValidContactNumber] = useState(false);

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

  //this is to check if the form is valid
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/register/patient', formData);

        if (response.status === 201) {
          const data = response.data;
          alert('Patient Registration Successful, Now Login');
          console.log('Generated Patient ID:', data.patientId);
          // You can navigate to the login page or perform any other action here
          // Reset the form fields
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dateOfBirth: '',
            gender: '',
            contactNumber: '',
            address: '',
          });
        } else {
          alert('Patient Registration Failed, Register Again');
          // Handle registration failure here
          // Display an error message to the user
          // ...
        }
      } catch (error) {
        console.error('An error occurred during patient registration:', error);
      }
    }
  };

  //this is to check if the form is valid
  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      gender,
      contactNumber,
      address,
    } = formData;

    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      dateOfBirth.trim() === '' ||
      gender.trim() === '' ||
      contactNumber.trim() === '' ||
      address.trim() === ''
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

  //this code below is for the patient registration form
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          
          <div className="form-container">
            <div className="image-container">
              <img src={PatientReg} alt="patient" className="PatientRegImage" />
            </div>
            <form className="register-form" noValidate>
              <div className="form-row">
              <h2 className="register-title">Patient Registration</h2>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`register-input form-control ${formData.firstName ? 'is-valid' : 'is-invalid'}`}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`register-input form-control ${formData.lastName ? 'is-valid' : 'is-invalid'}`}
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
                  className={`register-input form-control ${formData.email ? (validEmail ? 'is-valid' : 'is-invalid') : ''}`}
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`register-input form-control ${formData.password ? 'is-valid' : 'is-invalid'}`}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  className={`register-input form-control ${formData.dateOfBirth ? 'is-valid' : 'is-invalid'}`}
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`register-input form-select ${formData.gender ? 'is-valid' : 'is-invalid'}`}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleContactNumberChange}
                  placeholder="Contact Number"
                  className={`register-input form-control ${formData.contactNumber ? (validContactNumber ? 'is-valid' : 'is-invalid') : ''}`}
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className={`register-input form-control ${formData.address ? 'is-valid' : 'is-invalid'}`}
                  required
                />
              </div>

              <button type="submit" className="register-button" onClick={handleSubmit}>
                Register
              </button>
              <div className="login-link">
            Already have an account? <Link to="/login/patient">Login Here</Link>
          </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
