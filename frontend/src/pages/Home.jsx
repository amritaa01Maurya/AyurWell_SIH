import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowRight, Heart, Brain, Shield } from 'lucide-react';
import backgroundImg from '../assets/backgroundImg.jpg'; // Make sure you have this image

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <header className="relative">
                <div className="absolute inset-0">
                    <img src={backgroundImg} alt="Ayurvedic herbs" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-emerald-900 bg-opacity-60"></div>
                </div>
                <div className="relative max-w-4xl mx-auto py-32 px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Rediscover Balance with Ayurveda
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-emerald-100">
                        Understand your unique mind-body constitution (Dosha) and get personalized guidance for a healthier, more harmonious life.
                    </p>
                    <Link
                        to="/quiz"
                        className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-emerald-700 bg-white hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                        Find Your Dosha
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Your Path to Holistic Wellness</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            AyurWell provides the tools you need to align your lifestyle with your natural constitution.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-10 md:grid-cols-3">
                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                                <Brain size={28} />
                            </div>
                            <h3 className="mt-5 text-xl font-semibold text-gray-900">Personalized Insights</h3>
                            <p className="mt-2 text-base text-gray-600">
                                Take our comprehensive quiz to uncover your dominant Dosha and understand its unique characteristics.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                                <Heart size={28} />
                            </div>
                            <h3 className="mt-5 text-xl font-semibold text-gray-900">Tailored Recommendations</h3>
                            <p className="mt-2 text-base text-gray-600">
                                Receive daily food and lifestyle suggestions designed to bring balance to your specific Dosha.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                                <Shield size={28} />
                            </div>
                            <h3 className="mt-5 text-xl font-semibold text-gray-900">Doctor-Verified Plans</h3>
                            <p className="mt-2 text-base text-gray-600">
                                Connect with certified Ayurvedic doctors who can review and approve your wellness plan for added confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

// import React, { useState, useEffect, useRef } from 'react';

// // --- New Component for the Particle Animation ---
// const particlesConfig = {
//     "particles": {
//         "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
//         "color": { "value": "#10B981" },
//         "shape": { "type": "circle" },
//         "opacity": { "value": 0.5, "random": true, "anim": { "enable": false } },
//         "size": { "value": 3, "random": true, "anim": { "enable": false } },
//         "line_linked": { "enable": true, "distance": 150, "color": "#34D399", "opacity": 0.4, "width": 1 },
//         "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
//         "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
//     },
//     "retina_detect": true
// };

// const ParticlesBackground = () => {
//     useEffect(() => {
//         // Check if particles.js script is already loaded
//         if (window.particlesJS) {
//             window.particlesJS('particles-js', particlesConfig);
//             return;
//         }

//         const script = document.createElement('script');
//         script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
//         script.async = true;
        
//         script.onload = () => {
//             if (window.particlesJS) {
//                 window.particlesJS('particles-js', particlesConfig);
//             }
//         };

//         document.body.appendChild(script);

//         return () => {
//             // Cleanup script and canvas when component unmounts
//             if(script.parentNode) {
//                 document.body.removeChild(script);
//             }
//             const particlesEl = document.querySelector('.particles-js-canvas-el');
//             if (particlesEl) {
//                 particlesEl.remove();
//             }
//         };
//     }, []);

//     return <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0" />;
// };


// // Main App Component
// export default function App() {
//     const [isChatOpen, setIsChatOpen] = useState(false);

//     // Helper component for SVG Icons
//     const Icon = ({ path, className = "w-6 h-6" }) => (
//         <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//             <path d={path} />
//         </svg>
//     );

//     // Data for the application
//     const navLinks = [
//         { href: "#about", text: "About" },
//         { href: "#doshas", text: "The Doshas" },
//         { href: "#shop", text: "Herbs" },
//         { href: "#articles", text: "Articles" },
//     ];

//     const socialIcons = {
//         instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.472.01-4.695.067-2.71.124-3.953 1.37-4.078 4.078-.057 1.223-.067 1.578-.067 4.695s.01 3.472.067 4.695c.124 2.709 1.368 3.953 4.078 4.078 1.223.057 1.578.067 4.695.067s3.472-.01 4.695-.067c2.71-.124 3.953-1.37 4.078-4.078.057-1.223.067-1.578.067-4.695s-.01-3.472-.067-4.695c-.124-2.709-1.368-3.953-4.078-4.078-1.223-.057-1.578-.067-4.695-.067zM12 7.23a4.77 4.77 0 100 9.54 4.77 4.77 0 000-9.54zm0 7.73a2.96 2.96 0 110-5.92 2.96 2.96 0 010 5.92zm4.965-7.158a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z",
//         youtube: "M21.582 7.373c-.227-.813-.868-1.455-1.68-1.68C18.23 5.25 12 5.25 12 5.25s-6.23 0-7.902.443c-.813-.227-1.455-.868-1.68 1.68C2 9.046 2 12 2 12s0 2.954.443 4.627c.227.813.868 1.455 1.68 1.68C5.77 18.75 12 18.75 12 18.75s6.23 0 7.902-.443c.813-.227 1.455-.868 1.68-1.68C22 14.954 22 12 22 12s0-2.954-.418-4.627zM9.75 14.85V9.15l5.19 2.85-5.19 2.85z",
//         linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
//     };
    
//     // Activate scroll animations
//     useScrollAnimation();

