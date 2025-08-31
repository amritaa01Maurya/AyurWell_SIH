const express = require('express');
const router = express.Router();
const { getAssignedReviews, getReviewDetails, submitReview } = require('../controllers/doctorController');
const { protect, isDoctor } = require('../middleware/auth');

// @route   /api/doctor

// Apply middleware to all routes in this file
// 'protect' runs first, then 'isDoctor'
router.use(protect, isDoctor);

// Get all reviews/patients assigned to the currently logged-in doctor
router.get('/reviews', getAssignedReviews);

// Get the full details of a specific review
router.get('/review/:reviewId', getReviewDetails);

// Update a review with doctor's notes and status
router.put('/review/:reviewId', submitReview);


module.exports = router;

