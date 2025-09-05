const QuizResult = require("../models/QuizResult");
const quizQuestions = require("../data/quizQuestions.json"); 
const User = require("../models/Users");

const RecommendationReview = require('../models/recommendationReview');

/**
 * @desc    Get all quiz questions
 * @route   GET /api/quiz/questions
 * @access  Public
 */
const getQuizQuestions = (req, res) => {
    // In a real app, you might fetch these from a DB, but a JSON file is fine.
    res.json(quizQuestions);
};

/**
 * @desc    Submit quiz answers and get dosha result
 * @route   POST /api/quiz/submit
 * @access  Private
 */
const submitQuiz = async (req, res) => {
    try {
        const { answers } = req.body; // Expecting an array of { questionId, selectedOption }
        const userId = req.user.id; // From 'protect' middleware

        if (!answers || answers.length === 0) {
            return res.status(400).json({ success: false, message: 'No answers provided' });
        }

        // --- 1. Calculate Dosha Score ---
        let scores = { Vata: 0, Pitta: 0, Kapha: 0 };
        answers.forEach(ans => {
            const question = quizQuestions.find(q => q.id === ans.questionId);
            if (question) {
                const option = question.options.find(o => o.text === ans.selectedOption);
                if (option && scores.hasOwnProperty(option.dosha)) {
                    scores[option.dosha]++;
                }
            }
        });

        // Determine dominant dosha
        const dominantDosha = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

        // --- 2. Save Quiz Result ---
        const quizResult = await QuizResult.create({
            userId,
            answers,
            dosha: dominantDosha,
        });

        // --- 3. Update User's Profile with their Dosha ---
        await User.findByIdAndUpdate(userId, { dosha: dominantDosha });

        // --- 4. Assign to a Doctor for Review ---
        // Find a doctor (for now, we'll pick one randomly)
        const doctors = await User.find({ role: 'doctor' });
        if (doctors.length > 0) {
            const randomDoctor = doctors[Math.floor(Math.random() * doctors.length)];
            
            await RecommendationReview.create({
                patient: userId,
                doctor: randomDoctor._id,
                quizResult: quizResult._id,
                status: 'pending',
                doshaAtReview: dominantDosha,
            });
        } else {
            console.warn("No doctors found in the system to assign a review.");
        }

        // --- 5. Send Response ---
        res.status(201).json({
            success: true,
            dominantDosha,
            doshaScores: scores,
            totalQuestions: quizQuestions.length
        });

    } catch (error) {
        console.error('Quiz Submission Error:', error);
        res.status(500).json({ success: false, message: 'Server error during quiz submission' });
    }
};

module.exports = { getQuizQuestions, submitQuiz };

