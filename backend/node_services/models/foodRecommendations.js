const mongoose = require("mongoose");
const foodRecommendationSchema = new mongoose.Schema({
  dosha: { type: String, required: true },   
  time: { type: String },                    
  season: { type: String },                  
  food: { type: String, required: true },
  nutrients: [{
    protein: String,
    carbs: String,
    fats: String,
    fiber: String,
    vitamins: String
  }],
  calories: Number,
  benefit: String,
  type: {type:String, enum: ["Hot", "Cold","Neutral"], default: "Neutral"},
  tastes: [{type:String}]
});


module.exports = mongoose.model("FoodRecommendation", foodRecommendationSchema);