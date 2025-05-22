import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import prisma from '~/prisma/client';
dotenv.config();

const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashed }
    });
    res.json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if(!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      res.status(401).json({ message: 'Incorrect password'})
      return;
    }
    const jwtSecret = process.env.JWT_SECRET || 'secret';
    const jwtExpiry = process.env.JWT_EXPIRY || '1h';

    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    const token = jwt.sign({ id: user.id }, jwtSecret, {
      expiresIn: jwtExpiry,
    } as SignOptions);

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });
  }
  catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export {
  register,
  login
}