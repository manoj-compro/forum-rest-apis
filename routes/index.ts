// This file serves as the main entry point for the API routes.

const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const userRoutes = require('./user');
const threadRoutes = require('./thread');
const postRoutes = require('./post');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/threads', threadRoutes);
router.use('/posts', postRoutes);

module.exports = router;