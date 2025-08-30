// // // import { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Navbar from "../components/Navbar";
// // // import quizQuestions from "../../../backend/node_services/data/quizQuestions.json";
// // // import { Loader2 } from 'lucide-react';
// // // import axios from 'axios';

// // // function Quiz() {
// // //   const [questions, setQuestions] = useState([]);
// // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // //   const [answers, setAnswers] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     setQuestions(quizQuestions);
// // //   }, []);

// // //   const handleAnswer = (selectedOption) => {
// // //     const newAnswers = [
// // //       ...answers,
// // //       {
// // //         questionId: questions[currentQuestionIndex].id,
// // //         selectedOption,
// // //       },
// // //     ];
// // //     setAnswers(newAnswers);

// // //     if (currentQuestionIndex < questions.length - 1) {
// // //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// // //     } else {
// // //       submitQuiz(newAnswers);
// // //     }
// // //   };

// // //   const submitQuiz = async (finalAnswers) => {
// // //     setLoading(true);
// // //   try {
// // //     // The fetch call to the backend on port 5000
// // //     const res = await fetch("http://localhost:5000/api/quiz/submit", {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify({ answers: finalAnswers }),
// // //     });
// // //     const data = await res.json();
// // //     navigate("/quiz-result", { state: { result: data } });
// // //   } catch (err) {
// // //     alert("Error submitting quiz.");
// // //     setLoading(false);
// // //   }
// // // };

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
// // //         <Navbar />
// // //         <div className="flex items-center justify-center h-96">
// // //           <div className="text-center">
// // //             <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
// // //             <p className="text-gray-600">Calculating your Dosha...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const currentQuestion = questions[currentQuestionIndex];

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
// // //       <Navbar />
// // //       <div className="flex flex-col items-center justify-center min-h-screen p-4">
// // //         <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center">
// // //           <h2 className="text-2xl font-bold text-green-700 mb-6">
// // //             Dosha Assessment ({currentQuestionIndex + 1}/{questions.length})
// // //           </h2>
// // //           {currentQuestion && (
// // //             <div className="space-y-6">
// // //               <p className="text-xl text-gray-800 font-semibold">{currentQuestion.question}</p>
// // //               <div className="flex flex-col space-y-4">
// // //                 {currentQuestion.options.map((option, index) => (
// // //                   <button
// // //                     key={index}
// // //                     onClick={() => handleAnswer(option.text)}
// // //                     className="w-full py-3 px-6 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors duration-200 font-medium"
// // //                   >
// // //                     {option.text}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Quiz;

// // import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // import { Loader2 } from 'lucide-react';
// // import axios from 'axios';

// // function Quiz() {
// //   const [questions, setQuestions] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [answers, setAnswers] = useState([]);
// //   const [loading, setLoading] = useState(true); // Set initial loading to true
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchQuestions = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/api/quiz/questions");
// //         setQuestions(res.data);
// //       } catch (err) {
// //         console.error("Error fetching quiz questions:", err);
// //         alert("Failed to load quiz questions.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchQuestions();
// //   }, []);

// //   const handleAnswer = (selectedOption) => {
// //     const newAnswers = [
// //       ...answers,
// //       {
// //         questionId: questions[currentQuestionIndex].id,
// //         selectedOption,
// //       },
// //     ];
// //     setAnswers(newAnswers);

// //     if (currentQuestionIndex < questions.length - 1) {
// //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// //     } else {
// //       submitQuiz(newAnswers);
// //     }
// //   };

// //   const submitQuiz = async (finalAnswers) => {
// //     setLoading(true);
// //     try {
// //       const res = await axios.post("http://localhost:5000/api/quiz/submit", {
// //         answers: finalAnswers,
// //       });
// //       navigate("/quiz-result", { state: { result: res.data } });
// //     } catch (err) {
// //       alert("Error submitting quiz.");
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
// //         <Navbar />
// //         <div className="flex items-center justify-center h-96">
// //           <div className="text-center">
// //             <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
// //             <p className="text-gray-600">Loading questions...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const currentQuestion = questions[currentQuestionIndex];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
// //       <Navbar />
// //       <div className="flex flex-col items-center justify-center min-h-screen p-4">
// //         <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center">
// //           <h2 className="text-2xl font-bold text-green-700 mb-6">
// //             Dosha Assessment ({currentQuestionIndex + 1}/{questions.length})
// //           </h2>
// //           {currentQuestion && (
// //             <div className="space-y-6">
// //               <p className="text-xl text-gray-800 font-semibold">{currentQuestion.question}</p>
// //               <div className="flex flex-col space-y-4">
// //                 {currentQuestion.options.map((option, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => handleAnswer(option.text)}
// //                     className="w-full py-3 px-6 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors duration-200 font-medium"
// //                   >
// //                     {option.text}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Quiz;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ChevronRight, ChevronLeft, Brain, CheckCircle } from 'lucide-react';
// import axios from 'axios';

// const Quiz = () => {
//   const navigate = useNavigate();
//   const [quizQuestions, setQuizQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [selectedOption, setSelectedOption] = useState('');

//   // ✅ Fetch questions from backend
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/quiz/questions");
//         console.log("Fetched Questions:", res.data); // Debugging
//         setQuizQuestions(res.data);
//       } catch (err) {
//         console.error("Error fetching questions:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQuestions();
//   }, []);

//   const handleAnswer = (option) => {
//     setSelectedOption(option.dosha);
//     setAnswers(prev => ({
//       ...prev,
//       [currentQuestion]: option
//     }));
//   };

