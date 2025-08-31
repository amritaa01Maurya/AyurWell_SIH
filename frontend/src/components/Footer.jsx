import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

// --- Placeholder for react-router-dom components ---
const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

const Footer = () => {
    return (
        <footer className="bg-lime-950 text-lime-100 mt-auto">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <h3 className="font-bold text-white text-lg mb-4">AyurWell</h3>
                    <p className="text-sm text-lime-200">Balancing mind, body, and spirit through the wisdom of Ayurveda. Your personalized path to wellness starts here.</p>
                </div>
                {/* Services */}
                <div>
                    <h3 className="font-bold text-white text-lg mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-lime-200 hover:text-white">Personalized Plans</Link></li>
                        <li><Link to="#" className="text-lime-200 hover:text-white">Doctor Consultations</Link></li>
                        <li><Link to="#" className="text-lime-200 hover:text-white">Wellness Quiz</Link></li>
                        <li><Link to="#" className="text-lime-200 hover:text-white">Herbal Remedies</Link></li>
                    </ul>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-white text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="#" className="text-lime-200 hover:text-white">About Us</Link></li>
                        <li><Link to="#" className="text-lime-200 hover:text-white">Contact Support</Link></li>
                        <li><Link to="#" className="text-lime-200 hover:text-white">FAQ</Link></li>
                    </ul>
                </div>
                {/* Social */}
                <div>
                    <h3 className="font-bold text-white text-lg mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-lime-200 hover:text-white"><Twitter size={20}/></Link>
                        <Link to="#" className="text-lime-200 hover:text-white"><Facebook size={20}/></Link>
                        <Link to="#" className="text-lime-200 hover:text-white"><Linkedin size={20}/></Link>
                    </div>
                </div>
            </div>
            <div className="bg-black py-4">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-sm text-lime-300">
                    <p>&copy; {new Date().getFullYear()} AyurWell. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-2 sm:mt-0">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;