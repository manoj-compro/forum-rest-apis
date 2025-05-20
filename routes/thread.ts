const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');
const { auth } = require('../middlewares/auth');

router.post('/', auth, threadController.createThread);
router.get('/', threadController.getThreads);
router.get('/:id', threadController.getThreadById);
router.put('/:id', threadController.updateThread);
router.delete('/:id', threadController.deleteThread);

module.exports = router;