//   const handleNext = async () => {
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedOption(answers[currentQuestion + 1]?.dosha || '');
//     } else {
//       // Calculate result
//       const doshaScores = { vata: 0, pitta: 0, kapha: 0 };
//       Object.values(answers).forEach(answer => {
//         doshaScores[answer.dosha]++;
//       });

//       const dominantDosha = Object.entries(doshaScores).reduce((a, b) =>
//         doshaScores[a[0]] > doshaScores[b[0]] ? a : b
//       )[0];

//       // ✅ Save result to backend
//       try {
//         await axios.post("http://localhost:5000/api/quiz/save", {
//           answers,
//           doshaScores,
//           dominantDosha,
//           totalQuestions: quizQuestions.length
//         });
//       } catch (err) {
//         console.error("Error saving results:", err);
//       }

//       navigate('/quiz-result', {
//         state: {
//           answers,
//           doshaScores,
//           dominantDosha,
//           totalQuestions: quizQuestions.length
//         }
//       });
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setSelectedOption(answers[currentQuestion - 1]?.dosha || '');
//     }
//   };

//   const progress = quizQuestions.length
//     ? ((currentQuestion + 1) / quizQuestions.length) * 100
//     : 0;

//   if (loading) return <p className="text-center text-lg">Loading quiz...</p>;
//   if (!quizQuestions.length) return <p className="text-center text-lg text-red-500">No quiz questions found</p>;

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white">
//           <div className="flex items-center space-x-3 mb-4">
//             <Brain className="w-8 h-8" />
//             <h1 className="text-3xl font-bold">Dosha Discovery Quiz</h1>
//           </div>
//           <p className="text-emerald-100 text-lg">
//             Discover your unique Ayurvedic constitution through this comprehensive assessment
//           </p>

//           {/* Progress Bar */}
//           <div className="mt-6">
//             <div className="flex justify-between text-sm text-emerald-100 mb-2">
//               <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
//               <span>{Math.round(progress)}% Complete</span>
//             </div>
//             <div className="w-full bg-emerald-800 rounded-full h-2">
//               <div
//                 className="bg-amber-400 h-2 rounded-full transition-all duration-300 ease-out"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Question Content */}
//         <div className="p-8">
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//               {quizQuestions[currentQuestion]?.question}
//             </h2>

//             <div className="space-y-4">
//               {quizQuestions[currentQuestion]?.options?.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswer(option)}
//                   className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 hover:shadow-md ${
//                     selectedOption === option.dosha
//                       ? 'border-emerald-500 bg-emerald-50 shadow-md'
//                       : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-100'
//                   }`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-800 font-medium">{option.text}</span>
//                     {selectedOption === option.dosha && (
//                       <CheckCircle className="w-5 h-5 text-emerald-600" />
//                     )}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-between">
//             <button
//               onClick={handlePrevious}
//               disabled={currentQuestion === 0}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
//                 currentQuestion === 0
//                   ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                   : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
//               }`}
//             >
//               <ChevronLeft className="w-4 h-4" />
//               <span>Previous</span>
//             </button>

//             <button
//               onClick={handleNext}
//               disabled={!selectedOption}
//               className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
//                 selectedOption
//                   ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
//                   : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//               }`}
//             >
//               <span>{currentQuestion === quizQuestions.length - 1 ? 'Get Results' : 'Next'}</span>
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Brain, CheckCircle } from 'lucide-react';
import axios from 'axios';

const Quiz = () => {
  const navigate = useNavigate();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/quiz/questions");
        setQuizQuestions(res.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (option) => {
    setSelectedOption(option.dosha);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: option
    }));
  };

  const handleNext = async () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]?.dosha || '');
    } else {
      // Calculate dosha score
      const doshaScores = { Vata: 0, Pitta: 0, Kapha: 0 };
      Object.values(answers).forEach(ans => {
        doshaScores[ans.dosha]++;
      });

      const dominantDosha = Object.entries(doshaScores).reduce((a, b) =>
        doshaScores[a[0]] > doshaScores[b[0]] ? a : b
      )[0];

      // Save result to backend (optional)
      try {
        await axios.post("http://localhost:5000/api/quiz/save-result", {
          dosha: dominantDosha
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}` // if using JWT
          }
        });
      } catch (err) {
        console.error("Error saving result:", err);
      }

      // Navigate to result page
     const res = await axios.post("http://localhost:5000/api/quiz/submit", { answers });
navigate("/quiz-result", {
  state: { 
    answers, 
    dominantDosha: res.data.dominantDosha,
    doshaScores: res.data.doshaScores,
    totalQuestions: res.data.totalQuestions 
  }
});

    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]?.dosha || '');
    }
  };

  const progress = quizQuestions.length
    ? ((currentQuestion + 1) / quizQuestions.length) * 100
    : 0;

  if (loading) return <p className="text-center text-lg">Loading quiz...</p>;
  if (!quizQuestions.length) return <p className="text-center text-lg text-red-500">No quiz questions found</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Dosha Discovery Quiz</h1>
          </div>
          <p className="text-emerald-100 text-lg">
            Discover your unique Ayurvedic constitution through this assessment
          </p>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-emerald-100 mb-2">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-emerald-800 rounded-full h-2">
              <div
                className="bg-amber-400 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {quizQuestions[currentQuestion]?.question}
          </h2>

          <div className="space-y-4">
            {quizQuestions[currentQuestion]?.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 hover:shadow-md ${
                  selectedOption === option.dosha
                    ? 'border-emerald-500 bg-emerald-50 shadow-md'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium">{option.text}</span>
                  {selectedOption === option.dosha && (
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
                selectedOption
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>{currentQuestion === quizQuestions.length - 1 ? 'Get Results' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;


