const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  key: { type: String, unique: true, required: true },
  nameEn: { type: String, required: true },
  nameHi: { type: String, required: true },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
