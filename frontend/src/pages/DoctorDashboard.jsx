import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Loader2, AlertCircle, User, FileText, Home, LogOut, ArrowRight, ShieldCheck } from 'lucide-react';

// --- Top Navigation Bar for Doctor ---
const DoctorNavbar = ({ doctorName, onLogout }) => (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-30 border-b border-gray-200">
        <div className="flex items-center justify-between h-20 px-6 lg:px-12">
            <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-700 h-8 w-8" />
                <span className="text-xl md:text-3xl font-bold text-blue-800">AyurWell | Doctor Portal</span>
            </div>
            <div className="flex items-center gap-6">
                {/* --- NEW: Home and Logout Links --- */}
                <Link to="/" className="font-semibold text-gray-600 hover:text-blue-700 transition-colors flex items-center gap-2">
                    <Home size={18}/> Home
                </Link>
                <button onClick={onLogout} className="font-semibold text-gray-600 hover:text-blue-700 transition-colors flex items-center gap-2">
                    <LogOut size={18}/> Logout
                </button>
                <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                    <span className="font-semibold text-gray-700 hidden sm:inline">Dr. {doctorName?.split(' ').pop()}</span>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                        <User className="w-6 h-6 text-blue-600" />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

// --- Main Doctor Dashboard Component ---
const DoctorDashboard = () => {
    const [reviews, setReviews] = useState([]);
    const [doctorName, setDoctorName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // --- NEW: Logout Handler ---
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const fetchDashboardData = useCallback(async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            setDoctorName(decoded.name || '');

            const response = await axios.get("http://localhost:5000/api/doctor/reviews", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setReviews(response.data.reviews);
        } catch (err) {
            console.error("Error fetching doctor's dashboard:", err);
            setError("Failed to fetch patient reviews. Please try logging in again.");
            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        fetchDashboardData();
    }, [fetchDashboardData]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
                <Loader2 className="h-12 w-12 animate-spin text-blue-800" />
                <p className="mt-4 text-lg text-gray-700">Loading Doctor Dashboard...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <DoctorNavbar doctorName={doctorName} onLogout={handleLogout} />
            <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome, Dr. {doctorName}</h1>
                    <p className="text-gray-600 mt-1">Here are the patient wellness plans awaiting your review.</p>
                </div>

                {error && (
                    <div className="flex items-center gap-3 bg-red-100 border border-red-300 text-red-800 p-4 rounded-lg mb-8">
                        <AlertCircle />
                        <span>{error}</span>
                    </div>
                )}
                
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Determined Dosha</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quiz Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">View</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {reviews.length > 0 ? (
                                    reviews.map((review) => (
                                        <tr key={review._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <User className="h-6 w-6 text-blue-600" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{review.patient.name}</div>
                                                        <div className="text-sm text-gray-500">{review.patient.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-semibold text-gray-900">{review.doshaAtReview}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-700">{new Date(review.createdAt).toLocaleDateString()}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    review.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                    review.status === 'in-review' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-blue-100 text-blue-800'
                                                }`}>
                                                    {review.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link to={`/doctor/review/${review._id}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-900 font-semibold">
                                                    View Plan <ArrowRight size={16}/>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                                            You have no pending reviews.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DoctorDashboard;

