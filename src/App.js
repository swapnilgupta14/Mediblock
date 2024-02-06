import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Homepage';
import PatientLogin from './components/Login/PatientLogin';
import DoctorLogin from './components/Login/DoctorLogin';
import PatientRegister from './components/Login/PatientRegister';
import DoctorRegister from './components/Login/DoctorRegister';
import PatientDashboard from './components/dashboard/main/PatientDashboard';
import DoctorDashboard from './components/dashboard/main/DoctorDashboard';
import KnowMyTeam from './components/common/KnowMyTeam';
import SubmissionForm from './components/dashboard/main/Form';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard/patient">
            <PatientDashboard />
          </Route>
          <Route>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login/patient" component={PatientLogin} />
              <Route exact path="/login/doctor" component={DoctorLogin} />
              <Route path="/register/patient" component={PatientRegister} />
              <Route path="/register/doctor" component={DoctorRegister} />
              <Route path="/dashboard/doctor" component={DoctorDashboard} />
              <Route path="/dashboard/KnowMyTeam" component={KnowMyTeam} />
              <Route path="/dashboard/SubmissionForm" component={SubmissionForm} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
