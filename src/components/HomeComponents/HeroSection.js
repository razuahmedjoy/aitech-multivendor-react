import React from 'react';
import Button from '../utils/Button';

import heroBanner from '../../assets/images/herobanner.png';

const HeroSection = () => {
    return (
        <section>

            <div className="grid grid-cols md:grid-cols-2 px-2 md:px-10 items-center gap-x-2 py-10">

                <div className="hero-text">
                    <h1 className="text-xl md:text-4xl font-bold">
                        Build Your Own <br></br> Website Within <br></br> Some Minitues.
                    </h1>

                    <h4 className="text-sm md:text-lg font-semibold py-5">Own A Professional Store At The Lowest Costs And Without Sales Commission</h4>

                    <Button link="/" bgColor="bg-primary">Create Your Own Store For Free</Button>
                    <div className="mt-4">

                        <Button link="/" bgColor="bg-secondary">Platform Experience</Button>
                    </div>

                </div>

                <div className="hero-image">

                    <img src={heroBanner} className="mx-auto p-8 md:p-4" alt="hero-banner" />

                </div>

            </div>

        </section>
    );
};

export default HeroSection;