// This file serves as the main entry point for the API routes.
import express from 'express';
import authRoutes from './auth';
import userRoutes from './user'; 
import threadRoutes from './thread';
import postRoutes from './post';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/threads', threadRoutes);
router.use('/posts', postRoutes);

export default router;