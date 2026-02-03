/**
 * Analyzes user answers to identify weak topics and generate a learning path.
 * @param {Array} userAnswers - Array of { questionId, selectedOption, isCorrect, topic }
 * @param {Object} assessment - The full assessment object with questions
 */
const analyzeGaps = (userAnswers, assessment) => {
  const topicPerformance = {};
  const weakTopics = [];
  let correctCount = 0;

  // 1. Calculate performance per topic
  userAnswers.forEach((answer) => {
    const topic = answer.topic || 'General';
    
    if (!topicPerformance[topic]) {
      topicPerformance[topic] = { total: 0, correct: 0 };
    }
    
    topicPerformance[topic].total += 1;
    if (answer.isCorrect) {
      topicPerformance[topic].correct += 1;
      correctCount += 1;
    }
  });

  // 2. Identify weak topics (Threshold: < 60% accuracy)
  for (const topic in topicPerformance) {
    const { total, correct } = topicPerformance[topic];
    const percentage = (correct / total) * 100;
    
    if (percentage < 60) {
      weakTopics.push({
        topic,
        score: percentage,
        totalQuestions: total
      });
    }
  }

  const score = (correctCount / userAnswers.length) * 100;

  return {
    score,
    weakTopics,
    topicPerformance
  };
};

/**
 * Generates a reverse learning path based on weak topics.
 * @param {Array} weakTopics - List of weak topics identified
 */
const generateLearningPath = (weakTopics) => {
  const steps = [];

  // Sort weak topics by lowest score first (Critical gaps)
  weakTopics.sort((a, b) => a.score - b.score);

  weakTopics.forEach((item) => {
    // Add "Basics" step for the weak topic
    steps.push({
      title: `${item.topic} - Foundations`,
      description: `Master the basic concepts of ${item.topic} to bridge the gap.`,
      resourceLink: `/courses/${item.topic.toLowerCase().replace(/\s/g, '-')}/basics`,
      status: 'pending',
      topic: item.topic,
      difficulty: 'Beginner'
    });

    // Add "Practice" step
    steps.push({
      title: `${item.topic} - Practice Set`,
      description: `Apply your knowledge of ${item.topic} with targeted exercises.`,
      resourceLink: `/assessment/practice/${item.topic.toLowerCase().replace(/\s/g, '-')}`,
      status: 'pending',
      topic: item.topic,
      difficulty: 'Intermediate'
    });
  });

  return steps;
};

module.exports = { analyzeGaps, generateLearningPath };
