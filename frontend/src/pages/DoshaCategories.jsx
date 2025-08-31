import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Loader2, AlertCircle, ArrowRight, Wind, Flame, Droplets } from 'lucide-react';

const DoshaIcon = ({ doshaName, className }) => {
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

const DoshaCategories = () => {
    const [doshas, setDoshas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDoshas = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/doshas/');
                if (response.data && Array.isArray(response.data.doshas)) {
                    setDoshas(response.data.doshas);
                } 
                // Fallback for when the API sends a direct array
                else if (Array.isArray(response.data)) {
                    setDoshas(response.data);
                } else {
                    // If the data is not an array, something is wrong with the API response.
                    console.error("API did not return an array:", response.data);
                    setError('Received invalid data from the server. Expected an array.');
                }
            } catch (err) {
                console.error('Error fetching doshas:', err);
                setError('Could not load dosha information. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchDoshas();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
                <p className="ml-4 text-lg text-gray-700">Loading Doshas...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            {/* --- Header Section --- */}
            <header className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Discover The Three Doshas
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                        Explore the fundamental energies that govern your physical, mental, and emotional well-being according to Ayurvedic wisdom.
                    </p>
                </div>
            </header>

            {/* --- Main Content --- */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {error && (
                    <div className="flex items-center gap-3 bg-red-50 text-red-800 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
                        <AlertCircle />
                        <span>{error}</span>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doshas.map((dosha) => (
                        <div
                            key={dosha._id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden border border-gray-200"
                        >
                            <div className="p-8 flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                     <div className="bg-emerald-100 p-3 rounded-full">
                                        <DoshaIcon doshaName={dosha.doshaName} className="w-8 h-8 text-emerald-600"/>
                                     </div>
                                    <h2 className="text-3xl font-bold text-gray-800">{dosha.doshaName}</h2>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {dosha.description}
                                </p>
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-3">Key Characteristics:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {dosha.characteristics.slice(0, 3).map((char, index) => (
                                            <span
                                                key={index}
                                                className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium border border-emerald-200"
                                            >
                                                {char}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-gray-50">
                                <button
                                    onClick={() => navigate(`/doshas/${dosha._id}`)}
                                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-emerald-700 transition-colors group"
                                >
                                    Learn More
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                 {/* --- Call to Action Section --- */}
                <section className="mt-20 text-center bg-white p-12 rounded-2xl shadow-md border border-gray-200">
                     <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Ready to Find Your Balance?
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
                        Your unique dosha combination is the key to unlocking personalized wellness. Take our quick and insightful quiz to discover your constitution.
                    </p>
                    <Link to="/quiz" className="inline-block bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform">
                        Take the Dosha Quiz
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default DoshaCategories;

