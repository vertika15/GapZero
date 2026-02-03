const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  categoryKey: { type: String, required: true },
  targetLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  language: { type: String, enum: ['en', 'hi'], default: 'en' }
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);
