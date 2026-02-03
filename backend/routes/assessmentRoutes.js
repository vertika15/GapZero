const express = require('express');
const router = express.Router();
const { getAssessments, createAssessment, getQuestions, submitAssessment } = require('../controllers/assessmentController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getAssessments).post(protect, admin, createAssessment);
router.get('/questions', getQuestions);
router.post('/submit', protect, submitAssessment);

module.exports = router;
