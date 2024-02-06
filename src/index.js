import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import other global CSS files if needed
import './components/common/Footer.css'; // Import the Footer component's CSS
import './components/common/Header.css'; // Import the Header component's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

ReactDOM.render(<App />, document.getElementById('root'));
