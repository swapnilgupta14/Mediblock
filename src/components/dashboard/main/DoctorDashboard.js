import React, { useEffect, useState } from 'react';
import './DoctorDashboard.css';


const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [medicalRecords, setMedicalRecords] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API or database
    // Fetch list of patients
    fetchPatients();

    // Fetch appointment schedules
    fetchAppointments();

    // Fetch medical records
    fetchMedicalRecords();
  }, []);

  const fetchPatients = () => {
    // Simulating API request to fetch patients
    // Replace with your actual logic
    const patientsData = [
      { id: 1, name: 'Patient 1' },
      { id: 2, name: 'Patient 2' },
      // ...
    ];
    setPatients(patientsData);
  };

  const fetchAppointments = () => {
    // Simulating API request to fetch appointments
    // Replace with your actual logic
    const appointmentsData = [
      { id: 1, time: '9:00 AM' },
      { id: 2, time: '10:00 AM' },
      // ...
    ];
    setAppointments(appointmentsData);
  };

  const fetchMedicalRecords = () => {
    // Simulating API request to fetch medical records
    // Replace with your actual logic
    const medicalRecordsData = [
      { id: 1, patientId: 1, details: 'Medical record 1' },
      { id: 2, patientId: 2, details: 'Medical record 2' },
      // ...
    ];
    setMedicalRecords(medicalRecordsData);
  };

  return (
    <div className="doctor-dashboard">
      <h2>Doctor Dashboard</h2>

      {/* Display the list of patients */}
      <div className="patient-list">
        <h3>Patients</h3>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>{patient.name}</li>
          ))}
        </ul>
      </div>

      {/* Display appointment schedules */}
      <div className="appointment-schedules">
        <h3>Appointment Schedules</h3>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>{appointment.time}</li>
          ))}
        </ul>
      </div>

      {/* Access to medical records */}
      <div className="medical-records">
        <h3>Medical Records</h3>
        <ul>
          {medicalRecords.map((record) => (
            <li key={record.id}>
              Patient ID: {record.patientId}, Details: {record.details}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorDashboard;
