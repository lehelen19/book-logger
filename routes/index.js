// This file contains top-level routes
const express = require('express');

const router = express.Router();

// @desc    Login / Landing page
// @route   GET
router.get('/', (req, res) => {
  res.send('Hi, this is the login!');
});

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

module.exports = router;
