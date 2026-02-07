import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "St. Justin's has transformed my son's approach to learning. The teachers are incredibly supportive and the facilities are top-notch.",
        author: "Priya S.",
        role: "Parent of Grade X Student",
        initials: "PS",
        color: "bg-blue-100 text-blue-600"
    },
    {
        id: 2,
        text: "The focus on morals and discipline along with academics makes this school unique. I'm proud to be part of the St. Justin's family.",
        author: "Karthik R.",
        role: "Alumni, Class of 2018",
        initials: "KR",
        color: "bg-green-100 text-green-600"
    },
    {
        id: 3,
        text: "Excellent infrastructure and managing committee. They truly care about the overall development of every child.",
        author: "Anitha M.",
        role: "Parent of Grade V Student",
        initials: "AM",
        color: "bg-purple-100 text-purple-600"
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-background-light overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h4 className="text-accent font-bold tracking-widest uppercase text-xs mb-3">Community Voices</h4>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                            Trusted by <span className="italic text-accent">Parents</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Hear from the families who have made St. Justin's their partner in education.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-white border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel/Grid container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="min-w-[85%] md:min-w-[calc(33.333%-16px)] snap-center bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300"
                        >
                            {/* Watermark Quote */}
                            <Quote className="absolute top-6 right-8 text-gray-100 w-24 h-24 rotate-180 -z-10 group-hover:text-primary/5 transition-colors duration-300" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 text-lg italic leading-relaxed mb-8">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-lg`}>
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">{testimonial.author}</h4>
                                    <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
