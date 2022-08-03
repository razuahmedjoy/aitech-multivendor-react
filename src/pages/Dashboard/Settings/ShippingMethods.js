import React from 'react';

const ShippingMethods = () => {
    return (
        <div>
            <h1 className="text-lg">Available Shipping Methods</h1>

            <div className="bg-gray-50 p-3">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="card rounded-md bg-white flex flex-col items-center">
                        <img className="w-40" src="https://quickinfo24.com/wp-content/uploads/2022/04/Redex-Courier-Service.png" alt="" />

                        <h2 className="text-xl py-2 font-semibold">Redex</h2>

                        <label class="label cursor-pointer">

                            <input type="checkbox" class="toggle toggle-primary" />
                        </label>

                    </div>
                    <div className="card rounded-md bg-white flex flex-col items-center">
                        <img className="w-40" src="https://quickinfo24.com/wp-content/uploads/2022/04/Redex-Courier-Service.png" alt="" />

                        <h2 className="text-xl py-2 font-semibold">Redex</h2>

                        <label class="label cursor-pointer">

                            <input type="checkbox" class="toggle toggle-primary" />
                        </label>

                    </div>
                    <div className="card rounded-md bg-white flex flex-col items-center">
                        <img className="w-40" src="https://quickinfo24.com/wp-content/uploads/2022/04/Redex-Courier-Service.png" alt="" />

                        <h2 className="text-xl py-2 font-semibold">Redex</h2>

                        <label class="label cursor-pointer">

                            <input type="checkbox" class="toggle toggle-primary" />
                        </label>

                    </div>
                    <div className="card rounded-md bg-white flex flex-col items-center">
                        <img className="w-40" src="https://quickinfo24.com/wp-content/uploads/2022/04/Redex-Courier-Service.png" alt="" />

                        <h2 className="text-xl py-2 font-semibold">Redex</h2>

                        <label class="label cursor-pointer">

                            <input type="checkbox" class="toggle toggle-primary" />
                        </label>

                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default ShippingMethods;