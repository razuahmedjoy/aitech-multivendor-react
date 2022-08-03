import React from 'react';
import upload from '../../assets/images/upload.png';
import store from '../../assets/images/store.png';
import rocket from '../../assets/images/rocket.png';
import Button from '../utils/Button';
import SectionTitle from '../utils/SectionTitle';

const HowItWorks = () => {
    return (
        <section className="px-2 md:px-10">

            <div className="py-5">
               <SectionTitle>How it Works ?</SectionTitle>

                <div className="container grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-14 py-8 place-center mx-auto">
                    <div className="flex flex-col gap-y-4">
                        <img src={upload} className="w-20 mx-auto" alt="" />
                        <h3 className="text-lg md:text-2xl font-bold text-center md:text-left">Upload Your Product</h3>
                        <p className="text-center md:text-justify text-sm text-black  leading-6">Enter the product along with other complete information such as photos, videos, variations, product descriptions, promotions and so on.</p>
                        <div className="mt-3 flex justify-center md:block">
                        <Button link="/register" bgColor="bg-primary">Free Trial</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <img src={store} className="w-20 mx-auto" alt="" />
                        <h3 className="text-lg md:text-2xl font-bold text-center md:text-left">Setup Your Store</h3>
                        <p className="text-center md:text-justify text-sm text-black leading-6">Insert logo, banner and modify your store theme according to your own brand identity without having to create any code.</p>
              
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <img src={rocket} className="w-20 mx-auto" alt="" />
                        <h3 className="text-lg md:text-2xl font-bold text-center md:text-left">The Launch Continues</h3>
                        <p className="text-center md:text-justify text-sm text-black leading-6">Easily, your online store goes live and you can validate your business and get market share faster than your other competitors.</p>
                      
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;