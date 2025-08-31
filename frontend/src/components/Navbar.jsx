import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Leaf, LogOut, User, Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser({ role: decodedToken.role });
            } catch (error) {
                console.error("Invalid token:", error);
                handleLogout();
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    const renderNavLinks = (isMobile = false) => (
        <>
            <NavLink to="/" className={isMobile ? "mobile-nav-link" : "desktop-nav-link"}>Home</NavLink>
            <NavLink to="/doshas" className={isMobile ? "mobile-nav-link" : "desktop-nav-link"}>Doshas</NavLink>
            <NavLink to="/herb-recommender" className={isMobile ? "mobile-nav-link" : "desktop-nav-link"}>Herbs</NavLink> {/* Add the new link */}
            <NavLink to="/quiz" className={isMobile ? "mobile-nav-link" : "desktop-nav-link"}>Quiz</NavLink>
            {user?.role === 'user' && (
                <NavLink to="/recommendations" className={isMobile ? "mobile-nav-link" : "desktop-nav-link"}>Recommendations</NavLink>
            )}
        </>
    );

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <Leaf className="w-8 h-8 text-emerald-600" />
                        <span className="text-2xl font-bold text-gray-800">AyurWell</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {renderNavLinks()}
                    </div>

                    {/* Auth Links & Menu Button */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                {user.role === 'doctor' ? (
                                    <Link to="/doctor/dashboard" className="desktop-nav-link flex items-center gap-2">
                                        <Shield size={20} /> Dashboard
                                    </Link>
                                ) : (
                                    <Link to="/profile" className="desktop-nav-link flex items-center gap-2">
                                        <User size={20} /> Profile
                                    </Link>
                                )}
                                <button onClick={handleLogout} title="Logout" className="p-2 rounded-full hover:bg-red-50 text-red-600 transition-colors">
                                    <LogOut size={22} />
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                                Login
                            </Link>
                        )}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t py-2">
                    {renderNavLinks(true)}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

