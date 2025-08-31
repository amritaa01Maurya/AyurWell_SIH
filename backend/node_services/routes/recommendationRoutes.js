const express = require('express');
const router = express.Router();
const { getDailyRecommendations, getWeeklyRecommendations } = require('../controllers/recommendationController');
const { protect } = require('../middleware/auth');

// @route   /api/recommendations

// Get daily recommendations for the logged-in user
// The user's dosha is automatically determined from their token
router.get('/daily', protect, getDailyRecommendations);

router.get('/weekly', protect, getWeeklyRecommendations);


module.exports = router;
