import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", form);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name"
            value={form.name} onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"/>
          <input type="email" name="email" placeholder="Email"
            value={form.email} onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"/>
          <input type="password" name="password" placeholder="Password"
            value={form.password} onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"/>
          <button type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-green-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

