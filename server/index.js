// index.js

// Necessary dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();

const mongoDBUrl = 'mongodb+srv://mediblock:kalindri200114@mediblock.ji3odai.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB Atlas:', error);
  });

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// JWT configuration
const secretKey = 'your-secret-key';



// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Add the decoded user information to the request object for further use
    req.user = decoded;
    next();
  });
};

// Routes
app.use('/api', routes);

// Example protected route
app.get('/api/protected', verifyToken, (req, res) => {
  // Access the user information from req.user
  const { username } = req.user;

  res.json({ message: `Protected route accessed by ${username}` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
