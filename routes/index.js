// This file serves as the main entry point for the API routes.

const express = require('express');
const router = express.Router();

// Import the user and post routes
const userRoutes = require('./user');
const postRoutes = require('./post');


// Use the user and post routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;