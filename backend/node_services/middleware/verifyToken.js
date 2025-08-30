// const jwt = require("jsonwebtoken");

// // JWT secret from environment variable
// const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_here";

// const verifyToken = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ success: false, message: "Access denied. No token provided." });
//     }

//     const token = authHeader.split(" ")[1]; // "Bearer <token>"

//     const decoded = jwt.verify(token, JWT_SECRET);

//     // Attach user info to request
//     req.user = decoded; // decoded typically contains { id, email, ... }

//     next();
//   } catch (err) {
//     console.error(err);
//     return res.status(401).json({ success: false, message: "Invalid or expired token." });
//   }
// };

// module.exports = verifyToken;

const jwt = require("jsonwebtoken");

// JWT secret from environment variable
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_here";

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // "Bearer <token>"

    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user info to request
    req.user = decoded; // decoded typically contains { id, email, ... }

    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

module.exports = verifyToken;