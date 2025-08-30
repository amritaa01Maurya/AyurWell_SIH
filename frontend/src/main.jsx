// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";

// import Home from "./pages/Home";
// import DoshaCategories from "./pages/DoshaCategories";
// import DoshaDetail from "./pages/DoshaDetail";
// import Login from "./pages/Login";
// import Signup from "./pages/Signp";
// import Chatbot from "./components/Chatbot";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<Home />} />

//         {/* Auth Pages */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Categories Page */}
//         <Route path="/doshas" element={<DoshaCategories />} />

//         {/* Detail Page */}
//         <Route path="/dosha/:id" element={<DoshaDetail />} />
//         <Route path="/chatbot" element={<Chatbot/>} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'   // <-- must import this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



