import React, { useEffect } from 'react';
import ContactUs from '../components/HomeComponents/ContactUs';
import GrowthWithUs from '../components/HomeComponents/GrowthWithUs';
import HeroSection from '../components/HomeComponents/HeroSection';
import HowItWorks from '../components/HomeComponents/HowItWorks';
import Pricing from '../components/HomeComponents/Pricing';
import Services from '../components/HomeComponents/Services';
import "aos/dist/aos.css";
import Aos from 'aos';
import Header from '../components/Header/Header';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer/Footer';
const HomePage = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <>
            <Helmet>
                <title>Homepage - Aitech</title>
            </Helmet>
            <Header navigation={true} />
            <div className="px-2 md:px-28">
                <HeroSection />
                <HowItWorks></HowItWorks>
                <Services />
                <GrowthWithUs />
                <Pricing />
                <ContactUs />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;