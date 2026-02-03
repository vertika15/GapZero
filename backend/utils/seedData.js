const Assessment = require('../models/Assessment');
const Question = require('../models/Question');
const dummyQuestions = require('../data/dummyQuestions.json');
const User = require('../models/User');
const Category = require('../models/Category');
const EducationLevel = require('../models/EducationLevel');
const Course = require('../models/Course');

const sampleAssessments = [
  {
    title: 'English Grammar Basics',
    topic: 'English Grammar',
    difficulty: 'Beginner',
    questions: [
      {
        questionText: 'Choose the correct verb form: She ____ to school.',
        options: ['go', 'goes', 'gone', 'going'],
        correctAnswer: 'goes',
        topic: 'Verb Tense'
      },
      {
        questionText: 'Identify the noun in the sentence: The cat sleeps.',
        options: ['The', 'cat', 'sleeps', 'None'],
        correctAnswer: 'cat',
        topic: 'Parts of Speech'
      }
    ]
  },
  {
    title: 'Basic Algebra',
    topic: 'Algebra',
    difficulty: 'Beginner',
    questions: [
      {
        questionText: 'Solve for x: x + 5 = 9',
        options: ['3', '4', '5', '9'],
        correctAnswer: '4',
        topic: 'Linear Equations'
      },
      {
        questionText: 'Simplify: 2x + 3x',
        options: ['5x', '6x', 'x', 'None'],
        correctAnswer: '5x',
        topic: 'Like Terms'
      }
    ]
  },
  {
    title: 'Physics Basics',
    topic: 'Physics',
    difficulty: 'Beginner',
    questions: [
      {
        questionText: 'What is the unit of force?',
        options: ['Joule', 'Newton', 'Pascal', 'Watt'],
        correctAnswer: 'Newton',
        topic: 'Units'
      },
      {
        questionText: 'Which law explains inertia?',
        options: ['Newton’s First', 'Newton’s Second', 'Newton’s Third', 'Kepler’s'],
        correctAnswer: 'Newton’s First',
        topic: 'Newton Laws'
      }
    ]
  }
];

