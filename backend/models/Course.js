const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, enum: ['en', 'hi'], default: 'en' },
  videoUrl: { type: String, required: true },
  durationMinutes: { type: Number, default: 10 },
  order: { type: Number, default: 1 }
}, { _id: false });

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  lessons: [lessonSchema]
}, { _id: false });

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subjectKey: { type: String, required: true },
  language: { type: String, enum: ['en', 'hi'], default: 'en' },
  description: { type: String },
  modules: [moduleSchema],
  published: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
