import React from 'react';
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa';
const AddProducts = () => {

    const productTypes = [
        "ready product",
        "On-Demand Service",
        "Food",
        "Digital Products",
        "Digital Car",
        "Product Group"
    ]

    return (
        <>
            <div className="flex gap-x-4">
                <h2 className="text-title text-lg md:text-2xl pb-2 uppercase">Add Products</h2>
                <Link to={'/dashboard/products'}>
                    <button className="btn btn-primary btn-xs text-white mb-5 flex justify-center items-center gap-x-2 mt-1">
                        <FaArrowCircleLeft size={15} />
                        Go Back
                    </button>
                </Link>
            </div>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-5">

                <h2 className="text-title text-md md:text-xl pb-5 uppercase">Basic Info

                </h2>




                <form className="flex flex-col gap-4">

                    <div>
                        <div className="label-text text-md mb-2">Select Product Type</div>


                        <div className="form-control w-full max-w-lg">

                            <select className="select select-bordered max-w-lg rounded-none">
                                <option disabled selected>Select one</option>
                                {
                                    productTypes.map((item, index) =>
                                        <option>{item}</option>
                                    )
                                }
                            </select>


                        </div>
                    </div>



                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Product SKU</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Product Name</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>



                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Product Image</span>

                        </label>
                        <input type="file" className="input w-full max-w-lg rounded-none pl-0 " />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Quantity</span>

                        </label>
                        <input type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Discount</span>

                        </label>
                        <input type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Details</span>

                        </label>
                        <textarea className="textarea textarea-bordered w-full max-w-lg rounded-none shadow"></textarea>

                    </div>



                    <button className="btn btn-primary max-w-lg rounded-none text-white">Save</button>
                </form>

            </div>
        </>
    );
};

export default AddProducts;