//     return (
//         <div className="text-gray-800">
//             <style>{`
//                 html { scroll-behavior: smooth; }
//                 body {
//                     font-family: 'Poppins', sans-serif;
//                     background-color: #F0FFF4;
//                 }
//                 .font-playfair {
//                     font-family: 'Playfair Display', serif;
//                 }
//                 .quiz-option:hover {
//                     transform: translateY(-2px);
//                     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//                 }
//                 .hero-gradient {
//                     background: linear-gradient(180deg, #F0FFF4 0%, #E6FFFA 100%);
//                     position: relative;
//                 }
//                 .hero-content {
//                     position: relative;
//                     z-index: 1;
//                 }
//                 @keyframes scroll-left {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(-50%); }
//                 }
//                 .animate-scroll-left {
//                     animation: scroll-left 40s linear infinite;
//                 }
//                 .slider-container {
//                     overflow: hidden;
//                     white-space: nowrap;
//                     margin-top: 1.5rem;
//                     margin-bottom: 2rem;
//                 }
//                 .slider-content {
//                     display: inline-block;
//                 }
//                 .slider-content span {
//                     margin: 0 2rem;
//                     font-size: 1.1rem;
//                     font-style: italic;
//                     color: #4B5563;
//                 }
//                 .tooltip {
//                     position: relative;
//                     display: inline-block;
//                 }
//                 .tooltip .tooltiptext {
//                     visibility: hidden;
//                     width: 120px;
//                     background-color: #1F2937;
//                     color: #fff;
//                     text-align: center;
//                     border-radius: 6px;
//                     padding: 5px 0;
//                     position: absolute;
//                     z-index: 1;
//                     bottom: 125%;
//                     left: 50%;
//                     margin-left: -60px;
//                     opacity: 0;
//                     transition: opacity 0.3s;
//                 }
//                 .tooltip:hover .tooltiptext {
//                     visibility: visible;
//                     opacity: 1;
//                 }
//                 .reveal-on-scroll {
//                     opacity: 0;
//                     transform: translateY(50px);
//                     transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//                 }
//                 .reveal-on-scroll.visible {
//                     opacity: 1;
//                     transform: translateY(0);
//                 }
//                 .faq-question {
//                     cursor: pointer;
//                 }
//                 .faq-answer {
//                     max-height: 0;
//                     overflow: hidden;
//                     transition: max-height 0.5s ease-in-out;
//                 }
//                 .faq-item.open .faq-answer {
//                     max-height: 200px; /* Adjust as needed */
//                 }
//                 .faq-item.open .faq-question span {
//                     transform: rotate(45deg);
//                 }
//                 /* New styles for the quiz results to match the screenshot */
//                 .dosha-ring-bg {
//                     fill: none;
//                     stroke: #e6e6e6;
//                 }
//                 .dosha-ring-fg {
//                     fill: none;
//                     transform: rotate(-90deg);
//                     transform-origin: 50% 50%;
//                     stroke-linecap: round;
//                 }
//                 /* New styles for chat icon */
//                  @keyframes pulse-green {
//                     0%, 100% {
//                         transform: scale(1);
//                         box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
//                     }
//                     50% {
//                         transform: scale(1.05);
//                         box-shadow: 0 0 0 12px rgba(16, 185, 129, 0);
//                     }
//                 }
//                 .animate-pulse-green {
//                     animation: pulse-green 2s infinite;
//                 }
//                  /* Styles for Chat Window */
//                 .chat-message { margin-bottom: 15px; display: flex; flex-direction: column; }
//                 .user-message { align-self: flex-end; background-color: #DCF8C6; border-radius: 10px 10px 0 10px; padding: 10px 15px; max-width: 70%; }
//                 .bot-message { align-self: flex-start; background-color: #F1F0F0; border-radius: 10px 10px 10px 0; padding: 10px 15px; max-width: 70%; }
//             `}</style>
            
//             <Header navLinks={navLinks} />
//             <main>
//                 <Hero />
//                 <About />
//                 <Doshas />
//                 <Shop />
//                 <Articles />
//                 <FAQ />
//             </main>
//             <Footer socialIcons={socialIcons} Icon={Icon} />
            
//             <LiveChatIcon onClick={() => setIsChatOpen(true)} />
//             {isChatOpen && <ChatWindow closeChat={() => setIsChatOpen(false)} />}
//         </div>
//     );
// }

// // Sub-components for better organization
// const Header = ({ navLinks }) => (
//     <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
//         <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//                 <img src="/assets/logo.png" alt="AyurWell Logo" className="h-12 w-12 rounded-full border-2 border-green-200" />
//                 <h1 className="text-3xl font-playfair">AyurWell</h1>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//                 {navLinks.map(link => (
//                     <a key={link.href} href={link.href} className="text-green-200 hover:text-white">{link.text}</a>
//                 ))}
//                 <a href="#login" className="text-green-200 hover:text-white">Login</a>
//                 <a href="#signup" className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">Sign Up</a>
//             </div>
//         </nav>
//     </header>
// );

// const Hero = () => {
//     const [isQuizModalOpen, setQuizModalOpen] = useState(false);
    
//     const quotes = [
//         "\"When diet is wrong, medicine is of no use.\"",
//         "\"The science of life is the knowledge of Veda.\"",
//         "\"Health is a dynamic expression of life.\"",
//         "\"Nature itself is the best physician.\"",
//         "\"Balance is the key to a healthy life.\"",
//         "\"Food is medicine. Eat with intention.\"",
//     ];

//     return (
//         <>
//             <section id="home" className="hero-gradient">
//                 <ParticlesBackground /> {/* The animation component is added here */}
//                 <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center hero-content">
//                     <div className="md:w-1/2 mb-10 md:mb-0">
//                         <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">Discover Your Inner Harmony.</h2>
//                         <div className="slider-container">
//                             <div className="slider-content animate-scroll-left">
//                                 {[...quotes, ...quotes].map((quote, index) => <span key={index}>{quote}</span>)}
//                             </div>
//                         </div>
//                         <p className="text-lg text-gray-700 mb-8">Ayurveda teaches that balance is the key to wellness. Find your unique mind-body constitution by taking our quiz to reveal your dominant dosha.</p>
//                         <button onClick={() => setQuizModalOpen(true)} className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105 shadow-lg">Find Your Dosha</button>
//                     </div>
//                     <div className="md:w-1/2 flex justify-center">
//                         <img src="/assets/hero-image.png" alt="Ayurvedic Wellness" className="w-full max-w-lg" />
//                     </div>
//                 </div>
//             </section>
//             {isQuizModalOpen && <QuizModal closeModal={() => setQuizModalOpen(false)} />}
//         </>
//     );
// };

