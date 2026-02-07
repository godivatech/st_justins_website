import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-left" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Ready to Join the Family?</h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                    Admissions are now open for the academic year 2026-2027. Give your child the gift of quality education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/admissions"
                        className="px-8 py-4 bg-accent text-primary-dark font-bold rounded-lg hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                        Apply for Admission <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors"
                    >
                        Schedule a Campus Visit
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
