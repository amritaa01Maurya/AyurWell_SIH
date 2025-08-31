const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// @route   /api/users

// Public routes for registration and login
router.post('/register', registerUser);
router.post('/login', loginUser);

// Private route to get a user's own profile
// The 'protect' middleware will run first to verify the user's token
router.get('/profile', protect, getProfile);


module.exports = router;