// const About = () => (
//     <section id="about" className="bg-white py-20 overflow-hidden">
//         <div className="container mx-auto px-6 text-center reveal-on-scroll">
//             <h3 className="text-3xl font-bold text-green-900 mb-4">Ancient Wisdom for Modern Wellness</h3>
//             <p className="text-gray-600 mb-12 max-w-3xl mx-auto">Ayurveda is a 5,000-year-old system of natural healing from India. It teaches that health is a state of vibrant balance between our environment, body, mind, and spirit. AyurWell is your personal guide on this journey.</p>
//             <div className="grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
//                 <div>
//                     <h4 className="text-2xl font-semibold text-green-800 mb-3">Our Philosophy</h4>
//                     <p className="text-gray-600">We believe in the core Ayurvedic principle that the mind and body are intrinsically linked. Our philosophy is built on the pillars of "food as medicine," prevention over cure, and honoring the unique needs of every individual. We aim to empower you with knowledge, not just information.</p>
//                 </div>
//                 <div>
//                     <h4 className="text-2xl font-semibold text-green-800 mb-3">How It Works</h4>
//                     <ol className="list-decimal list-inside space-y-2 text-gray-600">
//                         <li><span className="font-semibold">Discover Your Dosha:</span> Take our quick quiz to identify your unique mind-body constitution.</li>
//                         <li><span className="font-semibold">Get Your Plan:</span> Receive a personalized diet chart and lifestyle tips tailored to bring you into balance.</li>
//                         <li><span className="font-semibold">Live in Harmony:</span> Apply this ancient wisdom to your modern life for lasting health and vitality.</li>
//                     </ol>
//                 </div>
//             </div>
//         </div>
//     </section>
// );

// const Doshas = () => {
//     const [modalData, setModalData] = useState(null);
//     const doshaData = {
//         Vata: { img: "/assets/vata.png", elements: "Air & Ether", borderColor: "border-green-200", textColor: "text-green-800", description: "The energy of movement. Vata types are typically energetic, creative, and lively.", content: <><p><strong>Qualities:</strong> Light, dry, mobile, cold, rough, subtle.</p><p><strong>Characteristics:</strong> People with a Vata constitution are often thin, energetic, and creative. They are quick to learn but also quick to forget. When out of balance, they can experience anxiety, insomnia, and dry skin.</p><p><strong>Balancing Foods:</strong> Warm, moist, and grounding foods like soups, stews, root vegetables, and healthy fats.</p></> },
//         Pitta: { img: "/assets/pitta.png", elements: "Fire & Water", borderColor: "border-amber-200", textColor: "text-amber-800", description: "The energy of digestion and metabolism. Pitta individuals are often intelligent and focused.", content: <><p><strong>Qualities:</strong> Hot, sharp, light, oily, spreading.</p><p><strong>Characteristics:</strong> Pitta types are known for their sharp intellect, ambition, and focus. They often have a medium build and good digestion. Imbalance can lead to irritability, inflammation, and acidity.</p><p><strong>Balancing Foods:</strong> Cooling, sweet, and substantial foods like sweet fruits, leafy greens, and grains.</p></> },
//         Kapha: { img: "/assets/kapha.png", elements: "Earth & Water", borderColor: "border-emerald-200", textColor: "text-emerald-800", description: "The energy of structure and stability. Kapha types are calm, loving, and grounded.", content: <><p><strong>Qualities:</strong> Heavy, slow, cool, oily, smooth.</p><p><strong>Characteristics:</strong> Kapha individuals are typically calm, grounded, and loving with a strong build. They have good stamina but can be prone to sluggishness. When out of balance, they may experience weight gain, congestion, and lethargy.</p><p><strong>Balancing Foods:</strong> Light, dry, and warm foods like pungent spices, bitter greens, and legumes.</p></> },
//     };

//     return (
//   <>
//     <section id="doshas" className="py-20 overflow-hidden">
//       <div className="container mx-auto px-6 text-center reveal-on-scroll">
//         <h3 className="text-3xl font-bold text-green-900 mb-4">
//           Understanding the Three Doshas
//         </h3>
//         <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
//           The doshas are the three fundamental energies that govern our inner and outer environments: Vata, Pitta, and Kapha. Click on a card to learn more.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {Object.entries(doshaData).map(([name, data]) => (
//             <div
//               key={name}
//               onClick={() => setModalData({ name, ...data })}
//               className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform"
//             >
//               <img
//                 src={data.img}
//                 alt={`${name} Dosha`}
//                 className={`w-40 h-40 rounded-full object-cover shadow-lg mb-4 border-4 ${data.borderColor}`}
//               />
//               <h4
//                 className={`text-2xl font-semibold ${data.textColor} mb-2`}
//               >
//                 {name} ({data.elements})
//               </h4>
//               <p className="text-gray-600">{data.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     {modalData && <DoshaModal data={modalData} closeModal={() => setModalData(null)} />}
//   </>
// );


// const ProductCard = ({ name, price, imgSrc }) => (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
//         <img src={imgSrc} alt={name} className="w-full h-48 object-cover" />
//         <div className="p-6 text-center">
//             <h4 className="text-xl font-bold text-green-800 mb-2">{name}</h4>
//             <p className="text-gray-800 font-semibold mb-4">{price}</p>
//             <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition">Add to Cart</button>
//         </div>
//     </div>
// );

// const Shop = () => {
//     const allProducts = [
//         { name: "Ashwagandha", price: "₹450", imgSrc: "/assets/ashwagandha.png" },
//         { name: "Turmeric Capsules", price: "₹300", imgSrc: "/assets/turmeric.png" },
//         { name: "Triphala Powder", price: "₹375", imgSrc: "/assets/triphala.png" },
//         { name: "Brahmi Oil", price: "₹400", imgSrc: "/assets/brahmi.png" },
//     ];

