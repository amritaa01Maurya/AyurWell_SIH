// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight, Loader2, AlertCircle } from 'lucide-react';
// import Navbar from '../components/Navbar';

// function DoshaCategories() {
//   const [doshas, setDoshas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDoshas = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:5000/api/dosha/');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         setDoshas(data);
//       } catch (err) {
//         console.error('Error fetching doshas:', err);
//         setError(err.message);
//         // Fallback data for demo purposes
//         setDoshas([
//           {
//             id: 1,
//             name: 'Vata',
//             description: 'The energy of movement and change. Associated with air and space elements, governing circulation, breathing, and nervous system functions.',
//             characteristics: ['Creative', 'Energetic', 'Quick-thinking']
//           },
//           {
//             id: 2,
//             name: 'Pitta',
//             description: 'The energy of transformation and metabolism. Associated with fire and water elements, governing digestion, metabolism, and body temperature.',
//             characteristics: ['Focused', 'Organized', 'Goal-oriented']
//           },
//           {
//             id: 3,
//             name: 'Kapha',
//             description: 'The energy of structure and stability. Associated with earth and water elements, governing immunity, strength, and emotional stability.',
//             characteristics: ['Calm', 'Steady', 'Nurturing']
//           }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoshas();
//   }, []);

//   const handleViewMore = (doshaId) => {
//     navigate(`/dosha/${doshaId}`);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//         <Navbar />
//         <div className="flex items-center justify-center h-96">
//           <div className="text-center">
//             <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
//             <p className="text-gray-600">Loading dosha categories...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//       <Navbar />
      
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Discover Your Dosha
//           </h1>
//           <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
//             Explore the three fundamental energies that govern your physical, mental, and emotional well-being according to Ayurvedic tradition.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {error && (
//           <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
//             <div className="flex items-center">
//               <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
//               <p className="text-red-700">
//                 Unable to fetch from backend API. Showing demo data instead.
//               </p>
//             </div>
//           </div>
//         )}

//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             The Three Doshas
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Each person has a unique combination of these three doshas that determines their physical constitution, mental tendencies, and optimal lifestyle practices.
//           </p>
//         </div>

//         {/* Dosha Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {doshas.map((dosha) => (
//             <div
//               key={dosha.id}
//               className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-green-100"
//             >
//               {/* Card Header */}
//               <div className="bg-gradient-to-r from-green-700 to-green-600 p-6 text-white">
//                 <h3 className="text-2xl font-bold mb-2">{dosha.name}</h3>
//                 <div className="w-12 h-1 bg-orange-200 rounded"></div>
//               </div>

//               {/* Card Body */}
//               <div className="p-6">
//                 <p className="text-gray-700 mb-6 leading-relaxed text-sm">
//                   {dosha.description}
//                 </p>

//                 {/* Characteristics */}
//                 {dosha.characteristics && (
//                   <div className="mb-6">
//                     <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Characteristics:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {dosha.characteristics.map((characteristic, index) => (
//                         <span
//                           key={index}
//                           className="bg-orange-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200"
//                         >
//                           {characteristic}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* View More Button */}
//                 <button
//                   onClick={() => handleViewMore(dosha.id)}
//                   className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
//                 >
//                   <span>View More</span>
//                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Info Section */}
//         <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-green-100">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Understanding Your Constitution
//             </h3>
//             <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
//               Your unique dosha combination, known as your Prakriti, was determined at conception and remains constant throughout your life. 
//               However, your current state (Vikriti) can be influenced by lifestyle, diet, stress, and environmental factors. 
//               Understanding both helps you make choices that support your optimal health and well-being.
//             </p>
//             <div className="mt-6">
//               <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
//                 Take Dosha Assessment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-800 text-white py-8 mt-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-green-200">
//             © 2025 AyurWell. Balancing wellness through ancient wisdom.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default DoshaCategories;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

function DoshaCategories() {
  const [doshas, setDoshas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoshas = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/dosha/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setDoshas(data);
      } catch (err) {
        console.error('Error fetching doshas:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoshas();
  }, []);

  const handleViewMore = (doshaId) => {
    navigate(`/dosha/${doshaId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
            <p className="text-gray-600">Loading dosha categories...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Dosha
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Explore the three fundamental energies that govern your physical, mental, and emotional well-being according to Ayurvedic tradition.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <p className="text-red-700">
                Unable to fetch from backend API.
              </p>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            The Three Doshas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each person has a unique combination of these three doshas that determines their physical constitution, mental tendencies, and optimal lifestyle practices.
          </p>
        </div>

        {/* Dosha Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {doshas.map((dosha) => (
            <div
              key={dosha._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-green-100"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-green-700 to-green-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{dosha.doshaName}</h3>
                <div className="w-12 h-1 bg-orange-200 rounded"></div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  {dosha.description}
                </p>

                {/* Characteristics */}
                {dosha.characteristics && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Characteristics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dosha.characteristics.map((characteristic, index) => (
                        <span
                          key={index}
                          className="bg-orange-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200"
                        >
                          {characteristic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* View More Button */}
                <button
                  onClick={() => handleViewMore(dosha._id)}
                  className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>View More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Understanding Your Constitution
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Your unique dosha combination, known as your Prakriti, was determined at conception and remains constant throughout your life. 
              However, your current state (Vikriti) can be influenced by lifestyle, diet, stress, and environmental factors. 
              Understanding both helps you make choices that support your optimal health and well-being.
            </p>
            <div className="mt-6">
              <Link to="/quiz" className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Take Dosha Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-200">
            © 2025 AyurWell. Balancing wellness through ancient wisdom.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default DoshaCategories;