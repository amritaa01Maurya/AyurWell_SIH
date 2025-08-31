import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Trophy, ArrowRight, Sparkles, BookOpen, Apple, Leaf } from 'lucide-react';

const doshaInfo = {
    Vata: {
        description: "Represents the energy of movement, associated with air and space. You are likely creative, energetic, and quick-thinking.",
        color: "blue"
    },
    Pitta: {
        description: "Represents the energy of transformation, associated with fire and water. You are likely focused, intelligent, and a natural leader.",
        color: "red"
    },
    Kapha: {
        description: "Represents the energy of structure, associated with earth and water. You are likely calm, steady, and compassionate.",
        color: "green"
    }
};

const QuizResult = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // If a user lands here without quiz results, redirect them
    if (!location.state) {
        navigate("/quiz");
        return null; // Render nothing while redirecting
    }

    const { dominantDosha, doshaScores, totalQuestions } = location.state;
    const dosha = doshaInfo[dominantDosha];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
                {/* --- Header --- */}
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl shadow-xl p-8 text-white text-center mb-8">
                    <Trophy className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                    <h1 className="text-4xl font-bold">Your Dosha Results</h1>
                    <p className="text-emerald-100 text-lg mt-2">
                        Congratulations! Your Ayurvedic constitution has been assessed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* --- Main Result Card (Left/Top) --- */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-200 p-8">
                        <div className="text-center">
                            <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                                <Sparkles className="w-5 h-5 text-emerald-600" />
                                <span className="text-emerald-800 font-semibold">Your Primary Dosha</span>
                            </div>
                            <h2 className="text-5xl font-extrabold text-emerald-800 mb-2">{dominantDosha}</h2>
                            <p className="text-gray-600 text-lg max-w-xl mx-auto">{dosha.description}</p>
                        </div>

                        <hr className="my-8" />

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Your Dosha Balance</h3>
                            <div className="space-y-4">
                                {Object.entries(doshaScores).map(([name, score]) => (
                                    <div key={name}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium text-gray-700">{name}</span>
                                            <span className="text-sm font-medium text-emerald-700">{score} / {totalQuestions}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${(score / totalQuestions) * 100}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- Next Steps (Right/Bottom) --- */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Next Steps</h3>
                            <div className="space-y-3">
                                <Link
                                    to="/recommendations"
                                    className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Apple className="w-6 h-6 text-emerald-600" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">View Recommendations</h4>
                                            <p className="text-sm text-gray-600">Get your personalized food plan.</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/profile"
                                    className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <BookOpen className="w-6 h-6 text-emerald-600" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Visit Your Profile</h4>
                                            <p className="text-sm text-gray-600">See your full wellness summary.</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/doshas"
                                    className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <Leaf className="w-6 h-6 text-emerald-600" />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Learn About Doshas</h4>
                                            <p className="text-sm text-gray-600">Explore Vata, Pitta, and Kapha.</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="text-center">
                             <button
                                onClick={() => navigate("/quiz")}
                                className="w-full bg-white hover:bg-gray-100 text-gray-700 font-semibold px-4 py-3 rounded-lg transition-colors border border-gray-300 shadow-sm"
                            >
                                Retake Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizResult;

