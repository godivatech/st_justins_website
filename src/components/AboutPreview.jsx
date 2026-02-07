import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const AboutPreview = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Original Image Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/images/1.png"
                                alt="School Campus"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Secondary Image Overlap */}
                        <div className="absolute -bottom-10 -right-10 w-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
                            <img
                                src="/assets/images/2.png"
                                alt="Students in classroom"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                    </motion.div>

                    {/* Right: Editorial Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Watermark */}
                        <span className="absolute -top-20 -left-10 text-[10rem] font-bold text-gray-100 select-none -z-10 leading-none opacity-50 hidden lg:block">
                            EST.
                        </span>

                        <div className="space-y-6">
                            <div>
                                <h4 className="flex items-center gap-3 text-accent font-bold tracking-widest uppercase text-xs mb-3">
                                    <span className="w-8 h-[2px] bg-accent"></span>
                                    Our Story
                                </h4>
                                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 leading-tight">
                                    A Legacy of <br />
                                    <span className="text-primary italic">Transformation</span>
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                At St. Justin's, education goes beyond textbooks. We believe in crafting an environment where <strong className="text-gray-900 font-semibold">character meets competence</strong>. Our holistic approach combines rigorous academics with values that stand the test of time.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    "Values-based education",
                                    "Modern infrastructure",
                                    "Individual mentorship",
                                    "Overall development"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                            <CheckCircle className="text-green-600 w-3 h-3 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <Link
                                    to="/about"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 rounded-full font-semibold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
                                >
                                    Read Our Full Story
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <ArrowRight size={16} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
