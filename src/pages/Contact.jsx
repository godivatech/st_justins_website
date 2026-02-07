import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-background-light">
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl font-heading font-bold text-white mb-4">Get in Touch</h1>
                    <p className="text-xl text-blue-100">We'd love to hear from you. Visit us or drop a message.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-full text-accent-dark shrink-0">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">Visit Us</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        St. Justin's Matric. Hr. Sec. School,<br />
                                        78/1, Madurai Road,<br />
                                        Near Muthu Kamakshi Thirumana Mahal,<br />
                                        Sivaganga - 630562, Tamil Nadu.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">Call Us</h3>
                                    <p className="text-gray-600">04575 - 241592</p>
                                    <p className="text-gray-600">04575 - 241321</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-full text-accent-dark shrink-0">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">Email Us</h3>
                                    <p className="text-gray-600">info@stjustins.edu.in</p>
                                    <p className="text-gray-600">admissions@stjustins.edu.in</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                    <Clock />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-1">Office Hours</h3>
                                    <p className="text-gray-600">Mon - Fri: 8:30 AM - 4:30 PM</p>
                                    <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Full Name</label>
                                <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Enter your full name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                <input type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Enter your phone number" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-gray-700">Email Address</label>
                                <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Enter your email address" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-gray-700">Subject</label>
                                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                                    <option>General Enquiry</option>
                                    <option>Admissions</option>
                                    <option>Careers</option>
                                    <option>Feedback</option>
                                </select>
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-gray-700">Message</label>
                                <textarea rows="5" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Type your message here..."></textarea>
                            </div>
                            <div className="md:col-span-2">
                                <button className="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-lg">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16 rounded-2xl overflow-hidden shadow-xl h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.548483526955!2d78.4727!3d9.8433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b006a20b72719ad%3A0xc3c6b22c7a83d3e7!2sSivaganga%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="School Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
