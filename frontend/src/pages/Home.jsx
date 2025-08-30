// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-200 to-green-400 text-gray-800">
//       <h1 className="text-4xl md:text-6xl font-bold mb-6">🌿 AyurWell</h1>
//       <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
//         Discover your unique Dosha type and get personalized Ayurvedic guidance 
//         for a healthier, balanced lifestyle.
//       </p>
//       <Link
//         to="/doshas"
//         className="px-6 py-3 bg-green-700 text-white rounded-xl text-lg hover:bg-green-800 transition"
//       >
//         Explore Doshas
//       </Link>
//     </div>
//   );
// }

// export default Home;


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Leaf, 
//   Wind, 
//   Flame, 
//   Droplets, 
//   ArrowRight, 
//   Star, 
//   Mail, 
//   Instagram, 
//   Facebook, 
//   Linkedin,
//   Menu,
//   X,
//   CheckCircle,
//   Heart,
//   Users,
//   Award,
//   UserPlus,
//   LogIn 
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import image from '../assets/backgroundImg.jpg'


// const AyurWellHomepage = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     }

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Dosha', href: '/dosha' },
//     { name: 'Recommendations', href: '/recommendations' }
    
//   ];

//   const doshas = [
//     {
//       name: 'Vata',
//       icon: Wind,
//       color: 'from-blue-400 to-cyan-500',
//       bgColor: 'bg-blue-50',
//       textColor: 'text-blue-700',
//       description: 'The energy of movement and circulation. Governs breathing, circulation, and nervous system functions.',
//       characteristics: ['Creative', 'Energetic', 'Quick thinking'],
//       element: 'Air & Space'
//     },
//     {
//       name: 'Pitta',
//       icon: Flame,
//       color: 'from-orange-400 to-red-500',
//       bgColor: 'bg-orange-50',
//       textColor: 'text-orange-700',
//       description: 'The energy of transformation and metabolism. Controls digestion, metabolism, and body temperature.',
//       characteristics: ['Focused', 'Determined', 'Natural leader'],
//       element: 'Fire & Water'
//     },
//     {
//       name: 'Kapha',
//       icon: Droplets,
//       color: 'from-green-400 to-emerald-500',
//       bgColor: 'bg-green-50',
//       textColor: 'text-green-700',
//       description: 'The energy of structure and stability. Provides strength, immunity, and emotional stability.',
//       characteristics: ['Calm', 'Steady', 'Compassionate'],
//       element: 'Earth & Water'
//     }
//   ];

//   const testimonials = [
//     {
//       name: 'Priya Sharma',
//       role: 'Yoga Instructor',
//       content: 'AyurWell helped me understand my Pitta constitution and balance my lifestyle accordingly. The personalized recommendations have transformed my daily routine.',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150'
//     },
//     {
//       name: 'Rajesh Kumar',
//       role: 'Software Engineer',
//       content: 'As a Vata type, I was always anxious and restless. The Ayurvedic guidance from AyurWell brought peace and balance to my hectic lifestyle.',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
//     },
//     {
//       name: 'Meera Patel',
//       role: 'Wellness Coach',
//       content: 'The Kapha-balancing recommendations helped me overcome sluggishness and find my natural energy. Truly life-changing!',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg?auto=compress&cs=tinysrgb&w=150'
//     }
//   ];

//   const benefits = [
//     {
//       icon: Heart,
//       title: 'Holistic Wellness',
//       description: 'Address mind, body, and spirit through ancient Ayurvedic wisdom'
//     },
//     {
//       icon: Users,
//       title: 'Personalized Approach',
//       description: 'Customized recommendations based on your unique constitution'
//     },
//     {
//       icon: Award,
//       title: 'Proven Results',
//       description: 'Thousands of years of traditional knowledge backed by modern research'
//     }
//   ];

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert('Thank you for subscribing to our newsletter!');
//       setEmail('');
//     }
//   };
// const handleLogout = () => {
//     localStorage.removeItem('token'); // Clear the token
//     setIsLoggedIn(false);
//     navigate('/login'); // Redirect to login page
//   };
//   const navigate = useNavigate();  // Initialize navigate function

