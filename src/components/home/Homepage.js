import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import './Card.css';
import Image0 from './HomeImages/NewPictures (3).gif';
import CardImage1 from './HomeImages/picture (5).png';
import CardImage2 from './HomeImages/picture (6).png';
import Image from './HomeImages/picture (34).png';
import Image2 from './HomeImages/photo (3).png';
import CardImage3 from './HomeImages/picture (7).png'
import CardImage4 from './HomeImages/picture (8).png'
import CardImage5 from './HomeImages/picture (9).png'
import CardImage6 from './HomeImages/picture (10).png'
import CardImage7 from './HomeImages/picture (11).png'
import Header from '../common/Header';
function HomePage() {
  return (
    <div className="home-container">
      {/* section - 1 --------------------------------------------------------*/}
      <section className="section1" id="section1">
        <div className="row">
          <div className="col-md-6">
            <div className="section1-text">
              <h1>Welcome to MediBlock.</h1>
              <h3>Revolutionizing Healthcare system with Blockcahin and AI.</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image0">
              <img src={Image0} alt={Image0} className="image0" />
            </div>
          </div>
        </div>
      </section>
      {/* section - 2 ---------------------------------------------------------*/}
      <section className="section2" id="section2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card-container">
                <div className="card">
                  <img src={CardImage1} alt="Card 1" className="card-image" />
                  <div className="card-content">
                    <h3>Patient</h3>
                    <p>Login or create an account as a patient on our platform.</p>
                    <div className="card-buttons">
                      <Link to="/login/patient" className="button-card outlined-button">
                        Login
                      </Link>
                      <Link to="/register/patient" className="button-card outlined-button">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <img src={CardImage2} alt="Card 2" className="card-image" />
                  <div className="card-content">
                    <h3>Doctor</h3>
                    <p>Login or create an account as a doctor on our platform.</p>
                    <div className="card-buttons">
                      <Link to="/login/doctor" className="button-card outlined-button">
                        Login
                      </Link>
                      <Link to="/register/doctor" className="button-card outlined-button">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section2-text">
                <h1>Privacy, security, control and assistance</h1>
                <Link to="/getting-started" className="button-section2">
                  Get Started
                  <i className="fa-duotone fa-users-medical" style={{ color: 'white' }}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section -3 ------------------------------------------------------------*/}
      <section className="section3" id="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="Section3-text">
                <h1>Overview</h1>
                <p>
                  We are a cutting-edge healthcare platform revolutionizing medical records.
                  With a focus on privacy, security, and convenience, it empowers individuals
                  to control their health information. Our blockchain technology ensures data
                  integrity, while the user-friendly interface facilitates seamless record management.
                  By leveraging blockchain, data integrity is ensured, preventing unauthorized
                  access and tampering. The Artificial Inrelligence powered user-friendly
                  interface facilitates seamless record management, allowing patients and Healthcare providers
                  to access and manage their medical records easily.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-section3">
                <img src={Image} alt={Image} className="image1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section - 5 ---------------------------------------------------------------------------------- */}
      <section className="section5" id="section5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="Section4-img">
                <img src={Image2} alt={Image2} className="image-section4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section - 4 ---------------------------------------------------------------------------------- */}
      <section className="section4" id="section4">
        <div className="container">
          <div className="card1-container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="card1-container">
                <div className="card1">
                  <a href="your_link_here">
                    <i className="fas fa-id-card fa-5x"></i>
                  </a>
                  <p>Text below the first icon</p>
                </div>
                <div className="card1">
                  <a href="your_link_here">
                    <i className="fas fa-id-card fa-5x"></i>
                  </a>
                  <p>Text below the second icon</p>
                </div>
                <div className="card1">
                  <a href="your_link_here">
                    <i className="fas fa-id-card fa-5x"></i>
                  </a>
                  <p>Text below the third icon</p>
                </div>
                <div className="card1">
                  <a href="your_link_here">
                    <i className="fas fa-id-card fa-5x"></i>
                  </a>
                  <p>Text below the fourth icon Text below the fourth icon Text below the fourth icon Text below the fourth icon</p>
                </div>
                <div className="card1">
                  <a href="your_link_here">
                    <i className="fas fa-check-square fa-5x"></i>
                  </a>
                  <p>Text below the fifth icon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Link to="/dashboard/patient" className="button-section4">
        Patient Dashboard
        <i className="fa-duotone fa-users" style={{ color: 'white' }}></i>
      </Link>
      <Link to="/dashboard/doctor" className="button-section4">
        Doctor Dashboard
        <i className="fa-duotone fa-users-medical" style={{ color: 'white' }}></i>
      </Link>
    </div>
  );
}

export default HomePage;
