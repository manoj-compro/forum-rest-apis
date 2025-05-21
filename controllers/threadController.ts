import { Request, Response } from 'express';
import prisma from '../prisma/client';

const createThread = async (req: Request, res: Response): Promise<void> => {
  const { title, content, userId } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { id: userId} });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const thread = await prisma.thread.create({
      data: { userId, title, content }
    });
    res.status(201).json(thread);
  } catch (error) {
    console.error('Error creating thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getThreads = async (_req: Request, res: Response): Promise<void> => {
  try {
    const threads = await prisma.thread.findMany();
    res.status(200).json(threads);
  } catch (error) {
    console.error('Error fetching threads:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getThreadById = async (req: Request, res: Response): Promise<void> => {
  try {
    const thread = await prisma.thread.findUnique({ where: { id: req.params.id} });
    if (!thread) {
      res.status(404).json({ error: 'Thread not found' });
      return;
    }
    res.status(200).json(thread);
  } catch (error) {
    console.log('Error fetching thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const updateThread = async (req: Request, res: Response): Promise<void> => {
  const { title, content, userId } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { id: userId} });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const thread = await prisma.thread.findUnique({ where: { id: req.params.id} });
    if (!thread) {
      res.status(404).json({ error: 'Thread not found' });
      return;
    }
    const updatedThread = await prisma.thread.update({
      where: { id: req.params.id },
      data: { title, content }
    });
    res.status(200).json(updatedThread);
  } catch (error) {
    console.error('Error updating thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const deleteThread = async (req: Request, res: Response): Promise<void> => {
  try {
    const thread = await prisma.thread.findUnique({ where: { id: req.params.id} });
    if (!thread) {
      res.status(404).json({ error: 'Thread not found' });
      return;
    }
    await prisma.thread.delete({ where: { id: req.params.id } });
    res.status(204).send({message: 'Thread deleted successfully'});
  } catch (error) {
    console.error('Error deleting thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export {
  createThread,
  getThreads,
  getThreadById,
  updateThread,
  deleteThread
}
