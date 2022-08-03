import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddCustomer = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">Add new Customer</h2>
            <Link to={'/dashboard/customers'}>
                <button className="btn btn-primary btn-xs text-white mb-5 flex justify-center items-center gap-x-2">
                    <FaArrowCircleLeft size={15} />
                    Go Back
                </button>
            </Link>
            <div className="mt-4">
                <div className="flex flex-col gap-4 md:px-12">
                    <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 ">
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full rounded-none" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Contact No</span>

                            </label>
                            <input type="number" placeholder="+1234567899" className="input input-bordered input-sm w-full rounded-none" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="demo@gmail.com" className="input input-bordered input-sm w-full rounded-none" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Gender</span>

                            </label>
                            <select className="select-sm select select-bordered w-full rounded-none">
                                <option disabled selected>Select</option>
                                <option>Male</option>
                                <option>Female</option>

                            </select>
                        </div>

                    </div>


                    <button className="btn btn-sm btn-primary text-white">Add Customer</button>
                </div>

            </div>
        </>
    );
};

export default AddCustomer;