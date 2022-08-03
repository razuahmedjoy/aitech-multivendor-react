import React from 'react';
import "./DashboardLayout.css"

import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/DashboardPartials/Sidebar/Sidebar';
import DashboardHeader from '../../components/DashboardPartials/DashboardHeader/DashboardHeader';

const DashboardLayout = () => {
    return (
        <>
            <div className="drawer drawer-mobile">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />


                <div className="drawer-content flex flex-col bg-[#f5f5f5]">
                    <DashboardHeader role="vendor" />


                    <div className="p-2 md:p-5 ">
                        <Outlet />
                    </div>


                </div>

                <Sidebar role="vendor"/>


            </div>



        </>

    );
};

export default DashboardLayout;