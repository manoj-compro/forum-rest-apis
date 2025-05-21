import express from "express";
import { createThread, getThreads, getThreadById, updateThread, deleteThread } from '../controllers/threadController';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/', auth, createThread);
router.get('/', getThreads);
router.get('/:id', getThreadById);
router.put('/:id', updateThread);
router.delete('/:id', deleteThread);

export default router;