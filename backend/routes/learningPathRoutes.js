const express = require('express');
const router = express.Router();
const { getLearningPath } = require('../controllers/learningPathController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:userId', protect, getLearningPath);

module.exports = router;
