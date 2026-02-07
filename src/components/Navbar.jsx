import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Heritage', path: '/heritage' }, // New Link
        { name: 'Academics', path: '/academics' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isTransparent ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className={`text-2xl font-heading font-bold flex items-center gap-2 transition-colors ${isTransparent ? 'text-white' : 'text-primary'}`}>
                    {/* Dynamic Logo Approach */}
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${isTransparent ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                        ST
                    </div>
                    <span>St. Justin's</span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'font-bold' : ''} ${isTransparent
                                ? 'text-white/90 hover:text-white'
                                : location.pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/admissions"
                        className={`px-6 py-2 rounded-full font-medium transition-all transform hover:-translate-y-0.5 ${isTransparent
                            ? 'bg-white text-primary hover:bg-white/90 shadow-lg'
                            : 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg'
                            }`}
                    >
                        Admissions Open
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-primary'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Slide-in Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-2xl z-50 p-8 lg:hidden flex flex-col"
                    >
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-primary">
                                <X size={28} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-xl font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-700'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/admissions"
                                className="mt-4 px-6 py-3 bg-primary text-white text-center rounded-lg font-medium shadow-md hover:bg-primary-dark transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Apply Now
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay for mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
