require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const doshaRoutes = require("./routes/doshaRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
const recommendationsRoutes = require("./routes/recommendationsRoutes");

const app = express();
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error:", err));


// Routes
app.use("/api/dosha",doshaRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/users",userRoutes);
app.use("/api/quiz",quizRoutes);
app.use("/api/recommendations",recommendationsRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));