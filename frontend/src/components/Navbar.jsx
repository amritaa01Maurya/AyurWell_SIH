// import React from 'react';
// import { Leaf, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md border-b-2 border-green-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Leaf className="h-8 w-8 text-green-700" />
//             <span className="text-2xl font-bold text-green-700">AyurWell</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <a href="/" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 Home
//               </a>
//               <a href="/doshas" className="text-green-700 bg-green-50 px-3 py-2 rounded-md text-sm font-medium">
//                 Doshas
//               </a>
//               <a href="/consultation" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 Consultation
//               </a>
//               <a href="/about" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 About
//               </a>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700 transition-colors duration-200"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-50 border-t border-green-200">
//             <a href="/" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
//               Home
//             </a>
//             <a href="/doshas" className="text-green-700 bg-white block px-3 py-2 rounded-md text-base font-medium">
//               Doshas
//             </a>
//             <a href="/consultation" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
//               Consultation
//             </a>
//             <a href="/about" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
//               About
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Leaf, Menu, X, User } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-white shadow-md border-b-2 border-green-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <Leaf className="h-8 w-8 text-green-700" />
//             <span className="text-2xl font-bold text-green-700">AyurWell</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <Link to="/" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 Home
//               </Link>
//               <Link to="/doshas" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 Doshas
//               </Link>
//               <Link to="/quiz" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 Quiz
//               </Link>
//               <Link to="/about" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
//                 About
//               </Link>
//             </div>
//             <div className="ml-4">
//               {isLoggedIn ? (
//                 <>
//                   <Link to="/profile" className="text-gray-700 hover:text-green-700">
//                     <User className="h-6 w-6" />
//                   </Link>
//                   <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200">
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link to="/login" className="px-4 py-2 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition-colors duration-200">
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700 transition-colors duration-200"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-50 border-t border-green-200">
//             <Link to="/" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
//               Home
//             </Link>
//             <Link to="/doshas" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
//               Doshas
//             </Link>
//             <Link to="/quiz" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
//               Quiz
//             </Link>
//             <Link to="/about" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
//               About
//             </Link>
//             {isLoggedIn ? (
//               <>
//                 <Link to="/profile" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
//                   Profile
//                 </Link>
//                 <button onClick={handleLogout} className="w-full text-left bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-colors duration-200">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link to="/login" className="text-gray-700 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token"); // Assuming you store JWT in localStorage

  useEffect(() => {
    // Only fetch user data if a token exists
    if (token) {
      const fetchUserProfile = async () => {
        try {
          // You need a backend route to get the current user's profile
          const res = await axios.get("http://localhost:5000/api/user/profile", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(res.data);
        } catch (error) {
          console.error("Failed to fetch user profile", error);
          // Handle error, maybe logout user if token is invalid
        } finally {
          setLoading(false);
        }
      };
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  // This is the dynamic link for recommendations
  const recommendationLink = user?.dosha
    ? `/daily?dosha=${user.dosha}`
    : '/quiz'; // If no dosha, send them to the quiz

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo and other links */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-green-700">AyurWell</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
              
              {/* ✅ DYNAMIC RECOMMENDATION LINK */}
              {token && (
                loading ? (
                  <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500">
                    Loading...
                  </span>
                ) : (
                  <NavLink 
                    to={recommendationLink} 
                    className="nav-link"
                    title={user?.dosha ? "View your recommendations" : "Take the quiz to get recommendations"}
                  >
                    Recommendations
                  </NavLink>
                )
              )}
              
              <NavLink to="/quiz" className="nav-link">Quiz</NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* Login/Logout Button */}
            {!token ? (
              <Link to="/login" className="btn-primary">Login</Link>
            ) : (
              <button onClick={() => { /* Handle Logout */ }} className="btn-secondary">Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;