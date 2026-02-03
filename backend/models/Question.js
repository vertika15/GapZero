const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  topic: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
