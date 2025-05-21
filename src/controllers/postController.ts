import { Request, Response } from 'express';
import prisma from '~/prisma/client';

export const createPost = async (req: Request, res: Response): Promise<void> => {
  const { userId, threadId, content} = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { id: userId} });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const thread = await prisma.thread.findUnique({ where: { id: threadId} });
    if (!thread) {
      res.status(404).json({ error: 'Thread not found' });
      return;
    }
    const post = await prisma.post.create({
      data: { userId, threadId, content }
    });
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const getPosts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({error: 'Internal server error' });
  }
}

export const getPostById = async(req: Request, res: Response): Promise<void> => {
  try {
    const post = await prisma.post.findUnique({ where: { id: req.params.id} });
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    console.log('Error fetching post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const updatePost = async (req: Request, res: Response): Promise<void> => {
  const { userId, threadId, content } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { id: userId} });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const thread = await prisma.thread.findUnique({ where: { id: threadId} });
    if (!thread) {
      res.status(404).json({ error: 'Thread not found' });
      return;
    }
    const post = await prisma.post.findUnique({ where: { id: req.params.id} });
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }
    const updatedPost = await prisma.post.update({
      where: { id: req.params.id },
      data: { content }
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await prisma.post.findUnique({ where: { id: req.params.id} });
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }
    await prisma.post.delete({ where: { id: req.params.id }});
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
