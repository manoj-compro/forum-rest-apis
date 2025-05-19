const { Thread } = require('../models');
const userController = require('./userController');


const createThread = async (req, res) => {
  const { title, body, userId } = req.body;
  try {
    const user = await userController.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const thread = await Thread.create({ title, body, userId });
    res.status(201).json(thread);
  } catch (error) {
    console.error('Error creating thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getThreads = async (req, res) => {
  try {
    const threads = await Thread.findAll();
    res.status(200).json(threads);
  } catch (error) {
    console.error('Error fetching threads:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getThreadById = async (req, res) => {
  try {
    const thread = await Thread.findByPk(req.params.id);
    if (!thread) {
      return res.status(404).json({ error: 'Thread not found' });
    }
    res.status(200).json(thread);
  } catch (error) {
    console.log('Error fetching thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const updateThread = async (req, res) => {
  const { title, content } = req.body;
  try {
    const user = await userController.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const thread = await Thread.findByPk(req.params.id);
    if (!thread) {
      return res.status(404).json({ error: 'Thread not found' });
    }
    thread.title = title;
    thread.content = content;
    await thread.save();
    res.status(200).json(thread);
  } catch (error) {
    console.error('Error updating thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const deleteThread = async (req, res) => {
  try {
    const thread = await Thread.findByPk(req.params.id);
    if (!thread) {
      return res.status(404).json({ error: 'Thread not found' });
    }
    await thread.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting thread:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  createThread,
  getThreads,
  getThreadById,
  updateThread,
  deleteThread
}
