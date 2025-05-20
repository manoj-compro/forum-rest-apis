const { Post, User, Thread } = require('../models');
const userController = require('./userController');


const createPost = async (req, res) => {
  const { userId, threadId, content} = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const thread = await Thread.findByPk(threadId);
    if (!thread) {
      return res.status(404).json({ error: 'Thread not found' });
    }
    const post = await Post.create({ userId, threadId, content });
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({error: 'Internal server error' });
  }
}

  const getPostById = async(req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      console.log('Error fetching post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  const updatePost = async (req, res) => {
    const { userId, threadId, content } = req.body;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const thread = await Thread.findByPk(threadId);
      if (!thread) {
        return res.status(404).json({ error: 'Thread not found' });
      }
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      post.content = content;
      await post.save();
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  const deletePost = async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      await post.destroy();
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
  };