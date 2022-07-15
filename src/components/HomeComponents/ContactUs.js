import React from 'react';
import SectionTitle from '../utils/SectionTitle';
import { AiTwotonePhone, AiTwotoneMail } from 'react-icons/ai'
const ContactUs = () => {
    return (
        <section id="contact" className="px-2 md:px-5 lg:px-10">

            <div className="py-10">


                <SectionTitle>Connect With Us.</SectionTitle>


                <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-14 py-10 mx-auto">
                    <div>

                        <p className="font-poppin">You can contact us at any time from the contact form or call us at the unified number +91 7411535043 (Sunday to Thursday from 9 am to 5 pm)
                        </p>

                        <div className="py-5">
                            <div className="flex justify-end items-center gap-x-5">
                                <h5 className="text-[1.5rem] font-poppin font-semibold">Phone</h5>
                                <span>
                                    <AiTwotonePhone size={35} className="text-primary" />
                                </span>
                            </div>
                            <p className="text-right w-full mr-5 my-10 mt-5">+91 7411535043</p>

                        </div>
                        <div className="py-5">
                            <div className="flex justify-end items-center gap-x-5">
                                <h5 className="text-[1.5rem] font-poppin font-semibold">Mail</h5>
                                <span>
                                    <AiTwotoneMail size={35} className="text-primary" />
                                </span>
                            </div>
                            <p className="text-right w-full mr-5 my-10 mt-5">info@pythonistindia.com</p>
                        </div>

                    </div>

                    <div>
                        <form className="flex flex-col justify-center w-full items-center gap-y-4" action="#">
                            <input type="text" placeholder="Name" required className="input input-bordered w-full" />
                            <input type="email" placeholder="Email" required className="input input-bordered w-full" />
                            <input type="text" placeholder="Phone" required className="input input-bordered w-full" />

                            <textarea className="textarea textarea-bordered w-full" placeholder="Message" name="" id="" cols="20" rows="5"></textarea>
                            <div>

                                <button className="btn btn-primary text-white">Send</button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default ContactUs;