//     return (
//         <section id="shop" className="bg-white py-20 overflow-hidden">
//             <div className="container mx-auto px-6 text-center reveal-on-scroll">
//                 <h3 className="text-3xl font-bold text-green-900 mb-4">Shop Our Herbal Essentials</h3>
//                 <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Support your journey to balance with our curated selection of high-quality Ayurvedic herbs and products.</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {allProducts.map(product => <ProductCard key={product.name} {...product} />)}
//                 </div>
//                 <div className="mt-12">
//                     <a href="src/components/HerbRecommender.jsx" className="text-green-600 font-semibold hover:text-green-800 transition">Explore More Products &rarr;</a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const ArticleCard = ({ title, description, link, imgSrc }) => (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
//         <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
//         <div className="p-6 text-left">
//             <h4 className="text-xl font-bold text-green-800 mb-2">{title}</h4>
//             <p className="text-gray-600 mb-4">{description}</p>
//             <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 hover:text-green-800">Read More &rarr;</a>
//         </div>
//     </div>
// );

// const Articles = () => {
//     const articles = [
//         { title: "The Key to Balanced Health and Wellness", description: "Covers the traits and lifestyle recommendations for each dosha—Vata, Pitta, and Kapha—and how to maintain harmony through diet and daily routines.", link: "https://sohumhealing.com/understanding-ayurvedic-doshas-the-key-to-balanced-health-and-wellness/?utm_source=chatgpt.com", imgSrc: "/assets/article1.png" },
//         { title: "What Is Ayurveda?", description: "A trusted medical overview of Ayurveda, explaining doshas, holistic wellness, and modern-day applications like diet, lifestyle, and natural treatments.", link: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/ayurveda?utm_source=chatgpt.com", imgSrc: "/assets/article2.png" },
//         { title: "Principles and Their Application in Modern Health", description: "Highlights Ayurvedic practices including diet (Ahara), massage (Abhyanga), yoga, and meditation—showing how they support dosha balance in contemporary contexts.", link: "https://bnrc.springeropen.com/articles/10.1186/s42269-024-01231-0?utm_source=chatgpt.com", imgSrc: "/assets/article3.jpeg" },
//         { title: "The Influence of Doshas on Health in Ayurveda", description: "Breaks down how each dosha influences physical, emotional, and mental well-being. Also discusses dosha imbalances and simple balancing recommendations.", link: "https://timesofindia.indiatimes.com/astrology/kundali-dasha-remedies/the-influence-of-doshas-on-health-in-ayurveda/articleshow/110657598.cms", imgSrc: "/assets/article4.png" },
//         { title: "Rasa–Guna Food Framework & Ayurgenomics", description: "Scientific connections between food properties and dosha profiling.", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4815005/", imgSrc: "/assets/article5.png" },
//         { title: "Ideal Environment per Dosha", description: "Geographical and environmental alignment for dosha wellness.", link: "https://www.ayurvedacollege.com/blog/finding-your-ideal-living-environment-according-to-ayurveda/?utm_source=chatgpt.com", imgSrc: "/assets/article6.jpeg" },
//     ];
//     return (
//         <section id="articles" className="py-20 overflow-hidden">
//              <div className="container mx-auto px-6 text-center reveal-on-scroll">
//                 <h3 className="text-3xl font-bold text-green-900 mb-4">Explore Our Articles</h3>
//                 <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Deepen your understanding of Ayurvedic principles and learn how to apply them to your daily life for lasting wellness.</p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {articles.map(article => <ArticleCard key={article.title} {...article} />)}
//                 </div>
//             </div>
//         </section>
//     );
// };

// const FAQItem = ({ faq, index, openFaqIndex, setOpenFaqIndex }) => {
//     const isOpen = index === openFaqIndex;
//     const contentRef = useRef(null);

//     return (
//   <div
//     className={`faq-item border-b border-gray-200 pb-4 ${isOpen ? 'open' : ''}`}
//   >
//     <div
//       className="faq-question flex justify-between items-center py-2"
//       onClick={() => setOpenFaqIndex(isOpen ? null : index)}
//     >
//       <h4 className="text-lg font-semibold text-green-800">{faq.question}</h4>
//       <span
//         className={`text-green-500 text-2xl transform transition-transform duration-300 ${
//           isOpen ? 'rotate-45' : ''
//         }`}
//       >
//         +
//       </span>
//     </div>
//     <div
//       ref={contentRef}
//       className="faq-answer text-gray-600 pt-2 overflow-hidden transition-all duration-300"
//       style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
//     >
//       <p>{faq.answer}</p>
//     </div>
//   </div>
// );


// const FAQ = () => {
//     const [openFaqIndex, setOpenFaqIndex] = useState(null);
//     const faqs = [
//         { 
//             question: "I'm a night owl. How does Ayurveda handle a non-traditional sleep schedule?",
//             answer: "Ayurveda acknowledges that modern life doesn't always align with the sun's rhythm. Instead of forcing an early bedtime, a Vata-pacifying approach would focus on creating a wind-down ritual that signals the body to relax. This might involve a warm bath, gentle stretches, or a cup of herbal tea to ease the nervous system, regardless of the clock."
//         },
//         { 
//             question: "Can Ayurveda help with the 'digital burnout' I feel from too much screen time?",
//             answer: "Absolutely. Ayurveda's holistic view addresses the overstimulation of the senses, a core cause of digital burnout. You can find guidance on practices like Trataka (a candle-gazing meditation) to strengthen the eyes and focus, and learn about herbs like Brahmi that support the nervous system. We also offer tips for creating a digital detox routine."
//         },
//         { 
//             question: "My partner and I have different doshas. How can we find balance together?",
//             answer: "It's all about complementary living! A Pitta person's fiery nature can be balanced by a Kapha's grounding presence. We offer guidance on navigating these dynamics, such as creating meal plans that incorporate foods for both doshas or suggesting activities that satisfy both of your energies. Our Couples' Dosha Guide can help you celebrate your differences while finding harmony."
//         },
//         { 
//             question: "Ayurveda talks a lot about ancient wisdom. How is it still relevant for my busy, modern life?",
//             answer: "Ayurveda isn't about living in the past; it's about timeless principles. We translate ancient wisdom into practical, modern applications. For example, the concept of Agni (digestive fire) can be applied to your morning coffee ritual, while the importance of seasonal routines can be integrated into your yearly schedule to prevent burnout and maintain vitality."
//         },
//         {
//             question: "I’m traveling a lot for work. How do I maintain my dosha balance on the go?",
//             answer: "Travel, especially by air, can significantly aggravate Vata dosha. Our website provides a Travel-Well Guide with tips on what to pack, foods to eat on the road, and simple practices to stay grounded. We'll show you how to use a few key herbs and routines to keep your doshas in check, no matter where your journey takes you."
//         }
//     ];

