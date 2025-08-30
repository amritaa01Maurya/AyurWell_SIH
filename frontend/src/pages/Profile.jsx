// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { User, Mail, Phone, Home, Leaf, Loader2, AlertCircle } from "lucide-react";
// import Navbar from "../components/Navbar";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:5000/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(response.data.user);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch user data. Please log in again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//         <Navbar />
//         <div className="flex items-center justify-center h-96">
//           <div className="text-center">
//             <Loader2 className="h-8 w-8 animate-spin text-green-700 mx-auto mb-4" />
//             <p className="text-gray-600">Loading profile...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//         <Navbar />
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
//           <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
//             <div className="flex items-center justify-center">
//               <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
//               <p className="text-red-700">{error}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   if (!user) {
//       return (
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//           <Navbar />
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">User not found.</h2>
//           </div>
//         </div>
//       );
//   }


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
//       <Navbar />
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
//           <div className="text-center mb-8">
//             <div className="bg-green-100 text-green-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
//               <User className="w-16 h-16" />
//             </div>
//             <h1 className="text-3xl font-bold text-green-800">{user.name}</h1>
//             <p className="text-gray-500 mt-1">Your AyurWell Profile</p>
//           </div>

//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <Mail className="w-6 h-6 text-green-600" />
//               <div>
//                 <p className="text-gray-500 text-sm">Email Address</p>
//                 <p className="text-gray-800 font-medium">{user.email}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Phone className="w-6 h-6 text-green-600" />
//               <div>
//                 <p className="text-gray-500 text-sm">Phone Number</p>
//                 <p className="text-gray-800 font-medium">{user.phone || 'Not provided'}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Home className="w-6 h-6 text-green-600" />
//               <div>
//                 <p className="text-gray-500 text-sm">Address</p>
//                 <p className="text-gray-800 font-medium">{user.address || 'Not provided'}</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Leaf className="w-6 h-6 text-green-600" />
//               <div>
//                 <p className="text-gray-500 text-sm">Identified Dosha</p>
//                 <p className="text-gray-800 font-medium">{user.dosha || 'Not yet identified'}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { User, Mail, Phone, Calendar, MapPin, Camera, Edit3, Save, X } from "lucide-react";

// const Profile = () => {
//   const [userData, setUserData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState(null);
//   const [isDietEditing, setIsDietEditing] = useState(false);

//   // Replace with your backend URL
//   const API_URL = "http://localhost:5000/api/user";

//   useEffect(() => {
//     // Fetch user data from backend
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/profile`);
//         setUserData(response.data);
//         setEditedData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleInputChange = (field, value) => {
//     setEditedData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleDietChange = (meal, value) => {
//     setEditedData((prev) => ({
//       ...prev,
//       dietChart: { ...prev.dietChart, [meal]: value },
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.put(`${API_URL}/update`, editedData);
//       setUserData(response.data);
//       setEditedData(response.data);
//       setIsEditing(false);
//       setIsDietEditing(false);
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile. Try again!");
//     }
//   };

//   const handleCancel = () => {
//     setEditedData(userData);
//     setIsEditing(false);
//     setIsDietEditing(false);
//   };

//   if (!userData || !editedData) {
//     return <p className="text-center mt-8">Loading profile...</p>;
//   }

//   const currentDosha = editedData.doshaType; // assuming dosha info is part of backend response

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       {/* Profile Header */}
//       <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-emerald-100">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
//           {/* Profile Picture */}
//           <div className="relative group">
//             <img
//               src={editedData.profilePicture}
//               alt="Profile"
//               className="w-32 h-32 rounded-full object-cover border-4 border-emerald-200 shadow-lg"
//             />
//             <button className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//               <Camera className="w-6 h-6 text-white" />
//             </button>
//           </div>

//           {/* Profile Info */}
//           <div className="flex-1 text-center lg:text-left">
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
//               <h1 className="text-3xl font-bold text-emerald-800">{editedData.name}</h1>
//               <button
//                 onClick={() => setIsEditing(!isEditing)}
//                 className={`mt-4 lg:mt-0 flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
//                   isEditing
//                     ? "bg-red-100 text-red-700 hover:bg-red-200"
//                     : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
//                 }`}
//               >
//                 {isEditing ? <X className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
//                 <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
//               <div className="flex items-center space-x-2">
//                 <Mail className="w-4 h-4 text-emerald-600" />
//                 <span>{editedData.email}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="w-4 h-4 text-emerald-600" />
//                 <span>{editedData.phone}</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Calendar className="w-4 h-4 text-emerald-600" />
//                 <span>{editedData.age} years old</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <User className="w-4 h-4 text-emerald-600" />
//                 <span>{editedData.gender}</span>
//               </div>
//             </div>

