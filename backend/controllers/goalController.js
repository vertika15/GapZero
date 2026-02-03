const Category = require('../models/Category');
const Goal = require('../models/Goal');

const { isDbAvailable } = require('../config/db');

const getCategories = async (req, res) => {
  if (!isDbAvailable()) {
    return res.json([
      { key: 'math', nameEn: 'Mathematics', nameHi: 'गणित', order: 1 },
      { key: 'science', nameEn: 'Science', nameHi: 'विज्ञान', order: 2 },
      { key: 'english', nameEn: 'English', nameHi: 'अंग्रेज़ी', order: 3 }
    ]);
  }
  const cats = await Category.find({}).sort({ order: 1 });
  res.json(cats);
};

const setupGoals = async (req, res) => {
  const userId = req.user._id;
  const { goals } = req.body; // [{ categoryKey, targetLevel, language }]

  if (!isDbAvailable()) {
    // In memory simulation could go here if needed, or just success
    return res.status(201).json(goals); 
  }

  const bulk = goals.map(g => ({
    updateOne: {
      filter: { userId, categoryKey: g.categoryKey },
      update: { $set: { targetLevel: g.targetLevel, language: g.language || 'en' } },
      upsert: true
    }
  }));

  if (bulk.length > 0) {
    await Goal.bulkWrite(bulk);
  }

  const userGoals = await Goal.find({ userId });
  res.status(201).json(userGoals);
};

const getUserGoals = async (req, res) => {
  const userId = req.user._id;
  const goals = await Goal.find({ userId });
  res.json(goals);
};

module.exports = { getCategories, setupGoals, getUserGoals };
