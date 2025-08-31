import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const DoctorRoute = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');

    if (!token) {
        // Not logged in, redirect to login page
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    try {
        const decoded = jwtDecode(token);
        if (decoded.role !== 'doctor') {
            // Logged in but not a doctor, redirect to user profile
            return <Navigate to="/profile" replace />;
        }
    } catch (error) {
        console.error("Invalid Token:", error);
        // Token is invalid, redirect to login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If token is valid and role is doctor, render the component
    return children;
};

export default DoctorRoute;

