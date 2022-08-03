import React, { useState } from 'react';

import MapPicker from 'react-google-map-picker'



const Settings = () => {
    const DefaultLocation = { lat: 10, lng: 106 };
    const DefaultZoom = 10;

    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {

        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }



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
                            <span className="label-text">Details about Store</span>

                        </label>
                        <textarea className="textarea textarea-bordered w-full max-w-lg rounded-none shadow"></textarea>

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Types of Business</span>

                        </label>
                        <select className="select select-bordered max-w-lg rounded-none">
                            <option disabled selected>Select</option>
                            <option>An individual</option>
                            <option>Establishment</option>
                            <option>A Company</option>
                            <option>Charity</option>

                        </select>


                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Site Logo</span>

                        </label>
                        <input type="file" className="input pl-0 w-full max-w-lg rounded-none shadow" />

                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Location</span>

                        </label>
                        <>
                            {/* 
                            <label>Latitute:</label><input type='text' value={location.lat} disabled />
                            <label>Longitute:</label><input type='text' value={location.lng} disabled />
                            <label>Zoom:</label><input type='text' value={zoom} disabled /> */}

                            <MapPicker defaultLocation={defaultLocation}
                                zoom={zoom}
                                mapTypeId="roadmap"
                                style={{ height: '300px' }}
                                onChangeLocation={handleChangeLocation}
                                onChangeZoom={handleChangeZoom}
                                apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8' />
                        </>


                    </div>



                    <div className="form-control w-full max-w-lg">
                        <h2 className="text-title text-md md:text-xl pb-2 uppercase">Technical Support</h2>
                        <label className="label">
                            <p className="label-text text-error">
                                You must add at least one means of communication (mobile number, WhatsApp number). According to the e-commerce system, to avoid stopping the electronic payment service of your store
                            </p>

                        </label>
                        <input type="number" placeholder='123456789' className="input input-bordered w-full max-w-lg rounded-none shadow" />

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

                    <h2 className="text-title text-md md:text-xl py-2 uppercase">Other Links</h2>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Maroof</span>

                        </label>
                        <input type="url" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Apple app</span>

                        </label>
                        <input type="url" className="input input-bordered w-full max-w-lg rounded-none shadow" />

                    </div>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text">Android App</span>

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