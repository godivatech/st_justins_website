import React from 'react';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Award className="w-8 h-8 text-white" />,
        title: "Certified Excellence",
        description: "Recognized by state board for academic consistency.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Expert Faculty",
        description: "Highly qualified teachers dedicated to student success.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: <BookOpen className="w-8 h-8 text-white" />,
        title: "Holistic Curriculum",
        description: "Balanced focus on academics, sports, and arts.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        icon: <Trophy className="w-8 h-8 text-white" />,
        title: "State Toppers",
        description: "Consistent track record of producing district rank holders.",
        gradient: "from-green-500 to-emerald-500"
    }
];

const TrustSection = () => {
    return (
        <section className="relative px-4 py-16 bg-background-light">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 group"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;

