const EducationLevel = require('../models/EducationLevel');

const getLevels = async (req, res) => {
  const { class: cls, language = 'en' } = req.query;
  const list = await EducationLevel.find({ classNumber: Number(cls), language }).sort({ subjectKey: 1, level: 1 });
  res.json(list);
};

module.exports = { getLevels };
