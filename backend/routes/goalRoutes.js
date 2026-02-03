const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getCategories, setupGoals, getUserGoals } = require('../controllers/goalController');

router.get('/categories', protect, getCategories);
router.post('/setup', protect, setupGoals);
router.get('/user', protect, getUserGoals);

module.exports = router;
