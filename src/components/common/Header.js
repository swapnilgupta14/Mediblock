import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Custom CSS for Navbar

const Header = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Scroll to a specific section on the homepage
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to toggle the sticky header
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsHeaderSticky(true);
    } else {
      setIsHeaderSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle dropdown toggle
  const handleDropdownToggle = (event) => {
    event.preventDefault();
    const dropdownMenu = event.currentTarget.nextElementSibling;
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  };

  return (
    <header className={`app-header${isHeaderSticky ? ' sticky' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b>MediBlock</b>
        </Link>
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item dropdown" onClick={handleDropdownToggle}>
              <Link to="#" className="nav-link">
                Account
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/login/patient" className="dropdown-item">
                    Patient Login
                  </Link>
                </li>
                <li>
                  <Link to="/register/patient" className="dropdown-item">
                    Patient Register
                  </Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link to="/login/doctor" className="dropdown-item">
                    Doctor Login
                  </Link>
                </li>
                <li>
                  <Link to="/register/doctor" className="dropdown-item">
                    Doctor Register
                  </Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => scrollToSection('section3')}>
                Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => scrollToSection('section4')}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/KnowMyTeam" className="nav-link">
                Developers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
