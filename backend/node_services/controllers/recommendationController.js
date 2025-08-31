const FoodRecommendation = require("../models/FoodRecommendations");
// An ordered list of all possible time slots for consistent daily/weekly plans
const timeSlots = [
    "Early Morning (2am-6am)",
    "Morning (6am-10am)",
    "Noon (10am-2pm)",
    "Afternoon (2pm-6pm)",
    "Evening (6pm-10pm)",
    "Midnight (10pm-2am)"
];

// Helper function to determine the current season based on the month
function getCurrentSeason() {
    const month = new Date().getMonth(); // 0-11
    if (month >= 2 && month <= 4) return "Spring (Vasant)";
    if (month >= 5 && month <= 6) return "Summer (Grishma)";
    if (month >= 7 && month <= 8) return "Rainy (Varsha)";
    if (month >= 9 && month <= 10) return "Autumn (Sharad)";
    if (month === 11 || month === 0) return "Winter (Hemant)";
    return "Late Winter (Shishir)"; // January (month 0), February (month 1)
}


// --- EXPORTED CONTROLLER FUNCTIONS ---

// Get recommendations for the entire day, organized by time slot
exports.getDailyRecommendations = async (req, res) => {
    try {
        const { dosha } = req.query;
        if (!dosha) {
            return res.status(400).json({ success: false, message: "Dosha must be provided in the query." });
        }

        const season = getCurrentSeason();
        // Find all recommendations for the given dosha and current season
        const recommendations = await FoodRecommendation.find({ dosha, season });

        // Organize the recommendations into time slots
        const dailyRecommendations = timeSlots.map(slot => ({
            time: slot,
            items: recommendations.filter(r => r.time === slot)
        }));

        res.json({ success: true, season, dailyRecommendations });
    } catch (err) {
        console.error("Error in getDailyRecommendations:", err);
        res.status(500).json({ success: false, message: "Server error while fetching daily recommendations." });
    }
};

// Get a randomized plan for a full 7-day week
exports.getWeeklyRecommendations = async (req, res) => {
    try {
        const { dosha } = req.query;
        if (!dosha) {
            return res.status(400).json({ success: false, message: "Dosha must be provided in the query." });
        }

        const season = getCurrentSeason();
        const recommendations = await FoodRecommendation.find({ dosha, season });

        const weeklyRecommendations = [];
        for (let day = 1; day <= 7; day++) {
            const dailyPlan = timeSlots.map(slot => {
                const itemsForSlot = recommendations.filter(r => r.time === slot);
                // For a weekly plan, randomly select one item for each time slot to provide variety
                const randomItem = itemsForSlot.length > 0 ? itemsForSlot[Math.floor(Math.random() * itemsForSlot.length)] : null;
                return {
                    time: slot,
                    items: randomItem ? [randomItem] : [] // Keep the data structure consistent with daily items
                };
            });
            weeklyRecommendations.push({ day: `Day ${day}`, daily: dailyPlan });
        }

        res.json({ success: true, season, weeklyRecommendations });
    } catch (err) {
        console.error("Error in getWeeklyRecommendations:", err);
        res.status(500).json({ success: false, message: "Server error while fetching weekly recommendations." });
    }
};

