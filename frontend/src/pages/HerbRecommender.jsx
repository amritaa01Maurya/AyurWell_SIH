import React, { useState, useLayoutEffect } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component


// --- DATA: Store your herb information here ---
const herbData = [
    {
        name: 'Ashwagandha',
        botanicalName: 'Withania somnifera',
        image: 'https://www.dabur.com/Medical%20Plants/Ashwagandha%20%281%29.jpg',
        tagline: 'The Ultimate Stress-Relief Adaptogen',
        effects: { vata: '-', pitta: '+ (in excess)', kapha: '-' },
        keyBenefits: ['Reduces Stress & Anxiety', 'Builds Strength', 'Promotes Restful Sleep'],
        logic: { balance: ['vata', 'kapha'], strengthen: ['vata', 'kapha'] },
        description: "Ashwagandha is one of the most important herbs in Ayurveda. Known as a powerful adaptogen, it helps the body manage stress by stabilizing physiological processes. It's often referred to as 'Indian Ginseng' for its rejuvenating properties. It enhances stamina, vitality, and supports a healthy immune system.",
        directions: "Traditionally taken as a powder (1/2 to 1 teaspoon) mixed with warm milk or honey, once or twice daily. It can also be taken in capsule form.",
        featuresForDosha: {
            vata: "Its warming and grounding qualities help soothe Vata's nervous energy, promoting calmness and reducing anxiety.",
            kapha: "While it can be heavy, its stimulating nature helps to invigorate and move Kapha's sluggishness, building energy without adding congestion."
        }
    },
    {
        name: 'Brahmi',
        botanicalName: 'Bacopa monnieri',
        image: 'https://gomatabliss.org/wp-content/uploads/2025/02/Whole-Herbs-5-%C3%97-5-in-white-background-1.jpg',
        tagline: 'The Brain-Boosting Nervine Tonic',
        effects: { vata: '-', pitta: '-', kapha: '=' },
        keyBenefits: ['Enhances Memory & Concentration', 'Calms the Mind', 'Supports Nervous System'],
        logic: { balance: ['vata', 'pitta'], strengthen: [] },
        description: "Brahmi is a renowned mental tonic used for centuries to support memory, intelligence, and concentration. It is a calming herb that helps reduce mental agitation and anxiety, making it excellent for students and professionals. It also supports healthy hair and skin.",
        directions: "Often taken as a powder mixed with warm water or as an herbal ghee. Also available in tablet or capsule form.",
        featuresForDosha: {
            vata: "It calms the restless Vata mind, improving focus and reducing the tendency toward worry.",
            pitta: "Its cooling properties help pacify Pitta-related intensity and agitation, promoting a cool and clear head."
        }
    },
    {
        name: 'Amla (Amalaki)',
        botanicalName: 'Emblica officinalis',
        image: 'https://static.wixstatic.com/media/943d2f_b142d61cd7084df88a43d68f18961456~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/943d2f_b142d61cd7084df88a43d68f18961456~mv2.jpg',
        tagline: 'The Great Rejuvenator (Rasayana)',
        effects: { vata: '-', pitta: '-', kapha: '-' },
        keyBenefits: ['Extremely High in Vitamin C', 'Boosts Immunity', 'Cools Pitta Gently'],
        logic: { balance: ['vata', 'pitta', 'kapha'], strengthen: ['vata', 'pitta'] },
        description: "Amla, or Indian Gooseberry, is a powerhouse of nutrients, most famous for its high concentration of Vitamin C. It is a tridoshic rasayana (rejuvenative) that strengthens the immune system, enhances digestion without heating the body, and promotes healthy skin and hair. It is one of the three fruits in the famous Triphala blend.",
        directions: "Can be consumed as a fresh fruit, juice, or powder. The powder (1 teaspoon) can be mixed with water, honey, or added to smoothies.",
        featuresForDosha: {
            vata: "Its grounding nature nourishes Vata, but its sour taste should be used in moderation.",
            pitta: "The cooling and sweet post-digestive effect makes it one of the best herbs for pacifying excess Pitta heat and acidity.",
            kapha: "It helps to liquefy and expel excess Kapha, clearing channels and reducing congestion."
        }
    },
    {
        name: 'Triphala',
        botanicalName: 'A blend of three fruits',
        image: 'https://5.imimg.com/data5/OS/TH/MY-42987627/triphala-herbal-plant.jpg',
        tagline: 'The Classic Tridoshic Detoxifier',
        effects: { vata: '-', pitta: '-', kapha: '-' },
        keyBenefits: ['Gentle daily detox', 'Regulates digestion', 'Tones the entire GI tract'],
        logic: { balance: ['vata', 'pitta', 'kapha'], strengthen: [] },
        description: "Triphala is a classic Ayurvedic formula composed of three fruits: Amalaki, Bibhitaki, and Haritaki. It is revered for its ability to gently cleanse and detoxify the digestive tract while replenishing and nourishing the body's tissues. It is suitable for all doshas and promotes regular, healthy elimination.",
        directions: "Typically taken as a powder (1/2 to 1 teaspoon) steeped in hot water and consumed before bed. Also available in tablets.",
        featuresForDosha: {
            vata: "Helps to regulate Vata's irregular digestion and provides a grounding, nourishing cleanse.",
            pitta: "Amalaki in the blend helps to cool and soothe Pitta-related inflammation in the gut.",
            kapha: "Its scraping quality helps to clear excess Kapha mucus from the digestive system."
        }
    },
    {
        name: 'Turmeric',
        botanicalName: 'Curcuma longa',
        image: 'https://www.viralspices.com/wp-content/uploads/2022/01/Evaluating-the-Differences-between-Fresh-and-Dried-Turmeric.jpg',
        tagline: 'The Golden Anti-Inflammatory Spice',
        effects: { vata: '=', pitta: '-', kapha: '-' },
        keyBenefits: ['Reduces Inflammation', 'Purifies Blood', 'Supports Joint Health'],
        logic: { balance: ['pitta', 'kapha'], strengthen: ['pitta'] },
        description: "Turmeric is a celebrated spice in Ayurveda, known for its potent anti-inflammatory and antioxidant properties. It purifies the blood, improves circulation, and enhances the complexion. Its warming quality helps to improve digestion and reduce sluggishness.",
        directions: "Used widely in cooking. Can also be taken as a powder (1/2 teaspoon) in warm milk (Golden Milk) or with honey.",
        featuresForDosha: {
            pitta: "Despite being warming, its blood-purifying and anti-inflammatory actions make it excellent for managing Pitta-related skin and inflammatory conditions.",
            kapha: "Its pungent, bitter, and astringent tastes, along with its heating energy, help to dry up and reduce excess Kapha."
        }
    },
    {
        name: 'Shatavari',
        botanicalName: 'Asparagus racemosus',
        image: 'https://www.myovacare.com/cdn/shop/articles/Shatavari_Roots.jpg?v=1718195570',
        tagline: 'The Nurturing Female Tonic',
        effects: { vata: '-', pitta: '-', kapha: '+' },
        keyBenefits: ['Nourishes Reproductive System', 'Promotes Healthy Hormones', 'Soothes Digestive Tract'],
        logic: { balance: ['vata', 'pitta'], strengthen: ['vata'] },
        description: "Known as the 'queen of herbs,' Shatavari is the primary female reproductive tonic in Ayurveda. Its cooling and unctuous properties make it deeply nourishing for the body, helping to soothe inflamed tissues, support healthy lactation, and balance female hormones.",
        directions: "Commonly taken as a powder (1/2 to 1 teaspoon) in warm milk or as a capsule.",
        featuresForDosha: {
            vata: "Its heavy, moist, and nourishing qualities are a perfect antidote to Vata's dry and light nature, promoting deep rejuvenation.",
            pitta: "The cooling and sweet nature of Shatavari excels at calming excess Pitta, soothing acidity, and reducing inflammation."
        }
    },
    {
        name: 'Ginger (Dry)',
        botanicalName: 'Zingiber officinale',
        image: 'https://skinandshape.in/wp-content/uploads/2024/02/ALR-what-is-ginger-20ed1f436bee4c4085b009756c8bc4db1.jpg',
        tagline: 'The Universal Digestive Fire-Starter',
        effects: { vata: '-', pitta: '+', kapha: '-' },
        keyBenefits: ['Stimulates Digestion (Agni)', 'Burns Toxins (Ama)', 'Relieves Colds & Congestion'],
        logic: { balance: ['vata', 'kapha'], strengthen: ['pitta', 'kapha'] },
        description: "Considered the 'universal medicine,' dry ginger is a potent digestive stimulant that enkindles agni (the digestive fire) and helps burn ama (toxins). Its warming and drying qualities make it effective for cold, congestive conditions.",
        directions: "Used as a spice in cooking or taken as a tea by steeping 1/4 teaspoon in hot water.",
        featuresForDosha: {
            vata: "Its warming quality pacifies Vata's coldness and helps to regulate digestion.",
            kapha: "The sharp and drying properties cut through Kapha's heavy, moist, and sluggish nature, clearing congestion and improving metabolism."
        }
    },
    {
        name: 'Gotu Kola',
        botanicalName: 'Centella asiatica',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5TVbt229atczlIsQxPWfQCIDg0nYxYAimHA&s',
        tagline: 'The Herb of Longevity & Awareness',
        effects: { vata: '-', pitta: '-', kapha: '-' },
        keyBenefits: ['Enhances cognitive function', 'Promotes healthy circulation', 'Calms the nervous system'],
        logic: { balance: ['vata', 'pitta', 'kapha'], strengthen: ['vata'] },
        description: "Gotu Kola is a powerful brain tonic, revered by yogis for its ability to enhance concentration and meditation. It is tridoshic, meaning it balances all three doshas. It supports healthy circulation, particularly to the brain, and promotes a calm, clear mind.",
        directions: "Can be taken as a powder (1/2 teaspoon) with warm water or as a tea. Also available in capsules.",
        featuresForDosha: {
            vata: "Calms the nervous system and improves mental clarity for scattered Vata minds.",
            pitta: "Its cooling energy helps to soothe Pitta-related intensity and inflammation, especially in the mind.",
            kapha: "Helps to improve circulation and reduce mental sluggishness associated with Kapha."
        }
    },
    {
        name: 'Licorice Root',
        botanicalName: 'Glycyrrhiza glabra',
        image: 'https://www.news-medical.net/images/news/ImageForNews_728525_16662184896881862.jpg',
        tagline: 'The Soothing Demulcent Herb',
        effects: { vata: '-', pitta: '-', kapha: '+' },
        keyBenefits: ['Soothes sore throats', 'Supports adrenal health', 'Moisturizes the body'],
        logic: { balance: ['vata', 'pitta'], strengthen: ['vata'] },
        description: "Licorice is a sweet, nourishing herb known for its demulcent (soothing and coating) properties. It's excellent for soothing sore throats and irritated mucous membranes. It also supports the adrenal glands, helping the body adapt to stress.",
        directions: "Often used as a tea. Can also be taken as a powder. Use in moderation.",
        featuresForDosha: {
            vata: "Its heavy, moistening, and sweet qualities deeply nourish and ground the dry, light nature of Vata.",
            pitta: "The cooling and sweet properties of licorice are excellent for pacifying Pitta heat and soothing inflammation."
        }
    },
    {
        name: 'Cardamom',
        botanicalName: 'Elettaria cardamomum',
        image: 'https://www.paperandtea.com/cdn/shop/articles/Kardamom_66308c6d-ac61-4d0e-8025-44326ce88285.jpg?v=1754575459&width=1500',
        tagline: 'The Aromatic Digestive Aid',
        effects: { vata: '-', pitta: '=', kapha: '-' },
        keyBenefits: ['Soothes digestion', 'Freshens breath', 'Reduces excess mucus'],
        logic: { balance: ['vata', 'kapha'], strengthen: ['pitta'] },
        description: "Cardamom is a fragrant and delicious spice that is also a potent medicine. It helps to kindle agni without aggravating Pitta, making it a tridoshic digestive aid. It removes excess Kapha from the stomach and lungs.",
        directions: "Add pods or ground powder to cooking, or chew a few seeds to aid digestion and freshen breath.",
        featuresForDosha: {
            vata: "Its warming and carminative (gas-relieving) properties help to soothe Vata-related digestive discomfort.",
            kapha: "The pungent and warming spice helps to counteract Kapha's coldness and clear mucus from the stomach."
        }
    },
    {
        name: 'Cinnamon',
        botanicalName: 'Cinnamomum verum',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRPDS6fUwGwAYzdPC9VVmjWfPTTNr9_2r5Q&s',
        tagline: 'The Warming Circulatory Stimulant',
        effects: { vata: '-', pitta: '+', kapha: '-' },
        keyBenefits: ['Enhances circulation', 'Boosts agni (digestion)', 'Helps balance blood sugar'],
        logic: { balance: ['vata', 'kapha'], strengthen: ['kapha'] },
        description: "A popular and aromatic spice, cinnamon is highly valued in Ayurveda for its ability to warm the body and stimulate circulation. It strengthens digestion, helps clear congestion from the lungs, and has a natural sweet taste that satisfies cravings.",
        directions: "Used as a spice in food and drinks. A pinch can be added to tea or oatmeal.",
        featuresForDosha: {
            vata: "Its heating properties counteract Vata's cold nature and improve circulation.",
            kapha: "The pungent, sweet tastes and heating energy liquefy and reduce Kapha congestion."
        }
    },
    {
        name: 'Fennel',
        botanicalName: 'Foeniculum vulgare',
        image: 'https://vibrantliving.in/cdn/shop/files/FennelSeeds.png?v=1731060016&width=2048',
        tagline: 'The Cooling Digestive Soother',
        effects: { vata: '-', pitta: '-', kapha: '=' },
        keyBenefits: ['Cools the GI tract', 'Relieves gas and bloating', 'Improves digestive strength'],
        logic: { balance: ['vata', 'pitta'], strengthen: [] },
        description: "Fennel is one of the best herbs for supporting digestion without aggravating Pitta. Its unique combination of warming and cooling properties allows it to stimulate agni while soothing inflammation in the digestive tract. It is particularly good for relieving gas and bloating.",
        directions: "Chew a small spoonful of roasted seeds after meals, or steep as a tea.",
        featuresForDosha: {
            vata: "Relaxes the digestive tract and helps alleviate gas and cramping associated with Vata.",
            pitta: "Its cooling properties make it ideal for soothing Pitta-related indigestion and acidity."
        }
    },
    {
        name: 'Guduchi (Giloy)',
        botanicalName: 'Tinospora cordifolia',
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/427491330/EY/CC/FL/102528688/giloy-sticks-guduchi-tinospora-cordifolia-500x500.jpg',
        tagline: 'The Nectar of Immortality',
        effects: { vata: '-', pitta: '-', kapha: '-' },
        keyBenefits: ['Powerful immune booster', 'Detoxifies and purifies', 'Calms inflammation'],
        logic: { balance: ['vata', 'pitta', 'kapha'], strengthen: [] },
        description: "Known as 'Amrita' or the nectar of immortality, Guduchi is a premier Ayurvedic herb for boosting immunity and detoxifying the body. It is a tridoshic rasayana that is particularly effective at clearing accumulated Pitta heat from the system, supporting liver function, and fighting off illness.",
        directions: "Typically taken as a powder (1/4 to 1/2 teaspoon) or in tablet form.",
        featuresForDosha: {
            vata: "While detoxifying, it is also nourishing, so it does not deplete Vata.",
            pitta: "Its bitter taste and cooling energy are highly effective at clearing excess Pitta from the blood and liver.",
            kapha: "Helps scrape toxins and supports the immune system often weakened by excess Kapha."
        }
    }
];