//   // Function to handle button click
//   const handleClick = () => {
//     navigate("/quiz");  // Redirect to /quiz page
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header/Navbar */}
//       <motion.header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100'
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/">
//             <motion.div
//               className="flex items-center gap-2 cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
//                 <Leaf className="w-6 h-6 text-white" />
//               </div>
//               <span className={`text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent ${
//                 isScrolled ? '' : 'text-white' // This style might need adjustment depending on your hero banner
//               }`}>
//                 AyurWell
//               </span>
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link, index) => (
//               // ✅ Use Link for navigation
//               <Link key={link.name} to={link.href}>
//                 <motion.div
//                   className={`font-medium transition-colors hover:text-green-600 ${
//                     isScrolled ? 'text-neutral-700' : 'text-white hover:text-green-200'
//                   }`}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -2 }}
//                 >
//                   {link.name}
//                 </motion.div>
//               </Link>
//             ))}
//           </nav>

//           {/* Auth Buttons & Profile */}
//           <div className="flex items-center gap-4">
//             {isLoggedIn ? (
//               // ✅ Show Profile and Logout when logged in
//               <>
//                 <Link to="/profile">
//                   <motion.div
//                     className="cursor-pointer"
//                     whileHover={{ scale: 1.1 }}
//                     title="Profile"
//                   >
//                     <User className={`w-6 h-6 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
//                   </motion.div>
//                 </Link>
//                 <motion.button
//                   onClick={handleLogout}
//                   whileHover={{ scale: 1.1 }}
//                   title="Logout"
//                 >
//                   <LogOut className={`w-6 h-6 ${isScrolled ? 'text-red-600' : 'text-red-300'}`} />
//                 </motion.button>
//               </>
//             ) : (
//               // Show Login/Signup when logged out
//               <>
//                 <Link to="/login">
//                   <motion.div
//                     className="cursor-pointer"
//                     whileHover={{ scale: 1.1 }}
//                     title="Login"
//                   >
//                     <LogIn className={`w-6 h-6 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
//                   </motion.div>
//                 </Link>
//                 <Link to="/signup">
//                   <motion.div
//                     className="cursor-pointer"
//                     whileHover={{ scale: 1.1 }}
//                     title="Sign Up"
//                   >
//                     <UserPlus className={`w-6 h-6 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
//                   </motion.div>
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button (functionality unchanged) */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`md:hidden p-2 rounded-lg transition-colors ${
//               isScrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
//             }`}
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (functionality unchanged) */}
//       {isMobileMenuOpen && (
//         <motion.div
//           className="md:hidden bg-white border-t border-green-100 py-4"
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           exit={{ opacity: 0, height: 0 }}
//         >
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className="block px-4 py-2 text-neutral-700 hover:text-green-600 hover:bg-green-50 transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </motion.header>

    

//       {/* Hero Section */}
//       <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src={image}
//             alt="Ayurvedic herbs and spices"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/60"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Balance Your Health with{' '}
//             <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
//               Ayurveda
//             </span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Discover your Dosha and explore natural lifestyle guidance
//             <br />
//             tailored to your unique constitution
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <motion.button 
//               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleClick}
//             >
//               Take the Dosha Quiz
//               <ArrowRight className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* Floating Elements */}
//         <motion.div 
//           className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
//           animate={{ 
//             y: [0, -20, 0],
//             scale: [1, 1.1, 1]
//           }}
//           transition={{ 
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"
//           animate={{ 
//             y: [0, 20, 0],
//             scale: [1, 0.9, 1]
//           }}
//           transition={{ 
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1
//           }}
//         />
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20 bg-neutral-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-neutral-900 mb-4">
//               Why Choose Ayurvedic Wellness?
//             </h2>
//             <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
//               Experience the transformative power of ancient wisdom combined with modern understanding
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
//                   <benefit.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-neutral-900 mb-3">{benefit.title}</h3>
//                 <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Doshas Section */}
//       <section id="doshas" className="py-20 bg-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <motion.div 
//       className="text-center mb-16"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-4xl font-bold text-neutral-900 mb-4">
//         Understand the Three Doshas
//       </h2>
//       <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
//         Discover your unique constitution and learn how to maintain perfect balance 
//         through the wisdom of Ayurveda's three fundamental energies
//       </p>
//     </motion.div>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {doshas.map((dosha, index) => {
//         const Icon = dosha.icon; // ✅ Fix: dynamic icon
//         return (
//           <motion.div
//             key={dosha.name}
//             className="group bg-white rounded-3xl p-8 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ y: -10 }}
//           >
//             {/* Background Gradient */}
//             <div 
//               className={`absolute inset-0 bg-gradient-to-br ${dosha.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//             ></div>
            
