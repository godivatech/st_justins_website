import React from 'react';
import { motion } from 'framer-motion';

const facilityItems = [
    { id: 1, title: 'Smart Classroom', cat: 'Academic', img: '/assets/images/smart class.png', desc: 'Interactive whiteboards and digital learning resources.' },
    { id: 2, title: 'Physics Lab', cat: 'Labs', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Modern equipment for practical experiments.' },
    { id: 3, title: 'Digital Library', cat: 'Library', img: '/assets/images/library.png', desc: 'Over 3,400 books and e-journals access.' },
    { id: 4, title: 'Sports Facilities', cat: 'Sports', img: '/assets/images/sports ground.png', desc: 'Hockey field, Tennis courts, Boxing ring, and athletic tracks.' },
    { id: 5, title: 'Computer Lab', cat: 'Labs', img: '/assets/images/computer lap.png', desc: 'High-end workstations with fiber internet.' },
    { id: 6, title: 'Auditorium', cat: 'Infrastructure', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: '500-seater air-conditioned hall for events.' },
];

const Facilities = () => {
    return (
        <div className="min-h-screen bg-background-light">
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl font-heading font-bold mb-4 text-white">Campus Facilities</h1>
                    <p className="text-xl text-blue-100">Modern infrastructure for 360-degree learning.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {facilityItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg bg-white"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                                <span className="text-xs font-bold bg-accent text-primary-dark px-2 py-1 rounded mb-2 inline-block">
                                    {item.cat}
                                </span>
                                <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                                <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
