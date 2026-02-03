const mongoose = require('mongoose');

const assessmentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner',
  },
  questions: [{
    questionText: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }, // Index or string value
    topic: { type: String } // Specific sub-topic for gap analysis
  }],
}, {
  timestamps: true,
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
