import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Loader2, AlertCircle, Calendar, Sun, Utensils, Info } from 'lucide-react';

const Recommendations = () => {
    const [view, setView] = useState('daily'); // 'daily' or 'weekly'
    const [recommendations, setRecommendations] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // This function fetches both user and recommendation data
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError('');
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        try {
            // First, get the user's profile to find out their dosha
            const profileRes = await axios.get("http://localhost:5000/api/users/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });

            const currentUser = profileRes.data.user;
            setUser(currentUser);

            if (!currentUser || !currentUser.dosha) {
                // If the user has no dosha, we don't need to fetch recommendations
                setLoading(false);
                return;
            }

            // If they have a dosha, fetch the recommendations for the current view
            const endpoint = `http://localhost:5000/api/recommendations/${view}?dosha=${currentUser.dosha}`;
            const recRes = await axios.get(endpoint, {
                 headers: { Authorization: `Bearer ${token}` },
            });
            setRecommendations(recRes.data);

        } catch (err) {
            console.error("Error fetching data:", err);
            setError("Could not load recommendations. Please try again later.");
             if(err.response?.status === 401) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    }, [navigate, view]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    const renderDaily = () => {
        if (!recommendations?.dailyRecommendations) return null;
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.dailyRecommendations.map((slot, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-4">{slot.time}</h3>
                        <ul className="space-y-3">
                            {slot.items.length > 0 ? (
                                slot.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-gray-700">
                                        <Utensils className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                                        <span>
                                            <span className="font-semibold">{item.food}</span> - <span className="text-sm text-gray-500">{item.benefit}</span>
                                        </span>
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-500 italic">No specific recommendations for this time.</li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    const renderWeekly = () => {
        if (!recommendations?.weeklyRecommendations) return null;
        return (
            <div className="space-y-8">
                {recommendations.weeklyRecommendations.map((day, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                        <h3 className="text-2xl font-bold text-emerald-800 mb-6">{day.day}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                             {day.daily.map((slot, i) => (
                                 <div key={i} className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-700 mb-2">{slot.time}</h4>
                                    {slot.items.length > 0 ? (
                                        slot.items.map((item, j) => (
                                             <p key={j} className="text-sm text-gray-600">{item.food}</p>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-500 italic">No specific recommendation.</p>
                                    )}
                                 </div>
                             ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Your Wellness Plan</h1>
                    {user?.dosha ? (
                        <p className="text-lg text-gray-600">Personalized food recommendations for your <span className="font-bold text-emerald-600">{user.dosha}</span> dosha.</p>
                    ) : (
                         <p className="text-lg text-gray-600">Discover your personalized food plan by taking the Dosha quiz.</p>
                    )}
                </div>

                {error && (
                     <div className="flex items-center gap-3 bg-red-50 text-red-800 p-4 rounded-lg mb-6 max-w-4xl mx-auto">
                        <AlertCircle />
                        <span>{error}</span>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
                    </div>
                ) : user && user.dosha ? (
                    <>
                        <div className="flex justify-center mb-8 bg-gray-200 p-1 rounded-full w-fit mx-auto">
                            <button
                                onClick={() => setView('daily')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 ${
                                    view === 'daily' ? 'bg-white text-emerald-700 shadow' : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                <Sun size={18}/> Daily
                            </button>
                            <button
                                onClick={() => setView('weekly')}
                                className={`px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 ${
                                    view === 'weekly' ? 'bg-white text-emerald-700 shadow' : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                <Calendar size={18}/> Weekly
                            </button>
                        </div>
                        {view === 'daily' ? renderDaily() : renderWeekly()}
                    </>
                ) : (
                    <div className="text-center bg-white p-12 rounded-2xl shadow-md border max-w-lg mx-auto">
                        <Info className="mx-auto h-12 w-12 text-blue-500" />
                        <h3 className="mt-4 text-xl font-medium text-gray-900">Discover Your Personalized Plan</h3>
                        <p className="mt-2 text-gray-500">You haven't taken the Dosha quiz yet. Take the quiz to unlock food recommendations tailored just for you.</p>
                        <Link to="/quiz" className="mt-6 inline-block bg-emerald-600 text-white font-semibold py-2.5 px-8 rounded-lg shadow-md hover:bg-emerald-700 transition-colors">
                            Take the Quiz
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Recommendations;

