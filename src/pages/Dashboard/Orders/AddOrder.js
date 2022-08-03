import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa';
const AddOrder = () => {

    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm);

    }
    return (
        <>

            <h2 className="text-title text-lg md:text-2xl pb-2">Add new Order</h2>
            <div className="p-4 border border-gray-200 bg-white shadow-sm col-span-2">
                <Link to={'/dashboard/orders'}>
                    <button className="btn btn-primary btn-xs text-white mb-5 flex justify-center items-center gap-x-2">
                        <FaArrowCircleLeft size={15} />
                        Go Back
                    </button>
                </Link>

                <form className="flex flex-col gap-4">
                    <div className="form-control w-full grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-6 ">
                        <label htmlFor="add-customer-modal" className="btn text-xs md:text-md text-white btn-secondary rounded-none modal-button">Add Customer</label>

                        <label htmlFor="add-shipping-modal" className="btn text-xs md:text-md text-white btn-secondary rounded-none modal-button">Shipping Details</label>

                        <div>

                        </div>

                    </div>

                    <label htmlFor="add-product-modal" className="btn btn-sm text-xs md:text-md text-white btn-secondary modal-button max-w-xs"> + Add Product</label>

                    <div class="overflow-x-auto mt-5">
                        <table class="table w-full rounded-none overflow-y-auto ">

                            <thead>
                                <tr>

                                    <th>Item ID</th>
                                    <th>Product</th>

                                    <th>QTY</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>

                                    <td>12345677</td>
                                    <td>Product Name</td>
                                    <td>5</td>
                                    <td>$450</td>

                                </tr>
                                <tr>

                                    <td>12345677</td>
                                    <td>Product Name</td>
                                    <td>5</td>
                                    <td>$450</td>

                                </tr>
                                <tr>

                                    <td>12345677</td>
                                    <td>Product Name</td>
                                    <td>5</td>
                                    <td>$450</td>

                                </tr>
                                <tr>

                                    <td>12345677</td>
                                    <td>Product Name</td>
                                    <td>5</td>
                                    <td>$450</td>

                                </tr>

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <input type="text" class="input input-sm" placeholder="45" />
                                        <br />
                                        <p className="btn btn-xs mt-2">Add Shipping Charge</p>
                                    </td>
                                    <td></td>
                                    <td>Shipping Charge</td>
                                    <td>$1200</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" class="input input-sm" placeholder="45" />
                                        <br />
                                        <p className="btn btn-xs mt-2">Add Discount</p>
                                    </td>
                                    <td></td>
                                    <td>Discount</td>
                                    <td>$00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>$45000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>



                    <div className="flex justify-end gap-x-2">
                        <label className="btn btn-sm btn-secondary max-w-[250px] text-white">Save As Draft</label>
                        <label className="btn btn-sm btn-primary max-w-[250px] text-white">Save Order</label>
                    </div>
                </form>



                {/* modals for adding customer */}


                <input type="checkbox" id="add-customer-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box w-11/12 max-w-5xl">
                        <h3 class="font-bold text-lg mb-5">Add Customer to this Order</h3>
                        <input type="text" className="input input-bordered w-full" placeholder="Type name to search existing customer" />

                        <div class="divider">OR</div>
                        <button onClick={toggleForm} className="btn-sm btn-primary text-white">Add New Customer</button>

                        {
                            showForm &&
                            <div className="mt-4">
                                <div className="flex flex-col gap-4">
                                    <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Name</span>

                                            </label>
                                            <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-lg rounded-none" />
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Contact No</span>

                                            </label>
                                            <input type="number" placeholder="+1234567899" className="input input-bordered input-sm w-full max-w-lg rounded-none" />
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Email</span>

                                            </label>
                                            <input type="email" placeholder="demo@gmail.com" className="input input-bordered input-sm w-full max-w-lg rounded-none" />
                                        </div>
                                        <div className="w-full">
                                            <label className="label">
                                                <span className="label-text">Gender</span>

                                            </label>
                                            <select className="select-sm select select-bordered max-w-lg rounded-none">
                                                <option disabled selected>Select</option>
                                                <option>Male</option>
                                                <option>Female</option>

                                            </select>
                                        </div>

                                    </div>


                                    <button className="btn btn-sm btn-primary text-white">Add Customer</button>
                                </div>

                            </div>
                        }



                        <div class="modal-action">
                            <label for="add-customer-modal" class="btn btn-sm btn-error">Close!</label>
                        </div>
                    </div>
                </div>
                {/* modals for adding SHipping */}


                <input type="checkbox" id="add-shipping-modal" class="modal-toggle" />
                <label for="add-shipping-modal" class="modal">
                    <div class="modal-box w-11/12 max-w-5xl">
                        <h3 class="font-bold text-lg mb-5">Add Shipping Details</h3>
                        <p>Need Shipping Charge?</p>
                        <label class="label cursor-pointer">

                            <input onClick={toggleForm} checked={showForm} type="checkbox" class="toggle toggle-primary" />
                        </label>



                        {
                            showForm &&
                            <div className="mt-4">
                                <div className="flex flex-col gap-4">
                                    <div className="form-control grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Country</span>

                                            </label>
                                            <select className="select-sm select select-bordered w-full rounded-none">
                                                <option disabled selected>Select</option>
                                                <option>Saudi Arabia</option>


                                            </select>

                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">City</span>

                                            </label>
                                            <select className="select-sm select select-bordered w-full rounded-none">
                                                <option disabled selected>Select</option>
                                                <option>City 1</option>
                                                <option>City 2</option>
                                                <option>City 3</option>


                                            </select>
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Address Line 1</span>

                                            </label>
                                            <input type="text" placeholder="Address Line 1" className="input input-bordered input-sm w-full max-w-lg rounded-none" />
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Address Line 2</span>
                                            </label>
                                            <input type="text" placeholder="Address Line 2" className="input input-bordered input-sm w-full max-w-lg rounded-none" />
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Contact No.</span>
                                            </label>
                                            <input type="number" placeholder="1123345" className="input input-bordered input-sm w-full max-w-lg rounded-none" />
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Zip Code</span>
                                            </label>
                                            <input type="number" placeholder="1123345" className="input input-bordered input-sm w-full max-w-lg rounded-none" />
                                        </div>


                                    </div>


                                    <button className="btn btn-sm btn-primary text-white">
                                        Save
                                    </button>
                                </div>

                            </div>
                        }



                        <div class="modal-action">
                            <label for="add-shipping-modal" class="btn btn-sm btn-error">Close!</label>
                        </div>
                    </div>
                </label>


                {/* add product modal */}

                <input type="checkbox" id="add-product-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box w-11/12 max-w-5xl">
                        <h3 class="font-bold text-lg mb-5">Add Product to this Order</h3>

                        <p>Select Product from Below List</p>
                        <input type="text" class="input input-sm input-bordered outline-none focus:outline-none w-full md:w-1/2" placeholder="search Product" />



                        <div id="sidebar" class="overflow-x-auto mt-5 max-h-[350px]">
                            <table class="table w-full table-compact overflow-y-auto ">

                                <thead>
                                    <tr>

                                        <th>Item ID</th>
                                        <th>Product</th>

                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>

                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>
                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>

                                    <tr class="hover">
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>
                                    <tr class="hover">
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>
                                    <tr class="hover">
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>
                                    <tr class="hover">
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>
                                    <tr class="hover">
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12345677</td>
                                        <td>Product Name</td>
                                        <td>$450</td>

                                        <td>
                                            <button className="btn btn-xs btn-secondary">Select</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                        <div class="modal-action">
                            <label for="add-product-modal" class="btn btn-sm btn-error">Close!</label>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AddOrder;