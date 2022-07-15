import React from 'react';
import growthBanner from '../../assets/images/growthBanner.png'
import SectionTitle from '../utils/SectionTitle';
import storeManage from '../../assets/images/storemanage.png';
import productManage from '../../assets/images/productManage.png';
import invoiceManage from '../../assets/images/invoiceManage.png';


const ourFeatures = [
    {
        icon: storeManage,
        title: "Store Management",
        description: "You can manage your store with ease, and pick a beautiful design for the storefront itself.​"
    },
    {
        icon: productManage,
        title: "Product Management",
        description: "You'll be able to manage your products, regardless of what kind of products they are.​"
    },
    {
        icon: invoiceManage,
        title: "Invoice Management",
        description: "Invoicing made easy The whole package: Invoice, Receipt,Delivery Note.​"
    },
]

const GrowthWithUs = () => {
    return (
        <section className="px-2 md:px-10 py-5">
            <SectionTitle>Make Your Sales Growth With Us</SectionTitle>

            <div className="grid grid-cols lg:grid-cols-2 px-2 md:px-10 items-center gap-x-2 py-10">

                <div className="man-store-image">

                    <img src={growthBanner} className="mx-auto lg:max-w-[450px] p-8 md:p-4" alt="hero-banner" />

                </div>
                <div className="growth-text">

                    <div>
                        {
                            ourFeatures.map((x, index) =>
                                <div data-aos="fade-up" key={index} className="min-h-[136px] text-center lg:flex lg:text-left items-start gap-x-6 mb-8">
                                    <img src={x.icon} className="w-[100px] h-[100px] mx-auto lg:mx-0" alt="" />
                                    <div className="flex flex-col justify-between gap-y-5">
                                        <h4 className="text-lg md:text-2xl font-semibold mt-4 md:mt-0">{x.title}</h4>
                                        <p className="text-sm text-[16px]">{x.description}​</p>
                                    </div>

                                </div>
                            )
                        }
                    </div>


                </div>


            </div>

        </section>
    );
};

export default GrowthWithUs;