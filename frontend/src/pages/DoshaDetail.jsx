import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Loader2, AlertCircle, ArrowLeft, Wind, Flame, Droplets, CheckCircle, XCircle, Brain, Heart, Shield } from 'lucide-react';

const DoshaHeaderIcon = ({ doshaName, className }) => {
    switch (doshaName) {
        case 'Vata':
            return <Wind className={className} />;
        case 'Pitta':
            return <Flame className={className} />;
        case 'Kapha':
            return <Droplets className={className} />;
        default:
            return null;
    }
};

const DoshaDetail = () => {
    const { id } = useParams();
    const [dosha, setDosha] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoshaDetail = async () => {
            if (!id) {
                setError("No Dosha ID provided.");
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/doshas/${id}`);
                setDosha(response.data);
            } catch (err) {
                console.error('Error fetching dosha details:', err);
                setError('Could not find the requested dosha. Please return to the previous page.');
            } finally {
                setLoading(false);
            }
        };
        fetchDoshaDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
                <p className="ml-4 text-lg text-gray-700">Loading Dosha Details...</p>
            </div>
        );
    }

    if (error || !dosha) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                     <div className="flex flex-col items-center gap-4 bg-red-50 text-red-800 p-8 rounded-lg">
                        <AlertCircle className="w-12 h-12"/>
                        <p className="text-xl font-semibold">{error || "Dosha not found."}</p>
                        <button
                            onClick={() => navigate('/doshas')}
                            className="mt-4 bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
                        >
                            Back to All Doshas
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            {/* --- Header Section --- */}
            <header className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button onClick={() => navigate('/doshas')} className="flex items-center gap-2 text-emerald-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={18} />
                        Back to All Doshas
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-4 rounded-full">
                           <DoshaHeaderIcon doshaName={dosha.doshaName} className="w-10 h-10"/>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold">{dosha.doshaName}</h1>
                            <p className="text-xl text-emerald-100 mt-1">{dosha.description}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- Main Content --- */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-8">
                    {/* Detailed Description */}
                    <section className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding {dosha.doshaName}</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">{dosha.detailedDescription}</p>
                    </section>

                    {/* Characteristics */}
                     <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                             <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-7 h-7 text-emerald-600"/>
                                <h3 className="text-xl font-bold text-gray-800">Physical Traits</h3>
                             </div>
                            <ul className="space-y-2 text-gray-700">
                                {dosha.physicalTraits.map((trait, i) => <li key={i} className="flex items-center gap-3"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div>{trait}</li>)}
                            </ul>
                        </div>
                         <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                             <div className="flex items-center gap-3 mb-4">
                                <Brain className="w-7 h-7 text-emerald-600"/>
                                <h3 className="text-xl font-bold text-gray-800">Mental Traits</h3>
                             </div>
                            <ul className="space-y-2 text-gray-700">
                                {dosha.mentalTraits.map((trait, i) => <li key={i} className="flex items-center gap-3"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div>{trait}</li>)}
                            </ul>
                        </div>
                    </section>

                    {/* Balancing Tips */}
                    <section className="bg-emerald-50 p-8 rounded-2xl border-2 border-emerald-200">
                        <div className="flex items-center gap-3 mb-6">
                            <Heart className="w-8 h-8 text-emerald-600"/>
                            <h2 className="text-2xl font-bold text-gray-800">How to Balance {dosha.doshaName}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
                             {dosha.balancingTips.map((tip, i) => (
                                 <div key={i} className="flex items-start gap-3">
                                     <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"/>
                                     <span>{tip}</span>
                                 </div>
                             ))}
                        </div>
                    </section>

                    {/* Foods */}
                     <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Foods to Favor</h3>
                            <ul className="space-y-2 text-gray-700">
                                {dosha.foodsToEat.map((food, i) => <li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/>{food}</li>)}
                            </ul>
                        </div>
                         <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Foods to Reduce</h3>
                            <ul className="space-y-2 text-gray-700">
                                {dosha.foodsToAvoid.map((food, i) => <li key={i} className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/>{food}</li>)}
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default DoshaDetail;

