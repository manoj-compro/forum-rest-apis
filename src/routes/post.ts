import express from "express";
import { createPost, getPosts, getPostById, updatePost, deletePost } from '~/controllers/postController';
import auth from '~/middlewares/auth';

const router = express.Router();

router.post('/', auth, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router