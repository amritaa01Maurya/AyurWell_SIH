import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChevronRight, ChevronLeft, Brain, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Quiz = () => {
    const navigate = useNavigate();
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitting, setSubmitting] = useState(false);

    // Fetch questions from the backend when the component mounts
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/quiz/questions");
                if (res.data && res.data.length > 0) {
                    setQuizQuestions(res.data);
                } else {
                    setError("No quiz questions were found.");
                }
            } catch (err) {
                console.error("Error fetching questions:", err);
                setError("Could not load the quiz. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    // Handle selecting an answer
    const handleAnswer = (option) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion]: { questionId: quizQuestions[currentQuestion].id, selectedOption: option.text, dosha: option.dosha }
        }));
    };

    // Navigate to the next question or submit the quiz
    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleSubmit(); // If it's the last question, submit
        }
    };

    // Navigate to the previous question
    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Submit answers to the backend
    const handleSubmit = async () => {
        setSubmitting(true);
        setError('');
        const token = localStorage.getItem("token");

        if (!token) {
            setError("You must be logged in to submit the quiz.");
            setSubmitting(false);
            navigate("/login");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:5000/api/quiz/submit",
                { answers: Object.values(answers) },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Navigate to the result page with the data from the backend
            navigate("/quiz-result", {
                state: {
                    dominantDosha: res.data.dominantDosha,
                    doshaScores: res.data.doshaScores,
                    totalQuestions: res.data.totalQuestions
                }
            });

        } catch (err) {
            console.error("Error submitting quiz:", err);
            setError(err.response?.data?.message || "An error occurred while submitting your results.");
            setSubmitting(false);
        }
    };

    // Calculate progress for the progress bar
    const progress = quizQuestions.length ? ((currentQuestion + 1) / quizQuestions.length) * 100 : 0;
    const currentAnswer = answers[currentQuestion];

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
                <p className="ml-4 text-lg text-gray-700">Loading Quiz...</p>
            </div>
        );
    }
    
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 sm:p-8 text-white">
                        <div className="flex items-center space-x-3 mb-4">
                            <Brain className="w-8 h-8" />
                            <h1 className="text-2xl sm:text-3xl font-bold">Dosha Discovery Quiz</h1>
                        </div>
                        <p className="text-emerald-100 text-base sm:text-lg">
                            Discover your unique Ayurvedic constitution by answering the questions below.
                        </p>

                        <div className="mt-6">
                            <div className="flex justify-between text-sm text-emerald-100 mb-2">
                                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                                <span>{Math.round(progress)}% Complete</span>
                            </div>
                            <div className="w-full bg-emerald-800 rounded-full h-2.5">
                                <div
                                    className="bg-amber-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8">
                        {error ? (
                            <div className="flex items-center gap-3 bg-red-50 text-red-800 p-4 rounded-lg mb-6">
                                <AlertCircle />
                                <span>{error}</span>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
                                    {quizQuestions[currentQuestion]?.question}
                                </h2>
                                <div className="space-y-4">
                                    {quizQuestions[currentQuestion]?.options?.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswer(option)}
                                            className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-200 flex items-center justify-between text-lg
                                                ${currentAnswer?.selectedOption === option.text
                                                    ? 'border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-200'
                                                    : 'border-gray-200 hover:border-emerald-400 hover:bg-emerald-50'
                                                }`}
                                        >
                                            <span className="font-medium text-gray-700">{option.text}</span>
                                            {currentAnswer?.selectedOption === option.text && (
                                                <CheckCircle className="w-6 h-6 text-emerald-600" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="flex justify-between mt-8 pt-6 border-t">
                            <button
                                onClick={handlePrevious}
                                disabled={currentQuestion === 0 || submitting}
                                className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300 text-gray-700"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span>Previous</span>
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={!currentAnswer || submitting}
                                className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                                {submitting ? <Loader2 className="animate-spin" /> : null}
                                <span>{currentQuestion === quizQuestions.length - 1 ? (submitting ? 'Submitting...' : 'Get Results') : 'Next'}</span>
                                {!submitting && <ChevronRight className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;

