import React from 'react';
import ContactUs from '../components/HomeComponents/ContactUs';
import GrowthWithUs from '../components/HomeComponents/GrowthWithUs';
import HeroSection from '../components/HomeComponents/HeroSection';
import HowItWorks from '../components/HomeComponents/HowItWorks';
import Pricing from '../components/HomeComponents/Pricing';
import Services from '../components/HomeComponents/Services';

const HomePage = () => {
    return (
        <div className="px-2 md:px-28">
            <HeroSection />
            <HowItWorks></HowItWorks>
            <Services/>
            <GrowthWithUs/>
            <Pricing/>
            <ContactUs/>
        </div>
    );
};

export default HomePage;