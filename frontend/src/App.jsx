// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // --- Core Pages ---
// import Home from './pages/Home';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';

// // --- User-Specific Pages & Components ---
// import Profile from './pages/Profile';
// import DoshaCategories from './pages/DoshaCategories';
// import DoshaDetail from './pages/DoshaDetail';
// import Quiz from './pages/Quiz';
// import QuizResult from './pages/QuizResult';
// import Recommendations from './pages/Recommendations';
// import HerbRecommender from './pages/HerbRecommender';
// import Footer from './components/Footer';
// // --- Doctor-Specific Pages & Components ---
// import DoctorDashboard from './pages/DoctorDashboard';
// import PatientDetail from './pages/PatientDetail';
// import DoctorRoute from './components/DoctorRoute'; // Route guard

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* --- Public Routes --- */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/doshas" element={<DoshaCategories />} />
//           <Route path="/doshas/:id" element={<DoshaDetail />} />
          
//           {/* --- User Protected Routes --- */}
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/quiz-result" element={<QuizResult />} />
//           <Route path="/herb-recommender" element={<HerbRecommender />} /> 
//           <Route path="/recommendations" element={<Recommendations />} />

//           {/* --- Doctor Protected Routes --- */}
//           <Route path="/doctor/dashboard" element={<DoctorRoute><DoctorDashboard /></DoctorRoute>} />
//           <Route path="/doctor/review/:reviewId" element={<DoctorRoute><PatientDetail /></DoctorRoute>} />

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DoshaCategories from "./pages/DoshaCategories";
import DoshaDetail from "./pages/DoshaDetail";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import HerbRecommender from "./pages/HerbRecommender";
import Recommendations from "./pages/Recommendations";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDetail from "./pages/PatientDetail";
import DoctorRoute from "./components/DoctorRoute";
import Footer from "./components/Footer"; // Your footer component

function AppWrapper() {
  const location = useLocation();
  // Paths where we DON'T want the footer
  const noFooterPaths = ["/login", "/signup", "/quiz"];

  return (
    <>
      <div className="App">
        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/doshas" element={<DoshaCategories />} />
          <Route path="/doshas/:id" element={<DoshaDetail />} />

          {/* --- User Protected Routes --- */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/herb-recommender" element={<HerbRecommender />} />
          <Route path="/recommendations" element={<Recommendations />} />

          {/* --- Doctor Protected Routes --- */}
          <Route
            path="/doctor/dashboard"
            element={
              <DoctorRoute>
                <DoctorDashboard />
              </DoctorRoute>
            }
          />
          <Route
            path="/doctor/review/:reviewId"
            element={
              <DoctorRoute>
                <PatientDetail />
              </DoctorRoute>
            }
          />
        </Routes>
      </div>

      {/* Render footer only if current path is not in noFooterPaths */}
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
