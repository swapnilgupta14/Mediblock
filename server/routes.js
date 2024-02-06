// routes.js

// Import necessary dependencies and controllers
const express = require('express');
const router = express.Router();
const patientController = require('./controllers/patientController');
const doctorController = require('./controllers/doctorController');

router.get('/', (req, res) => {
  const jsonResponse = {
    message: 'Welcome to the project!',
    timestamp: Date.now()
  };
  res.json(jsonResponse);
});

// Handle patient registration
router.post('/register/patient', patientController.registerPatient);

// Handle patient login
router.post('/login/patient', patientController.loginPatient);

// Handle doctor registration
router.post('/register/doctor', doctorController.registerDoctor);

// Handle doctor login
router.post('/login/doctor', doctorController.loginDoctor);

// Handle patient dashboard
router.get('/dashboard', patientController.patientDashboard);

module.exports = router;