// --- Sub-component for the Herb Detail Modal ---
const useLockBodyScroll = () => {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = originalStyle);
    }, []);
};

const HerbDetailModal = ({ herb, matchedDoshas = [], mode, onClose }) => {
    if (!herb) {
        return null;
    }

    useLockBodyScroll();
    const [isExpanded, setIsExpanded] = useState(false);

    const relevantFeatures = (matchedDoshas || [])
        .map(dosha => herb?.featuresForDosha?.[dosha])
        .filter(Boolean);

    const description = herb?.description || "No description available for this herb.";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                        <img src={herb.image} alt={herb.name} className="w-full h-auto rounded-xl shadow-md" />
                        <h1 className="text-3xl font-bold text-lime-900 mt-4">{herb.name}</h1>
                        <p className="text-md text-gray-500 italic">{herb.botanicalName}</p>
                    </div>
                    <div className="md:col-span-2">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-bold text-lime-800 border-b-2 border-lime-200 pb-2 mb-2">Description</h2>
                                <p className={`text-gray-700 text-sm ${!isExpanded ? 'line-clamp-4' : ''}`}>{description}</p>
                                {description.length > 300 && (
                                    <button onClick={() => setIsExpanded(!isExpanded)} className="text-lime-600 hover:text-lime-800 font-semibold text-sm mt-2">
                                        {isExpanded ? 'Show Less' : 'Show More...'}
                                    </button>
                                )}
                            </div>
                            {relevantFeatures.length > 0 && (
                                <div>
                                    <h2 className="text-xl font-bold text-lime-800 border-b-2 border-lime-200 pb-2 mb-2">Why it helps to {mode} {matchedDoshas.join(' & ')}</h2>
                                    <ul className="space-y-2 text-sm list-disc list-inside text-gray-700">
                                        {relevantFeatures.map((feature, index) => <li key={index}>{feature}</li>)}
                                    </ul>
                                </div>
                            )}
                            <div>
                                <h2 className="text-xl font-bold text-lime-800 border-b-2 border-lime-200 pb-2 mb-2">Directions for Use</h2>
                                <p className="text-gray-700 text-sm whitespace-pre-line">{herb.directions || "Directions not available."}</p>
                                <p className="text-xs text-gray-500 mt-2">Note: Dosage can vary. Always consult an Ayurvedic practitioner for personalized advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-component for the Herb Card ---
const HerbCard = ({ herb, matchedDoshas, mode, onClick }) => {
    const effectTextMap = {
        '-': 'Pacifies',
        '+': 'Aggravates',
        '+ (in excess)': 'Aggravates (in excess)',
    };
    
    const activeEffects = Object.entries(herb.effects)
        .filter(([_, effect]) => effect !== '=')
        .map(([dosha, effect]) => `${effectTextMap[effect] || effect} ${dosha.charAt(0).toUpperCase() + dosha.slice(1)}`)
        .join(' | ');

    const reason = `Helps to ${mode} ${matchedDoshas.join(' & ')} by providing balancing qualities.`;

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col cursor-pointer" onClick={onClick}>
            <img src={herb.image} alt={herb.name} className="w-full h-44 object-cover" />
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{herb.name}</h3>
                <p className="text-sm text-gray-500 italic mb-2">{herb.botanicalName}</p>
                <p className="text-green-700 font-semibold text-sm mb-3">{herb.tagline}</p>
                <div className="bg-emerald-50 text-emerald-900 rounded-md p-3 text-xs mb-4 font-medium">
                    <p>🌿 <span className="font-bold">Why it's recommended:</span> {reason}</p>
                </div>
                <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside mb-4 flex-grow">
                    {herb.keyBenefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                </ul>
                <div className="text-xs text-center border-t pt-2 mt-auto text-gray-500">
                    <span className="font-semibold">Effect on Doshas:</span> {activeEffects}
                </div>
            </div>
        </div>
    );
};

// --- Disclaimer component ---
const Disclaimer = () => (
    <div className="mt-16 text-center text-xs text-lime-100 max-w-3xl mx-auto p-4 bg-lime-800/50 rounded-lg">
        <h4 className="font-bold mb-1 uppercase text-lime-50">For Educational Purposes Only</h4>
        <p>The information provided by this tool is intended for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or a qualified Ayurvedic practitioner with any questions you may have regarding a medical condition.</p>
    </div>
);

// --- The Main Recommender Component ---
export default function HerbRecommender() {
    const [step, setStep] = useState(1);
    const [mode, setMode] = useState(null);
    const [selectedDoshas, setSelectedDoshas] = useState([]);
    const [results, setResults] = useState([]);
    const [selectedHerb, setSelectedHerb] = useState(null);

    const handleModeSelect = (selectedMode) => {
        setMode(selectedMode);
        setStep(2);
    };
    
    const handleDoshaToggle = (toggledDosha) => {
        setSelectedDoshas(prev => prev.includes(toggledDosha) ? prev.filter(d => d !== toggledDosha) : [...prev, toggledDosha]);
    };

    const getResults = () => {
        if (selectedDoshas.length === 0) return;
        const recommended = new Map();
        herbData.forEach(herb => {
            const matches = [];
            selectedDoshas.forEach(dosha => {
                if (herb.logic[mode]?.includes(dosha)) {
                    matches.push(dosha);
                }
            });
            if (matches.length > 0) {
                const existing = recommended.get(herb.name);
                if (existing) {
                    const newMatches = [...new Set([...existing.matchedDoshas, ...matches])];
                    recommended.set(herb.name, { herb, matchedDoshas: newMatches });
                } else {
                    recommended.set(herb.name, { herb, matchedDoshas: matches });
                }
            }
        });
        setResults(Array.from(recommended.values()));
        setStep(3);
    };

    const goBack = () => {
        if (step === 3) { setStep(2); } 
        else if (step === 2) { setStep(1); setMode(null); }
    };

    const handleCardClick = (herb, matchedDoshas) => {
        setSelectedHerb({ ...herb, matchedDoshas });
    };

    const handleCloseModal = () => {
        setSelectedHerb(null);
    };
    
    const doshaOptions = [
        { name: 'vata', color: 'yellow' },
        { name: 'pitta', color: 'red' },
        { name: 'kapha', color: 'blue' },
    ];


    const doshaStyles = {
        vata: {
            selected: { backgroundColor: '#FBBF24', color: 'white', ring: '2px solid #F59E0B' },
            unselected: { backgroundColor: 'white', color: '#1F2937' },
        },
        pitta: {
            selected: { backgroundColor: '#EF4444', color: 'white', ring: '2px solid #DC2626' },
            unselected: { backgroundColor: 'white', color: '#1F2937' },
        },
        kapha: {
            selected: { backgroundColor: '#3B82F6', color: 'white', ring: '2px solid #2563EB' },
            unselected: { backgroundColor: 'white', color: '#1F2937' },
        },
    }

    return (
        <div className="bg-lime-950 min-h-screen p-4 sm:p-8 font-sans antialiased">
             <Navbar />
            <div className="max-w-6xl mx-auto bg-lime-900 rounded-2xl shadow-xl p-6 sm:p-10 relative">
                {step > 1 && (
                    <button onClick={goBack} className="absolute top-4 left-4 sm:top-6 sm:left-6 text-sm text-lime-300 hover:text-lime-100 font-medium transition-colors flex items-center z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back
                    </button>
                )}
                
                {step < 3 && (
                    <div className="text-center mb-8 pt-8 sm:pt-0">
                        <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                          <h1 className="text-3xl sm:text-4xl font-bold text-lime-900 mb-2">🌿 Find Your Ayurvedic Herb 🌿</h1>
                          <p className="text-lime-800">Discover personalized herb recommendations to bring you into balance.</p>
                        </div>
                    </div>
                )}

                {step === 1 && (
                    <div className="text-center transition-opacity duration-500">
                        <div className="bg-white p-4 rounded-xl shadow-md inline-block mb-6">
                            <h2 className="text-2xl font-semibold text-lime-900">What is your primary goal today?</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                           <button onClick={() => handleModeSelect('balance')} className="p-8 text-left bg-white text-gray-800 rounded-xl shadow-md hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
                                <h3 className="text-xl font-bold mb-2">Balance My Dominant Dosha</h3>
                                <p className="text-sm">Select this if you know your primary dosha and want to find herbs to keep it in check.</p>
                           </button>
                           <button onClick={() => handleModeSelect('strengthen')} className="p-8 text-left bg-white text-gray-800 rounded-xl shadow-md hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
                                <h3 className="text-xl font-bold mb-2">Strengthen My Deficient Dosha</h3>
                                <p className="text-sm">Select this if you feel a dosha is weak and you want herbs to nourish it.</p>
                           </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="text-center transition-opacity duration-500">
                        <div className="bg-white p-4 rounded-xl shadow-md inline-block mb-6">
                            <h2 className="text-2xl font-semibold text-lime-900">
                                Which dosha(s) do you want to <span className="font-bold text-lime-700">{mode}</span>?
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                            {doshaOptions.map(dosha => (
                                <label 
                                    key={dosha.name} 
                                    className="p-4 rounded-xl shadow-md cursor-pointer transition-all duration-200"
                                    style={selectedDoshas.includes(dosha.name) ? doshaStyles[dosha.name].selected : doshaStyles[dosha.name].unselected}
                                >
                                    <input type="checkbox" className="sr-only" checked={selectedDoshas.includes(dosha.name)} onChange={() => handleDoshaToggle( dosha.name )} />
                                    <h3 className="text-xl font-bold capitalize">{dosha.name}</h3>
                                </label>
                            ))}
                        </div>
                        <button onClick={getResults} disabled={selectedDoshas.length === 0} className="mt-10 bg-lime-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-lime-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2">
                            Get Recommendations
                        </button>
                    </div>
                )}
                
                {step === 3 && (
                    <div className="transition-opacity duration-500">
                         <div className="text-center mb-10 pt-8 sm:pt-0">
                            <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                              <h2 className="text-3xl font-bold text-lime-900">Your Recommendations</h2>
                              <p className="text-lime-800 mt-1">
                                Herbs to <span className="font-semibold">{mode}</span> <span className="capitalize font-semibold text-lime-700">{selectedDoshas.join(', ')}</span>
                              </p>
                            </div>
                        </div>

                        {results.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {results.map(result => 
                                    <HerbCard 
                                        key={result.herb.name} 
                                        herb={result.herb} 
                                        matchedDoshas={result.matchedDoshas} 
                                        mode={mode}
                                        onClick={() => handleCardClick(result.herb, result.matchedDoshas)}
                                    />
                                )}
                            </div>
                        ) : (
                             <div className="text-center py-12 px-6 bg-lime-800 rounded-lg">
                                <p className="text-lime-100 font-medium">No specific herbs were found for this combination in our current list.</p>
                                <p className="text-lime-200 text-sm mt-2">This may be an area for more specialized consultation.</p>
                            </div>
                        )}
                    </div>
                )}
                
                <Disclaimer />
            </div>

            {selectedHerb && (
                <HerbDetailModal
                    herb={selectedHerb}
                    matchedDoshas={selectedHerb.matchedDoshas}
                    mode={mode}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

