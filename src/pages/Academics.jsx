import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const streams = [
    {
        id: 'kindergarten',
        title: 'Kindergarten',
        subtitle: 'LKG & UKG',
        desc: 'A playful environment where children discover the joy of learning. Focus on motor skills, social interaction, and basic literacy.',
        subjects: ['English Phonics', 'Number Work', 'Environmental Science', 'Arts & Crafts', 'Music & Movement'],
        image: '/assets/images/kinder garden.png',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'primary',
        title: 'Primary School',
        subtitle: 'Grade I - V',
        desc: 'Building a strong foundation in core subjects while encouraging curiosity and independent thought.',
        subjects: ['English', 'Mathematics', 'General Science', 'Social Studies', 'Regional Language (Tamil/Hindi)', 'Computer Science'],
        image: '/assets/images/primary school.png',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 'middle',
        title: 'Middle School',
        subtitle: 'Grade VI - VIII',
        desc: 'Transitioning to advanced concepts with emphasis on analytical thinking and project-based learning.',
        subjects: ['Advanced Mathematics', 'Physics, Chemistry, Biology', 'History & Geography', 'Computer Applications', 'Third Language options'],
        image: '/assets/images/midlle school.png',
        color: 'from-green-500 to-teal-500'
    },
    {
        id: 'higher',
        title: 'Higher Secondary',
        subtitle: 'Grade XI - XII',
        desc: 'Specialized streams to prepare students for professional courses and university education.',
        streams: [
            { name: 'Group I', subjects: 'Maths, Physics, Chemistry, Biology' },
            { name: 'Group II', subjects: 'Physics, Chemistry, Biology, Computer Science' },
            { name: 'Group III', subjects: 'Commerce, Accountancy, Economics, Computer Applications' }
        ],
        image: '/assets/images/higher secondary.png',
        color: 'from-purple-500 to-indigo-500'
    }
];

const Academics = () => {
    const [activeTab, setActiveTab] = useState(streams[0].id);
    const activeStream = streams.find(s => s.id === activeTab);

    return (
        <div className="min-h-screen bg-background-light">
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl font-heading font-bold mb-4 text-white">Academic Excellence</h1>
                    <p className="text-xl text-blue-100">Curriculum designed for the holistic development of every child.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {streams.map((stream) => (
                        <button
                            key={stream.id}
                            onClick={() => setActiveTab(stream.id)}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === stream.id
                                ? `bg-gradient-to-r ${stream.color} text-white shadow-lg scale-105`
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {stream.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                    >
                        {/* Text Content */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <h2 className={`text-3xl font-bold bg-gradient-to-r ${activeStream.color} bg-clip-text text-transparent mb-2`}>
                                {activeStream.title}
                            </h2>
                            <p className="text-gray-500 font-bold mb-6">{activeStream.subtitle}</p>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {activeStream.desc}
                            </p>

                            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <BookOpen size={20} className="text-primary" /> Key Subjects
                            </h3>

                            {activeStream.subjects ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {activeStream.subjects.map((subj, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeStream.color}`} />
                                            <span className="text-gray-700 font-medium">{subj}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {activeStream.streams.map((group, i) => (
                                        <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                                            <h4 className="font-bold text-primary mb-1">{group.name}</h4>
                                            <p className="text-gray-600 text-sm">{group.subjects}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                            <img
                                src={activeStream.image}
                                alt={activeStream.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-tr ${activeStream.color} opacity-20 mix-blend-multiply`} />
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg">
                                <p className="font-bold text-gray-800">Explore Curriculum</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Legacy of Excellence - Results Table */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-accent font-bold tracking-wider uppercase text-sm">Hall of Fame</span>
                        <h2 className="text-4xl font-heading font-bold text-primary mt-2">Legacy of Excellence</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            A testament to our consistent academic performance over the years.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="p-4 font-bold border-b border-white/10">Year</th>
                                        <th className="p-4 font-bold border-b border-white/10">Student Name</th>
                                        <th className="p-4 font-bold border-b border-white/10">Standard</th>
                                        <th className="p-4 font-bold border-b border-white/10 text-right">Marks / %</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {[
                                        { year: '2023-24', name: 'Thavasree .S', std: 'XII', marks: '574 / 600' },
                                        { year: '2023-24', name: 'Aslin Rihana .S', std: 'X', marks: '494 / 500' },
                                        { year: '2022-23', name: 'Idhaya Jeffrin .B', std: 'XII', marks: '576 / 600' },
                                        { year: '2022-23', name: 'Nishalini .K', std: 'X', marks: '491 / 500' },
                                        { year: '2021-22', name: 'Gopika .K', std: 'XII', marks: '583 / 600' },
                                        { year: '2021-22', name: 'Varanya Devi .M', std: 'X', marks: '470 / 500' },
                                        { year: '2017-18', name: 'Vedha Vidya .S', std: 'XII', marks: '1145 / 1200' },
                                        { year: '2016-17', name: 'Mohamed Anas .JK', std: 'XII', marks: '1129 / 1200' },
                                        { year: '2015-16', name: 'Leo Michael Kewin .L', std: 'XII', marks: '1138 / 1200' },
                                    ].map((row, i) => (
                                        <tr key={i} className={`hover:bg-blue-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="p-4 border-b border-gray-100 font-medium text-gray-500">{row.year}</td>
                                            <td className="p-4 border-b border-gray-100 font-bold text-primary">{row.name}</td>
                                            <td className="p-4 border-b border-gray-100">
                                                <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${row.std === 'XII' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                                                    {row.std}
                                                </span>
                                            </td>
                                            <td className="p-4 border-b border-gray-100 text-right font-bold text-gray-800">{row.marks}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 text-center bg-gray-50 border-t border-gray-100">
                            <p className="text-sm text-gray-500">Showing recent top achievers. Complete records available at school office.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond Academics - Co-Curricular Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-wider uppercase text-sm">Holistic Growth</span>
                        <h2 className="text-4xl font-heading font-bold text-primary mt-2">Beyond the Classroom</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            At St. Justin's, education extends far beyond textbooks. We nurture talents through a vibrant array of co-curricular activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Sports */}
                        <div className="bg-background-light rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M12 2v20" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">Sports Excellence</h3>
                            <p className="text-gray-600 mb-4">
                                Renowned for our achievements in district and state-level competitions.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Hockey & Football</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Athletics & Relay</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Boxing & Silambam</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Yoga & Meditation</li>
                            </ul>
                        </div>

                        {/* Clubs */}
                        <div className="bg-background-light rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-accent-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">Clubs & Societies</h3>
                            <p className="text-gray-600 mb-4">
                                Student-led clubs that foster creativity, leadership, and social responsibility.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Science Club</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Literary Association</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Eco/Green Club</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Arts & Crafts</li>
                            </ul>
                        </div>

                        {/* Events */}
                        <div className="bg-background-light rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">Annual Events</h3>
                            <p className="text-gray-600 mb-4">
                                Celebrations that bring the school community together.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Annual Sports Day</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Cultural Fest (School Day)</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Science Exhibition</li>
                                <li className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span>Christmas & Pongal Celebrations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;
