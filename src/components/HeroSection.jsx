import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 1. Background Video Layer */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Fallback overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/hero-bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* 2. Stylized Overlay Layer */}
            {/* Gradient to Ensure Text Readability & Emotional Tone */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10 pointer-events-none" />

            {/* 3. Content Layer */}
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">

                {/* Badge: Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Admissions Open 2026-27</span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-5xl mx-auto"
                >
                    <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                        Shaping Minds,
                    </span>
                    <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-200 drop-shadow-xl my-2">
                        Building Leaders
                    </span>
                </motion.h1>

                {/* Subheadline/Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 text-lg md:text-xl md:max-w-2xl text-gray-200 font-light leading-relaxed drop-shadow-md"
                >
                    Experience holistic education at St. Justin's Matriculation Higher Secondary School, where innovation meets tradition to cultivate the leaders of tomorrow.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                >
                    <Link
                        to="/admissions"
                        className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                    >
                        <span className="relative z-10">Apply Now</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>

                    <Link
                        to="/about"
                        className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
