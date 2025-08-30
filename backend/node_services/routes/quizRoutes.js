
const express = require("express");
const router = express.Router();
const { submitQuiz, saveQuizResult, getQuizQuestions } = require("../controllers/quizController");
const verifyToken = require("../middleware/verifyToken");

// routes
router.post("/submit", submitQuiz);
router.post("/save-result", verifyToken, saveQuizResult);
router.get("/questions", getQuizQuestions);

module.exports = router;
