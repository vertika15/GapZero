const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB, isDbAvailable } = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const { seedDemoData } = require('./utils/seedData');

const authRoutes = require('./routes/authRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const gapRoutes = require('./routes/gapRoutes');
const learningPathRoutes = require('./routes/learningPathRoutes');
const goalRoutes = require('./routes/goalRoutes');
const levelRoutes = require('./routes/levelRoutes');
const courseRoutes = require('./routes/courseRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/assessment', assessmentRoutes);
app.use('/api/gap', gapRoutes);
app.use('/api/path', learningPathRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/course', courseRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'ok', db: isDbAvailable() ? 'connected' : 'unavailable' });
});

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (process.env.SEED === 'true') {
    seedDemoData().catch((e) => console.error('Seed error', e));
  }
});
