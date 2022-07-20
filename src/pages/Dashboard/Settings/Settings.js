import React from 'react';

const Settings = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2 uppercase">Settings</h2>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-5">
                <h2 className="text-title text-md md:text-xl pb-2 uppercase">Basic Info</h2>
                <form className="flex flex-col gap-4">
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Site Name</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Date of Establishment</span>

                        </label>
                        <input type="date" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Date of Creation</span>

                        </label>
                        <input type="date" className="input input-bordered w-full max-w-lg rounded-none shadow" />

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
                        <input type="url" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Site Logo</span>

                        </label>
                        <input type="file" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Address</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Address 2</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">City</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">State</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Zip</span>

                        </label>
                        <input type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>


                   



                    <button className="btn btn-primary max-w-lg rounded-none text-white">Save</button>
                </form>

            </div>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-5">
                <h2 className="text-title text-md md:text-xl pb-2 uppercase">Banner Settings</h2>
                <form className="flex flex-col gap-4">
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Banners (1500 x 450)</span>

                        </label>
                        <input type="file" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                 


                   



                    <button className="btn btn-primary max-w-lg rounded-none text-white">Save</button>
                </form>

            </div>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-5">
                <h2 className="text-title text-md md:text-xl pb-2 uppercase">Account Info</h2>
                <form className="flex flex-col gap-4">
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Phone</span>

                        </label>
                        <input type="number" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>

                        </label>
                        <input type="password" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>


                    <button className="btn btn-primary max-w-lg rounded-none text-white">Save</button>
                </form>

            </div>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2 mt-5">
                <h2 className="text-title text-md md:text-xl pb-2 uppercase">Social Media Info</h2>
                <form className="flex flex-col gap-4">
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Facebook URL</span>

                        </label>
                        <input type="url" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Twitter URL</span>

                        </label>
                        <input type="url" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">LinkedIn URL</span>

                        </label>
                        <input type="url" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    

                    <button className="btn btn-primary max-w-lg rounded-none text-white">Save</button>
                </form>

            </div>
        </>
    );
};

export default Settings;