import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import registrationBg from '../../assets/images/registration.png';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Helmet>
                <title>Create Your Store - Aitech</title>
            </Helmet>
            <Header />
            <section className="px-2 md:px-5 lg:px-20 py-5">

                <div className="container grid grid-cols-1 md:grid-cols-3 place-content-center mx-auto">


                    <div className="registration-form w-full mx-auto md:border-r-4 border-gray-200  px-2 md:px-8">
                        <form className="flex flex-col gap-y-2 py-5 justify-center w-full" onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Merchant Name</span>

                                </label>
                                <input {...register("firstName", { required: true })} type="text" placeholder="Merchant name" className="input input-sm input-bordered py-4 focus:outline-none rounded-none w-full " />
                                <label className="label">
                                    {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-500 font-poppin">Merchant Name Required</span>}

                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Enter email" className="input input-sm input-bordered py-4 focus:outline-none rounded-none w-full " />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-poppin">Email is required</span>}

                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>

                                </label>
                                <input {...register("contact_no", { required: true })} type="number" placeholder="Mobile Number" className="input input-sm input-bordered py-4 focus:outline-none rounded-none w-full " />
                                <label className="label">
                                    {errors.contact_no?.type === 'required' && <span className="label-text-alt text-red-500 font-poppin">Mobile No. is required</span>}

                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="Enter Password" className="input input-sm input-bordered py-4 focus:outline-none rounded-none w-full " />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-poppin">Password is required</span>}

                                </label>
                            </div>
                            <div className="form-control">


                                <span className="label-text">I agree with the Aitech Privacy Policy</span>

                            </div>
                            <div className="form-control w-full">
                                <Link to="/dashboard">
                                    <button className="py-2 cursor-pointer btn-primary text-white w-full  rounded-none">Register</button>
                                </Link>
                                {/* 
                                <input className="py-2 cursor-pointer btn-primary text-white w-full  rounded-none" type="submit" value="Register" /> */}

                            </div>


                        </form>

                        <div className="flex flex-col w-full">

                            <div className="divider">You have a Account?</div>

                            <Link className="border border-px border-primary py-2 flex justify-center items-center text-primary hover:bg-primary hover:text-white duration-300 transition-all" to="/login">Login</Link>


                        </div>


                    </div>



                    <div className="hidden md:flex justify-center items-start col-span-2">
                        <img src={registrationBg} className="max-w-lg text-center" alt="" />
                    </div>

                </div>

            </section>
        </>
    );
};

export default Register;