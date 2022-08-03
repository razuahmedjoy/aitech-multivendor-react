
import React from 'react';
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa';
const AddInvoice = () => {
    return (
        <>

            <h2 className="text-title text-lg md:text-2xl pb-2">Add new Invoice</h2>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2">
                <Link to={'/dashboard/invoices'}>
                    <button className="btn btn-primary btn-xs text-white mb-5 flex justify-center items-center gap-x-2">
                        <FaArrowCircleLeft size={15} />
                        Go Back
                    </button>
                </Link>

                <form className="flex flex-col gap-4">
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Invoice Number</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Date of Creation</span>

                        </label>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Date Sent</span>

                        </label>
                        <input type="date" placeholder="dd/mm/yyyy" className="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Date Due</span>

                        </label>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Category</span>

                        </label>
                        <select className="select select-bordered max-w-md rounded-none">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>


                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Status</span>

                        </label>
                        <select className="select select-bordered max-w-md rounded-none">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>New</option>

                        </select>


                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Customer</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />


                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Product</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />


                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Tax</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />


                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Discount</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-md rounded-none" />


                    </div>

                    <button className="btn btn-primary max-w-md text-white">Save</button>
                </form>


            </div>
        </>
    );
};

export default AddInvoice;