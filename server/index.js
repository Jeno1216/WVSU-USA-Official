// Importing the Express framework to create a web application.
const express = require('express');

// Importing Mongoose, an Object Data Modeling (ODM) library for MongoDB, to interact with the database.
const mongoose = require('mongoose');

// Importing the CORS middleware to enable Cross-Origin Resource Sharing, allowing different origins to make requests to the server.
const cors = require('cors');

// Importing the bcrypt library to hash passwords securely.
const bcrypt = require('bcrypt');

// Importing the JSON Web Token (JWT) library to handle user authentication and authorization using tokens.
const jwt = require('jsonwebtoken');

// Importing the cookie-parser middleware to parse cookies in HTTP requests.
const cookieParser = require('cookie-parser');

// Importing the multer middleware for handling file uploads.
const multer = require('multer');

// Importing the path module for working with file and directory paths.
const path = require('path');

// Create an instance of the Express app
const app = express();

// Enable JSON request and response handling
app.use(express.json());

// Configure CORS settings for cross-origin requests
app.use(cors({
    origin: ['wvsu-usa-official.vercel.app'],  // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specified HTTP methods
    credentials: true  // Allow credentials like cookies to be included in requests
}));

// Parse cookies in incoming requests
app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connect to the MongoDB database at the specified URL
mongoose.connect('mongodb://127.0.0.1:27017/usa');