//     return (
//         <section id="faq" className="bg-white py-20 overflow-hidden">
//             <div className="container mx-auto px-6 reveal-on-scroll">
//                 <h3 className="text-3xl font-bold text-green-900 mb-12 text-center">Frequently Asked Questions</h3>
//                 <div className="max-w-3xl mx-auto space-y-4">
//                     {faqs.map((faq, index) => (
//                         <FAQItem key={index} faq={faq} index={index} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// const Footer = ({ socialIcons, Icon }) => {
//     const [quote, setQuote] = useState("");
//     const [testimonial, setTestimonial] = useState("");
//     const [copyrightYear, setCopyrightYear] = useState(new Date().getFullYear());

//     const quotes = [
//         "The greatest medicine of all is teaching people how not to need it.",
//         "Health is a state of body. Wellness is a state of being.",
//         "Let food be thy medicine and medicine be thy food."
//     ];
//     const testimonials = [
//         "AyurWell changed my life! I feel so much more balanced.",
//         "The personalized diet chart was a game-changer for my digestion.",
//         "Finally, ancient wisdom that's easy to apply in modern life."
//     ];
    
//     useEffect(() => {
//         setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
//         setTestimonial(testimonials[0]);

//         const testimonialInterval = setInterval(() => {
//             setTestimonial(prev => {
//                 const currentIndex = testimonials.indexOf(prev);
//                 const nextIndex = (currentIndex + 1) % testimonials.length;
//                 return testimonials[nextIndex];
//             });
//         }, 5000);

//         return () => clearInterval(testimonialInterval);
//     }, []);


//     return (
//         <footer className="bg-green-900 text-white pt-20 pb-12">
//             <div className="container mx-auto px-6">
//                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
//                     <div className="lg:col-span-2">
//                         <h3 className="font-bold text-lg mb-4">AyurWell</h3>
//                         <p className="text-green-300 mb-4 pr-4">Your modern guide to ancient wellness. Discover your dosha, get personalized diet charts, and live in harmony.</p>
//                         <div className="flex space-x-4">
//                             <a href="#" className="hover:text-green-400"><Icon path={socialIcons.instagram} /></a>
//                             <a href="#" className="hover:text-green-400"><Icon path={socialIcons.youtube} /></a>
//                             <a href="#" className="hover:text-green-400"><Icon path={socialIcons.linkedin} /></a>
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="font-bold mb-4">Quick Links</h3>
//                         <ul>
//                             <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
//                             <li className="mb-2"><a href="#about" className="hover:underline">About</a></li>
//                             <li className="mb-2"><a href="#quiz" className="hover:underline">Quiz</a></li>
//                             <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
//                             <li className="mb-2"><a href="#articles" className="hover:underline">Blog</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className="font-bold mb-4">Features</h3>
//                         <ul>
//                             <li className="mb-2 text-green-300">Personalized Quiz</li>
//                             <li className="mb-2 text-green-300">Diet Charts</li>
//                             <li className="mb-2 text-green-300">Lifestyle Tips</li>
//                             <li className="mb-2 text-green-300">Herbal Shop</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h3 className="font-bold mb-4">Contact Us</h3>
//                         <ul>
//                             <li className="mb-2"><a href="mailto:hello@ayurwell.com" className="hover:underline">hello@ayurwell.com</a></li>
//                             <li className="mb-2"><a href="tel:+911234567890" className="hover:underline">+91 123 456 7890</a></li>
//                         </ul>
//                     </div>
//                 </div>

//                 <div className="border-t border-green-700 pt-8 mt-4 mb-8">
//                     <h3 className="font-bold mb-4 text-center">Quote of the Day</h3>
//                     <p className="italic text-green-300 text-center max-w-2xl mx-auto">{quote}</p>
//                 </div>
//                  <div className="border-t border-green-700 pt-8 mt-4 mb-8">
//                     <h3 className="font-bold mb-4 text-center">Testimonials</h3>
//                     <p className="italic text-green-300 text-center max-w-2xl mx-auto h-12">"{testimonial}"</p>
//                 </div>

//                 <div className="border-t border-green-700 pt-8 mt-10">
//                     <div className="flex flex-col md:flex-row justify-between items-center text-sm">
//                         <div className="mb-4 md:mb-0">
//                             <p>&copy; {copyrightYear} AyurWell. All rights reserved.</p>
//                             <p className="text-xs text-green-300 mt-1">Disclaimer: Not a substitute for professional medical advice.</p>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <div className="tooltip"><span className="tooltiptext">Vata</span>💨</div>
//                             <div className="tooltip"><span className="tooltiptext">Pitta</span>🔥</div>
//                             <div className="tooltip"><span className="tooltiptext">Kapha</span>💧</div>
//                             <select className="bg-green-800 border border-green-600 rounded-md p-1">
//                                 <option>English</option>
//                                 <option>Hindi</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// // Modal Components
// const DoshaModal = ({ data, closeModal }) => {
//     useEffect(() => {
//         const handleKeyDown = (e) => e.key === 'Escape' && closeModal();
//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [closeModal]);

//    return (
//   <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
//     <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-8 relative transform scale-100 transition-transform duration-300">
//       <button
//         onClick={closeModal}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
//       >
//         &times;
//       </button>

