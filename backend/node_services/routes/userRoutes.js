const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/userController");
// const { protect } = require("../middleware/auth");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/register", registerUser); // Signup
router.post("/login", loginUser);       // Login
router.get("/profile",verifyToken, getProfile);

module.exports = router;