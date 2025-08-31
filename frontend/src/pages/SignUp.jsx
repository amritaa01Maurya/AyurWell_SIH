import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { UserPlus, User, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";
import backgroundImg from "../assets/backgroundImg.jpg";

function SignUp() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await axios.post("http://localhost:5000/api/users/register", formData);
            // On successful registration, redirect to login page with a success message
            navigate("/login", { state: { message: "Registration successful! Please log in." } });
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred during registration.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="absolute inset-0 bg-emerald-900 bg-opacity-60 backdrop-blur-sm"></div>

            <div className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-2xl w-full max-w-md m-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
                    <p className="text-gray-500 mt-2">Join AyurWell to start your wellness journey.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text" name="name" placeholder="Full Name"
                            value={formData.name} onChange={handleChange} required
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="email" name="email" placeholder="Email Address"
                            value={formData.email} onChange={handleChange} required
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="password" name="password" placeholder="Password"
                            value={formData.password} onChange={handleChange} required
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 transition"
                        />
                    </div>
                    
                    {/* Role Selection */}
                    <div className="text-sm">
                        <label className="font-medium text-gray-700">I am a:</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-2 p-3 border rounded-lg has-[:checked]:bg-emerald-50 has-[:checked]:border-emerald-500 cursor-pointer">
                                <input type="radio" name="role" value="user" checked={formData.role === 'user'} onChange={handleChange} className="accent-emerald-600" />
                                User
                            </label>
                             <label className="flex items-center gap-2 p-3 border rounded-lg has-[:checked]:bg-emerald-50 has-[:checked]:border-emerald-500 cursor-pointer">
                                <input type="radio" name="role" value="doctor" checked={formData.role === 'doctor'} onChange={handleChange} className="accent-emerald-600"/>
                                Doctor
                            </label>
                        </div>
                    </div>


                    {error && (
                        <div className="flex items-center gap-2 bg-red-50 text-red-700 p-3 rounded-lg">
                            <AlertCircle size={20} />
                            <span>{error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:bg-emerald-400"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <UserPlus size={20} />}
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-emerald-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;

