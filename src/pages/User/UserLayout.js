import React from 'react';

import { Link, NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../../components/DashboardPartials/Sidebar/Sidebar';
import DashboardHeader from '../../components/DashboardPartials/DashboardHeader/DashboardHeader';

const UserLayout = () => {
    return (
        <>
            <div className="drawer drawer-mobile">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />


                <div className="drawer-content flex flex-col bg-[#f5f5f5]">
                    <DashboardHeader role="user" />


                    <div className="p-2 md:p-5 ">
                        <Outlet />
                    </div>


                </div>

                <Sidebar role="user" />


            </div>



        </>
    );
};

export default UserLayout;