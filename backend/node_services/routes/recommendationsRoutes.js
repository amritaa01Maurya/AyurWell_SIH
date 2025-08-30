const express = require("express");
const router = express.Router();
const { getSmartRecommendations, getDailyRecommendations, getWeeklyRecommendations } = require("../controllers/recommendationController");

// GET /api/recommendations?dosha=Vata&season=Winter&time=Night
router.get("/smart", getSmartRecommendations);
router.get("/daily", getDailyRecommendations);
router.get("/weekly", getWeeklyRecommendations);

module.exports = router;