//       <div className="flex flex-col md:flex-row gap-8 items-center">
//         <div className="flex-shrink-0 text-center">
//           <img
//             src={data.img}
//             alt={data.name}
//             className={`w-40 h-40 rounded-full object-cover shadow-lg mb-4 border-4 mx-auto ${data.borderColor}`}
//           />
//           <h2 className={`text-3xl font-bold mb-2 ${data.textColor}`}>
//             {data.name}
//           </h2>
//           <p className="text-gray-500 font-semibold">{data.elements}</p>
//         </div>

//         <div className="w-full">
//           <div className="space-y-4 text-left">{data.content}</div>
//         </div>
//       </div>
//     </div>
//   </div>
// );


// const QuizModal = ({ closeModal }) => {
//     const quizQuestions = [
//         { question: 'What is your natural body frame?', options: { vata: 'Thin, light frame', pitta: 'Medium, muscular frame', kapha: 'Large, solid frame' } },
//         { question: 'How is your skin typically?', options: { vata: 'Dry, thin, cool', pitta: 'Oily, sensitive, warm', kapha: 'Thick, smooth, moist' } },
//         { question: 'What is your appetite like?', options: { vata: 'Irregular, variable', pitta: 'Strong, sharp, can\'t miss meals', kapha: 'Slow but steady, can skip meals easily' } },
//         { question: 'How is your sleep pattern?', options: { vata: 'Light, interrupted sleep', pitta: 'Sound, moderate duration', kapha: 'Deep, long, heavy sleep' } },
//         { question: 'What is your temperament under stress?', options: { vata: 'Anxious, worried, fearful', pitta: 'Irritable, angry, critical', kapha: 'Calm, withdrawn, slow to react' } },
//     ];
    
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });
//     const [isFinished, setIsFinished] = useState(false);

//     const handleAnswer = (dosha) => {
//         setScores(prevScores => ({ ...prevScores, [dosha]: prevScores[dosha] + 1 }));
//         if (currentQuestion < quizQuestions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//         } else {
//             setIsFinished(true);
//         }
//     };

//     const restartQuiz = () => {
//         setCurrentQuestion(0);
//         setScores({ vata: 0, pitta: 0, kapha: 0 });
//         setIsFinished(false);
//     }
    
//     const totalScore = scores.vata + scores.pitta + scores.kapha;
//     const results = totalScore > 0 ? {
//         vata: Math.round((scores.vata / totalScore) * 100),
//         pitta: Math.round((scores.pitta / totalScore) * 100),
//         kapha: Math.round((scores.kapha / totalScore) * 100),
//     } : { vata: 0, pitta: 0, kapha: 0};

//     return (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
//              {!isFinished ? (
//                 <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-8 relative">
//                     <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl">&times;</button>
//                     <>
//                         <h2 className="text-2xl font-bold mb-6 text-center text-green-900">{quizQuestions[currentQuestion].question}</h2>
//                         <div className="grid grid-cols-1 gap-4">
//                             {Object.entries(quizQuestions[currentQuestion].options).map(([dosha, text]) => (
//                                 <button key={dosha} onClick={() => handleAnswer(dosha)} className="quiz-option bg-green-100 text-green-800 p-4 rounded-lg font-semibold text-left transition-all duration-300">
//                                     {text}
//                                 </button>
//                             ))}
//                         </div>
//                     </>
//                 </div>
//             ) : (
//                 <QuizResults results={results} restartQuiz={restartQuiz} closeModal={closeModal} />
//             )}
//         </div>
//     );
// };

// // --- NEW COMPONENT: Quiz Results Page ---
// // This component displays the detailed results page based on the screenshot.
// const DoshaRing = ({ percentage, color, dosha }) => {
//     const radius = 50;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (percentage / 100) * circumference;

//     return (
//         <div className="flex flex-col items-center">
//             <svg width="120" height="120" viewBox="0 0 120 120">
//                 <circle className="dosha-ring-bg" strokeWidth="10" r={radius} cx="60" cy="60" />
//                 <circle
//                     className="dosha-ring-fg"
//                     strokeWidth="10"
//                     stroke={color}
//                     strokeDasharray={circumference}
//                     strokeDashoffset={offset}
//                     r={radius}
//                     cx="60"
//                     cy="60"
//                 />
//             </svg>
//             <p className="font-bold text-xl mt-[-75px]" style={{ color }}>{percentage}%</p>
//             <p className="mt-[55px] text-gray-600">{dosha}</p>
//         </div>
//     );
// };

