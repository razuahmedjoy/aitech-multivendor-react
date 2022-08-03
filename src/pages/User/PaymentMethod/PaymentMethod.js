import React from "react";

const PaymentMethod = () => {
    return (
        <>
            <h2 className="text-title text-lg md:text-2xl pb-2">Payment Methods</h2>
            <div className="overflow-x-auto w-full flex flex-col gap-y-2">

                <div className="p-4 border border-gray-200 bg-white shadow-sm rounded-lg flex justify-between items-center">

                    <img src="https://biponi-next.vercel.app/assets/images/payment-methods/Visa.svg" alt="Visa" />
                    <h2 className="text-md">Bank Name</h2>
                    <h2 className="text-md">123******456</h2>
                    <h2 className="text-md">12/28</h2>
                    <button className="btn btn-xs border hover:text-white btn-outline btn-error">Delete</button>
                </div>
                <div className="p-4 border border-gray-200 bg-white shadow-sm rounded-lg flex justify-between items-center">

                    <img src="https://biponi-next.vercel.app/assets/images/payment-methods/Visa.svg" alt="Visa" />
                    <h2 className="text-md">Bank Name</h2>
                    <h2 className="text-md">123******456</h2>
                    <h2 className="text-md">12/28</h2>
                    <button className="btn btn-xs border hover:text-white btn-outline btn-error">Delete</button>
                </div>
            </div>

        </>
    );
};

export default PaymentMethod;
