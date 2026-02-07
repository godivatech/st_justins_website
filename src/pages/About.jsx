import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Users, Target } from 'lucide-react';

const history = [
    { year: '1974', title: 'Foundation', desc: 'Established by the Presentation Sisters with the support of Archbishop Dr. Justin Davia to combat illiteracy.' },
    { year: '2005', title: 'High School', desc: 'Upgraded to Matriculation High School status, expanding educational reach.' },
    { year: '2012', title: 'Hr. Sec. Upgrade', desc: 'First batch of Grade XII students graduated with 100% results, setting a standard of excellence.' },
    { year: '2020', title: 'Digital Leap', desc: 'Implementation of smart classrooms and computer labs with over 10 systems for student use.' }
];

const leadership = [
    {
        name: 'Rev. Fr. John Peter',
        role: 'Correspondent',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // Placeholder
        gender: 'male' // Added for logic if needed, but here just swapping URL below
    },
    {
        name: 'Mrs. S. Paulin Mary',
        role: 'Principal',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        message: 'We aim to mold young minds into responsible citizens with strong moral values.'
    }
];

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Page Header */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-heading font-bold mb-4 text-white"
                    >
                        About St. Justin's
                    </motion.h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        A tradition of excellence, a future of bright possibilities.
                    </p>
                </div>
            </section>

            {/* About Overview */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent-dark font-bold text-sm tracking-widest uppercase">
                                Who We Are
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
                                A Legacy of <br /> <span className="text-accent">Educational Excellence</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                St. Justin's Matriculation Higher Secondary School, established in <span className="font-bold text-primary">1974</span> by the Presentation Sisters, is a co-educational institution located on Madurai Road, Sivagangai.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                Affiliated with the Tamil Nadu Board of Higher Secondary Education, we have been serving the community for over five decades. Our mission is to combat illiteracy and poverty by providing a complete education that blends academic rigor with moral integrity.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                                    <h4 className="font-bold text-3xl text-primary mb-1">50+</h4>
                                    <p className="text-sm text-gray-600">Years of Service</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-accent">
                                    <h4 className="font-bold text-3xl text-primary mb-1">3400+</h4>
                                    <p className="text-sm text-gray-600">Books in Library</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Composition */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="St. Justin's Campus Life"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute top-1/2 -right-12 space-y-2 hidden lg:block">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-primary rounded-full opacity-50"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-accent/10 rounded-full text-accent"><Target size={32} /></div>
                            <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To create an enlightening environment where every student is empowered to discover their potential, achieve academic excellence, and contribute meaningfully to society.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-full text-primary"><Flag size={32} /></div>
                            <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To combat illiteracy and poverty by establishing a strong foundation of moral values and academic excellence, fostering independent thinking and social responsibility in every child.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Journey - Scroll-Triggered Timeline */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Our Journey</h2>
                        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Central Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform md:-translate-x-1/2" />

                        <div className="space-y-16">
                            {history.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2 mt-1.5 md:mt-0">
                                        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 w-full pl-12 md:pl-0">
                                        <div className={`group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className={`absolute top-8 ${index % 2 === 0 ? 'md:-right-3 md:border-r md:border-t' : 'md:-left-3 md:border-l md:border-b'} w-6 h-6 bg-white transform rotate-45 border-gray-100 hidden md:block`} />

                                            <span className="inline-block text-5xl font-bold text-gray-100 absolute top-4 right-4 z-0 group-hover:text-accent/10 transition-colors duration-500">{item.year}</span>

                                            <div className="relative z-10">
                                                <span className="inline-block py-1 px-3 rounded-md bg-primary/5 text-primary font-bold text-sm tracking-wider mb-3">
                                                    {item.year}
                                                </span>
                                                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership - Interactive Professional Profiles */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Leadership Team</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">The visionary minds steering St. Justin's towards a brighter future.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {leadership.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-[450px] overflow-hidden">
                                    {/* Image with Grayscale to Color transition */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Bio/Quote Overlay - Slides up on hover */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <div className="w-12 h-1 bg-accent mb-4 rounded-full" />
                                        <p className="text-white text-lg leading-relaxed italic font-light drop-shadow-md">
                                            {member.message || (member.name === 'Rev. Fr. John Peter' ? '"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."' : '')}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 text-center bg-white border-t border-gray-50">
                                    <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent font-bold tracking-widest uppercase text-xs">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
const QuoteIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.293 15.653 14.894C16.134 14.75 16.579 15.372 17.575 15.372C19.006 15.372 19.866 14.162 19.866 12.771C19.866 11.115 18.572 9.942 16.974 9.942C15.361 9.942 14.364 11.236 14.364 11.236C14.364 11.236 14.621 5.923 18.667 5.923V3.538C13.203 3.538 11.053 8.877 11.053 13.911V21H14.017ZM8.009 21L8.009 18C8.009 16.896 8.313 15.293 9.645 14.894C10.126 14.75 10.571 15.372 11.567 15.372C12.998 15.372 13.858 14.162 13.858 12.771C13.858 11.115 12.564 9.942 10.966 9.942C9.353 9.942 8.356 11.236 8.356 11.236C8.356 11.236 8.613 5.923 12.659 5.923V3.538C7.195 3.538 5.045 8.877 5.045 13.911V21H8.009Z" />
    </svg>
);

export default About;