async function seedDemoData() {
  const qCount = await Question.countDocuments();
  if (qCount === 0 && Array.isArray(dummyQuestions) && dummyQuestions.length > 0) {
    await Question.insertMany(dummyQuestions);
    console.log('Seeded dummy questions');
  }
  const count = await Assessment.countDocuments();
  if (count === 0) {
    await Assessment.insertMany(sampleAssessments);
    console.log('Seeded sample assessments');
  }

  const adminExists = await User.findOne({ email: 'admin@gapzero.local' });
  if (!adminExists) {
    await User.create({
      name: 'Admin',
      email: 'admin@gapzero.local',
      password: 'admin123',
      role: 'admin'
    });
    console.log('Seeded admin user');
  }

  const categories = [
    { key: 'english', nameEn: 'English', nameHi: 'अंग्रेज़ी', order: 1 },
    { key: 'hindi', nameEn: 'Hindi', nameHi: 'हिंदी', order: 2 },
    { key: 'mathematics', nameEn: 'Mathematics', nameHi: 'गणित', order: 3 },
    { key: 'science', nameEn: 'Science', nameHi: 'विज्ञान', order: 4 },
    { key: 'computer', nameEn: 'Computer Basics', nameHi: 'कम्प्यूटर मूलभूत', order: 5 },
    { key: 'digital', nameEn: 'Digital Literacy', nameHi: 'डिजिटल साक्षरता', order: 6 },
    { key: 'geography', nameEn: 'Geography', nameHi: 'भूगोल', order: 7 },
    { key: 'history', nameEn: 'History', nameHi: 'इतिहास', order: 8 },
    { key: 'economics', nameEn: 'Economics', nameHi: 'अर्थशास्त्र', order: 9 },
    { key: 'life', nameEn: 'Life Skills', nameHi: 'जीवन कौशल', order: 10 }
  ];
  const catCount = await Category.countDocuments();
  if (catCount === 0) {
    await Category.insertMany(categories);
    console.log('Seeded 10 categories');
  }

  const eduCount = await EducationLevel.countDocuments();
  if (eduCount === 0) {
    const levels = [];
    const subjects = ['english', 'hindi', 'mathematics', 'science', 'computer', 'digital'];
    for (let cls = 1; cls <= 10; cls++) {
      for (const subj of subjects) {
        ['Beginner', 'Intermediate', 'Advanced'].forEach(level => {
          levels.push({
            classNumber: cls,
            subjectKey: subj,
            language: 'en',
            level,
            lessons: [
              { titleEn: `${subj} ${level} Lesson 1`, titleHi: `${subj} ${level} पाठ 1`, order: 1 },
              { titleEn: `${subj} ${level} Lesson 2`, titleHi: `${subj} ${level} पाठ 2`, order: 2 },
              { titleEn: `${subj} ${level} Lesson 3`, titleHi: `${subj} ${level} पाठ 3`, order: 3 }
            ]
          });
          levels.push({
            classNumber: cls,
            subjectKey: subj,
            language: 'hi',
            level,
            lessons: [
              { titleEn: `${subj} ${level} Lesson 1`, titleHi: `${subj} ${level} पाठ 1`, order: 1 },
              { titleEn: `${subj} ${level} Lesson 2`, titleHi: `${subj} ${level} पाठ 2`, order: 2 },
              { titleEn: `${subj} ${level} Lesson 3`, titleHi: `${subj} ${level} पाठ 3`, order: 3 }
            ]
          });
        });
      }
    }
    await EducationLevel.insertMany(levels);
    console.log('Seeded education levels and lesson plans');
  }

  const courseCount = await Course.countDocuments();
  if (courseCount === 0) {
    const video = (title) => `https://www.youtube.com/watch?v=dQw4w9WgXcQ&title=${encodeURIComponent(title)}`;
    const sampleCourses = [
      {
        title: 'English Course',
        subjectKey: 'english',
        language: 'en',
        description: 'Foundational English with grammar and comprehension',
        modules: [
          { title: 'Basics', level: 'Beginner', lessons: [
            { title: 'Nouns & Verbs', language: 'en', videoUrl: video('Nouns & Verbs'), durationMinutes: 12, order: 1 },
            { title: 'Sentence Structure', language: 'en', videoUrl: video('Sentence Structure'), durationMinutes: 14, order: 2 }
          ]},
          { title: 'Skills', level: 'Intermediate', lessons: [
            { title: 'Reading Comprehension', language: 'en', videoUrl: video('Reading Comprehension'), durationMinutes: 18, order: 1 }
          ]},
          { title: 'Writing', level: 'Advanced', lessons: [
            { title: 'Essay Writing', language: 'en', videoUrl: video('Essay Writing'), durationMinutes: 20, order: 1 }
          ]}
        ]
      },
      {
        title: 'Hindi Course',
        subjectKey: 'hindi',
        language: 'hi',
        description: 'Hindi grammar and reading',
        modules: [
          { title: 'मूलभूत', level: 'Beginner', lessons: [
            { title: 'वाक्य रचना', language: 'hi', videoUrl: video('वाक्य रचना'), durationMinutes: 10, order: 1 }
          ]}
        ]
      },
      {
        title: 'Mathematics Course',
        subjectKey: 'mathematics',
        language: 'en',
        description: 'Arithmetic and Algebra',
        modules: [
          { title: 'Arithmetic', level: 'Beginner', lessons: [
            { title: 'Addition & Subtraction', language: 'en', videoUrl: video('Addition & Subtraction'), durationMinutes: 9, order: 1 }
          ]},
          { title: 'Algebra', level: 'Intermediate', lessons: [
            { title: 'Linear Equations', language: 'en', videoUrl: video('Linear Equations'), durationMinutes: 15, order: 1 }
          ]}
        ]
      },
      {
        title: 'Science Course',
        subjectKey: 'science',
        language: 'en',
        description: 'Physics basics',
        modules: [
          { title: 'Motion', level: 'Beginner', lessons: [
            { title: 'Newton’s Laws', language: 'en', videoUrl: video('Newton’s Laws'), durationMinutes: 11, order: 1 }
          ]}
        ]
      },
      {
        title: 'Computer Basics',
        subjectKey: 'computer',
        language: 'en',
        description: 'Fundamentals of computers',
        modules: [
          { title: 'Operating System', level: 'Beginner', lessons: [
            { title: 'Windows Basics', language: 'en', videoUrl: video('Windows Basics'), durationMinutes: 8, order: 1 }
          ]}
        ]
      }
    ];
    await Course.insertMany(sampleCourses);
    console.log('Seeded sample courses with videos');
  }
}

module.exports = { seedDemoData };
