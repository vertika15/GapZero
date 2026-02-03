const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const { createCourse, listCourses, getCourse, addLesson } = require('../controllers/courseController');

router.get('/', listCourses);
router.post('/', protect, admin, createCourse);
router.get('/:courseId', getCourse);
router.post('/:courseId/module/:moduleIndex/lessons', protect, admin, addLesson);

module.exports = router;
