import React from 'react';
import GrowthWithUs from '../components/HomeComponents/GrowthWithUs';
import HeroSection from '../components/HomeComponents/HeroSection';
import HowItWorks from '../components/HomeComponents/HowItWorks';
import Services from '../components/HomeComponents/Services';

const HomePage = () => {
    return (
        <div className="px-2 md:px-28">
            <HeroSection />
            <HowItWorks></HowItWorks>
            <Services/>
            <GrowthWithUs/>
        </div>
    );
};

export default HomePage;