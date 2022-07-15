import React from 'react';
import { FaCheck } from 'react-icons/fa'
import Button from '../utils/Button';


const plans = [
    {
        name: "BASIC",
        features: ["Unlimited number of products", "Unlimited number of orders", "Unlimited number of clients", "discount coupons", "Receiving inquiries and customer evaluation"],
        buttonTxt: "FREE"
    },
    {
        name: "Standard",
        features: ["All the benefits of the (Basic) package", "Connect the store to a private domain", "Storefront design", "Create special offers", "Targeting abandoned baskets"],
        buttonTxt: "FREE"
    },
    {
        name: "Pro",
        features: ["All the benefits of the (Plus) package", "Design storefront with Custom CSS templates", "Classification of customer group", "Store management and staff Management", "Tax support"],
        buttonTxt: "FREE"
    }
]

const Pricing = () => {
    return (
        <section className="px-2 md:px-10 lg:px-10 py-5">

            <div>
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 place-content-center mx-auto">

                    {
                        plans.map((plan, index) =>


                            <div data-aos="flip-up" key={index} className="pricing-item p-4">

                                <h4 className="text-lg mb-5 md:text-3xl font-semibold uppercase text-center">{plan.name}</h4>

                                <div className="features my-8">
                                    <ul className="flex flex-col gap-y-3 p-1">
                                        {
                                            plan.features.map((feature, i) =>
                                                <li key={i} className="flex gap-x-4 items-center">
                                                    <span>
                                                        <FaCheck className="text-primary font-bold" />
                                                    </span>
                                                    <span className="font-poppin text-sm">{feature}</span>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>

                                <div className="button flex justify-center">
                                    <Button link="/register" bgColor="bg-primary">{plan.buttonTxt}</Button>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>

        </section>
    );
};

export default Pricing;