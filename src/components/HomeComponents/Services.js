import React from 'react';
import SectionTitle from '../utils/SectionTitle';
import addToCart from '../../assets/images/addToCart.png'
import allpayment from '../../assets/images/allpayment.png'
import invoice from '../../assets/images/invoice.png'
import storedesign from '../../assets/images/storedesign.png';
import sales from '../../assets/images/sales.png';
import order from '../../assets/images/order.png';

const services = [
    {
        icon: addToCart,
        title: "Add To Cart",
        description: "You will be able to manage your products, regardless of the type of these products, whether ready-made products, customized products, digital products and others with ease."
    },
    {
        icon: allpayment,
        title: "Accept All Payment Methods",
        description: "we provide you with all payment methods, starting from bank transfer, cash on delivery, credit card payment (Visa and MasterCard)."
    },
    {
        icon: invoice,
        title: "Invoice Manager",
        description: "The complete suite for all your invoicing needs, right from sending estimates to invoices, recording a payment to finally issuing a payment receipt to your client."
    },
    {
        icon: storedesign,
        title: "Professional Designs To Suit Your Taste",
        description: "The store design and appearance is what makes the customer’s first impression of how professional the store owners are. Therefore, we have provided you with a variety of highly professional designs"
    },
    {
        icon: sales,
        title: "Get You More Ecommerce Sales",
        description: "A web based platform with a simple, easy to use interface and powerful functionality that provides the best solution for all kinds of business/product promotion"
    },
    {
        icon: order,
        title: "Order Management",
        description: "You'll have your own login page, where you will be able to manage your orders . you will be able to get all the information you need to know the performance of the store and make the best decisions"
    },
]
const Services = () => {
    return (
        <section className="px-2 md:px-10">

            <div className="py-5">
                <SectionTitle>We Provide Services <br></br> for Your Need.</SectionTitle>

                <div className="container grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-14 py-8 place-center mx-auto">
                    {
                        services.map((service, index) =>
                            <div key={index} className="flex flex-col gap-y-4 mb-5">
                                <img src={service.icon} className="w-20 mx-auto mb-5" alt="" />
                                <h3 className="text-lg md:text-2xl font-bold text-center">{service.title}</h3>
                                <p className="text-center mt-5 text-sm text-black  leading-6">{service.description}</p>

                            </div>
                        )
                    }

                </div>

            </div>
        </section>
    );
};

export default Services;