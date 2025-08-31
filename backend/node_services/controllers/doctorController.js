const FoodRecommendation = require('../models/foodRecommendations');
const RecommendationReview = require('../models/recommendationReview');
const User = require('../models/Users');
const { getSeason } = require('../utils/dateHelper');

/**
 * @desc    Get all reviews/patients assigned to the logged-in doctor
 * @route   GET /api/doctor/reviews
 * @access  Private/Doctor
 */
// Define standard meal time slots
const timeSlots = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const getAssignedReviews = async (req, res) => {
    try {
        const doctorId = req.user.id;

        const reviews = await RecommendationReview.find({ doctor: doctorId })
            .populate('patient', 'name email dosha') // Get patient's name, email, and dosha
            .populate('quizResult', 'createdAt')     // Get the date the quiz was taken
            .sort({ createdAt: -1 }); // Show the newest reviews first

        res.json({ success: true, reviews });
    } catch (error) {
        console.error('Error fetching assigned reviews:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};


const getReviewDetails = async (req, res) => {
    try {
        const review = await RecommendationReview.findById(req.params.reviewId)
            .populate('patient') // Populate with all patient details
            .populate('doctor', 'name email'); // Populate with your (doctor's) details

        if (!review) {
            return res.status(404).json({ success: false, message: "Review not found." });
        }

        // Security check: Ensure the review belongs to the doctor asking for it
        if (review.doctor._id.toString() !== req.user.id) {
            return res.status(403).json({ success: false, message: "Not authorized to view this review." });
        }

        // --- NEW LOGIC: FETCH THE FOOD PLAN ---
        const patientDosha = review.doshaAtReview;
        const reviewSeason = getSeason(review.createdAt);

        console.log(`Fetching food plan for Dosha: ${patientDosha}, Season: ${reviewSeason}`);

        const recommendations = await FoodRecommendation.find({
            dosha: patientDosha,
            season: reviewSeason
        });
console.log("Patient Dosha:", patientDosha);
console.log("Review Season:", reviewSeason);
console.log("Recommendations found:", recommendations.length);

        // Structure the food plan by time slot
        const foodPlan = timeSlots.map(slot => ({
            time: slot,
            items: recommendations.filter(r => r.time === slot)
        }));

        // Send both the review details and the generated food plan
        res.json({ success: true, review, foodPlan });

    } catch (err) {
        console.error("Error fetching review details:", err);
        res.status(500).json({ success: false, message: "Server error." });
    }
};

const submitReview = async (req, res) => {
    try {
        const { status, notes } = req.body;

        const review = await RecommendationReview.findById(req.params.reviewId);

        if (!review) {
            return res.status(404).json({ success: false, message: "Review not found." });
        }

        // Security check
        if (review.doctor.toString() !== req.user.id) {
            return res.status(403).json({ success: false, message: "Not authorized to update this review." });
        }

        review.status = status || review.status;
        review.doctorNotes = notes || review.doctorNotes;
        review.reviewedAt = Date.now();

        await review.save();

        res.json({ success: true, message: "Review submitted successfully.", review });
    } catch (err) {
        console.error("Error submitting review:", err);
        res.status(500).json({ success: false, message: "Server error." });
    }
};

module.exports = {
    getAssignedReviews,
    getReviewDetails,
    submitReview
};

