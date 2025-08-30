// const mongoose = require("mongoose");

// const quizResultSchema = new mongoose.Schema({
//   answers: [{ question: String, selected: String }],
//   dosha: { type: String, enum: ["Vata", "Pitta", "Kapha"], required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("QuizResult", quizResultSchema);


const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  answers: [{ questionId: Number, selectedOption: String }],
  dosha: { type: String, enum: ["Vata", "Pitta", "Kapha"], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QuizResult", quizResultSchema);