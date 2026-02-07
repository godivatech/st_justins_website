import React from 'react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const notices = [
    {
        id: 1,
        date: { day: '15', month: 'MAY' },
        title: 'HSC Board Exam Results',
        excerpt: 'Congratulations to our School Topper Hari K for securing 576/600 in the 2024 Board Exams.',
        tag: 'Academic'
    },
    {
        id: 2,
        date: { day: '12', month: 'JUN' },
        title: 'SSLC Results Declared',
        excerpt: 'We are proud of Alin Raana for topping SSLC with a remarkable score of 494/500.',
        tag: 'Result'
    },
    {
        id: 3,
        date: { day: '20', month: 'MAY' },
        title: 'Admissions Open 2025-26',
        excerpt: 'Applications are now invited for Pre-KG to Grade IX and Grade XI. Apply through the office.',
        tag: 'Admission',
        highlight: true
    }
];

const NewsNotices = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                {/* Left Column: Sticky Header */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-dark text-sm font-bold uppercase tracking-wider mb-6">
                        <Bell className="w-4 h-4" />
                        Latest Updates
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                        Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Happenings</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Stay connected with the heartbeat of St. Justin's. From academic triumphs to cultural celebrations, if it’s happening, it's here.
                    </p>
                    <Link to="/notice-board" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/30 group">
                        View All Notices
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Right Column: Dynamic List */}
                <div className="lg:col-span-7 space-y-6">
                    {notices.map((notice, index) => (
                        <motion.div
                            key={notice.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative bg-white rounded-2xl p-6 md:p-8 border-2 ${notice.highlight ? 'border-accent/30 bg-accent/5' : 'border-gray-100 hover:border-primary/20'} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                        >
                            <div className="flex gap-6 md:gap-8 items-start">
                                {/* Date Badge */}
                                <div className={`shrink-0 w-20 h-24 rounded-xl flex flex-col items-center justify-center border-b-4 ${notice.highlight ? 'bg-white border-accent text-accent-dark shadow-md' : 'bg-gray-50 border-gray-200 text-gray-600 group-hover:bg-primary group-hover:border-primary-dark group-hover:text-white'} transition-colors duration-300`}>
                                    <span className="text-3xl font-heading font-bold leading-none mb-1">{notice.date.day}</span>
                                    <span className="text-xs font-bold tracking-widest uppercase opacity-80">{notice.date.month}</span>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${notice.highlight ? 'bg-accent text-white' : 'bg-gray-100 text-gray-500'}`}>
                                            {notice.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                                        {notice.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                                        {notice.excerpt}
                                    </p>
                                </div>

                                {/* Arrow Icon (Hover Reveal) */}
                                <div className="absolute top-8 right-8 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
                                    <ArrowRight />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsNotices;
