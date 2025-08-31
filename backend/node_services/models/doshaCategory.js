const mongoose = require('mongoose');

const doshaCategorySchema = new mongoose.Schema({
  doshaName: {
    type: String,
    required: true,
    unique: true,
    enum: ["Vata", "Pitta", "Kapha"]
  },
  description: {
    type: String,
    required: true
  },
  detailedDescription: {
    type: String
  },
  characteristics: {
    type: [String],
    default: [],
  },
  physicalTraits: {
    type: [String],
    default: [],
  },
  mentalTraits: {
    type: [String],
    default: [],
  },
  balancingTips: {
    type: [String],
    default: [],
  },
  foodsToEat: {
    type: [String],
    default: [],
  },
  foodsToAvoid: {
    type: [String],
    default: [],
  },
});

const DoshaCategory = mongoose.model('DoshaCategory', doshaCategorySchema);

module.exports = DoshaCategory;