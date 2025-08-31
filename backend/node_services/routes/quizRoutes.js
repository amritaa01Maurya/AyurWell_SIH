const express = require('express');
const router = express.Router();
const { getQuizQuestions, submitQuiz } = require('../controllers/quizController');
const { protect } = require('../middleware/auth');

// @route   /api/quiz

// Public route to get the questions
router.get('/questions', getQuizQuestions);

// Private route for a logged-in user to submit their answers
router.post('/submit', protect, submitQuiz);

module.exports = router;