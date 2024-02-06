// this API contains all the functions related to patient registration and login 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Patient = require('../models/Patient');
const { set } = require('mongoose');

// --------------------------------------------------Generate Token function - swap --------------------------------------------------
const generateToken = (userId, userType) => {
  const payload = {
    userId,
    userType,
  };
  const secretKey = '1234 get on the dance floor';
  const options = {
    expiresIn: '1h', // Token expiration time
  };
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

// --------------------------------------------------Patient Registration logic - swap --------------------------------------------------
exports.registerPatient = async (req, res) => {
  try {
    const { firstName, lastName, email, password, dateOfBirth, gender, contactNumber, address } = req.body;

    // Validate the required fields
    if (!firstName || !lastName || !email || !password || !dateOfBirth || !gender || !contactNumber || !address) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if a patient with the same email already exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new patient instance
    const patient = new Patient({
      firstName,lastName, email,password: hashedPassword,dateOfBirth,gender,contactNumber,address,
    });

    // Save the patient to the database
    await patient.save();

    // Generate a token for the registered patient
    const token = generateToken(patient._id, 'patient');

    res.status(201).json({ message: 'Patient registered successfully.', patient, token });
  } catch (error) {
    console.error('An error occurred during patient registration:', error);
    res.status(500).json({ message: 'An error occurred during patient registration.', error });
  }
};

// --------------------------------------------------Patient Login logic- swap --------------------------------------------------
exports.loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the email and password
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Check if a patient with the provided email exists in the database
    const patient = await Patient.findOne({ email });
    if (!patient) {
      alert("Patient does not exist, Login failed");
      return res.status(401).json({ message: 'Patient does not exist' });
    }
    if(patient){
      console.log(patient.firstName, patient.lastName, "Patient found");
    }

    // Verify the password
    const isPasswordValid = await patient.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password is not correct' });
    }

    // Generate a token for the authenticated patient
    const token = generateToken(patient._id, 'patient');
    //store the token in the database
    patient.token = token;
    await patient.save();

    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('An error occurred during login:', error);
    res.status(500).json({ message: 'An error occurred during login.', error });
  }
};

// --------------------------------------------------Patient Dashboard method- swap --------------------------------------------------

exports.patientDashboard = async (req, res) => {
  try {
    // Fetch the patient's information from the database
    const patient = await Patient.findById(req.userId);

    // Send the patient's information as a response
    res.status(200).json({ patient });
  } catch (error) {
    console.error('An error occurred while fetching patient dashboard:', error);
    res.status(500).json({ message: 'An error occurred while fetching patient dashboard.', error });
  }

};