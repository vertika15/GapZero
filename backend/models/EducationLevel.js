const mongoose = require('mongoose');

const educationLevelSchema = mongoose.Schema({
  classNumber: { type: Number, required: true },
  subjectKey: { type: String, required: true },
  language: { type: String, enum: ['en', 'hi'], default: 'en' },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  lessons: [{
    titleEn: String,
    titleHi: String,
    order: Number
  }]
}, { timestamps: true });

module.exports = mongoose.model('EducationLevel', educationLevelSchema);
