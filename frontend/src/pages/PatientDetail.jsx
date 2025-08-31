import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Loader2, AlertCircle, User, FileText, ArrowLeft, ShieldCheck, Mail, Phone, Home, Leaf, Heart, CheckCircle } from 'lucide-react';

// --- Top Navigation Bar for Doctor ---
const DoctorNavbar = ({ doctorName }) => (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-30 border-b border-gray-200">
        <div className="flex items-center justify-between h-20 px-6 lg:px-12">
            <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-700 h-8 w-8" />
                <span className="text-xl md:text-3xl font-bold text-blue-800">AyurWell | Doctor Portal</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700 hidden sm:inline">Dr. {doctorName?.split(' ').pop()}</span>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                    <User className="w-6 h-6 text-blue-600" />
                </div>
            </div>
        </div>
    </header>
);


// --- Main Patient Detail Component ---
const PatientDetail = () => {
    const { reviewId } = useParams();
    const [reviewDetails, setReviewDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [doctorNotes, setDoctorNotes] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const fetchReviewDetails = useCallback(async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/api/doctor/review/${reviewId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setReviewDetails(response.data.review);
            setDoctorNotes(response.data.review.doctorNotes || ''); // Pre-fill notes if they exist
        } catch (err) {
            console.error("Error fetching review details:", err);
            setError("Could not load patient details. Please go back and try again.");
            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    }, [reviewId, navigate]);

    useEffect(() => {
        fetchReviewDetails();
    }, [fetchReviewDetails]);

    const handleSubmitReview = async () => {
        const token = localStorage.getItem("token");
        setSubmitting(true);
        setError('');
        try {
            await axios.put(`http://localhost:5000/api/doctor/review/${reviewId}`, 
            {
                status: 'approved',
                notes: doctorNotes,
            }, 
            {
                headers: { Authorization: `Bearer ${token}` },
            });
            navigate('/doctor/dashboard'); // Redirect back to dashboard on success
        } catch (err) {
             console.error("Error submitting review:", err);
             setError(err.response?.data?.message || "Failed to submit review.");
        } finally {
            setSubmitting(false);
        }
    };


    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
                <Loader2 className="h-12 w-12 animate-spin text-blue-800" />
                <p className="mt-4 text-lg text-gray-700">Loading Patient Details...</p>
            </div>
        );
    }
    
    const patient = reviewDetails?.patient;

    return (
        <div className="min-h-screen bg-gray-50">
            <DoctorNavbar doctorName={reviewDetails?.doctor?.name} />
            <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
                 <div className="mb-6">
                    <Link to="/doctor/dashboard" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                        <ArrowLeft size={18} />
                        Back to Dashboard
                    </Link>
                </div>

                {error && (
                    <div className="flex items-center gap-3 bg-red-100 border border-red-300 text-red-800 p-4 rounded-lg mb-8">
                        <AlertCircle />
                        <span>{error}</span>
                    </div>
                )}

                {!reviewDetails || !patient ? (
                     <div className="text-center p-12 bg-white rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold text-gray-700">No patient data available.</h2>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Patient Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">Patient Information</h2>
                                <div className="space-y-4">
                                     <div className="flex items-start gap-3">
                                        <User className="w-5 h-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Name</p>
                                            <p className="font-medium text-gray-800">{patient.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Email</p>
                                            <p className="font-medium text-gray-800 break-all">{patient.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Phone</p>
                                            <p className="font-medium text-gray-800">{patient.phone || 'Not provided'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Home className="w-5 h-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="text-gray-500 text-sm">Address</p>
                                            <p className="font-medium text-gray-800">{patient.address || 'Not provided'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">Quiz Summary</h2>
                                 <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg text-center">
                                    <Leaf className="mx-auto h-8 w-8 text-blue-600 mb-2"/>
                                    <h3 className="text-2xl font-bold text-blue-700">{reviewDetails.doshaAtReview}</h3>
                                    <p className="text-sm text-gray-600 mt-2">Determined on {new Date(reviewDetails.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Review Form */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-1">Wellness Plan Review</h2>
                            <p className="text-gray-500 mb-6">Review the patient's details and provide your professional feedback.</p>
                            
                             <div>
                                <label htmlFor="doctorNotes" className="block text-sm font-medium text-gray-700 mb-2">
                                    Doctor's Notes & Recommendations
                                </label>
                                <textarea
                                    id="doctorNotes"
                                    rows="8"
                                    value={doctorNotes}
                                    onChange={(e) => setDoctorNotes(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Add any additional recommendations, modifications, or lifestyle advice for the patient..."
                                ></textarea>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={handleSubmitReview}
                                    disabled={submitting}
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20}/> Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle size={20}/> Approve Plan
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default PatientDetail;

