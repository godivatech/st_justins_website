import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Events', 'Campus', 'Sports', 'Classroom'];

const images = [
    { id: 1, cat: 'Campus', src: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Main Building' },
    { id: 2, cat: 'Sports', src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Annual Sports Day' },
    { id: 3, cat: 'Classroom', src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Interactive Learning' },
    { id: 4, cat: 'Events', src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Cultural Fest' },
    { id: 5, cat: 'Campus', src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d50325f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Green Campus' },
    { id: 6, cat: 'Events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Graduation Day' },
    { id: 7, cat: 'Sports', src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Basketball Match' },
    { id: 8, cat: 'Classroom', src: 'https://images.unsplash.com/photo-1577896334614-201b31d50dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Science Fair' },
];

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.cat === filter);

    return (
        <div className="min-h-screen bg-background-light">
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl font-heading font-bold mb-4 text-white">Photo Gallery</h1>
                    <p className="text-xl text-blue-100">Capturing moments of joy, learning, and success.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat
                                ? 'bg-accent text-primary-dark shadow-md'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                key={img.id}
                                layoutId={`image-${img.id}`}
                                onClick={() => setSelectedImage(img)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="relative group rounded-xl overflow-hidden shadow-lg aspect-[4/3] cursor-pointer"
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        <h3 className="text-white font-bold text-lg">{img.title}</h3>
                                        <span className="text-white text-sm">{img.cat}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain max-h-[85vh] mx-auto"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
                                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                                <p className="text-accent text-sm">{selectedImage.cat}</p>
                            </div>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default Gallery;
