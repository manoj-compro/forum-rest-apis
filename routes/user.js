const express = require('express');
const router = express.Router();
const { User} = require('./../models');
// const userController = require('../controllers/userController');



router.post('/', async (req, res) => {
  const user = await User.create({name: req.body.name, email: req.body.email});
  res.json(user);
});

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});


module.exports = router;