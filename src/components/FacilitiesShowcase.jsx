import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Beaker, BookOpen, Monitor, Award } from 'lucide-react'; // Added Icons
import { Link } from 'react-router-dom';

const facilities = [
    {
        id: 'smart-class',
        title: "Smart Classrooms",
        image: "/assets/images/smart class.png",
        desc: "Interactive panels and digital learning aids.",
        icon: <Wifi className="w-6 h-6" />,
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2",
        height: "h-64 md:h-96 lg:h-full" // Tall hero
    },
    {
        id: 'labs',
        title: "Science Labs",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        desc: "Fully equipped Physics, Chemistry, and Biology labs.",
        icon: <Beaker className="w-6 h-6" />,
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        height: "h-64"
    },
    {
        id: 'computer',
        title: "Computer Lab",
        image: "/assets/images/computer lap.png",
        desc: "High-speed internet and modern workstations.",
        icon: <Monitor className="w-6 h-6" />,
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        height: "h-64"
    },
    {
        id: 'library',
        title: "Library",
        image: "/assets/images/library.png",
        desc: "Vast collection of books and digital resources.",
        icon: <BookOpen className="w-6 h-6" />,
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        height: "h-64"
    },
    {
        id: 'sports',
        title: "Sports Ground",
        image: "/assets/images/sports ground.png",
        desc: "Basketball court, football ground, and indoor games.",
        icon: <Award className="w-6 h-6" />,
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
        height: "h-64"
    }
];

const FacilitiesShowcase = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h4 className="text-accent font-bold tracking-widest uppercase text-xs mb-3">Modern Infrastructure</h4>
                        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                            Campus <span className="italic text-accent">Highlights</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            An environment designed to stimulate learning, creativity, and physical well-being.
                        </p>
                    </div>

                    <Link to="/facilities" className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
                        Explore Campus
                        <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={facility.id}
                            className={`relative rounded-[2rem] overflow-hidden group shadow-lg ${facility.colSpan} ${facility.rowSpan} ${facility.height}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            {/* Background Image */}
                            <img
                                src={facility.image}
                                alt={facility.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {facility.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{facility.title}</h3>
                                    <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 max-w-[90%]">
                                        {facility.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Button */}
                <div className="mt-12 text-center md:hidden">
                    <Link to="/facilities" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary-dark transition-colors">
                        Explore Full Campus
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FacilitiesShowcase;
