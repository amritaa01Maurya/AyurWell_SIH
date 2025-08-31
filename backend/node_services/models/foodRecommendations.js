const mongoose = require("mongoose");

const foodRecommendationSchema = new mongoose.Schema({
    dosha: { type: String, required: true, enum: ["Vata", "Pitta", "Kapha"] },
    time: { type: String },
    season: { type: String },
    food: { type: String, required: true },
    // --- IMPROVEMENT: Changed from an array of objects to a single object ---
    nutrients: {
        protein: String,
        carbs: String,
        fats: String,
        fiber: String,
        vitamins: String
    },
    calories: Number,
    benefit: String,
    type: { type: String, enum: ["Hot", "Cold", "Neutral"], default: "Neutral" },
    tastes: [{ type: String }]
});

module.exports = mongoose.models.FoodRecommendation || mongoose.model("FoodRecommendation", foodRecommendationSchema);