//             {/* Icon */}
//             <motion.div 
//               className={`w-20 h-20 bg-gradient-to-br ${dosha.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
//               whileHover={{ rotate: 360, scale: 1.1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Icon className="w-10 h-10 text-white" />
//             </motion.div>

//             {/* Content */}
//             <div className="text-center relative z-10">
//               <h3 className="text-2xl font-bold text-neutral-900 mb-2">{dosha.name}</h3>
//               <div 
//                 className={`inline-block px-3 py-1 ${dosha.bgColor} ${dosha.textColor} rounded-full text-sm font-medium mb-4`}
//               >
//                 {dosha.element}
//               </div>
//               <p className="text-neutral-600 leading-relaxed mb-6">{dosha.description}</p>
              
//               {/* Characteristics */}
//               <div className="mb-6">
//                 <h4 className="font-semibold text-neutral-900 mb-3">Key Characteristics:</h4>
//                 <div className="space-y-2">
//                   {dosha.characteristics.map((char, i) => (
//                     <div 
//                       key={i} 
//                       className="flex items-center justify-center gap-2 text-sm text-neutral-600"
//                     >
//                       <CheckCircle className="w-4 h-4 text-green-500" />
//                       <span>{char}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <motion.button 
//                 className={`w-full bg-gradient-to-r ${dosha.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 Learn More
//                 <ArrowRight className="w-4 h-4" />
//               </motion.button>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   </div>
// </section>


//       {/* Testimonials Section */}
//       <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div 
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-neutral-900 mb-4">
//               What Our Community Says
//             </h2>
//             <p className="text-xl text-neutral-600">
//               Real stories from people who found balance through Ayurveda
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <p className="text-neutral-700 leading-relaxed mb-6 italic">
//                   "{testimonial.content}"
//                 </p>
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
//                     <p className="text-sm text-neutral-600">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Section */}
//       <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Stay Connected with Ayurvedic Wisdom
//             </h2>
//             <p className="text-xl text-green-100 mb-8">
//               Get weekly tips, seasonal guidance, and exclusive content delivered to your inbox
//             </p>
            
//             <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <div className="flex-1 relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full pl-10 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 text-neutral-900"
//                   required
//                 />
//               </div>
//               <motion.button
//                 type="submit"
//                 className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Subscribe
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-neutral-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* Logo & Description */}
//             <div className="md:col-span-2">
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
//                   <Leaf className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
//                   AyurWell
//                 </span>
//               </div>
//               <p className="text-neutral-300 leading-relaxed max-w-md">
//                 Empowering individuals to achieve optimal health and wellness through the ancient wisdom of Ayurveda. 
//                 Discover your unique constitution and live in harmony with nature.
//               </p>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//               <div className="space-y-2">
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="block text-neutral-300 hover:text-green-400 transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Social Media */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//               <div className="flex gap-4">
//                 {[
//                   { icon: Instagram, href: '#', label: 'Instagram' },
//                   { icon: Facebook, href: '#', label: 'Facebook' },
//                   { icon: Linkedin, href: '#', label: 'LinkedIn' }
//                 ].map((social) => (
//                   <motion.a
//                     key={social.label}
//                     href={social.href}
//                     className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 hover:text-green-400 hover:bg-neutral-700 transition-all duration-300"
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <social.icon className="w-5 h-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
//             <p className="text-neutral-400">
//               © 2025 AyurWell. All rights reserved. Made with ❤ for holistic wellness.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AyurWellHomepage;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Wind, 
  Flame, 
  Droplets, 
  ArrowRight, 
  Star, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  Menu,
  X,
  CheckCircle,
  Heart,
  Users,
  Award,
  UserPlus,
  LogIn,
  User,     // ✅ FIX: Imported the missing 'User' icon
  LogOut    // ✅ FIX: Imported the missing 'LogOut' icon
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ FIX: Imported the 'Link' component
import image from '../assets/backgroundImg.jpg';


const AyurWellHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // ✅ FIX: Hooks should be called at the top level before other logic
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Dosha', href: '/dosha' },
    { name: 'Recommendations', href: '/recommendations' }
  ];

  const doshas = [
    {
      name: 'Vata',
      icon: Wind,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      description: 'The energy of movement and circulation. Governs breathing, circulation, and nervous system functions.',
      characteristics: ['Creative', 'Energetic', 'Quick thinking'],
      element: 'Air & Space'
    },
    {
      name: 'Pitta',
      icon: Flame,
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      description: 'The energy of transformation and metabolism. Controls digestion, metabolism, and body temperature.',
      characteristics: ['Focused', 'Determined', 'Natural leader'],
      element: 'Fire & Water'
    },
    {
      name: 'Kapha',
      icon: Droplets,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      description: 'The energy of structure and stability. Provides strength, immunity, and emotional stability.',
      characteristics: ['Calm', 'Steady', 'Compassionate'],
      element: 'Earth & Water'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Yoga Instructor',
      content: 'AyurWell helped me understand my Pitta constitution and balance my lifestyle accordingly. The personalized recommendations have transformed my daily routine.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      content: 'As a Vata type, I was always anxious and restless. The Ayurvedic guidance from AyurWell brought peace and balance to my hectic lifestyle.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Meera Patel',
      role: 'Wellness Coach',
      content: 'The Kapha-balancing recommendations helped me overcome sluggishness and find my natural energy. Truly life-changing!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Address mind, body, and spirit through ancient Ayurvedic wisdom'
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Customized recommendations based on your unique constitution'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Thousands of years of traditional knowledge backed by modern research'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };
  
  const handleClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className={`text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent ${
                  isScrolled ? '' : 'text-white'
                }`}>
                  AyurWell
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link key={link.name} to={link.href}>
                  <motion.div
                    className={`font-medium transition-colors hover:text-green-600 ${
                      isScrolled ? 'text-neutral-700' : 'text-white hover:text-green-200'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Auth Buttons & Profile */}
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <>
                  <Link to="/profile">
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      title="Profile"
                    >
                      <User className={`w-6 h-6 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
                    </motion.div>
                  </Link>
                  <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: 1.1 }}
                    title="Logout"
                  >
                    <LogOut className={`w-6 h-6 ${isScrolled ? 'text-red-600' : 'text-red-300'}`} />
                  </motion.button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      title="Login"
                    >
                      <LogIn className={`w-6 h-6 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
                    </motion.div>
                  </Link>
                  <Link to="/signup">
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      title="Sign Up"
                    >
                      <UserPlus className={`w-6 h-6 ${isScrolled ? 'text-green-700' : 'text-white'}`} />
                    </motion.div>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-green-100 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 text-neutral-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Ayurvedic herbs and spices"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-800/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Balance Your Health with{' '}
            <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              Ayurveda
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover your Dosha and explore natural lifestyle guidance
            <br />
            tailored to your unique constitution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
            >
              Take the Dosha Quiz
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Ayurvedic Wellness?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Experience the transformative power of ancient wisdom combined with modern understanding
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doshas Section */}
      <section id="doshas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Understand the Three Doshas
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover your unique constitution and learn how to maintain perfect balance 
              through the wisdom of Ayurveda's three fundamental energies
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doshas.map((dosha, index) => {
              const Icon = dosha.icon;
              return (
                <motion.div
                  key={dosha.name}
                  className="group bg-white rounded-3xl p-8 shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${dosha.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${dosha.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-center relative z-10">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">{dosha.name}</h3>
                    <div 
                      className={`inline-block px-3 py-1 ${dosha.bgColor} ${dosha.textColor} rounded-full text-sm font-medium mb-4`}
                    >
                      {dosha.element}
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-6">{dosha.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-neutral-900 mb-3">Key Characteristics:</h4>
                      <div className="space-y-2">
                        {dosha.characteristics.map((char, i) => (
                          <div 
                            key={i} 
                            className="flex items-center justify-center gap-2 text-sm text-neutral-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{char}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <motion.button 
                      className={`w-full bg-gradient-to-r ${dosha.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-neutral-600">
              Real stories from people who found balance through Ayurveda
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Connected with Ayurvedic Wisdom
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get weekly tips, seasonal guidance, and exclusive content delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 text-neutral-900"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  AyurWell
                </span>
              </div>
              <p className="text-neutral-300 leading-relaxed max-w-md">
                Empowering individuals to achieve optimal health and wellness through the ancient wisdom of Ayurveda. 
                Discover your unique constitution and live in harmony with nature.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  // ✅ FIX: Use Link component for consistent SPA navigation
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-neutral-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map((social) => (
                  <a // Using <a> here is fine for external links
                    key={social.label}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 hover:text-green-400 hover:bg-neutral-700 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p className="text-neutral-400">
              © 2025 AyurWell. All rights reserved. Made with ❤ for holistic wellness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AyurWellHomepage;
