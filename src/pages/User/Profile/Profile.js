import React from 'react';

const Profile = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">User Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
                <div className="p-4 border border-gray-200 bg-white shadow-sm  max-w-md">
                    <h2 className="text-title text-md md:text-xl pb-2 uppercase">Basic Info</h2>
                    <div class="overflow-x-auto">
                        <table class="table w-full">


                            <tbody>

                                <tr>

                                    <td>Name: </td>
                                    <td>user test name</td>

                                </tr>

                                <tr>

                                    <td>Email</td>
                                    <td>test@gmail.com</td>

                                </tr>

                                <tr>

                                    <td>Phone</td>
                                    <td>+88012345678</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="p-4 border border-gray-200 bg-white shadow-sm  max-w-md">
                    <h2 className="text-title text-md md:text-xl pb-2 uppercase">Update Info</h2>
                    <form className="flex flex-col gap-4">
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg rounded-none" />

                        </div>
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
                   

                        <button className="btn btn-primary max-w-lg text-white">Save</button>
                    </form>

                </div>
            </div>

        </>
    );
};

export default Profile;