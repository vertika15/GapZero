const Assessment = require('../models/Assessment');
const Result = require('../models/Result');
const Question = require('../models/Question');

// @desc    Get all assessments
// @route   GET /api/assessment
// @access  Public/Private
const getAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find({});
    res.json(assessments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new assessment
// @route   POST /api/assessment
// @access  Admin/Teacher
const createAssessment = async (req, res) => {
  const { title, topic, difficulty, questions } = req.body;

  try {
    const assessment = new Assessment({
      title,
      topic,
      difficulty,
      questions,
    });

    const createdAssessment = await assessment.save();
    res.status(201).json(createdAssessment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().select('-correctAnswer');
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const submitAssessment = async (req, res) => {
  const { answers } = req.body;
  const userId = req.user._id;

  try {
    const questions = await Question.find();
    let score = 0;
    const wrongTopics = [];

    answers.forEach((ans) => {
      const q = questions.find((x) => String(x._id) === String(ans.questionId));
      if (q) {
        if (q.correctAnswer === ans.answer) {
          score++;
        } else {
          wrongTopics.push(q.topic);
        }
      }
    });

    const weakTopics = Array.from(new Set(wrongTopics));

    const result = await Result.create({
      userId,
      answers,
      score,
      totalQuestions: answers.length,
      weakTopics,
    });

    res.json({ score, weakTopics, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAssessments, createAssessment, getQuestions, submitAssessment };
