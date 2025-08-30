// const mongoose = require("mongoose");
// const fs = require("fs");
// const path = require("path");
// const FoodRecommendation = require("./models/foodRecommendations");


// // 1️⃣ MongoDB connect
// mongoose.connect("mongodb://localhost:27017/ayurwell", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.error("MongoDB connection error:", err));

// // 2️⃣ Seed function
// const seedData = async () => {
//   try {
//     // 2a. Read dataset
//     const filePath = path.join(__dirname, "data/ayurwell_food_dataset.json");
//     const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

//     // 2b. Clear old collection
//     // await FoodRecommendation.deleteMany({});
//     // console.log("Old food recommendations removed");

//     // 2c. Insert new data
//     await FoodRecommendation.insertMany(data);
//     console.log("✅ Food recommendations seeded successfully");

//     // Close connection
//     mongoose.connection.close();
//   } catch (err) {
//     console.error("Error seeding data:", err);
//     mongoose.connection.close();
//   }
// };

// // 3️⃣ Run seed
// seedData();


const mongoose = require('mongoose');
const DoshaCategory = require('./models/doshaCategory');
const FoodRecommendation = require('./models/foodRecommendations');
const doshaData = require('./data/doshaData.json'); // assuming you have a dosha data file
const foodDataset = require('./data/ayurwell_food_dataset.json');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected for seeding...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const seedDatabase = async () => {
    try {
        await connectDB();
        
        console.log('Clearing existing data...');
        await DoshaCategory.deleteMany({});
        await FoodRecommendation.deleteMany({});
        
        console.log('Seeding Dosha categories...');
        await DoshaCategory.insertMany(doshaData);

        console.log('Seeding Food recommendations...');
        await FoodRecommendation.insertMany(foodDataset);
        
        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    }
};

seedDatabase();