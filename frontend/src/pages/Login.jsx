import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { LogIn, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";
import backgroundImg from "../assets/backgroundImg.jpg";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
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
            const res = await axios.post("http://localhost:5000/api/users/login", formData);
            const { token } = res.data;
            localStorage.setItem("token", token);

            // Decode token to find user's role and redirect accordingly
            const decoded = jwtDecode(token);
            if (decoded.role === 'doctor') {
                navigate('/doctor/dashboard');
            } else {
                navigate('/');
            }

        } catch (err) {
            setError(err.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="absolute inset-0 bg-emerald-900 bg-opacity-50 backdrop-blur-sm"></div>
            
            <div className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-2xl w-full max-w-md m-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Log in to continue your wellness journey.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        {loading ? <Loader2 className="animate-spin" /> : <LogIn size={20} />}
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Don`t have an account?{" "}
                    <Link to="/signup" className="text-emerald-600 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;

