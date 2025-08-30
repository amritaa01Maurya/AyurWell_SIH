export const doshaTypes = {
  vata: {
    name: "Vata",
    description: "Air and Space elements. Characterized by movement, creativity, and energy.",
    characteristics: ["Creative", "Energetic", "Quick thinking", "Changeable mood", "Light sleeper", "Dry skin"],
    dietRecommendations: [
      "Warm, cooked foods",
      "Sweet, sour, and salty tastes",
      "Regular meal times",
      "Avoid cold, raw foods",
      "Ghee and oils for nourishment",
      "Calming herbal teas"
    ],
    foods: {
      recommended: ["Rice", "Quinoa", "Sweet fruits", "Cooked vegetables", "Nuts", "Warm milk", "Ginger", "Cinnamon", "Dates", "Avocado", "Bananas", "Oats", "Sweet potatoes", "Ghee", "Sesame oil", "Almonds"],
      avoid: ["Raw vegetables", "Cold drinks", "Dry foods", "Caffeine", "Spicy foods", "Beans", "Cabbage", "Crackers", "Popcorn", "Ice cream", "Carbonated drinks", "Raw apples", "Dried fruits", "Bitter greens"]
    }
  },
  pitta: {
    name: "Pitta",
    description: "Fire and Water elements. Characterized by intensity, focus, and transformation.",
    characteristics: ["Focused", "Intelligent", "Intense", "Goal-oriented", "Good digestion", "Warm body"],
    dietRecommendations: [
      "Cool, refreshing foods",
      "Sweet, bitter, and astringent tastes",
      "Avoid spicy, hot foods",
      "Fresh fruits and vegetables",
      "Moderate portions",
      "Cooling herbs and spices"
    ],
    foods: {
      recommended: ["Coconut", "Cucumber", "Sweet fruits", "Leafy greens", "Basmati rice", "Cool drinks", "Melons", "Grapes", "Cilantro", "Mint", "Fennel", "Rose water", "Ghee", "Milk", "Sweet lassi", "Bitter vegetables"],
      avoid: ["Spicy foods", "Hot drinks", "Sour fruits", "Red meat", "Alcohol", "Fried foods", "Tomatoes", "Garlic", "Onions", "Chili peppers", "Coffee", "Salty snacks", "Aged cheese", "Vinegar"]
    }
  },
  kapha: {
    name: "Kapha",
    description: "Earth and Water elements. Characterized by stability, strength, and calmness.",
    characteristics: ["Calm", "Stable", "Strong", "Compassionate", "Deep sleeper", "Thick skin"],
    dietRecommendations: [
      "Light, warm foods",
      "Pungent, bitter, and astringent tastes",
      "Avoid heavy, oily foods",
      "Spices to stimulate digestion",
      "Smaller, frequent meals",
      "Warming herbs and spices"
    ],
    foods: {
      recommended: ["Ginger", "Turmeric", "Leafy greens", "Legumes", "Quinoa", "Herbal teas", "Peppers", "Radishes", "Broccoli", "Cauliflower", "Apples", "Pears", "Pomegranates", "Green tea", "Honey", "Barley"],
      avoid: ["Dairy", "Sweet foods", "Heavy oils", "Cold foods", "Excess salt", "Large meals", "Bananas", "Melons", "Coconut", "Nuts", "Fried foods", "Ice cream", "Cheese", "Wheat"]
    }
  }
};

export const quizQuestions = [
  {
    id: 1,
    question: "What is your body frame?",
    options: [
      { text: "Thin, light frame with prominent bones", dosha: "vata" },
      { text: "Medium, muscular frame with good definition", dosha: "pitta" },
      { text: "Large, heavy frame with solid build", dosha: "kapha" }
    ]
  },
  {
    id: 2,
    question: "How is your appetite?",
    options: [
      { text: "Variable, sometimes forget to eat", dosha: "vata" },
      { text: "Strong, get irritable when hungry", dosha: "pitta" },
      { text: "Steady, can skip meals easily", dosha: "kapha" }
    ]
  },
  {
    id: 3,
    question: "How do you handle stress?",
    options: [
      { text: "Become anxious and worried", dosha: "vata" },
      { text: "Become irritable and angry", dosha: "pitta" },
      { text: "Become withdrawn and lethargic", dosha: "kapha" }
    ]
  },
  {
    id: 4,
    question: "What is your sleep pattern?",
    options: [
      { text: "Light sleeper, wake up easily", dosha: "vata" },
      { text: "Moderate sleep, wake up refreshed", dosha: "pitta" },
      { text: "Deep sleeper, hard to wake up", dosha: "kapha" }
    ]
  },
  {
    id: 5,
    question: "How is your skin?",
    options: [
      { text: "Dry, rough, cool to touch", dosha: "vata" },
      { text: "Warm, oily, sensitive to sun", dosha: "pitta" },
      { text: "Thick, moist, cool and smooth", dosha: "kapha" }
    ]
  },
  {
    id: 6,
    question: "How do you make decisions?",
    options: [
      { text: "Quickly, but often change my mind", dosha: "vata" },
      { text: "Quickly with confidence", dosha: "pitta" },
      { text: "Slowly after careful consideration", dosha: "kapha" }
    ]
  },
  {
    id: 7,
    question: "What is your energy level like?",
    options: [
      { text: "Comes in bursts, then crashes", dosha: "vata" },
      { text: "Intense and focused", dosha: "pitta" },
      { text: "Steady and enduring", dosha: "kapha" }
    ]
  },
  {
    id: 8,
    question: "How do you learn best?",
    options: [
      { text: "Quickly but forget easily", dosha: "vata" },
      { text: "Moderately fast with good retention", dosha: "pitta" },
      { text: "Slowly but never forget", dosha: "kapha" }
    ]
  },
  {
    id: 9,
    question: "What is your reaction to cold weather?",
    options: [
      { text: "Dislike cold, prefer warm weather", dosha: "vata" },
      { text: "Comfortable in moderate temperatures", dosha: "pitta" },
      { text: "Tolerate cold well, dislike heat and humidity", dosha: "kapha" }
    ]
  },
  {
    id: 10,
    question: "How do you typically walk?",
    options: [
      { text: "Quick, light steps", dosha: "vata" },
      { text: "Moderate pace with purpose", dosha: "pitta" },
      { text: "Slow, steady, deliberate steps", dosha: "kapha" }
    ]
  }
];

export const userData = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  phone: "+91 98765 43210",
  age: 32,
  gender: "Female",
  address: "123 Wellness Street, Mumbai, Maharashtra, India",
  doshaType: "pitta",
  profilePicture: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  dietChart: {
    breakfast: "Coconut water with oatmeal, sweet fruits like grapes or melons",
    lunch: "Basmati rice with steamed vegetables, cilantro, and ghee",
    dinner: "Light soup with whole grain bread and cooling herbs",
    snacks: "Fresh cucumber slices, sweet lassi, and coconut water"
  }
};

// Sample quiz result data for testing
export const sampleQuizResults = {
  answers: {
    0: { text: "Medium, muscular frame with good definition", dosha: "pitta" },
    1: { text: "Strong, get irritable when hungry", dosha: "pitta" },
    2: { text: "Become irritable and angry", dosha: "pitta" },
    3: { text: "Moderate sleep, wake up refreshed", dosha: "pitta" },
    4: { text: "Warm, oily, sensitive to sun", dosha: "pitta" }
  },
  doshaScores: { vata: 1, pitta: 4, kapha: 0 },
  dominantDosha: "pitta",
  totalQuestions: 5
};