// const QuizResults = ({ results, restartQuiz, closeModal }) => {
//     const doshaDetails = {
//         vata: {
//             color: '#38A169', // Green
//             icon: '💨',
//             description: "You are energetic, creative, and a natural thinker. Your goal is to stay grounded and warm.",
//             dietPlan: [
//                 { day: "Monday", breakfast: "Warm Oatmeal", lunch: "Mung Dal Soup", dinner: "Baked Sweet Potato" },
//                 { day: "Tuesday", breakfast: "Scrambled Tofu", lunch: "Basmati Rice with Ghee", dinner: "Creamy Zucchini Soup" },
//                 { day: "Wednesday", breakfast: "Rice Porridge", lunch: "Kitchari", dinner: "Steamed Asparagus" },
//                 { day: "Thursday", breakfast: "Avocado Toast", lunch: "Lentil Loaf", dinner: "Roasted Root Vegetables" },
//                 { day: "Friday", breakfast: "Warm Smoothie", lunch: "Quinoa with Veggies", dinner: "Butternut Squash Soup" },
//                 { day: "Saturday", breakfast: "Stewed Apples", lunch: "Shepherd's Pie", dinner: "Fish with Lemon and Dill" },
//                 { day: "Sunday", breakfast: "Amaranth Porridge", lunch: "Vegetable Curry", dinner: "Pasta with Creamy Sauce" },
//             ],
//             recommendations: [
//                 "Favor warm, cooked, and nourishing foods.",
//                 "Establish a regular daily routine for meals and sleep.",
//                 "Practice calming activities like gentle yoga and meditation.",
//                 "Avoid cold, dry, and raw foods."
//             ],
//             products: [{name: "Ashwagandha", price: "₹450", color: "bg-green-100", textColor: "text-green-800", borderColor: "border-green-200"}, {name: "Triphala", price: "₹375", color: "bg-green-100", textColor: "text-green-800", borderColor: "border-green-200"}]
//         },
//         pitta: {
//             color: '#DD6B20', // Orange
//             icon: '🔥',
//             description: "You are intelligent, focused, and a natural leader. Your goal is to manage your intensity and stay cool.",
//             dietPlan: [
//                 { day: "Monday", breakfast: "Apple and pear slices", lunch: "Chickpea salad with cucumber", dinner: "Steamed vegetables with rice" },
//                 { day: "Tuesday", breakfast: "Toast with coconut oil", lunch: "Black bean burgers on lettuce", dinner: "Lentil soup" },
//                 { day: "Wednesday", breakfast: "Date and fig smoothie", lunch: "Quinoa salad with mint", dinner: "Zucchini noodles with a light sauce" },
//                 { day: "Thursday", breakfast: "Oatmeal with sweet berries", lunch: "Turkey wraps with plenty of greens", dinner: "Steamed broccoli and cauliflower" },
//                 { day: "Friday", breakfast: "Fresh mango slices", lunch: "Sushi with avocado and cucumber", dinner: "Mung dahl with cilantro" },
//                 { day: "Saturday", breakfast: "Rice flakes porridge", lunch: "Cooling cucumber and avocado soup", dinner: "Baked fish with herbs" },
//                 { day: "Sunday", breakfast: "Coconut yogurt with granola", lunch: "Large green salad with sunflower seeds", dinner: "Simple rice and steamed asparagus" },
//             ],
//             recommendations: [
//                 "Avoid excessive heat and sun exposure.",
//                 "Incorporate cooling foods like cucumber, mint, and cilantro into your diet.",
//                 "Practice moderation and avoid overworking.",
//                 "Engage in calming activities like swimming or walking in nature."
//             ],
//             products: [{name: "Turmeric Capsules", price: "₹300", color: "bg-yellow-100", textColor: "text-yellow-800", borderColor: "border-yellow-200"}, {name: "Neem", price: "₹320", color: "bg-green-100", textColor: "text-green-800", borderColor: "border-green-200"}]
//         },
//         kapha: {
//             color: '#3182CE', // Blue
//             icon: '💧',
//             description: "You are calm, grounded, and naturally nurturing. Your goal is to stay active and stimulated.",
//             dietPlan: [
//                 { day: "Monday", breakfast: "Stewed Apples with Cinnamon", lunch: "Spicy Lentil Soup", dinner: "Grilled Vegetables" },
//                 { day: "Tuesday", breakfast: "Buckwheat Porridge", lunch: "Large Green Salad", dinner: "Baked Chicken with Spices" },
//                 { day: "Wednesday", breakfast: "Millet Upma", lunch: "Steamed Greens with Ginger", dinner: "Tofu and Vegetable Stir-fry" },
//                 { day: "Thursday", breakfast: "Puffed Rice with Spices", lunch: "Barley Soup", dinner: "Spiced Chickpeas" },
//                 { day: "Friday", breakfast: "Apple and Berry Compote", lunch: "Cabbage Rolls", dinner: "Baked Salmon" },
//                 { day: "Saturday", breakfast: "Dry Toast with Honey", lunch: "Quinoa with Black Beans", dinner: "Light Vegetable Broth" },
//                 { day: "Sunday", breakfast: "Corn Flakes with Warm Milk", lunch: "Mixed Bean Salad", dinner: "Roasted Cauliflower" },
//             ],
//             recommendations: [
//                 "Favor light, dry, and warm foods.",
//                 "Engage in regular, vigorous exercise.",
//                 "Avoid heavy, oily, and cold foods.",
//                 "Seek out new experiences and avoid stagnation."
//             ],
//             products: [{name: "Ginger Capsules", price: "₹280", color: "bg-yellow-100", textColor: "text-yellow-800", borderColor: "border-yellow-200"}, {name: "Brahmi Oil", price: "₹400", color: "bg-blue-100", textColor: "text-blue-800", borderColor: "border-blue-200"}]
//         }
//     };

//     const dominantDosha = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
//     const details = doshaDetails[dominantDosha];

//     return (
//         <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl p-8 relative max-h-[90vh] overflow-y-auto">
//              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl z-10">&times;</button>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                 {/* Left Column */}
//                 <div className="text-center lg:text-left">
//                     <h2 className="text-3xl font-bold text-gray-800">Your Ayurvedic Profile</h2>
//                     <p className="text-gray-500 mb-8">Based on your answers, your dominant energy is:</p>
                    
//                     <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl">
//                        <div className="w-40 h-40 rounded-full flex items-center justify-center bg-black shadow-inner" >
//                             <span className="text-7xl">{details.icon}</span>
//                        </div>
//                        <h3 className="text-5xl font-playfair font-bold mt-4 capitalize" style={{color: details.color}}>{dominantDosha}</h3>
//                     </div>

//                     <p className="my-6 text-gray-700">{details.description}</p>

//                     <h4 className="text-2xl font-bold text-gray-800 mb-4">Dosha Composition</h4>
//                     <div className="flex justify-around bg-gray-50 p-4 rounded-xl">
//                         <DoshaRing percentage={results.vata} color={doshaDetails.vata.color} dosha="Vata" />
//                         <DoshaRing percentage={results.pitta} color={doshaDetails.pitta.color} dosha="Pitta" />
//                         <DoshaRing percentage={results.kapha} color={doshaDetails.kapha.color} dosha="Kapha" />
//                     </div>
//                 </div>

