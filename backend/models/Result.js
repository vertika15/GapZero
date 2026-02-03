const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assessmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assessment',
  },
  answers: [{
    questionId: String,
    selectedOption: String,
    isCorrect: Boolean,
    topic: String
  }],
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  weakTopics: [{
    type: String
  }],
}, {
  timestamps: true,
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
