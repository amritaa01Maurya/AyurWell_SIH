// const mongoose = require('mongoose');
// require('dotenv').config();
// const DoshaCategory = require('./models/doshaCategory');

// const doshaData = [
//   {
//     doshaName: 'Vata',
//     foodsToEat: [
//       'Warm foods', 'Cooked vegetables', 'Grains (oats, rice)', 'Dairy (milk, butter)', 'Nuts and seeds', 'Sweet fruits', 'Ginger', 'Cardamom',
//     ],
//     foodsToAvoid: [
//       'Cold foods', 'Raw vegetables', 'Dry or crunchy foods', 'Beans', 'Cabbage', 'Broccoli', 'Apples', 'Pears',
//     ],
//   },
//   {
//     doshaName: 'Pitta',
//     foodsToEat: [
//       'Cool foods', 'Sweet fruits', 'Leafy greens', 'Grains (barley, rice)', 'Legumes', 'Coconut', 'Cilantro', 'Mint',
//     ],
//     foodsToAvoid: [
//       'Hot, spicy foods', 'Fermented foods', 'Sour fruits', 'Tomatoes', 'Garlic', 'Onions', 'Chili', 'Coffee',
//     ],
//   },
//   {
//     doshaName: 'Kapha',
//     foodsToEat: [
//       'Light, dry foods', 'Spicy foods', 'Leafy greens', 'Legumes', 'Most vegetables', 'Apples', 'Pears', 'Ginger', 'Black pepper',
//     ],
//     foodsToAvoid: [
//       'Heavy, oily foods', 'Sweet foods', 'Dairy products', 'Wheat', 'Cold drinks', 'Melons', 'Cucumbers', 'Zucchini',
//     ],
//   },
// ];

// const seedDB = async () => {
//   try {
//     const mongoUri = process.env.MONGO_URI;
//     if (!mongoUri) {
//       console.error("MongoDB URI is not defined. Please set the MONGO_URI environment variable in your .env file.");
//       return;
//     }
    
//     await mongoose.connect(mongoUri);
//     console.log('MongoDB connected successfully.');

//     await DoshaCategory.deleteMany({});
//     console.log('Existing Dosha categories cleared.');

//     await DoshaCategory.insertMany(doshaData);
//     console.log('Dosha categories seeded successfully!');

//   } catch (err) {
//     console.error('Error seeding database:', err);
//   } finally {
//     mongoose.disconnect();
//     console.log('MongoDB connection closed.');
//   }
// };

// seedDB();


const mongoose = require('mongoose');
require('dotenv').config();
const DoshaCategory = require('./models/doshaCategory');
const FoodRecommendation = require('./models/foodRecommendations');

// Import complete datasets
const doshaData = require('./data/doshaData.json');
const foodDataset = require('./data/ayurwell_food_dataset.json');

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      console.error("MongoDB URI is not defined. Please set the MONGO_URI environment variable in your .env file.");
      return;
    }
    
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully for seeding.');

    // Clear all existing data from both collections
    await DoshaCategory.deleteMany({});
    await FoodRecommendation.deleteMany({});
    console.log('Existing Dosha categories and Food recommendations cleared.');

    // Seed the DoshaCategory collection
    await DoshaCategory.insertMany(doshaData);
    console.log('Dosha categories seeded successfully!');

    // Seed the FoodRecommendation collection
    await FoodRecommendation.insertMany(foodDataset);
    console.log('Food recommendations seeded successfully!');

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.disconnect();
    console.log('MongoDB connection closed.');
  }
};

seedDB();