import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen font-sans bg-background-light text-text overflow-x-hidden">
            <Navbar />
            <main className={`flex-grow ${isHome ? 'pt-0' : 'pt-[56px]'}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
