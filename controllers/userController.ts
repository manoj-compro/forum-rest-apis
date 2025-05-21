import prisma from '../prisma/client';
import { Request, Response } from 'express';

const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({ where: {id: req.params.id} });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: {id: req.params.id} });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const updatedUser = await prisma.user.update({
      where: { id: req.params.id },
      data: { name, email }
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({ where: {id: req.params.id} });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    await prisma.user.delete({ where: { id: req.params.id } });
    res.status(204).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export { getUsers, getUserById, updateUser, deleteUser }
