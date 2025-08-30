// // const FoodRecommendation = require("../models/foodRecommendations");


// // // Utility functions
// // const getCurrentSeason = () => {
// //   const month = new Date().getMonth() + 1;
// //   if ([1, 2].includes(month)) return "Late Winter (Shishir)";
// //   if ([3, 4, 5].includes(month)) return "Spring (Vasant)";
// //   if ([6, 7].includes(month)) return "Summer (Grishma)";
// //   if ([8, 9].includes(month)) return "Rainy (Varsha)";
// //   if ([10].includes(month)) return "Autumn (Sharad)";
// //   return "Winter (Hemant)";
// // };

// // const getCurrentTimeSlot = () => {
// //   const hour = new Date().getHours();
// //   if (hour >= 6 && hour < 10) return "Morning (6am-10am)";
// //   if (hour >= 10 && hour < 14) return "Noon (10am-2pm)";
// //   if (hour >= 14 && hour < 18) return "Afternoon (2pm-6pm)";
// //   if (hour >= 18 && hour < 22) return "Evening (6pm-10pm)";
// //   return "Midnight (10pm-2am)";
// // };

// // // Controller function
// // const getRecommendations = async (req, res) => {
// //   try {
// //     const { dosha } = req.query;
// //     if (!dosha) {
// //       return res.status(400).json({ success: false, message: "Provide dosha" });
// //     }

// //     const season = getCurrentSeason();
// //     const time = getCurrentTimeSlot();

// //     const recommendations = await FoodRecommendation.find({ dosha, season, time });

// //     res.json({ success: true, season, time, recommendations });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ success: false, message: "Server error" });
// //   }
// // };

// // module.exports = { getRecommendations };


// const FoodRecommendation = require("../models/foodRecommendations.js");

// // All time slots in order
// const timeSlots = [
//   "Early Morning (2am-6am)",
//   "Morning (6am-10am)",
//   "Noon (10am-2pm)",
//   "Afternoon (2pm-6pm)",
//   "Evening (6pm-10pm)",
//   "Night (10pm-11pm)",
//   "Midnight (12am-2am)"
// ];

// // Helper: current season
// function getCurrentSeason() {
//   const month = new Date().getMonth() + 1;
//   if ([1, 2].includes(month)) return "Late Winter (Shishir)";
//   if ([3, 4, 5].includes(month)) return "Spring (Vasant)";
//   if ([6, 7].includes(month)) return "Summer (Grishma)";
//   if ([8, 9].includes(month)) return "Rainy (Varsha)";
//   if ([10].includes(month)) return "Autumn (Sharad)";
//   return "Winter (Hemant)";
// }

// // Smart: current time slot
// function getCurrentTimeSlot() {
//   const hour = new Date().getHours();
//   if (hour >= 2 && hour < 6) return " Early Morning (2am-6am)";
//   if (hour >= 6 && hour < 10) return "Morning (6am-10am)";
//   if (hour >= 10 && hour < 14) return "Noon (10am-2pm)";
//   if (hour >= 14 && hour < 17) return "Afternoon (2pm-6pm)";
//   if (hour >= 17 && hour < 19) return "Evening (6pm-7pm)";
//   if (hour >= 20 && hour < 23) return "Night (8pm-11pm)";
//   return "Midnight (12am-2am)";
// }

// // Current time recommendations
// exports.getSmartRecommendations = async (req, res) => {
//   try {
//     const { dosha } = req.query;
//     if (!dosha) return res.status(400).json({ success: false, message: "Provide dosha" });

//     const season = getCurrentSeason();
//     const time = getCurrentTimeSlot();

//     const recommendations = await FoodRecommendation.find({ dosha, season, time });
//     res.json({ success: true, season, time, recommendations });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // Daily recommendations
// exports.getDailyRecommendations = async (req, res) => {
//   try {
//     const { dosha } = req.query;
//     if (!dosha) return res.status(400).json({ success: false, message: "Provide dosha" });

//     const season = getCurrentSeason();
//     const recommendations = await FoodRecommendation.find({ dosha, season });

//     const dailyRecommendations = timeSlots.map(slot => ({
//       time: slot,
//       items: recommendations.filter(r => r.time === slot)
//     }));

