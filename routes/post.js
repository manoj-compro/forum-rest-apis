const express = require('express');
const router = express.Router();

const { Post} = require('./../models');
// const postController = require('../controllers/postController');



router.post('/', async (req, res) => {
  const post = await Post.create({title: req.body.title, content: req.body.content, userId: req.body.userId});
  res.json(post);
});

router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

module.exports = router;