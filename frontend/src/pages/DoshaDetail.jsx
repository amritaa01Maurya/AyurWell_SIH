// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Loader2, Heart, Zap, Shield } from 'lucide-react';
// import Navbar from '../components/Navbar';

// function DoshaDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [dosha, setDosha] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDoshaDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`http://localhost:5000/api/dosha/${id}`);
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setDosha(data);
//       } catch (err) {
//         console.error('Error fetching dosha details:', err);
//         setError(err.message);
        
//         // Fallback data for demo purposes
//         const fallbackData = {
//           1: {
//             id: 1,
//             name: 'Vata',
//             description: 'The energy of movement and change. Associated with air and space elements, governing circulation, breathing, and nervous system functions.',
//             detailedDescription: 'Vata dosha is the most important of the three doshas as it governs all movement in the body and mind. When balanced, Vata promotes creativity, flexibility, and vitality. When imbalanced, it can lead to anxiety, restlessness, and digestive issues.',
//             characteristics: ['Creative', 'Energetic', 'Quick-thinking', 'Adaptable', 'Enthusiastic'],
//             physicalTraits: ['Light frame', 'Dry skin', 'Cold hands and feet', 'Variable appetite'],
//             mentalTraits: ['Quick learner', 'Forgetful', 'Imaginative', 'Restless mind'],
//             balancingTips: ['Maintain regular routines', 'Eat warm, cooked foods', 'Practice grounding exercises', 'Get adequate rest']
//           },
//           2: {
//             id: 2,
//             name: 'Pitta',
//             description: 'The energy of transformation and metabolism. Associated with fire and water elements, governing digestion, metabolism, and body temperature.',
//             detailedDescription: 'Pitta dosha governs all metabolic processes in the body. When balanced, Pitta provides strong digestion, intelligence, and courage. When imbalanced, it can manifest as anger, inflammation, and digestive disorders.',
//             characteristics: ['Focused', 'Organized', 'Goal-oriented', 'Intelligent', 'Competitive'],
//             physicalTraits: ['Medium build', 'Warm body temperature', 'Strong appetite', 'Good muscle tone'],
//             mentalTraits: ['Sharp intellect', 'Good concentration', 'Natural leader', 'Can be impatient'],
//             balancingTips: ['Avoid excessive heat', 'Eat cooling foods', 'Practice moderation', 'Manage stress effectively']
//           },
//           3: {
//             id: 3,
//             name: 'Kapha',
//             description: 'The energy of structure and stability. Associated with earth and water elements, governing immunity, strength, and emotional stability.',
//             detailedDescription: 'Kapha dosha provides structure and lubrication to the body. When balanced, Kapha offers strength, stability, and compassion. When imbalanced, it can lead to lethargy, weight gain, and emotional attachment.',
//             characteristics: ['Calm', 'Steady', 'Nurturing', 'Patient', 'Loyal'],
//             physicalTraits: ['Sturdy build', 'Smooth skin', 'Strong immunity', 'Slow metabolism'],
//             mentalTraits: ['Good memory', 'Slow to learn but retains well', 'Compassionate', 'Can be possessive'],
//             balancingTips: ['Stay active', 'Eat light, spicy foods', 'Maintain stimulating activities', 'Avoid oversleeping']
//           }
//         };
        
//         setDosha(fallbackData[id] || fallbackData[1]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoshaDetail();
//   }, [id]);

//   const getIcon = (doshaName) => {
//     switch (doshaName?.toLowerCase()) {
//       case 'vata':
//         return <Zap className="h-8 w-8 text-green-700" />;
//       case 'pitta':
//         return <Heart className="h-8 w-8 text-green-700" />;
//       case 'kapha':
//         return <Shield className="h-8 w-8 text-green-700" />;
//       default:
//         return <Heart className="h-8 w-8 text-green-700" />;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//         <Navbar />
//         <div className="flex items-center justify-center h-96">
//           <div className="text-center">
//             <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
//             <p className="text-gray-600">Loading dosha details...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!dosha) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//         <Navbar />
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Dosha Not Found</h2>
//           <button
//             onClick={() => navigate('/doshas')}
//             className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
//           >
//             Back to Doshas
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//       <Navbar />
      
