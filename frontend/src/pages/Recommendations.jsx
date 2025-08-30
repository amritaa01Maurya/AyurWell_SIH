// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { Loader2, AlertCircle } from "lucide-react";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// function Recommendations() {
//   const query = useQuery();
//   const dosha = query.get("dosha");
//   const [recommendations, setRecommendations] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [view, setView] = useState("daily");

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       if (!dosha) {
//         setError("Dosha not provided in URL.");
//         setLoading(false);
//         return;
//       }
//       setLoading(true);
//       setError(null);
//       try {
//         const endpoint = `http://localhost:5000/api/recommendations/${view}?dosha=${dosha}`;
//         const res = await axios.get(endpoint);
//         setRecommendations(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch recommendations.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecommendations();
//   }, [dosha, view]);

//   const renderDaily = () => {
//     if (!recommendations) return null;
//     return recommendations.dailyRecommendations.map((day, index) => (
//       <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-green-100">
//         <h3 className="text-xl font-bold text-green-800 mb-4">{day.day}</h3>
//         {day.daily.map((slot, i) => (
//           <div key={i} className="mb-4">
//             <h4 className="text-lg font-semibold text-gray-700">{slot.time}</h4>
//             <ul className="list-disc list-inside space-y-1 mt-2">
//               {slot.items.length > 0 ? (
//                 slot.items.map((item, j) => (
//                   <li key={j} className="text-gray-600">{item.food}</li>
//                 ))
//               ) : (
//                 <li className="text-gray-500">No recommendations for this time slot.</li>
//               )}
//             </ul>
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   const renderWeekly = () => {
//     if (!recommendations) return null;
//     return recommendations.weeklyRecommendations.map((weekDay, index) => (
//       <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-green-100">
//         <h3 className="text-xl font-bold text-green-800 mb-4">{weekDay.day}</h3>
//         {weekDay.daily.map((slot, i) => (
//           <div key={i} className="mb-4">
//             <h4 className="text-lg font-semibold text-gray-700">{slot.time}</h4>
//             <ul className="list-disc list-inside space-y-1 mt-2">
//               {slot.items.length > 0 ? (
//                 slot.items.map((item, j) => (
//                   <li key={j} className="text-gray-600">{item.food}</li>
//                 ))
//               ) : (
//                 <li className="text-gray-500">No recommendations for this time slot.</li>
//               )}
//             </ul>
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//         <Navbar />
//         <div className="flex items-center justify-center h-96">
//           <div className="text-center">
//             <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
//             <p className="text-gray-600">Generating recommendations...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-green-800 mb-2">Food Recommendations for {dosha}</h1>
//           <p className="text-lg text-gray-600">Based on your Dosha and the current season.</p>
//         </div>

//         {error && (
//           <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
//             <div className="flex items-center">
//               <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
//               <p className="text-red-700">
//                 {error}
//               </p>
//             </div>
//           </div>
//         )}

//         <div className="flex justify-center mb-8">
//           <button
//             onClick={() => setView("daily")}
//             className={`px-6 py-3 rounded-l-lg font-semibold transition-colors duration-200 ${
//               view === "daily" ? "bg-green-700 text-white" : "bg-white text-green-700 border border-green-700"
//             }`}
//           >
//             Daily
//           </button>
//           <button
//             onClick={() => setView("weekly")}
//             className={`px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200 ${
//               view === "weekly" ? "bg-green-700 text-white" : "bg-white text-green-700 border border-green-700"
//             }`}
//           >
//             Weekly
//           </button>
//         </div>

//         {recommendations && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {view === "daily" && renderDaily()}
//             {view === "weekly" && renderWeekly()}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Recommendations;
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Loader2, AlertCircle } from "lucide-react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Recommendations() {
  const query = useQuery();
  const dosha = query.get("dosha");
  const location = useLocation();
  const navigate = useNavigate();

  // route se view nikalenge (agar /weekly h to weekly, warna daily)
  const pathView = location.pathname.includes("weekly") ? "weekly" : "daily";

  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!dosha) {
        setError("Dosha not provided in URL.");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const endpoint = `http://localhost:5000/api/recommendations/${pathView}?dosha=${dosha}`;
        const res = await axios.get(endpoint);
        setRecommendations(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch recommendations.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecommendations();
  }, [dosha, pathView]);

  // const renderDaily = () => {
  //   if (!recommendations) return null;
  //   return recommendations.dailyRecommendations.map((day, index) => (
  //     <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-green-100">
  //       <h3 className="text-xl font-bold text-green-800 mb-4">{day.day}</h3>
  //       {day.daily.map((slot, i) => (
  //         <div key={i} className="mb-4">
  //           <h4 className="text-lg font-semibold text-gray-700">{slot.time}</h4>
  //           <ul className="list-disc list-inside space-y-1 mt-2">
  //             {slot.items.length > 0 ? (
  //               slot.items.map((item, j) => (
  //                 <li key={j} className="text-gray-600">{item.food}</li>
  //               ))
  //             ) : (
  //               <li className="text-gray-500">No recommendations for this time slot.</li>
  //             )}
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   ));
  // };

  const renderDaily = () => {
    if (!recommendations || !recommendations.dailyRecommendations) return null;

    // The backend response for daily is a simple array of time slots.
    // We don't need to map over a "day" first like in the weekly view.
    return recommendations.dailyRecommendations.map((slot, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <h3 className="text-xl font-bold text-green-800 mb-4">{slot.time}</h3>
            <ul className="list-disc list-inside space-y-1 mt-2">
                {slot.items.length > 0 ? (
                    slot.items.map((item, j) => (
                        <li key={j} className="text-gray-600">
                            <span className="font-semibold">{item.food}</span> - {item.benefit}
                        </li>
                    ))
                ) : (
                    <li className="text-gray-500">No specific recommendations for this time.</li>
                )}
            </ul>
        </div>
    ));
};

  const renderWeekly = () => {
    if (!recommendations) return null;
    return recommendations.weeklyRecommendations.map((weekDay, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-green-100">
        <h3 className="text-xl font-bold text-green-800 mb-4">{weekDay.day}</h3>
        {weekDay.daily.map((slot, i) => (
          <div key={i} className="mb-4">
            <h4 className="text-lg font-semibold text-gray-700">{slot.time}</h4>
            <ul className="list-disc list-inside space-y-1 mt-2">
              {slot.items.length > 0 ? (
                slot.items.map((item, j) => (
                  <li key={j} className="text-gray-600">{item.food}</li>
                ))
              ) : (
                <li className="text-gray-500">No recommendations for this time slot.</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
            <p className="text-gray-600">Generating recommendations...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Food Recommendations for {dosha}</h1>
          <p className="text-lg text-gray-600">Based on your Dosha and the current season.</p>
        </div>

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="flex justify-center mb-8">
          <button
            onClick={() => navigate(`/daily?dosha=${dosha}`)}
            className={`px-6 py-3 rounded-l-lg font-semibold transition-colors duration-200 ${
              pathView === "daily" ? "bg-green-700 text-white" : "bg-white text-green-700 border border-green-700"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => navigate(`/weekly?dosha=${dosha}`)}
            className={`px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200 ${
              pathView === "weekly" ? "bg-green-700 text-white" : "bg-white text-green-700 border border-green-700"
            }`}
          >
            Weekly
          </button>
        </div>

        {recommendations && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathView === "daily" && renderDaily()}
            {pathView === "weekly" && renderWeekly()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendations;
