import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & About */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-6 text-white">St. Justin's</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Empowering students with knowledge, character, and skills for a bright future. A premium institution committed to excellence in education.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Admissions', 'Academics', 'Facilities', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 bg-accent rounded-full"></span> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="text-accent shrink-0 mt-1" size={18} />
                                <span>78/1, Madurai Road, Sivaganga - 630562</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="text-accent shrink-0" size={18} />
                                <span>04575 - 241592, 241321</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="text-accent shrink-0" size={18} />
                                <span>admissions@stjustins.edu.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Preview (Placeholder) */}
                    <div className="h-48 bg-gray-700 rounded-xl overflow-hidden relative group">
                        <img
                            src="https://placehold.co/400x300/1a2b3c/FFF?text=Map+Location"
                            alt="Map"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-accent text-primary-dark px-3 py-1 rounded text-sm font-bold shadow-lg">View on Map</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    <p>&copy; {new Date().getFullYear()} St. Justin's Matric Higher Secondary School. All rights reserved.</p>

                    <p>Designed and developed by <a href="https://godivatech.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors font-medium">Godivatech</a></p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
