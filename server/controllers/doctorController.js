const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const Doctor = require('../models/doctor');

const generateToken = (doctorId, userType) => {
  const payload = {
    doctorId,
    userType,
  };
  const secretKey = '1234 get on the dance floor';
  const options = {
    expiresIn: '1h', // Token expiration time
  };
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

exports.registerDoctor = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      specialization,
      contactNumber,
      address,
      licensenum,
    } = req.body;

    // Validate the required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !specialization ||
      !contactNumber ||
      !address ||
      !licensenum
    ) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if a doctor with the same email already exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Create a new doctor instance
    const doctor = new Doctor({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      specialization,
      contactNumber,
      address,
      licensenum,
    });

    // ------------------Save the doctor to the database----------------------
    await doctor.save();

    //-------------------Generate a token for the registered doctor-------------------
    const token = generateToken(doctor._id, 'doctor');

    res.status(201).json({ message: 'Doctor registered successfully.', doctor, token });
  } catch (error) {
    console.error('An error occurred during doctor registration:', error);
    res.status(500).json({ message: 'An error occurred during doctor registration.', error });
  }
};
// --------------------------------------------------Doctor Login logic- swap --------------------------------------------------
exports.loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found.' });
    }
    if (doctor) {
      console.log(doctor);}

    const isPasswordMatch = await bcrypt.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    const token = generateToken(doctor._id, 'doctor');

    res.status(200).json({ message: 'Login Successful', token });
  } catch (error) {
    console.error('An error occurred during doctor login:', error);
    res.status(500).json({ message: 'An error occurred during doctor login.', error });
  }
};
