const jwt = require('jsonwebtoken');
const User = require('../models/Users');

/**
 * Middleware to protect routes by verifying JWT.
 * It checks for a valid token in the Authorization header.
 * If valid, it decodes the user ID and attaches the full user object to the request.
 */
const protect = async (req, res, next) => {
    let token;

    // Check if the Authorization header exists and starts with "Bearer"
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header (Bearer TOKEN)
            token = req.headers.authorization.split(' ')[1];

            // Verify the token using the secret
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Find the user by the ID from the token payload
            // Attach the user object to the request, excluding the password
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                 return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
            }

            // Proceed to the next middleware or the route handler
            next();
        } catch (error) {
            console.error('Token verification failed:', error);
            res.status(401).json({ success: false, message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ success: false, message: 'Not authorized, no token' });
    }
};

/**
 * Middleware to check if the authenticated user has a 'doctor' role.
 * This should be used *after* the 'protect' middleware.
 */
const isDoctor = (req, res, next) => {
    if (req.user && req.user.role === 'doctor') {
        next();
    } else {
        res.status(403).json({ success: false, message: 'Access denied. You must be a doctor.' });
    }
};

module.exports = { protect, isDoctor };

