const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load config file
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Initialize express app
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
