import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

const Footer = () => {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg'>
      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-1'>
            <MDBRow className='mt-3'></MDBRow>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              {/* what this above line mean - mx-auto is used to center the column horizontally with the help of margin
              . mb-4 is used to give margin bottom of 4 units. xl is used for extra large screen.
               */}
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                MEDIBLOCK
              </h6>
              <p>
                MediBlock is a web application that provides a platform for patients to book appointments with doctors and get their prescriptions online. 
                It also provides a platform for doctors to manage their appointments and patients.

              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Admin Panel
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Patient Panel
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Doctor Panel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Know About Team
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQs
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='icon me-2' />
                 PSIT Kanpur
              </p>
              <p>
                <MDBIcon icon='envelope' className='icon me-2' />
                mediblock@gmail.com
              </p>
              <p>
                <MDBIcon icon='phone' className='icon me-2' />
              + 01 234 567 88
              </p>
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
      </section>
      
      <div className='text-center p-4' style={{ backgroundColor: 'white' }}>
        Made with 🖤 by Team MediBlock
      </div>
      <section className='d-flex justify-content-center border-bottom'>
              <div className='mt-0 d-flex align-items-center justify-content-center mb-4'>
                <a href='#' className='me-4 text-reset'>
                  <MDBIcon fab icon='facebook-f' />
                </a>
                <a href='#' className='me-4 text-reset'>
                  <MDBIcon fab icon='twitter' />
                </a>
                <a href='#' className='me-4 text-reset'>
                  <MDBIcon fab icon='instagram' />
                </a>
                <a href='https://github.com/swapnilgupta14/MediBlock' className='me-4 text-reset'>
                  <MDBIcon fab icon='github' />
                </a>
                <a href='#' className='me-4 text-reset'>
                  <MDBIcon fab icon='linkedin' />
                </a>
              </div>
            </section>
    </MDBFooter>

  );
}

export default Footer;
