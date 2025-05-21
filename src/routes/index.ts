// This file serves as the main entry point for the API routes.
import express from 'express';
import authRoutes from '~/routes/auth';
import userRoutes from '~/routes/user'; 
import threadRoutes from '~/routes/thread';
import postRoutes from '~/routes/post';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/threads', threadRoutes);
router.use('/posts', postRoutes);

export default router;