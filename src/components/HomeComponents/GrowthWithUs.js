import React from 'react';
import growthBanner from '../../assets/images/growthBanner.png'
import SectionTitle from '../utils/SectionTitle';
const GrowthWithUs = () => {
    return (
        <section className="px-2 md:px-10 py-5">
            <SectionTitle>Make Your Sales Growth With Us</SectionTitle>

            <div className="grid grid-cols md:grid-cols-2 px-2 md:px-10 items-center gap-x-2 py-10">

                <div className="man-store-image">

                    <img src={growthBanner} className="mx-auto p-8 md:p-4" alt="hero-banner" />

                </div>
                <div className="hero-text">

                    <div>
                        <div>
                  
                        </div>
                    </div>


                </div>


            </div>

        </section>
    );
};

export default GrowthWithUs;