//     res.json({ success: true, season, dailyRecommendations });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // Weekly recommendations
// exports.getWeeklyRecommendations = async (req, res) => {
//   try {
//     const { dosha } = req.query;
//     if (!dosha) return res.status(400).json({ success: false, message: "Provide dosha" });

//     const season = getCurrentSeason();
//     const recommendations = await FoodRecommendation.find({ dosha, season });

//     const weeklyRecommendations = [];

//     for (let day = 1; day <= 7; day++) {
//       const daily = timeSlots.map(slot => ({
//         time: slot,
//         items: recommendations.filter(r => r.time === slot)
//       }));
//       weeklyRecommendations.push({ day: `Day ${day}`, daily });
//     }

//     res.json({ success: true, season, weeklyRecommendations });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

const FoodRecommendation = require("../models/foodRecommendations.js");
const foodDataset = require("../data/ayurwell_food_dataset.json");
const mongoose = require('mongoose');

// All time slots in order
const timeSlots = [
  "Early Morning (2am-6am)",
  "Morning (6am-10am)",
  "Noon (10am-2pm)",
  "Afternoon (2pm-6pm)",
  "Evening (6pm-10pm)",
  "Midnight (10pm-2am)"
];

// Helper: current season
function getCurrentSeason() {
  const month = new Date().getMonth() + 1;
  if ([1, 2].includes(month)) return "Late Winter (Shishir)";
  if ([3, 4, 5].includes(month)) return "Spring (Vasant)";
  if ([6, 7].includes(month)) return "Summer (Grishma)";
  if ([8, 9].includes(month)) return "Rainy (Varsha)";
  if ([10,11].includes(month)) return "Autumn (Sharad)";
  return "Winter (Hemant)";
}

// Smart: current time slot
function getCurrentTimeSlot() {
  const hour = new Date().getHours();
  if (hour >= 2 && hour < 6) return "Early Morning (2am-6am)";
  if (hour >= 6 && hour < 10) return "Morning (6am-10am)";
  if (hour >= 10 && hour < 14) return "Noon (10am-2pm)";
  if (hour >= 14 && hour < 18) return "Afternoon (2pm-6pm)";
  if (hour >= 18 && hour < 22) return "Evening (6pm-10pm)";
  return "Midnight (10pm-2am)";
}

// Current time recommendations
exports.getSmartRecommendations = async (req, res) => {
  try {
    const { dosha } = req.query;
    if (!dosha) return res.status(400).json({ success: false, message: "Provide dosha" });

    const season = getCurrentSeason();
    const time = getCurrentTimeSlot();

    const recommendations = await FoodRecommendation.find({ dosha, season, time });
    res.json({ success: true, season, time, recommendations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Daily recommendations
exports.getDailyRecommendations = async (req, res) => {
  try {
    const { dosha } = req.query;
    if (!dosha) return res.status(400).json({ success: false, message: "Provide dosha" });

    const season = getCurrentSeason();
    const recommendations = await FoodRecommendation.find({ dosha, season });

    const dailyRecommendations = timeSlots.map(slot => ({
      time: slot,
      items: recommendations.filter(r => r.time === slot)
    }));

    res.json({ success: true, season, dailyRecommendations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Weekly recommendations
exports.getWeeklyRecommendations = async (req, res) => {
  try {
    const { dosha } = req.query;
    if (!dosha) return res.status(400).json({ success: false, message: "Provide dosha" });

    const season = getCurrentSeason();
    const recommendations = await FoodRecommendation.find({ dosha, season });

    const weeklyRecommendations = [];

    for (let day = 1; day <= 7; day++) {
      const daily = timeSlots.map(slot => {
        const items = recommendations.filter(r => r.time === slot);
        // Randomly select one item for each time slot
        const randomItem = items.length > 0 ? items[Math.floor(Math.random() * items.length)] : null;
        return {
          time: slot,
          items: randomItem ? [randomItem] : []
        };
      });
      weeklyRecommendations.push({ day: `Day ${day}`, daily });
    }

    res.json({ success: true, season, weeklyRecommendations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
