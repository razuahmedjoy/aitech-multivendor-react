import React from 'react';

const PaymentMethods = () => {
    return (
        <div>
        <h1 className="text-lg">Available Payment Methods</h1>

        <div className="bg-gray-50 p-3">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                <div className="card rounded-md bg-white flex flex-col items-center">
                    <img className="w-40 h-20 object-contain" src="https://easydigitaldownloads.com/wp-content/uploads/edd/2019/03/stripe-product-image.png" alt="" />

                    <h2 className="text-xl py-2 font-semibold">Stripe</h2>

                    <label class="label cursor-pointer">

                        <input type="checkbox" class="toggle toggle-primary" />
                    </label>

                </div>
                <div className="card rounded-md bg-white flex flex-col items-center">
                    <img className="w-40 h-20 object-contain" src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="" />

                    <h2 className="text-xl py-2 font-semibold">Paypal</h2>

                    <label class="label cursor-pointer">

                        <input type="checkbox" class="toggle toggle-primary" />
                    </label>

                </div>

                <div className="card rounded-md bg-white flex flex-col items-center">
                    <img className="w-40 h-20 object-contain" src="https://easydigitaldownloads.com/wp-content/uploads/edd/2019/03/stripe-product-image.png" alt="" />

                    <h2 className="text-xl py-2 font-semibold">Stripe</h2>

                    <label class="label cursor-pointer">

                        <input type="checkbox" class="toggle toggle-primary" />
                    </label>

                </div>
                <div className="card rounded-md bg-white flex flex-col items-center">
                    <img className="w-40 h-20 object-contain" src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="" />

                    <h2 className="text-xl py-2 font-semibold">Paypal</h2>

                    <label class="label cursor-pointer">

                        <input type="checkbox" class="toggle toggle-primary" />
                    </label>

                </div>

               
            
            </div>
        </div>
    </div>
    );
};

export default PaymentMethods;