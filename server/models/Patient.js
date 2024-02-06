const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

// Compare password method
patientSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
