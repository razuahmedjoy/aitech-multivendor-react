import React from 'react';
import './Sidebar.css'
import { Link, NavLink, useLocation } from 'react-router-dom';

import vendorDashboardRoutes from './DashboardRoutes';
import userSidebarRoutes from './userSidebarRoutes';

import logo from '../../../assets/images/logo.png';

const Sidebar = ({ role }) => {

  // console.log(vendorDashboardRoutes)
  const location = useLocation()
  // console.log(location.path.split('/')[1]);
  const currentPath = location.pathname.split('/')[1]
  if (role === 'user') {
    return (


      <div className="drawer-side shadow-xl overflow-x-hidden">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-60 bg-base-100 text-base-content">

          <div className="text-xl text-center py-4 border-b flex justify-center">
            <Link to={`/${currentPath}`}>
              <img src={logo} className="w-28 text-center" alt="" />
            </Link>
          </div>


          {
            userSidebarRoutes.map((menu, i) => {
              if (menu?.submenu) {
                return (
                  <div key={i} className="hover:text-primary collapse collapse-arrow">

                    <input type="checkbox" className="peer" />

                    <span className="collapse-title flex items-center">
                      {menu.icon}
                      <span className="pl-3">{menu.title}</span>
                    </span>

                    <div className="collapse-content p-0 text-primary-content peer-checked:bg-gray-200 peer-checked:text-secondary-content">
                      <ul className="w-full rounded-none">
                        {
                          menu.submenu.map((submenu, i) => {
                            return (
                              <li>
                                <NavLink to={submenu.path}>
                                  {submenu.title}</NavLink>
                              </li>

                            )
                          })
                        }




                      </ul>
                    </div>


                  </div>
                )

              }
              else {

                return (
                  <li key={i}>

                    <NavLink className="hover:text-black" to={menu.path}>
                      {menu.icon}
                      {menu.title}
                    </NavLink>
                  </li>
                )

              }
            })
          }



        </ul>

      </div>

    );


  }
  else if (role === 'vendor') {
    return (


      <div className="drawer-side shadow-xl overflow-x-hidden">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-60 bg-base-100 text-base-content">

          <div className="text-xl text-center py-4 border-b flex justify-center">
            <Link to="/dashboard/">
              <img src={logo} className="w-28 text-center" alt="" />
            </Link>
          </div>


          {
            vendorDashboardRoutes.map((menu, i) => {
              if (menu?.submenu) {
                return (
                  <div key={i} className="hover:text-primary collapse collapse-arrow">

                    <input type="checkbox" className="peer" />

                    <span className="collapse-title flex items-center">
                      {menu.icon}
                      <span className="pl-3">{menu.title}</span>
                    </span>

                    <div className="collapse-content p-0 text-primary-content peer-checked:bg-gray-200 peer-checked:text-secondary-content">
                      <ul className="w-full rounded-none">
                        {
                          menu.submenu.map((submenu, i) => {
                            return (
                              <li>
                                <NavLink to={submenu.path}>
                                  {submenu.title}</NavLink>
                              </li>

                            )
                          })
                        }




                      </ul>
                    </div>


                  </div>
                )

              }
              else {

                return (
                  <li key={i}>

                    <NavLink className="hover:text-black" to={menu.path}>
                      {menu.icon}
                      {menu.title}
                    </NavLink>
                  </li>
                )

              }
            })
          }



        </ul>

      </div>

    );

  }

};

export default Sidebar;