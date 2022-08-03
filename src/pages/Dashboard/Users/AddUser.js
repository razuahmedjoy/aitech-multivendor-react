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
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="Email@gmail.com" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Phone</span>

                        </label>
                        <input type="nubmer" placeholder="123456789" className="input input-bordered w-full max-w-lg rounded-none" />

                    </div>
              

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Role</span>

                        </label>
                        <select className="select select-bordered max-w-lg rounded-none">
                            <option disabled selected>Select</option>
                            <option>Role 1</option>
                            <option>Role 2</option>

                        </select>


                    </div>
            


               

                    <button className="btn btn-primary max-w-lg text-white">Save</button>
                </form>


            </div>
          
        </>
    );
};

export default AddUser;