import React from 'react';

const EditProduct = () => {
    return (
    <>
        <h2 className="text-title text-lg md:text-2xl pb-2 uppercase">Edit Product</h2>
        <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-5">
            <h2 className="text-title text-md md:text-xl pb-2 uppercase">Basic Info</h2>
            <form className="flex flex-col gap-4">
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Product SKU</span>

                    </label>
                    <input value="sample data" type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>
                    <input value="sample data" type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Date of Creation</span>

                    </label>
                    <input value="sample data" type="date" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                </div>

                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Status</span>

                    </label>
                    <select className="select select-bordered max-w-lg rounded-none">
                        <option disabled selected>Select</option>
                        <option>In Stock</option>
                        <option>Out of Stock</option>

                    </select>


                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Product Image</span>

                    </label>
                    <input type="file" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Quantity</span>

                    </label>
                    <input value="45" type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input value="4508" type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Tax</span>

                    </label>
                    <input value="20" type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                </div>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">Discount</span>

                    </label>
                    <input value="450" type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

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

export default EditProduct;