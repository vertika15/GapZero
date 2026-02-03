const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getLevels } = require('../controllers/levelController');

router.get('/', protect, getLevels);

module.exports = router;
