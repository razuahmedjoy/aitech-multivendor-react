import React from 'react';

const AddUser = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">Add new User</h2>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2">
                <h2 className="text-title text-md md:text-xl pb-2 uppercase">Basic Info</h2>

                <form className="flex flex-col gap-4">
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>

                        </label>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Gender</span>

                        </label>
                        <select className="select select-bordered max-w-lg rounded-none">
                            <option disabled selected>Select</option>
                            <option>Male</option>
                            <option>Female</option>

                        </select>


                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Brief</span>

                        </label>
                        <textarea className="textarea textarea-bordered w-full max-w-lg rounded-none shadow"></textarea>

                    </div>


                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Website</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />


                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Tax</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />


                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Discount</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />


                    </div>

                    <button className="btn btn-primary max-w-lg text-white">Save</button>
                </form>


            </div>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-8">
                <h2 className="text-title text-md md:text-xl pb-2 uppercase">User Account Info</h2>

                <form className="flex flex-col gap-4">
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Phone</span>

                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>

                        </label>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>


                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Address</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Address 2</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        
                        <div>
                            <label className="label">
                                <span className="label-text">City</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered rounded-none" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">State</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered rounded-none" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Zip</span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered rounded-none" />
                        </div>

                    </div>


                    <button className="btn btn-primary max-w-lg text-white rounded-none">Save</button>
                </form>


            </div>
        </>
    );
};

export default AddUser;