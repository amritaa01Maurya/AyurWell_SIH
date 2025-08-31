const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [{ questionId: Number, selectedOption: String }],
  dosha: { type: String, enum: ["Vata", "Pitta", "Kapha"], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuizResult", quizResultSchema);