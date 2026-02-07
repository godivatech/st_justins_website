import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, FileText, UserCheck } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Enquiry',
        icon: <Calendar />,
        content: 'Fill out the online enquiry form or visit the campus to schedule a counseling session.'
    },
    {
        id: 2,
        title: 'Application',
        icon: <FileText />,
        content: 'Submit the completed application form along with necessary documents (Birth Certificate, Transfer Certificate, etc.).'
    },
    {
        id: 3,
        title: 'Assessment',
        icon: <UserCheck />,
        content: 'Student interaction/assessment to understand the child\'s learning level (for Grade I onwards).'
    },
    {
        id: 4,
        title: 'Admission',
        icon: <Check />,
        content: 'Pay the admission fee and secure the seat upon shortlisting.'
    }
];

const faqs = [
    { q: 'What is the age criteria for LKG?', a: 'As per Tamil Nadu government norms (typically 3+ years).' },
    { q: 'Do you offer transportation?', a: 'Yes, we have an extensive fleet of buses covering key routes in and around Sivagangai.' },
    { q: 'Is there an entrance test?', a: 'For Grade I to IX, a basic interaction/assessment is conducted to understand the student\'s proficiency.' }
];

const Admissions = () => {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <div className="min-h-screen bg-background-light">
            {/* Header */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl font-heading font-bold mb-4 text-white">Admissions Open 2026-27</h1>
                    <p className="text-xl text-blue-100">Join the St. Justin's family today.</p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Process Stepper */}
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-8">Admission Process</h2>
                        <div className="relative">
                            {/* Progress Bar Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

                            <div className="space-y-12">
                                {steps.map((step) => (
                                    <div key={step.id} className="relative flex gap-6 group">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10 transition-colors duration-300 ${activeStep >= step.id ? 'bg-accent text-primary-dark shadow-lg ring-4 ring-white' : 'bg-white border-2 border-gray-200 text-gray-400'
                                                }`}
                                            onClick={() => setActiveStep(step.id)}
                                        >
                                            {step.icon}
                                        </div>
                                        <motion.div
                                            className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 cursor-pointer transition-all ${activeStep === step.id ? 'ring-2 ring-primary border-transparent' : 'hover:border-primary/30'
                                                }`}
                                            onClick={() => setActiveStep(step.id)}
                                            whileHover={{ x: 5 }}
                                        >
                                            <h3 className={`text-lg font-bold mb-2 ${activeStep === step.id ? 'text-primary' : 'text-gray-700'}`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{step.content}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl h-fit sticky top-24">
                        <h3 className="text-2xl font-bold text-primary mb-6">Enquiry Form</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Enter parent's name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                <input type="tel" placeholder="Enter phone number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                            </div>
                            <input type="email" placeholder="Enter email address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Enter child's name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50">
                                    <option>Select Grade</option>
                                    <option>LKG - UKG</option>
                                    <option>Grade I - V</option>
                                    <option>Grade VI - X</option>
                                    <option>Grade XI - XII</option>
                                </select>
                            </div>
                            <textarea placeholder="Type your message / query here..." rows="4" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
                            <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-lg">
                                Submit Enquiry
                            </button>
                        </form>

                        {/* FAQ Preview */}
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-gray-800 mb-4">Common Questions</h4>
                            <div className="space-y-3">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="text-sm">
                                        <p className="font-semibold text-primary">{faq.q}</p>
                                        <p className="text-gray-500 mt-1">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
