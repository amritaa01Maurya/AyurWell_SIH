// import React from 'react';
// import { useLocation, useNavigate, Link } from 'react-router-dom';
// import { Trophy, ArrowRight, Sparkles, BookOpen, Apple } from 'lucide-react';
// import { doshaTypes } from '../data/dummyData';

// const QuizResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // If no quiz data, redirect to quiz
//   if (!location.state) {
//     navigate('/quiz');
//     return null;
//   }

//   // const { answers, doshaScores, dominantDosha, totalQuestions } = location.state;
//   const {doshaScores, dominantDosha, totalQuestions } = location.state;
//   const doshaInfo = doshaTypes[dominantDosha];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       {/* Results Header */}
//       <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white mb-8">
//         <div className="flex items-center space-x-3 mb-4">
//           <Trophy className="w-10 h-10 text-amber-300" />
//           <h1 className="text-4xl font-bold">Your Dosha Results</h1>
//         </div>
//         <p className="text-emerald-100 text-lg">
//           Congratulations! You've completed the quiz and discovered your Ayurvedic constitution.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Main Result */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* Dominant Dosha */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
//             <div className="text-center mb-6">
//               <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
//                 <Sparkles className="w-5 h-5 text-emerald-600" />
//                 <span className="text-emerald-800 font-semibold">Your Primary Dosha</span>
//               </div>
//               <h2 className="text-4xl font-bold text-emerald-800 mb-2">{doshaInfo.name}</h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 {doshaInfo.description}
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-800 mb-3">Your Characteristics</h4>
//                 <ul className="space-y-2">
//                   {doshaInfo.characteristics.map((char, index) => (
//                     <li key={index} className="flex items-center space-x-2">
//                       <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                       <span className="text-gray-600">{char}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold text-gray-800 mb-3">Diet Guidelines</h4>
//                 <ul className="space-y-2">
//                   {doshaInfo.dietRecommendations.slice(0, 4).map((rec, index) => (
//                     <li key={index} className="flex items-center space-x-2">
//                       <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
//                       <span className="text-gray-600">{rec}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Quiz Summary */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
//             <h3 className="text-xl font-semibold text-gray-800 mb-6">Quiz Summary</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               {Object.entries(doshaScores).map(([dosha, score]) => (
//                 <div key={dosha} className="text-center p-4 bg-gray-50 rounded-lg">
//                   <h4 className="text-lg font-semibold text-gray-800 capitalize">{dosha}</h4>
//                   <div className="text-2xl font-bold text-emerald-600">{score}</div>
//                   <div className="text-sm text-gray-500">out of {totalQuestions}</div>
//                   <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                     <div 
//                       className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
//                       style={{ width: `${(score / totalQuestions) * 100}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <p className="text-gray-600 text-center">
//               Based on your {totalQuestions} answers, your dominant dosha is <strong>{doshaInfo.name}</strong>
//             </p>
//           </div>
//         </div>

//         {/* Action Panel */}
//         <div className="space-y-6">
//           {/* Next Steps */}
//           <div className="bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Steps</h3>
//             <div className="space-y-4">
//               <Link
//                 to="/diet"
//                 className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200 group"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Apple className="w-5 h-5 text-emerald-600" />
//                   <div>
//                     <h4 className="font-medium text-gray-800">Explore Diet Guide</h4>
//                     <p className="text-sm text-gray-600">Personalized food recommendations</p>
//                   </div>
//                 </div>
//                 <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform duration-200" />
//               </Link>

//               <Link
//                 to="/profile"
//                 className="flex items-center justify-between p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-200 group"
//               >
//                 <div className="flex items-center space-x-3">
//                   <BookOpen className="w-5 h-5 text-amber-600" />
//                   <div>
//                     <h4 className="font-medium text-gray-800">Update Profile</h4>
//                     <p className="text-sm text-gray-600">Set your dosha type and preferences</p>
//                   </div>
//                 </div>
//                 <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform duration-200" />
//               </Link>
//             </div>
//           </div>

//           {/* Retake Quiz */}
//           <div className="bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Want to Retake?</h3>
//             <p className="text-gray-600 mb-4 text-sm">
//               Your dosha can change based on lifestyle, stress, and environment. Feel free to retake the quiz anytime.
//             </p>
//             <button
//               onClick={() => navigate('/quiz')}
//               className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors duration-200"
//             >
//               Retake Quiz
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizResult;

// QuizResult.jsx
import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Trophy, ArrowRight, Sparkles, BookOpen, Apple } from "lucide-react";

const doshaInfo = {
  Vata: {
    name: "Vata",
    description: "The energy of movement and change. Associated with air and space elements.",
    characteristics: ["Creative", "Energetic", "Quick-thinking", "Adaptable", "Enthusiastic"],
    dietRecommendations: ["Warm foods", "Cooked vegetables", "Grains", "Dairy", "Nuts & seeds"]
  },
  Pitta: {
    name: "Pitta",
    description: "The energy of transformation and metabolism. Associated with fire and water elements.",
    characteristics: ["Focused", "Organized", "Goal-oriented", "Intelligent", "Competitive"],
    dietRecommendations: ["Cooling foods", "Sweet fruits", "Leafy greens", "Grains", "Coconut"]
  },
  Kapha: {
    name: "Kapha",
    description: "The energy of structure and stability. Associated with earth and water elements.",
    characteristics: ["Calm", "Steady", "Nurturing", "Patient", "Loyal"],
    dietRecommendations: ["Light, dry foods", "Spicy foods", "Leafy greens", "Legumes", "Most vegetables"]
  }
};

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/quiz");
    return null;
  }

  const { dominantDosha, doshaScores, totalQuestions } = location.state;
  const dosha = doshaInfo[dominantDosha];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-xl p-8 text-white mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Trophy className="w-10 h-10 text-amber-300" />
          <h1 className="text-4xl font-bold">Your Dosha Results</h1>
        </div>
        <p className="text-emerald-100 text-lg">
          Congratulations! Your Ayurvedic constitution has been assessed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Result */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-semibold">Your Primary Dosha</span>
              </div>
              <h2 className="text-4xl font-bold text-emerald-800 mb-2">{dosha.name}</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">{dosha.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Characteristics</h4>
                <ul className="space-y-2">
                  {dosha.characteristics.map((char, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-600">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Diet Recommendations</h4>
                <ul className="space-y-2">
                  {dosha.dietRecommendations.map((rec, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-600">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quiz Scores */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Quiz Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {Object.entries(doshaScores).map(([doshaName, score]) => (
                <div key={doshaName} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 capitalize">{doshaName}</h4>
                  <div className="text-2xl font-bold text-emerald-600">{score}</div>
                  <div className="text-sm text-gray-500">out of {totalQuestions}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(score / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Steps</h3>
            <Link
              to="/diet"
              className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <Apple className="w-5 h-5 text-emerald-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Explore Diet Guide</h4>
                  <p className="text-sm text-gray-600">Personalized food recommendations</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              to="/profile"
              className="flex items-center justify-between p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <div>
                  <h4 className="font-medium text-gray-800">Update Profile</h4>
                  <p className="text-sm text-gray-600">Set your dosha type and preferences</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-emerald-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Retake Quiz?</h3>
            <button
              onClick={() => navigate("/quiz")}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors duration-200"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;

