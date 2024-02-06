import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ service }) => {
  return (
    <div className="card">
      <h2 className="card-title">{service.title}</h2>
      <i className={`card-icon ${service.icon}`} />
      <p className="card-description">{service.description}</p>
      <div className="card-button-container">
        <Link to="/login/patient" className="card-button">
          Get Started with Patient
        </Link>
        <Link to="/login/doctor" className="card-button">
          Get Started with Doctor
        </Link>
      </div>
    </div>
  );
};

export default Card;