//             <div className="flex items-start space-x-2 mt-4 text-gray-600">
//               <MapPin className="w-4 h-4 text-emerald-600 mt-1" />
//               <span>{editedData.address}</span>
//             </div>

//             {/* Dosha Badge */}
//             <div className="mt-6">
//               <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
//                 <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
//                 <span className="text-emerald-800 font-semibold">
//                   Primary Dosha: {currentDosha.name}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Rest of your profile sections (diet chart, stats, etc.) */}
//       {/* ...keep the JSX you already have, just use editedData for all fields */}

//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { User, Mail, Phone, Calendar, MapPin, Camera, Edit3, Save, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(null);
  
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api/user";

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setEditedData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          navigate("/login");
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleInputChange = (field, value) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDietChange = (meal, value) => {
    setEditedData((prev) => ({
      ...prev,
      dietChart: { ...prev.dietChart, [meal]: value },
    }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("You are not logged in!");
        navigate("/login");
        return;
    }

    try {
      const response = await axios.put(`${API_URL}/update`, editedData, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
      });
      setUserData(response.data);
      setEditedData(response.data);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Try again!");
    }
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
  };

  if (!userData || !editedData) {
    return <p className="text-center mt-8 text-lg">Loading profile...</p>;
  }

  const currentDosha = editedData.dosha; 

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-emerald-100">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="relative group">
            <img
              src={editedData.profilePicture || `https://ui-avatars.com/api/?name=${editedData.name}&background=0D9488&color=fff&size=128`}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-emerald-200 shadow-lg"
            />
            <button className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Camera className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
              {isEditing ? (
                 <input type="text" value={editedData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="text-3xl font-bold text-emerald-800 border-b-2 border-emerald-200 focus:outline-none focus:border-emerald-500" />
              ) : (
                <h1 className="text-3xl font-bold text-emerald-800">{editedData.name}</h1>
              )}

              <div className="flex items-center gap-4 mt-4 lg:mt-0">
                {isEditing ? (
                   <>
                    <button onClick={handleSave} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200">
                        <Save className="w-4 h-4" /> <span>Save</span>
                    </button>
                    <button onClick={handleCancel} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                        <X className="w-4 h-4" /> <span>Cancel</span>
                    </button>
                   </>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                        <Edit3 className="w-4 h-4" /> <span>Edit Profile</span>
                    </button>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                 <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>{editedData.email}</span>
                 </div>
                 <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    {isEditing ? <input type="text" value={editedData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="w-full p-1 border-b-2" /> : <span>{editedData.phone || 'Not provided'}</span>}
                 </div>
                 <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    {isEditing ? <input type="number" value={editedData.age} onChange={(e) => handleInputChange('age', e.target.value)} className="w-full p-1 border-b-2" /> : <span>{editedData.age ? `${editedData.age} years old` : 'Not provided'}</span>}
                 </div>
                 <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-emerald-600" />
                    {isEditing ? <input type="text" value={editedData.gender} onChange={(e) => handleInputChange('gender', e.target.value)} className="w-full p-1 border-b-2" /> : <span>{editedData.gender || 'Not provided'}</span>}
                 </div>
            </div>
            <div className="flex items-start space-x-2 mt-4 text-gray-600">
                <MapPin className="w-4 h-4 text-emerald-600 mt-1" />
                {isEditing ? <textarea value={editedData.address} onChange={(e) => handleInputChange('address', e.target.value)} className="w-full p-1 border-b-2" /> : <span>{editedData.address || 'Not provided'}</span>}
            </div>

            <div className="mt-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-800 font-semibold">
                  Primary Dosha: {currentDosha ? currentDosha : 'Not Determined'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* You can add other profile sections here, like the diet chart, etc. */}
    </div>
  );
};

export default Profile;