//                 {/* Right Column */}
//                 <div>
//                     <h2 className="text-3xl font-bold text-gray-800 mb-4">Your 7-Day Diet Plan</h2>
//                     <div className="overflow-x-auto">
//                         <table className="w-full text-left border-collapse">
//                             <thead>
//                                 <tr>
//                                     <th className="py-2 px-4 bg-green-100 border-b">Day</th>
//                                     <th className="py-2 px-4 bg-green-100 border-b">Breakfast</th>
//                                     <th className="py-2 px-4 bg-green-100 border-b">Lunch</th>
//                                     <th className="py-2 px-4 bg-green-100 border-b">Dinner</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {details.dietPlan.map(item => (
//                                     <tr key={item.day} className="hover:bg-gray-50">
//                                         <td className="py-2 px-4 border-b font-semibold">{item.day}</td>
//                                         <td className="py-2 px-4 border-b">{item.breakfast}</td>
//                                         <td className="py-2 px-4 border-b">{item.lunch}</td>
//                                         <td className="py-2 px-4 border-b">{item.dinner}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <button className="w-full bg-green-500 text-white font-bold py-3 px-8 mt-6 rounded-full hover:bg-green-600 transition duration-300 shadow-lg">Download Diet Chart</button>

//                     <div className="mt-8">
//                         <h4 className="text-2xl font-bold text-gray-800 mb-3">Lifestyle Recommendations</h4>
//                         <ul className="list-disc list-inside space-y-1 text-gray-700">
//                             {details.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
//                         </ul>
//                     </div>

//                     <div className="mt-8">
//                         <h4 className="text-2xl font-bold text-gray-800 mb-3">Recommended Products</h4>
//                         <div className="grid grid-cols-2 gap-4">
//                             {details.products.map(prod => (
//                                 <div key={prod.name} className={${prod.color} text-center p-4 rounded-xl border ${prod.borderColor}}>
//                                     <h5 className={font-bold ${prod.textColor}}>{prod.name}</h5>
//                                     <p className={prod.textColor}>{prod.price}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <div className="text-center mt-8">
//                 <button onClick={restartQuiz} className="text-gray-600 hover:text-black font-semibold">Retake Quiz</button>
//             </div>
//         </div>
//     );
// };


// // Custom Hook for scroll animations
// const useScrollAnimation = () => {
//     useEffect(() => {
//         const revealElements = document.querySelectorAll('.reveal-on-scroll');
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                 }
//             });
//         }, { threshold: 0.1 });

//         revealElements.forEach(el => observer.observe(el));

//         return () => revealElements.forEach(el => observer.unobserve(el));
//     }, []);
// };

// // --- NEW CHAT COMPONENTS ---
// const LiveChatIcon = ({ onClick }) => (
//     <button 
//         onClick={onClick} 
//         className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-[1000] transform transition-transform hover:scale-110 animate-pulse-green"
//         aria-label="Open Live Chat"
//     >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.837 8.837 0 01-4.445-1.232l-1.488.883a.5.5 0 01-.615-.614l.883-1.488A8.837 8.837 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.415 14.183a.5.5 0 01.615.614l-.883 1.488A6.969 6.969 0 0010 18c3.313 0 6-2.687 6-6s-2.687-6-6-6-6 2.687-6 6c0 1.513.565 2.895 1.488 3.973l1.488-.883a.5.5 0 01.614-.615z" clipRule="evenodd" />
//             <path d="M7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H8z" />
//         </svg>
//     </button>
// );

// const ChatWindow = ({ closeChat }) => {
//     const [messages, setMessages] = useState([]);
//     const [userInput, setUserInput] = useState('');
//     const chatBoxRef = useRef(null);
//     const userId = useRef("user_" + Math.random().toString(36).substr(2, 9));

//     // Auto-scroll to bottom
//     useEffect(() => {
//         if (chatBoxRef.current) {
//             chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//         }
//     }, [messages]);
    
//     // Initial greeting
//     useEffect(() => {
//         setMessages([{
//             text: "Namaste! I am your personal Ayurvedic diet assistant. To create a personalized plan, I need to know your Dosha profile. If you have already taken the quiz on our website, please provide your percentages in the format: Vata: X%, Pitta: Y%, Kapha: Z%",
//             sender: 'bot'
//         }]);
//     }, []);

//     const handleSendMessage = async () => {
//         const messageText = userInput.trim();
//         if (messageText === '') return;

//         const newMessages = [...messages, { text: messageText, sender: 'user' }];
//         setMessages(newMessages);
//         setUserInput('');

//         try {
//             // NOTE: This fetch call assumes your FastAPI backend is running on http://127.0.0.1:8000
//             // You might need to change this URL if your backend is hosted elsewhere.
//             const response = await fetch('http://127.0.0.1:8000/chat', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     user_id: userId.current,
//                     message: messageText,
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setMessages([...newMessages, { text: data.reply, sender: 'bot' }]);

//         } catch (error) {
//             console.error('Error:', error);
//             setMessages([...newMessages, { text: 'Sorry, I am having trouble connecting. Please try again later.', sender: 'bot' }]);
//         }
//     };
    
//     return (
//         <div className="fixed bottom-24 right-8 w-full max-w-md h-[60vh] bg-white rounded-lg shadow-2xl z-[1000] flex flex-col">
//             <header className="bg-green-600 text-white p-4 flex justify-between items-center rounded-t-lg">
//                 <h1 className="text-xl font-bold">AyurWell Dietitian</h1>
//                 <button onClick={closeChat} className="text-2xl">&times;</button>
//             </header>
            
//             <div ref={chatBoxRef} className="flex-grow overflow-y-auto p-4">
//                 {messages.map((msg, index) => (
//                     <div key={index} className="chat-message">
//                         <div className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
//                             {msg.text}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="border-t p-4 flex">
//                 <input 
//                     type="text" 
//                     value={userInput}
//                     onChange={(e) => setUserInput(e.target.value)}
//                     onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                     className="flex-grow border rounded-l-full py-2 px-4 focus:outline-none" 
//                     placeholder="Type your message..."
//                 />
//                 <button onClick={handleSendMessage} className="bg-green-600 text-white font-bold py-2 px-6 rounded-r-full hover:bg-green-700">Send</button>
//             </div>
//         </div>
//     );
// };