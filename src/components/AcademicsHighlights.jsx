import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Microscope, Calculator, ArrowRight } from 'lucide-react';

const levels = [
    {
        id: 'kindergarten',
        title: 'Kindergarten',
        description: 'A nurturing environment for our youngest learners to explorer and grow through play.',
        icon: <Book className="w-10 h-10" />,
        color: 'text-orange-700',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        image: '/assets/images/kinder garden.png'
    },
    {
        id: 'primary',
        title: 'Primary School',
        description: 'Building strong foundations through play-way methods and interactive learning.',
        icon: <Book className="w-10 h-10" />,
        color: 'text-blue-700',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        image: '/assets/images/primary school.png'
    },
    {
        id: 'middle',
        title: 'Middle School',
        description: 'Fostering curiosity and critical thinking with subject-focused curriculum.',
        icon: <Calculator className="w-10 h-10" />,
        color: 'text-green-700',
        bg: 'bg-green-50',
        border: 'border-green-200',
        image: '/assets/images/midlle school.png'
    },
    {
        id: 'high',
        title: 'Higher Secondary',
        description: 'Advanced academic preparation for board exams and competitive entrance tests.',
        icon: <Microscope className="w-10 h-10" />,
        color: 'text-purple-700',
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        image: '/assets/images/higher secondary.png'
    }
];

const AcademicsHighlights = () => {
    const [activeLevel, setActiveLevel] = useState(levels[0]);

    return (
        <section className="py-24 bg-background-light">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Academic Structure</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Tailored learning approaches meticulously designed for every stage of your child's development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Navigation Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        {levels.map((level) => (
                            <div
                                key={level.id}
                                className={`group p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-6 border-2 relative overflow-hidden ${activeLevel.id === level.id
                                    ? `bg-white ${level.border} shadow-lg scale-105`
                                    : 'bg-white border-transparent hover:border-gray-100 hover:shadow-md'
                                    }`}
                                onClick={() => setActiveLevel(level)}
                            >
                                <div className={`p-4 rounded-xl ${level.bg} ${level.color} transition-transform duration-300 group-hover:scale-110`}>
                                    {level.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-xl font-heading font-bold mb-2 transition-colors ${activeLevel.id === level.id ? 'text-primary' : 'text-gray-800'}`}>
                                        {level.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{level.description}</p>
                                </div>
                                {activeLevel.id === level.id && (
                                    <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-l-full ${level.bg.replace('bg-', 'bg-')}-500 opacity-50`} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Preview Area */}
                    <div className="lg:col-span-7">
                        <motion.div
                            key={activeLevel.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] group"
                        >
                            <img
                                src={activeLevel.image}
                                alt={activeLevel.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Glassmorphic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10 md:p-12">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-4">
                                        Excellence in Education
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{activeLevel.title} Program</h3>
                                    <p className="text-gray-200 text-lg mb-8 max-w-xl leading-relaxed">{activeLevel.description}</p>

                                    <button className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white font-bold hover:bg-white hover:text-primary transition-all duration-300">
                                        View Curriculum
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicsHighlights;
