import React from 'react';
import { Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Product from "../../../assets/images/product-1.jpg";

const products = ["1", "2", "3", "4"];

const AllProducts = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2 uppercase">Products</h2>
            <div className="py-5 w-full grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="w-full col-span-2 md:col-span-1">
                    <input type="text" placeholder="Enter your Search" className="input border-none rounded-none focus:outline-none focus:border w-full shadow-md" />
                </div>
                <div className="flex items-center gap-4">
                    <select className="select rounded-none shadow-md w-full md:w-3/4">

                        <option disabled selected className="font-normal">Filter by Category</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>


                </div>
                <div className="flex items-center gap-4 col-span-3 md:col-span-1">
                    <select className="select rounded-none shadow-md w-1/2 md:w-3/4">

                        <option disabled selected className="font-normal">Filter by Product Type</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <button className="btn btn-primary rounded-none text-white font-normal shadow-md">Search</button>

                </div>


            </div>
            {/* products */}
            <div className="py-10">
                <Tabs className="bg-white w-full" >
                    <TabList>
                        <Tab>Latest</Tab>
                        <Tab>Trending</Tab>
                        <Tab>Fashion</Tab>
                        <Tab>Electronics</Tab>
                    </TabList>

                    <TabPanel className="bg-white">
                        <div className="py-8 md:px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-8">
                                {
                                    products.map((product, i) => {
                                        return (
                                            <div key={i}>
                                                <div className="flex justify-center gap-5">
                                                    <img src={Product} className="w-28 h-28 md:w-40 rounded-md md:h-40" alt="" />
                                                    <div className="details flex flex-col md:gap-y-2 md:px-4">
                                                        <Link to="/" className="hover:text-primary md:text-xl text-primary">Product Name</Link>
                                                        <p className="text-base text-[10px] md:text-[14px]">Category: <span className="text-primary">CategoryName</span></p>
                                                        <p className="text-xs md:text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione beatae excepturi minus </p>

                                                        <div className="flex gap-x-2 pt-2">
                                                            <Link to="/dashboard/edit-product" className="btn btn-xs btn-outline btn-primary font-normal hover:text-white rounded-none"> Edit

                                                            </Link>
                                                            <Link to="/" className="btn btn-xs btn-outline btn-error font-normal hover:text-white rounded-none"> Delete

                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="py-8 md:px-6">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia molestias non cum repellendus at doloribus voluptate! Quo laborum quisquam repellat, sit soluta, eum beatae, sed praesentium necessitatibus quam facere?</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="py-8 md:px-6">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia molestias non cum repellendus at doloribus voluptate! Quo laborum quisquam repellat, sit soluta, eum beatae, sed praesentium necessitatibus quam facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ad?</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="py-8 md:px-6">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia molestias </p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </>
    );
};

export default AllProducts;