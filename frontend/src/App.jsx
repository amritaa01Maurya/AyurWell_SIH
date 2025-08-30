// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import DoshaCategories from './pages/DoshaCategories';
// import DoshaDetail from './pages/DoshaDetail';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/doshas" replace />} />
//         <Route path="/doshas" element={<DoshaCategories />} />
//         <Route path="/dosha/:id" element={<DoshaDetail />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// export default function App() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-blue-500 text-white text-4xl">
//       Tailwind CSS Working 🚀
//     </div>
//   )
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoshaCategories from './pages/DoshaCategories';
import DoshaDetail from './pages/DoshaDetail';
import Quiz from './pages/Quiz';
import QuizResult from './pages/QuizResult';
import Recommendations from './pages/Recommendations';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Chatbot from './components/Chatbot';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dosha" element={<DoshaCategories />} />
          <Route path="/dosha/:id" element={<DoshaDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-result" element={<QuizResult />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/daily" element={<Recommendations />} />
          <Route path="/weekly" element={<Recommendations />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />}/>
        </Routes>
        {/* <Chatbot /> */}
      </div>
    </Router>
  );
}

export default App;


