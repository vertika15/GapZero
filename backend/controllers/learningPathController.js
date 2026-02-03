const LearningPath = require('../models/LearningPath');

// @desc    Get learning path by user ID
// @route   GET /api/path/:userId
// @access  Private
const getLearningPath = async (req, res) => {
  try {
    const path = await LearningPath.findOne({ userId: req.params.userId });

    if (path) {
      res.json(path);
    } else {
      res.status(404).json({ message: 'Learning path not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getLearningPath };
