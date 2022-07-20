import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header/Header';
import { useForm } from "react-hook-form";
import registrationBg from '../../assets/images/registration.png';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <Helmet>
                <title>Sign In - Aitech</title>
            </Helmet>
            <Header />
            <section className="px-2 md:px-5 lg:px-20 py-5">

                <div className="container grid grid-cols-1 md:grid-cols-3 place-content-center mx-auto">


                    <div className="registration-form w-full mx-auto md:border-r-4 border-gray-200  px-2 md:px-8">
                        <form className="flex flex-col gap-y-2 py-5 justify-center w-full" onSubmit={handleSubmit(onSubmit)}>

                            <h2 className="text-center text-xl md:text-2xl">Login</h2>

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
                                    <span className="label-text">Password</span>

                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="Enter Password" className="input input-sm input-bordered py-4 focus:outline-none rounded-none w-full " />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-poppin">Password is required</span>}

                                </label>
                            </div>

                            <div className="form-control w-full">

                                <Link to="/dashboard">
                                    <button className="py-2 cursor-pointer btn-primary text-white w-full  rounded-none">Login</button>
                                </Link>
                                {/* <input className="py-2 cursor-pointer btn-primary text-white w-full  rounded-none" type="submit" value="Login" /> */}

                            </div>


                        </form>

                        <div className="flex flex-col w-full">

                            <div className="divider">Don't have any Account?</div>

                            <Link className="border border-px border-primary py-2 flex justify-center items-center text-primary hover:bg-primary hover:text-white duration-300 transition-all" to="/register">Create Your Store</Link>


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

export default Login;