// import React, { useState, useEffect, useCallback } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
// import { User, Mail, Phone, Home, Leaf, Loader2, AlertCircle, Edit, CheckCircle, Info } from 'lucide-react';
// import Navbar from '../components/Navbar';

// // --- Sub-Components ---

// const EditProfileModal = ({ user, onClose, onSave }) => {
//     const [formData, setFormData] = useState({
//         name: user.name || '',
//         phone: user.phone || '',
//         address: user.address || '',
//     });
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSave = async () => {
//         setLoading(true);
//         setError('');
//         try {
//             await onSave(formData);
//             onClose();
//         } catch (err) {
//             setError(err.message || 'Failed to save profile.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//             <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
//                 <div className="space-y-4">
//                     <div>
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
//                         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
//                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"/>
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
//                         <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
//                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"/>
//                     </div>
//                     <div>
//                         <label htmlFor="address" className="block text-sm font-medium text-gray-600 mb-1">Address</label>
//                         <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}
//                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"/>
//                     </div>
//                 </div>
//                  {error && <p className="text-red-600 text-sm mt-4">{error}</p>}
//                 <div className="flex justify-end gap-4 mt-8">
//                     <button onClick={onClose} className="py-2 px-6 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">Cancel</button>
//                     <button onClick={handleSave} disabled={loading} className="bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-700 transition-colors flex items-center gap-2 disabled:bg-emerald-400">
//                         {loading && <Loader2 className="animate-spin" size={18}/>}
//                         Save Changes
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const VerificationTracker = ({ status }) => {
//     const steps = [
//         { name: 'Quiz Taken', key: 'pending' },
//         { name: 'In Review', key: 'in-review' },
//         { name: 'Approved', key: 'approved' },
//     ];
    
//     const currentStepIndex = steps.findIndex(step => step.key === status);

//     return (
//         <div>
//             <h3 className="font-bold text-lg text-gray-800 mb-6 text-center">Your Plan Status</h3>
//             <div className="flex justify-between items-center relative max-w-sm mx-auto">
//                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200"></div>
//                 <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-emerald-600 transition-all duration-500" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}></div>
//                 {steps.map((step, index) => (
//                     <div key={step.key} className="relative z-10 flex flex-col items-center">
//                         <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${index <= currentStepIndex ? 'bg-emerald-600 text-white' : 'bg-gray-300 text-gray-500'}`}>
//                            {index < currentStepIndex ? <CheckCircle size={20} /> : <span className="font-bold">{index + 1}</span>}
//                         </div>
//                         <p className={`mt-2 text-center text-sm font-semibold ${index <= currentStepIndex ? 'text-emerald-700' : 'text-gray-500'}`}>
//                             {step.name}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//              <p className="text-center text-sm text-gray-500 mt-6">Your profile status will update after it is reviewed by a doctor.</p>
//         </div>
//     );
// }

// // --- Main Profile Page Component ---
// const Profile = () => {
//     const [user, setUser] = useState(null);
//     const [review, setReview] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const navigate = useNavigate();

//     const fetchProfileData = useCallback(async () => {
//         const token = localStorage.getItem("token");
//         if (!token) {
//             navigate("/login");
//             return;
//         }

//         try {
//             setLoading(true);
//             const response = await axios.get("http://localhost:5000/api/users/profile", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUser(response.data.user);
//             setReview(response.data.review);
//         } catch (err) {
//             console.error(err);
//             setError("Failed to fetch profile data. Please log in again.");
//             if(err.response?.status === 401) {
//                 localStorage.removeItem('token');
//                 navigate('/login');
//             }
//         } finally {
//             setLoading(false);
//         }
//     }, [navigate]);

//     useEffect(() => {
//         fetchProfileData();
//     }, [fetchProfileData]);

//     const handleSaveProfile = async (updatedData) => {
//         const token = localStorage.getItem("token");
//         try {
//             const response = await axios.put("http://localhost:5000/api/users/profile", updatedData, {
//                  headers: { Authorization: `Bearer ${token}` },
//             });
//             setUser(response.data.user); // Update state with the returned user data
//         } catch(err) {
//             console.error("Error updating profile:", err);
//             // Re-throw to be caught by modal
//             throw new Error(err.response?.data?.message || "Could not update profile.");
//         }
//     };

//     if (loading) {
//         return (
//              <div className="flex justify-center items-center min-h-screen">
//                 <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
//                 <p className="ml-4 text-lg text-gray-700">Loading Profile...</p>
//             </div>
//         );
//     }

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <Navbar />
//             {isEditing && user && <EditProfileModal user={user} onClose={() => setIsEditing(false)} onSave={handleSaveProfile} />}
            
//             <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-6xl">
//                  {error && (
//                     <div className="flex items-center gap-3 bg-red-50 text-red-800 p-4 rounded-lg mb-6 max-w-4xl mx-auto">
//                         <AlertCircle />
//                         <span>{error}</span>
//                     </div>
//                 )}

//                 {user && (
//                     <>
//                         <header className="flex flex-col sm:flex-row items-center justify-between mb-8 max-w-4xl mx-auto">
//                             <div className="flex items-center gap-4">
//                                 <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-emerald-200">
//                                     <User className="w-10 h-10 text-emerald-600" />
//                                 </div>
//                                 <div>
//                                     <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
//                                     <p className="text-gray-500">{user.email}</p>
//                                 </div>
//                             </div>
//                             <button onClick={() => setIsEditing(true)} className="mt-4 sm:mt-0 flex items-center gap-2 bg-white text-gray-700 font-semibold py-2 px-5 rounded-lg shadow-sm border border-gray-300 hover:bg-gray-100 transition-colors">
//                                 <Edit size={16} /> Edit Profile
//                             </button>
//                         </header>

//                         <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
//                            {/* Left Column */}
//                             <div className="lg:col-span-2 space-y-8">
//                                 <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
//                                     {user.dosha ? (
//                                         <VerificationTracker status={review?.status || 'pending'}/>
//                                     ) : (
//                                         <div className="text-center p-4">
//                                             <Info className="mx-auto h-12 w-12 text-blue-500"/>
//                                             <h3 className="mt-2 text-lg font-medium text-gray-900">Discover Your Dosha</h3>
//                                             <p className="mt-1 text-sm text-gray-500">You haven't taken the Dosha quiz yet. Take the quiz to get personalized recommendations.</p>
//                                             <Link to="/quiz" className="mt-4 inline-block bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-700 transition-colors">
//                                                 Take the Quiz
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </section>
//                             </div>

//                             {/* Right Column */}
//                             <div className="space-y-8">
//                                 <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
//                                     <h2 className="text-xl font-bold mb-4 text-gray-800">Your Details</h2>
//                                     <div className="space-y-4">
//                                         <div className="flex items-start gap-3">
//                                             <Mail className="w-5 h-5 text-emerald-600 mt-1" />
//                                             <div>
//                                                 <p className="text-gray-500 text-sm">Email</p>
//                                                 <p className="font-medium text-gray-800">{user.email}</p>
//                                             </div>
//                                         </div>
//                                          <div className="flex items-start gap-3">
//                                             <Phone className="w-5 h-5 text-emerald-600 mt-1" />
//                                             <div>
//                                                 <p className="text-gray-500 text-sm">Phone</p>
//                                                 <p className="font-medium text-gray-800">{user.phone || 'Not provided'}</p>
//                                             </div>
//                                         </div>
//                                          <div className="flex items-start gap-3">
//                                             <Home className="w-5 h-5 text-emerald-600 mt-1" />
//                                             <div>
//                                                 <p className="text-gray-500 text-sm">Address</p>
//                                                 <p className="font-medium text-gray-800">{user.address || 'Not provided'}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>
//                                  {user.dosha && (
//                                      <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
//                                         <h2 className="text-xl font-bold mb-4 text-gray-800">Your Primary Dosha</h2>
//                                         <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-lg text-center">
//                                             <Leaf className="mx-auto h-8 w-8 text-emerald-600 mb-2"/>
//                                             <h3 className="text-2xl font-bold text-emerald-700">{user.dosha}</h3>
//                                             <p className="text-sm text-gray-600 mt-2">Maintain balance by following your personalized recommendations.</p>
//                                         </div>
//                                     </section>
//                                  )}
//                             </div>
//                         </main>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Profile;


import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { User, Mail, Phone, Home as HomeIcon, Leaf, Loader2, AlertCircle, Edit, CheckCircle, Info, X, ShieldCheck, FileText, Settings, BookOpen, LogOut } from 'lucide-react';
import Navbar from '../components/Navbar'; // Assuming you might want a simpler top nav for other pages. This component can be swapped with TopNavbar if desired.

// --- Sub-Components for the Dashboard Layout ---

const SidebarNav = ({ onSettingsClick }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <aside className="w-64 bg-emerald-800 text-white flex-shrink-0 flex-col h-[calc(100vh-5rem)] p-4 sticky top-20 flex rounded-tr-3xl">
            <nav className="flex flex-col space-y-2 flex-grow pt-8">
                <Link to="/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-700/60 transition-colors">
                    <HomeIcon size={20} />
                    <span className="font-medium">Home</span>
                </Link>
                <Link to="/quiz" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-700/50 transition-colors">
                    <BookOpen size={20} />
                    <span className="font-medium">Take Quiz</span>
                </Link>
                 <Link to="/recommendations" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-700/50 transition-colors">
                    <Leaf size={20} />
                    <span className="font-medium">Recommendations</span>
                </Link>
                <button onClick={onSettingsClick} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-700/50 transition-colors text-left w-full">
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                </button>
            </nav>
            <div className="mt-auto">
                <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-emerald-700/50 transition-colors text-left w-full">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

const TopNavbar = ({ userName }) => (
    <header className="sticky top-0 bg-white/80 backdrop-blur-lg z-30 border-b border-gray-200">
        <div className="flex items-center justify-between h-20 px-6 lg:px-12">
            <div className="flex items-center gap-3">
                <Leaf className="text-emerald-700 h-8 w-8" />
                <span className="text-3xl font-bold text-emerald-800">AyurWell</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 hidden md:block">Your Dashboard</h1>
            <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700 hidden sm:inline">Welcome, {userName?.split(' ')[0]}</span>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                    <User className="w-6 h-6 text-emerald-600" />
                </div>
            </div>
        </div>
    </header>
);

const EditProfileModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: user.name || '',
        phone: user.phone || '',
        address: user.address || '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setLoading(true);
        setError('');
        try {
            await onSave(formData);
            onClose();
        } catch (err) {
            setError(err.message || 'Failed to save profile.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-emerald-900">Update Settings</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
                </div>
                <div className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"/>
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"/>
                    </div>
                </div>
                {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
                <div className="flex justify-end gap-4 mt-8">
                    <button onClick={onClose} className="py-2 px-6 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 font-semibold">Cancel</button>
                    <button onClick={handleSave} disabled={loading} className="bg-emerald-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-900 flex items-center gap-2 disabled:bg-emerald-400">
                        {loading && <Loader2 className="animate-spin" size={18}/>}
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

const VerificationTracker = ({ status }) => {
    const steps = [
        { name: 'Quiz Taken', key: 'pending' },
        { name: 'In Review', key: 'in-review' },
        { name: 'Approved', key: 'approved' },
    ];
    const currentStepIndex = Math.max(0, steps.findIndex(step => step.key === status));

    return (
        <div className="p-4">
            <div className="flex justify-between items-center relative max-w-md mx-auto">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-800 rounded-full transition-all duration-700 ease-out" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}></div>
                {steps.map((step, index) => (
                    <div key={step.key} className="relative z-10 flex flex-col items-center">
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${index <= currentStepIndex ? 'bg-emerald-800 border-emerald-800 text-white' : 'bg-white border-gray-300 text-gray-500'}`}>
                           {index < currentStepIndex ? <CheckCircle size={24} /> : <span className="font-bold text-lg">{index + 1}</span>}
                        </div>
                        <p className={`mt-3 text-center text-sm font-semibold whitespace-nowrap ${index <= currentStepIndex ? 'text-emerald-800' : 'text-gray-500'}`}>
                            {step.name}
                        </p>
                    </div>
                ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">Your wellness plan status will update after it's reviewed by a doctor.</p>
        </div>
    );
}

// --- Main Profile Page Component ---
const Profile = () => {
    const [user, setUser] = useState(null);
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const fetchProfileData = useCallback(async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:5000/api/users/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data.user);
            setReview(response.data.review);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch profile data. Please log in again.");
            if (err.response?.status === 401) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        fetchProfileData();
    }, [fetchProfileData]);

    const handleSaveProfile = async (updatedData) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.put("http://localhost:5000/api/users/profile", updatedData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data.user);
        } catch (err) {
            console.error("Error updating profile:", err);
            throw new Error(err.response?.data?.message || "Could not update profile.");
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
                <Loader2 className="h-12 w-12 animate-spin text-emerald-800" />
                <p className="mt-4 text-lg text-gray-700">Loading Your Dashboard...</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            {isEditing && user && <EditProfileModal user={user} onClose={() => setIsEditing(false)} onSave={handleSaveProfile} />}
            <TopNavbar userName={user?.name} />
            <div className="flex">
                <SidebarNav onSettingsClick={() => setIsEditing(true)} />
                <div className="flex-grow flex flex-col min-w-0">
                    <main className="flex-grow p-4 sm:p-6 lg:p-12">
                        <div className="max-w-5xl mx-auto">
                            {error && (
                                <div className="flex items-center gap-3 bg-red-100 border border-red-300 text-red-800 p-4 rounded-lg mb-8">
                                    <AlertCircle />
                                    <span>{error}</span>
                                </div>
                            )}
                            {user && (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2 space-y-8">
                                        {user.dosha ? (
                                            <>
                                                <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                                    <h2 className="text-lg font-bold text-emerald-900 border-b pb-3 mb-4 flex items-center gap-2"><ShieldCheck size={20}/> Wellness Plan Status</h2>
                                                    <VerificationTracker status={review?.status || 'pending'}/>
                                                </section>
                                                <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                                    <h2 className="text-lg font-bold text-emerald-900 border-b pb-3 mb-4 flex items-center gap-2"><Leaf size={20}/> Your Primary Dosha</h2>
                                                    <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-lg text-center">
                                                        <Leaf className="mx-auto h-10 w-10 text-amber-600 mb-2"/>
                                                        <h3 className="text-3xl font-bold text-amber-800">{user.dosha}</h3>
                                                        <p className="text-sm text-gray-600 mt-2">Maintain balance by following your personalized recommendations.</p>
                                                    </div>
                                                </section>
                                            </>
                                        ) : (
                                            <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 text-center flex flex-col items-center justify-center h-full">
                                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                                    <Leaf className="h-10 w-10 text-emerald-700"/>
                                                </div>
                                                <h3 className="mt-2 text-2xl font-bold text-emerald-900">Discover Your Dosha</h3>
                                                <p className="mt-2 text-gray-600 max-w-md">You haven't taken the Dosha quiz yet. Take our quiz to unlock personalized wellness recommendations.</p>
                                                <Link to="/quiz" className="mt-6 inline-block bg-emerald-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-emerald-800/20 hover:bg-emerald-900 transition-all duration-300 transform hover:scale-105">
                                                    Take the Quiz
                                                </Link>
                                            </section>
                                        )}
                                    </div>
                                    <section className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                        <h2 className="text-lg font-bold text-emerald-900 border-b pb-3 mb-4 flex items-center gap-2"><FileText size={20}/> Your Information</h2>
                                        <div className="space-y-5">
                                            <div className="flex items-start gap-4">
                                                <Mail className="w-5 h-5 text-emerald-700 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-gray-500 text-sm">Email</p>
                                                    <p className="font-semibold text-gray-800 break-all">{user.email}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <Phone className="w-5 h-5 text-emerald-700 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-gray-500 text-sm">Phone</p>
                                                    <p className="font-semibold text-gray-800">{user.phone || <span className="text-gray-400 italic">Not provided</span>}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <HomeIcon className="w-5 h-5 text-emerald-700 mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="text-gray-500 text-sm">Address</p>
                                                    <p className="font-semibold text-gray-800">{user.address || <span className="text-gray-400 italic">Not provided</span>}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Profile;


