const mongoose = require('mongoose');

const learningPathSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  steps: [{
    title: { type: String, required: true },
    description: String,
    resourceLink: String,
    status: {
      type: String,
      enum: ['pending', 'in_progress', 'completed'],
      default: 'pending'
    },
    topic: String,
    difficulty: String
  }],
}, {
  timestamps: true,
});

const LearningPath = mongoose.model('LearningPath', learningPathSchema);

module.exports = LearningPath;
