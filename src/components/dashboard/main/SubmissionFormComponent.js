import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Form.css';

const SubmissionFormComponent = () => {
    const [showModal, setShowModal] = useState(false);
  
    const handleClose = () => {
      setShowModal(false);
    };
  
    const handleShow = () => {
      setShowModal(true);
    };
  return (
    <div className="page-container">
      {/* <div className="icon-bar">
        <a href="/dashboard/patient"><i className="fa fa-home"></i></a>
        <a className="active" href="/Dashboard/SubmissionForm"><i className="fa fa-file-text"></i></a>
        <a href="#"><i className="fa fa-user-md"></i></a>
        <a href="#"><i className="fa fa-medkit"></i></a>
        <a href="#"><i className="fa fa-globe"></i></a>
        <a href="#"><i className=""></i></a>
        <a href="#"><i className=""></i></a>
        <a href="#"><i className=""></i></a>
        <a href="#"><i className=""></i></a>
        <a href="#"><i className="material-icons">settings</i></a>
      </div> */}
      <div>
        <h1>Submission Form</h1>
        <Row>
          <Col md={4}>
          <Card>
            <div className="Card2-content">
              <h3>Personal Information</h3>
              <p>Login or create an account as a patient on our platform.</p>
              <div className="Card2-buttons">
              <Button variant="outline-primary" onClick={handleShow}>
                View
              </Button>
              <Button variant="outline-primary" onClick={handleShow}>
                Edit
              </Button>
              </div>
            </div>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal Title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              {/* Add your form content here */}
              <p>This is the modal form content.</p>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
              </Modal.Footer>
            </Modal>
          </Card>
          </Col>
          <Col md={4}>
            <Card>
            <div className="Card2-content">
              <h3>Medical History</h3>
              <p>Login or create an account as a patient on our platform.</p>
              <div className="Card2-buttons">
                <Link to="#" className="button-Card2 outlined-button">
                View
                </Link>
                <Link to="#" className="button-Card2 outlined-button">
                Edit
                </Link>
              </div>
            </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
            <div className="Card2-content">
              <h3>Immunization Record</h3>
              <p>Login or create an account as a patient on our platform.</p>
              <div className="Card2-buttons">
                <Link to="#" className="button-Card2 outlined-button">
                View
                </Link>
                <Link to="#" className="button-Card2 outlined-button">
                Edit
                </Link>
              </div>
            </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card>
            <div className="Card2-content">
              <h3>Prescriptions</h3>
              <p>Login or create an account as a patient on our platform.</p>
              <div className="Card2-buttons">
                <Link to="#" className="button-Card2 outlined-button">
                View
                </Link>
                <Link to="#" className="button-Card2 outlined-button">
                Edit
                </Link>
              </div>
            </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
            <div className="Card2-content">
              <h3>Reports Upload</h3>
              <p>Login or create an account as a patient on our platform.</p>
              <div className="Card2-buttons">
                <Link to="#" className="button-Card2 outlined-button">
                View
                </Link>
                <Link to="#" className="button-Card2 outlined-button">
                Edit
                </Link>
              </div>
            </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
            <div className="Card2-content">
              <h3>Appointments</h3>
              <p>Login or create an account as a patient on our platform.</p>
              <div className="Card2-buttons">
                <Link to="#" className="button-Card2 outlined-button">
                View
                </Link>
                <Link to="#" className="button-Card2 outlined-button">
                Edit
                </Link>
              </div>
            </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SubmissionFormComponent;