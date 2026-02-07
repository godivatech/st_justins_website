import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, TrendingUp } from 'lucide-react';

const stats = [
    { label: 'School Topper (HSC)', value: '574', total: '/600', icon: <Trophy className="w-6 h-6 text-yellow-400" />, desc: 'Thavasree .S' },
    { label: 'School Topper (SSLC)', value: '494', total: '/500', icon: <Star className="w-6 h-6 text-yellow-400" />, desc: 'Aslin Rihana .S' },
    { label: 'Pass Percentage', value: '100', total: '%', icon: <TrendingUp className="w-6 h-6 text-blue-400" />, desc: 'Consistent Record' },
    { label: 'University Placements', value: '95', total: '%', icon: <Award className="w-6 h-6 text-purple-400" />, desc: 'Top Colleges' }
];

const toppers = [
    { name: 'Thavasree .S', score: '574/600', grade: 'HSC Topper (2023-24)', rank: 1 },
    { name: 'Aslin Rihana .S', score: '494/500', grade: 'SSLC Topper (2023-24)', rank: 1 },
    { name: 'Idhaya Jeffrin .B', score: '576/600', grade: 'HSC Topper (2022-23)', rank: 2 } // Keep previous year as 2nd highlight
];

const hallOfFame = [
    "Vedha Vidya .S (1145/1200)", "Leo Michael Kewin .L (1138/1200)", "Swarnalatha .A (1132/1200)",
    "Mohamed Anas .JK (1129/1200)", "Joyson Raja Singh .N (1069/1200)",
    "Sheik Abdullah (97%)", "Rubanraj (94%)", "Girisanthini (100%)"
];

const CountUp = ({ to }) => {
    // Simplified count up for visual effect - normally would use a library or custom hook
    return <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >{to}</motion.span>;
};

const ResultsAchievements = () => {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.1),transparent_40%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_40%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 text-sm font-bold uppercase tracking-wider mb-6">
                        <Trophy className="w-4 h-4" />
                        Hall of Fame
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
                        Celebrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">Excellence</span>
                    </h2>
                    <p className="text-blue-100/80 text-lg">
                        Our students consistently set new benchmarks in academic performance, proving that dedication creates destiny.
                    </p>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <div className="text-3xl lg:text-4xl font-bold font-heading mb-2 flex justify-center items-end gap-1">
                                <CountUp to={stat.value} />
                                <span className="text-lg text-white/60 mb-1">{stat.total}</span>
                            </div>
                            <p className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-xs text-blue-200">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Topper Spotlight */}
                <div className="relative">
                    <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-white/20"></span>
                        Star Performers
                        <span className="h-px w-12 bg-white/20"></span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                        {toppers.map((student, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className={`relative group p-1 ${index === 1 ? 'md:-mt-8 md:mb-8 z-10' : ''}`} // Center card elevated
                            >
                                {/* Card Glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                                <div className="relative bg-white/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full text-center overflow-hidden">
                                    {/* Rank Badge */}
                                    <div className={`absolute top-0 right-0 px-6 py-2 rounded-bl-2xl font-bold text-sm ${student.rank === 1 ? 'bg-yellow-400 text-primary-dark' : 'bg-gray-300 text-gray-800'}`}>
                                        #{student.rank}
                                    </div>

                                    <div className="w-28 h-28 mx-auto mb-6 relative">
                                        <div className={`absolute inset-0 rounded-full border-2 ${student.rank === 1 ? 'border-yellow-400' : 'border-gray-300'} animate-spin-slow opacity-50`} style={{ animationDuration: '10s' }} />
                                        {/* Empty White Avatar Placeholder */}
                                        <div className="w-full h-full rounded-full bg-white/80 border-4 border-white/10 backdrop-blur-sm flex items-center justify-center">
                                            <span className="text-3xl font-bold text-gray-300">{student.name.charAt(0)}</span>
                                        </div>

                                        <div className={`absolute -bottom-2 inset-x-0 w-8 h-8 mx-auto flex items-center justify-center rounded-full ${student.rank === 1 ? 'bg-yellow-400 text-primary-dark' : 'bg-gray-300 text-gray-800'} shadow-lg text-xs font-bold`}>
                                            {student.rank === 1 ? <Trophy size={14} /> : <Award size={14} />}
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold mb-1">{student.name}</h4>
                                    <p className="text-blue-200 text-sm mb-4">{student.grade}</p>

                                    <div className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                                        {student.score}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Hall of Fame Ticker */}
                    <div className="border-t border-white/10 pt-8">
                        <div className="flex overflow-hidden">
                            <motion.div
                                className="flex gap-12 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                            >
                                {[...hallOfFame, ...hallOfFame].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-blue-200/80">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="font-medium tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsAchievements;
