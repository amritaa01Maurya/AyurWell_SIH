const mongoose = require('mongoose');

const recommendationReviewSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    quizResult: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizResult',
        required: true,
    },
    doshaAtReview: {
        type: String,
        required: true,
        enum: ["Vata", "Pitta", "Kapha"],
    },
    status: {
        type: String,
        enum: ['pending', 'in-review', 'approved', 'modified'],
        default: 'pending',
    },
    doctorNotes: {
        type: String,
        default: '',
    },
    // You could add a field for modified recommendations here if needed
    // modifiedRecommendations: [{...}]
}, { timestamps: true });

const RecommendationReview = mongoose.model('RecommendationReview', recommendationReviewSchema);

module.exports = RecommendationReview;