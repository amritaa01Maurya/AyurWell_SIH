require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Import all necessary models
const User = require('./models/Users');
const DoshaCategory = require('./models/DoshaCategory');
const FoodRecommendation = require('./models/FoodRecommendations');
const QuizResult = require('./models/QuizResult');
const RecommendationReview = require('./models/recommendationReview');

// Import the data files
const doshaData = require('./data/doshaData.json');
const foodData = require('./data/ayurwell_food_dataset.json');

const seedDatabase = async () => {
    try {
        // 1. Connect to the database
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for seeding...');

        // 2. Clear all existing data from the collections
        console.log('Clearing all existing data...');
        await User.deleteMany({});
        await DoshaCategory.deleteMany({});
        await FoodRecommendation.deleteMany({});
        await QuizResult.deleteMany({});
        await RecommendationReview.deleteMany({});
        console.log('Data cleared successfully.');

        // 3. Seed Dosha Categories
        await DoshaCategory.insertMany(doshaData);
        console.log('Dosha categories seeded.');

        // 4. Seed Food Recommendations
        await FoodRecommendation.insertMany(foodData);
        console.log('Food recommendations seeded.');

        // 5. Create a sample user and a sample doctor
        console.log('Creating sample users...');
        const salt = await bcrypt.genSalt(10);
        const userPassword = await bcrypt.hash('password123', salt);
        const doctorPassword = await bcrypt.hash('doctorpass', salt);

        const users = [
            {
                name: 'Test User',
                email: 'user@gmail.com',
                password: userPassword,
                role: 'user',
            },
            {
                name: 'Dr. Ayur',
                email: 'doctor@gmail.com',
                password: doctorPassword,
                role: 'doctor',
            },
        ];

        await User.insertMany(users);
        console.log('Sample user and doctor created.');
        console.log('---');
        console.log('Test User credentials: user@example.com / password123');
        console.log('Test Doctor credentials: doctor@example.com / doctorpass');
        console.log('---');

        console.log('Database seeded successfully!');

    } catch (error) {
        console.error('Error while seeding database:', error);
        process.exit(1);
    } finally {
        // 6. Disconnect from the database
        await mongoose.disconnect();
        console.log('MongoDB disconnected.');
    }
};

// Run the seeder
// seedDatabase();
