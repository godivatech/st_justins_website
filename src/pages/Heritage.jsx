import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Award, School, TrendingUp, Anchor, BookOpen, Truck } from 'lucide-react';

const principals = [
    {
        name: "Rev. Sr. Francisca Nirmala Rani",
        period: "1993 - 1996",
        achievements: ["Constructed First Floor", "Established Library", "Purchased new school van"],
        quote: "Laying the foundation for a brighter future."
    },
    {
        name: "Rev. Sr. Maria Shantha",
        period: "1996 - 1997",
        achievements: ["Inaugurated St. Mary's Block", "Introduced Computer Lab", "Student strength reached 800"],
        quote: "Embracing technology and growth."
    },
    {
        name: "Rev. Sr. Santhana Mary",
        period: "1997 - 2001",
        achievements: ["Celebrated Silver Jubilee", "Constructed St. Joseph's Block (1999)", "Student strength reached 1000"],
        quote: "Celebrating milestones and expanding horizons."
    },
    {
        name: "Rev. Sr. Amali",
        period: "2001 - 2005",
        achievements: ["State Award for Science Exhibition", "Built Infant Jesus Block (2003)", "Built Little Flower Block (2005)", "Student strength reached 1200"],
        quote: "Excellence in science and infrastructure."
    },
    {
        name: "Rev. Sr. Veena",
        period: "2005 - 2012",
        achievements: ["Renovated Angelo's Computer Lab", "Matriculation Board Approval", "Upgraded to Higher Secondary", "Introduced Commerce Group"],
        quote: "Academic expansion and modernization."
    },
    {
        name: "Rev. Sr. Benet",
        period: "2012 - 2013",
        achievements: ["Focus on discipline", "Revised teacher salaries", "Enhanced academic rigour"],
        quote: "Strengthening the core values."
    },
    {
        name: "Rev. Sr. Rita",
        period: "2013 - 2015",
        achievements: ["introduced Remedial Classes", "Started Hobby Clubs", "Implemented NICE & Value Education", "New Van & Tiled Assembly Ground"],
        quote: "Holistic development through co-curriculars."
    },
    {
        name: "Rev. Sr. Paulin Mary",
        period: "2015 - Present",
        achievements: ["100% Academic Results", "ILM for Language Skills", "Extensive Infrastructure Renovation", "New Compound Wall, Arch & Garden"],
        quote: "Leading with vision and innovation."
    }
];

const Heritage = () => {
    return (
        <div className="min-h-screen bg-[#fafaf9]"> {/* Stone-50 background for vintage feel */}

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-zinc-900">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/assets/images/Drone.png"
                        alt="Vintage School Building"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-amber-500 font-serif italic text-xl mb-4 tracking-wider"
                    >
                        Est. 1974
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        A Legacy of Excellence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-300 font-light"
                    >
                        Traced back through decades of visionary leadership and unwavering dedication to holistic education.
                    </motion.p>
                </div>
            </section>

            {/* Introduction Quote */}
            <section className="py-20 container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <School className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
                    <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed italic">
                        "From humble beginnings with 800 students to a vibrant community of over 1400, our journey is a testament to the power of faith and education."
                    </p>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-8" />
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">The Journey</h2>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-amber-200 transform md:-translate-x-1/2" />

                        <div className="space-y-24">
                            {principals.map((leader, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7 }}
                                    className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-md z-10 transform -translate-x-1/2 mt-1.5 md:mt-0" />

                                    {/* Content Card */}
                                    <div className="flex-1 w-full pl-12 md:pl-0">
                                        <div className={`bg-white p-8 rounded-xl shadow-xl border-t-4 border-amber-500 hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="flex items-center gap-3 mb-4 md:justify-end flex-wrap">
                                                {index % 2 !== 0 && <User className="w-5 h-5 text-amber-600" />}
                                                <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                                                {index % 2 === 0 && <User className="w-5 h-5 text-amber-600" />}
                                            </div>

                                            <div className={`inline-block px-4 py-1 bg-amber-50 text-amber-800 rounded-full text-sm font-bold mb-6 ${index % 2 === 0 ? 'float-right ml-4' : 'float-left mr-4'}`}>
                                                {leader.period}
                                            </div>
                                            <div className="clear-both" />

                                            <div className="space-y-3">
                                                {leader.achievements.map((achievement, i) => (
                                                    <div key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                        {index % 2 !== 0 && <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0" />}
                                                        <p className="text-gray-600">{achievement}</p>
                                                        {index % 2 === 0 && <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0" />}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-100 italic text-gray-500 text-sm">
                                                "{leader.quote}"
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image/Spacer */}
                                    <div className="flex-1 hidden md:flex justify-center items-center">
                                        <div className="w-48 h-48 bg-gray-100 rounded-full overflow-hidden border-8 border-white shadow-xl grayscale hover:grayscale-0 transition-all duration-500">
                                            {/* Placeholder for principal image */}
                                            <div className="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-400">
                                                <User size={64} opacity={0.2} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Stats */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                            <h3 className="text-4xl font-bold mb-2">1400+</h3>
                            <p className="text-blue-200">Students Enrolled</p>
                        </div>
                        <div className="p-6">
                            <School className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                            <h3 className="text-4xl font-bold mb-2">4+</h3>
                            <p className="text-blue-200">Major Blocks Built</p>
                        </div>
                        <div className="p-6">
                            <Award className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                            <h3 className="text-4xl font-bold mb-2">100%</h3>
                            <p className="text-blue-200">Academic Results</p>
                        </div>
                        <div className="p-6">
                            <Calendar className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                            <h3 className="text-4xl font-bold mb-2">50+</h3>
                            <p className="text-blue-200">Years of Legacy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legacy Gallery Grid (Conceptual) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-12">Building The Future</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Infrastructure Grid with hover reveal effects */}
                        <div className="relative group overflow-hidden rounded-xl aspect-square bg-gray-100">
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <span className="text-white font-bold p-2">St. Mary's Block</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl aspect-square bg-gray-100">
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <span className="text-white font-bold p-2">St. Joseph's Block</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl aspect-square bg-gray-100">
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <span className="text-white font-bold p-2">Infant Jesus Block</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl aspect-square bg-gray-100">
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <span className="text-white font-bold p-2">Little Flower Block</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Heritage;
