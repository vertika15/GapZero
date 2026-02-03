const Course = require('../models/Course');

// Create a course with modules and lessons
const createCourse = async (req, res) => {
  const { title, subjectKey, language = 'en', description, modules = [] } = req.body;
  try {
    const course = await Course.create({ title, subjectKey, language, description, modules });
    res.status(201).json(course);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// List courses (optional filters by subjectKey/language)
const listCourses = async (req, res) => {
  const { subjectKey, language } = req.query;
  const filter = {};
  if (subjectKey) filter.subjectKey = subjectKey;
  if (language) filter.language = language;
  const courses = await Course.find(filter).sort({ createdAt: -1 });
  res.json(courses);
};

// Get a specific course
const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};

// Add a lesson to a module by index
const addLesson = async (req, res) => {
  const { courseId, moduleIndex } = req.params;
  const { title, language = 'en', videoUrl, durationMinutes = 10, order = 1 } = req.body;
  const course = await Course.findById(courseId);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  const idx = Number(moduleIndex);
  if (!course.modules[idx]) return res.status(400).json({ message: 'Invalid module index' });
  course.modules[idx].lessons.push({ title, language, videoUrl, durationMinutes, order });
  await course.save();
  res.status(201).json(course);
};

module.exports = { createCourse, listCourses, getCourse, addLesson };
