import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend connection (same as before)
      const res = await axios.post("http://localhost:5000/api/users/login", form);
      localStorage.setItem("token", res.data.token);

      if (form.remember) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }

      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/ayur-bg.jpg')", // <-- put your herbal image here
      }}
    >
      {/* Overlay for soft green tint */}
      <div className="absolute inset-0 bg-green-900/30 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div
        className="relative bg-white p-10 rounded-2xl shadow-2xl"
        style={{ width: "629px", height: "801px" }}
      >
        <h2 className="text-2xl font-bold text-center text-[#5B7C4D] mb-2 font-[math]">
          Welcome back to AyurWell
        </h2>
        <h3 className="text-xl font-semibold text-center text-[#5B7C4D] mb-6 font-[math]">
          Login!
        </h3>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-[#5B7C4D]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-[#5B7C4D]"
          />

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="w-4 h-4"
              />
              Remember me for 30 days
            </label>
            <Link to="/forgot-password" className="text-[#5B7C4D] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5B7C4D] text-white py-3 rounded-xl hover:bg-green-900"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#5B7C4D] font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState } from "react";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";

// const Login = ({ onNavigateToSignup, users }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     rememberMe: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//     setError(""); // Clear error when user starts typing
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     const userExists = users.find((user) => user.email === formData.email);

//     if (!userExists) {
//       setError("No account found with this email.");
//       setIsLoading(false);
//       return;
//     }

//     if (userExists.password !== formData.password) {
//       setError("Incorrect password. Try again.");
//       setIsLoading(false);
//       return;
//     }

//     // Success
//     alert(`Welcome back, ${userExists.name}!`);
//     setIsLoading(false);
//   };

//   return (
//     <div className="animate-fadeIn bg-gradient-to-br from-[#fefdf9] to-[#f4f9f4] p-8 rounded-2xl shadow-2xl border border-olive-200 backdrop-blur-sm w-full max-w-md">
//       {/* Heading */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-extrabold text-olive-800 mb-2 tracking-wide">
//           Welcome Back
//         </h1>
//         <p className="text-olive-600 text-base">Sign in to AyurWell</p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse shadow">
//             {error}
//           </div>
//         )}

//         {/* Email */}
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-semibold text-olive-700 mb-1"
//           >
//             Email Address
//           </label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-olive-500 h-5 w-5" />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full pl-10 pr-4 py-3 border-2 border-olive-200 rounded-xl focus:border-olive-500 focus:ring-2 focus:ring-olive-200 transition-all duration-200 bg-white shadow-sm"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div>
//           <label
//             htmlFor="password"
//             className="block text-sm font-semibold text-olive-700 mb-1"
//           >
//             Password
//           </label>
//           <div className="relative">
//             <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-olive-500 h-5 w-5" />
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full pl-10 pr-12 py-3 border-2 border-olive-200 rounded-xl focus:border-olive-500 focus:ring-2 focus:ring-olive-200 transition-all duration-200 bg-white shadow-sm"
//               placeholder="Enter your password"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-olive-500 hover:text-olive-700 transition"
//             >
//               {showPassword ? (
//                 <EyeOff className="h-5 w-5" />
//               ) : (
//                 <Eye className="h-5 w-5" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Remember Me + Forgot Password */}
//         <div className="flex items-center justify-between text-sm">
//           <label className="flex items-center space-x-2 text-olive-700 cursor-pointer">
//             <input
//               type="checkbox"
//               id="rememberMe"
//               name="rememberMe"
//               checked={formData.rememberMe}
//               onChange={handleInputChange}
//               className="h-4 w-4 text-olive-600 border-olive-300 rounded focus:ring-olive-500"
//             />
//             <span>Remember me</span>
//           </label>
//           <button
//             type="button"
//             className="text-olive-600 hover:text-olive-800 font-medium"
//           >
//             Forgot Password?
//           </button>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full bg-olive-600 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-200 
//             ${
//               isLoading
//                 ? "opacity-50 cursor-not-allowed"
//                 : "hover:bg-olive-700 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl"
//             }`}
//         >
//           {isLoading ? "Signing In..." : "Sign In"}
//         </button>

//         {/* Navigation */}
//         <p className="text-center text-olive-600 pt-4">
//           Don’t have an account?{" "}
//           <button
//             type="button"
//             onClick={onNavigateToSignup}
//             className="text-olive-700 font-semibold hover:text-olive-900"
//           >
//             Sign up
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
