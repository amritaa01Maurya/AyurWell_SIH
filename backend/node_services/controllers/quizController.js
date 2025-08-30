// const QuizResult = require("../models/quizResult");
// const quizQuestions = require("../data/quizQuestions.json"); 
// const User = require("../models/users");

// // Function to calculate dosha score
// const calculateDoshaFromQuiz = (answers) => {
//   let scores = { Vata: 0, Pitta: 0, Kapha: 0 };

//   answers.forEach(ans => {
//     const question = quizQuestions.find(q => q.id === ans.questionId);
//     if (question) {
//       const option = question.options.find(o => o.text === ans.selectedOption);
//       if (option) scores[option.dosha]++;
//     }
//   });

//   // Determine dominant dosha
//   const maxScore = Math.max(scores.Vata, scores.Pitta, scores.Kapha);
//   const dominant = Object.keys(scores).filter(d => scores[d] === maxScore);

//   let result = "";
//   if (dominant.length === 1) result = dominant[0];
//   else if (dominant.length === 2) result = dominant.join("-");
//   else result = "Tridoshic";

//   return { result, scores };
// };

// // Controller
// exports.submitQuiz = async (req, res) => {
//   try {
//     const { answers } = req.body;

//     const { result, scores } = calculateDoshaFromQuiz(answers);

//     // Save result in DB (optional)
//     const quizResult = new QuizResult({
//       answers,
//       dosha: result
//     });
//     await quizResult.save();

//     // Response with scores
//     res.json({ success: true, dosha: result, scores });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };


// exports.saveQuizResult = async (req, res) => {
//   try {
//     const { dosha } = req.body;
//     if (!dosha) return res.status(400).json({ success: false, message: "Dosha is required" });

//     // Update user's dosha
//     const user = await User.findByIdAndUpdate(
//       req.user.id, // verifyToken middleware se user id milegi
//       { dosha },
//       { new: true }
//     );

//     res.json({
//       success: true,
//       message: "Dosha saved successfully",
//       dosha: user.dosha
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// const QuizResult = require("../models/quizResult");
// const quizQuestions = require("../data/quizQuestions.json");
// const User = require("../models/users");

// // Function to calculate dosha score
// const calculateDoshaFromQuiz = (answers) => {
//   let scores = { Vata: 0, Pitta: 0, Kapha: 0 };

//   answers.forEach(ans => {
//     const question = quizQuestions.find(q => q.id === ans.questionId);
//     if (question) {
//       const option = question.options.find(o => o.text === ans.selectedOption);
//       if (option) scores[option.dosha]++;
//     }
//   });

//   // Determine dominant dosha
//   const maxScore = Math.max(scores.Vata, scores.Pitta, scores.Kapha);
//   const dominant = Object.keys(scores).filter(d => scores[d] === maxScore);

//   let result = "";
//   if (dominant.length === 1) result = dominant[0];
//   else if (dominant.length === 2) result = dominant.join("-");
//   else result = "Tridoshic";

//   return { result, scores };
// };

// // Controller
// exports.submitQuiz = async (req, res) => {
//   try {
//     const { answers } = req.body;

//     const { result, scores } = calculateDoshaFromQuiz(answers);

//     res.json({ success: true, dosha: result, scores });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };


// exports.saveQuizResult = async (req, res) => {
//   try {
//     const { dosha } = req.body;
//     if (!dosha) return res.status(400).json({ success: false, message: "Dosha is required" });

//     // Update user's dosha
//     const user = await User.findByIdAndUpdate(
//       req.user.id, // verifyToken middleware se user id milegi
//       { dosha },
//       { new: true }
//     );

//     res.json({
//       success: true,
//       message: "Dosha saved successfully",
//       dosha: user.dosha
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

const QuizResult = require("../models/quizResult");
const quizQuestions = require("../data/quizQuestions.json"); 
const User = require("../models/users");

// New function to get quiz questions
const path = require("path");
const fs = require("fs");
const getQuizQuestions = (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../data/quizQuestions.json");
    if (!fs.existsSync(dataPath)) {
      return res.status(404).json({ message: "Quiz questions file not found" });
    }

    const fileData = fs.readFileSync(dataPath, "utf-8");
    const questions = JSON.parse(fileData);

    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No quiz questions found" });
    }

    return res.json(questions);
  } catch (err) {
    console.error("Error reading quiz questions:", err);
    return res.status(500).json({ error: "Failed to load quiz questions" });
  }
};

// Function to calculate dosha score
const calculateDoshaFromQuiz = (answers) => {
  let scores = { Vata: 0, Pitta: 0, Kapha: 0 };

  answers.forEach(ans => {
    const question = quizQuestions.find(q => q.id === ans.questionId);
    if (question) {
      const option = question.options.find(o => o.text === ans.selectedOption);
      if (option) scores[option.dosha]++;
    }
  });

  // Determine dominant dosha
  const maxScore = Math.max(scores.Vata, scores.Pitta, scores.Kapha);
  const dominant = Object.keys(scores).filter(d => scores[d] === maxScore)[0];

  return { dominantDosha: dominant, doshaScores: scores };
};

// Controller
const submitQuiz = (req, res) => {
  try {
    const { answers } = req.body; // 'answers' is an object like { "0": { dosha: 'Vata' }, "1": { dosha: 'Pitta' } }

    if (!answers || Object.keys(answers).length === 0) {
      return res.status(400).json({ success: false, error: "No answers provided." });
    }

    // Initialize scores
    let scores = { Vata: 0, Pitta: 0, Kapha: 0 };

    // Correctly iterate over the object's values
    Object.values(answers).forEach(answer => {
      if (answer && answer.dosha && scores.hasOwnProperty(answer.dosha)) {
        scores[answer.dosha]++;
      }
    });

    // Determine dominant dosha
    let dominantDosha = 'Vata'; // Default value
    let maxScore = 0;
    for (const dosha in scores) {
        if (scores[dosha] > maxScore) {
            maxScore = scores[dosha];
            dominantDosha = dosha;
        }
    }
    
    // Correctly calculate the total number of questions answered
    const totalQuestions = Object.keys(answers).length;

    // Send the correct data structure back to the frontend
    res.json({
      success: true,
      dominantDosha: dominantDosha,
      doshaScores: scores,
      totalQuestions: totalQuestions,
    });

  } catch (err) {
    console.error("Error submitting quiz:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};


const saveQuizResult = async (req, res) => {
  try {
    const { dosha } = req.body;
    if (!dosha) return res.status(400).json({ success: false, message: "Dosha is required" });

    // Update user's dosha
    const user = await User.findByIdAndUpdate(
      req.user.id, // verifyToken middleware se user id milegi
      { dosha },
      { new: true }
    );

    res.json({
      success: true,
      message: "Dosha saved successfully",
      dosha: user.dosha
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Export the new function
module.exports = { submitQuiz, saveQuizResult, getQuizQuestions };