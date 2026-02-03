const { analyzeGaps, generateLearningPath } = require('../utils/gapAnalysis');
const Result = require('../models/Result');
const LearningPath = require('../models/LearningPath');

// @desc    Analyze gaps based on submitted answers
// @route   POST /api/gap/analyze
// @access  Private
const analyzeGap = async (req, res) => {
  const { answers } = req.body; // answers: [{ questionId, isCorrect, topic, ... }]
  const userId = req.user._id;

  try {
    // 1. Run Gap Analysis
    const analysis = analyzeGaps(answers);

    // 2. Generate Learning Path
    const pathSteps = generateLearningPath(analysis.weakTopics);

    // 3. Save Learning Path to DB
    // Check if path exists for user, update or create
    let learningPath = await LearningPath.findOne({ userId });

    if (learningPath) {
      learningPath.steps = pathSteps; // Overwrite or merge
      await learningPath.save();
    } else {
      learningPath = await LearningPath.create({
        userId,
        steps: pathSteps
      });
    }

    // 4. Update latest result with weak topics
    // (Optional: if we just created a result, we might want to update it)
    
    res.json({
      score: analysis.score,
      weakTopics: analysis.weakTopics,
      learningPath: learningPath
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { analyzeGap };
