import React, { useState } from 'react';
import './PatientDashboard.css';
import './component.css';
import { Link, useHistory } from 'react-router-dom';
import { logout } from './apiServices';

// Import the components for each section
import HomeComponent from './HomeComponent';
import SubmissionFormComponent from './SubmissionFormComponent';
import DoctorsComponent from './DoctorsComponent';
import MedkitComponent from './MedkitComponent';
import WorldComponent from './WorldComponent';
import AppointmentsComponent from './AppointmentsComponent';
import SettingsComponent from './SettingsComponent';


const PatientDashboard = () => {
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token');
      history.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout failure, such as displaying an error message to the user
    }
  };

  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarItems = [
    {
      id: 'home',
      name: 'Home',
      icon: 'fa fa-home',
      component: HomeComponent
    },
    {
      id: 'submissionForm',
      name: 'Submission Form',
      icon: 'fa fa-file',
      component: SubmissionFormComponent
    },
    {
      id: 'doctors',
      name: 'Doctors',
      icon: 'fa fa-user-md',
      component: DoctorsComponent
    },
    {
      id: 'medkit',
      name: 'Medkit',
      icon: 'fa fa-medkit',
      component: MedkitComponent
    },
    {
      id: 'world',
      name: 'World',
      icon: 'fa fa-id-card',
      component: WorldComponent
    },
    {
      id: 'appointments',
      name: 'Appointments',
      icon: 'fa fa-cube',
      component: AppointmentsComponent
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: 'fa fa-cog',
      component: SettingsComponent
    }
  ];


  const SidebarItem = ({ item }) => (
    <li
      className={activeTab === item.id ? 'active' : ''}
      onClick={() => handleTabChange(item.id)}
    >
      <div>
        <i className={item.icon}></i>
        {!isSidebarCollapsed && <span>{item.name}</span>}
      </div>
    </li>
  );

  const RenderComponent = () => {
    const activeComponent = sidebarItems.find((item) => item.id === activeTab)?.component;
    return activeComponent ? <activeComponent /> : null;
  };

  return (
    <div className={`page-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>

      <div className="topbar">
        <Link className="topbar-brand" to="/" >
          <b>MediBlock</b>
        </Link>
        <Link className='topbar-divider' to="/" onClick={handleLogout}>Logout</Link>
      </div>
      
      <div className="sidebar-dsbrd">
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
          <li>
            <div className="toggle-icon" onClick={handleSidebarToggle}>
              <i className={`fa ${isSidebarCollapsed ? 'fa-angle-right' : 'fa-angle-left'}`}></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="dashboard-content">
          <h1>Patient Dashboard</h1>
          <RenderComponent />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;

