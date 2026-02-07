import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import AboutPreview from '../components/AboutPreview';
import AcademicsHighlights from '../components/AcademicsHighlights';
import FacilitiesShowcase from '../components/FacilitiesShowcase';
import ResultsAchievements from '../components/ResultsAchievements';
import Testimonials from '../components/Testimonials';
import NewsNotices from '../components/NewsNotices';
import CTABanner from '../components/CTABanner';

const Home = () => {
    return (
        <div className="min-h-screen bg-background-light">
            <HeroSection />
            <TrustSection />
            <AboutPreview />
            <AcademicsHighlights />
            <FacilitiesShowcase />
            <ResultsAchievements />
            <Testimonials />
            <NewsNotices />
            <CTABanner />
        </div>
    );
};
export default Home;