//       {/* Header */}
//       <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-12">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <button
//             onClick={() => navigate('/doshas')}
//             className="flex items-center space-x-2 text-green-200 hover:text-white mb-6 transition-colors duration-200"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             <span>Back to All Doshas</span>
//           </button>
          
//           <div className="flex items-center space-x-4">
//             {getIcon(dosha.name)}
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold">{dosha.name} Dosha</h1>
//               <p className="text-xl text-green-100 mt-2">{dosha.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {error && (
//           <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//             <div className="flex items-center">
//               <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
//               <p className="text-yellow-700 text-sm">
//                 Unable to fetch from backend API. Showing demo data instead.
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Detailed Description */}
//         <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-100">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">About {dosha.name}</h2>
//           <p className="text-gray-700 leading-relaxed text-lg">
//             {dosha.detailedDescription || dosha.description}
//           </p>
//         </div>

//         {/* Characteristics Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           {/* Physical Traits */}
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Physical Characteristics</h3>
//             <ul className="space-y-2">
//               {(dosha.physicalTraits || dosha.characteristics.slice(0, 2)).map((trait, index) => (
//                 <li key={index} className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                   <span className="text-gray-700">{trait}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Mental Traits */}
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Mental Characteristics</h3>
//             <ul className="space-y-2">
//               {(dosha.mentalTraits || dosha.characteristics.slice(2)).map((trait, index) => (
//                 <li key={index} className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                   <span className="text-gray-700">{trait}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Balancing Tips */}
//         <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl shadow-lg p-8 border border-green-200">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">Balancing {dosha.name}</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {(dosha.balancingTips || [
//               `Maintain practices that balance ${dosha.name}`,
//               'Follow appropriate diet and lifestyle',
//               'Practice meditation and yoga',
//               'Consult with an Ayurvedic practitioner'
//             ]).map((tip, index) => (
//               <div key={index} className="flex items-start space-x-3">
//                 <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
//                   {index + 1}
//                 </div>
//                 <p className="text-gray-700 leading-relaxed">{tip}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12">
//           <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Ready to Learn More?
//             </h3>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Discover personalized recommendations for your {dosha.name} constitution through our comprehensive assessment.
//             </p>
//             <div className="space-x-4">
//               <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
//                 Schedule Consultation
//               </button>
//               <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
//                 Take Assessment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoshaDetail;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, Heart, Zap, Shield, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

function DoshaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dosha, setDosha] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoshaDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/dosha/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setDosha(data);
      } catch (err) {
        console.error('Error fetching dosha details:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoshaDetail();
  }, [id]);

  const getIcon = (doshaName) => {
    switch (doshaName?.toLowerCase()) {
      case 'vata':
        return <Zap className="h-8 w-8 text-green-700" />;
      case 'pitta':
        return <Heart className="h-8 w-8 text-green-700" />;
      case 'kapha':
        return <Shield className="h-8 w-8 text-green-700" />;
      default:
        return <Heart className="h-8 w-8 text-green-700" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
            <p className="text-gray-600">Loading dosha details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!dosha) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dosha Not Found</h2>
          <button
            onClick={() => navigate('/doshas')}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Back to Doshas
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/doshas')}
            className="flex items-center space-x-2 text-green-200 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Doshas</span>
          </button>
          
          <div className="flex items-center space-x-4">
            {getIcon(dosha.doshaName)}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{dosha.doshaName} Dosha</h1>
              <p className="text-xl text-green-100 mt-2">{dosha.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
              <p className="text-yellow-700 text-sm">
                Unable to fetch from backend API.
              </p>
            </div>
          </div>
        )}

        {/* Detailed Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-green-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About {dosha.doshaName}</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {dosha.detailedDescription}
          </p>
        </div>

        {/* Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Physical Traits */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Physical Characteristics</h3>
            <ul className="space-y-2">
              {dosha.physicalTraits.map((trait, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mental Traits */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mental Characteristics</h3>
            <ul className="space-y-2">
              {dosha.mentalTraits.map((trait, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">{trait}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Balancing Tips */}
        <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl shadow-lg p-8 border border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Balancing {dosha.doshaName}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dosha.balancingTips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Discover personalized recommendations for your {dosha.doshaName} constitution through our comprehensive assessment.
            </p>
            <div className="space-x-4">
              <Link to="/recommendations" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Get Recommendations
              </Link>
              <Link to="/quiz" className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoshaDetail;