import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { BsSpeedometer2 } from 'react-icons/bs';
import { MdLabelImportantOutline } from 'react-icons/md';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { FaUserShield } from 'react-icons/fa';

const Sidebar = () => {


  return (
    <div class="drawer-side shadow-xl">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu overflow-y-auto w-60 bg-base-100 text-base-content">

        <div className="text-xl text-center py-4 border-b">
          <Link to="/dashboard/">Admin</Link>
        </div>

        <li>

          <NavLink className="hover:text-black" to="/dashboard/">
            <BsSpeedometer2 />
            Dashboard
          </NavLink>
        </li>



        <div className="hover:text-primary collapse collapse-arrow">

          <input type="checkbox" class="peer" />

          <span class="collapse-title flex items-center">
            <MdLabelImportantOutline />
            <span className="pl-3">Products</span>
          </span>

          <div class="collapse-content p-0 pb-0 text-primary-content peer-checked:bg-gray-200 peer-checked:text-secondary-content">
            <ul class="position-absolute left-0 top-full w-full rounded-none">
              <li>
                <NavLink to="test4">
                  All Products</NavLink>
              </li>
              <li>
                <NavLink to="test2">
                  Add Products</NavLink>
              </li>
              <li>
                <NavLink to="test3">
                  Edit Product</NavLink>
              </li>


            </ul>
          </div>


        </div>

        <li>

          <NavLink className="hover:text-black" to="customers">
            <AiOutlineUsergroupDelete />
            Customers
          </NavLink>
        </li>


        <div className="hover:text-primary collapse collapse-arrow">

          <input type="checkbox" class="peer" />

          <span class="collapse-title flex items-center">
            <FaUserShield />
            <span className="pl-3">Vendors</span>
          </span>

          <div class="collapse-content p-0 pb-0 text-primary-content peer-checked:bg-gray-200 peer-checked:text-secondary-content">
            <ul class="position-absolute left-0 top-full w-full rounded-none">
              <li>
                <NavLink to="vendors">
                  All Vendors</NavLink>
              </li>
              <li>
                <NavLink to="test2">
                  Add Vendor</NavLink>
              </li>
              <li>
                <NavLink to="test3">
                  Edit Vendor</NavLink>
              </li>


            </ul>
          </div>


        </div>


        <li className="hover:text-primary">
          <NavLink to="test6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Sidebar Item 1</NavLink>
        </li>

        <div className="hover:text-primary collapse collapse-arrow">

          <input type="checkbox" class="peer" />

          <span class="collapse-title flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span className="pl-3">Parent</span>
          </span>
          <div class="collapse-content p-0 pb-0 text-primary-content peer-checked:bg-gray-200 peer-checked:text-secondary-content">
            <ul class="position-absolute left-0 top-full w-full rounded-none">
              <li>
                <NavLink to="test2">
                  Sidebar Item 1</NavLink>
              </li>
              <li>
                <NavLink to="test3">
                  Sidebar Item 1</NavLink>
              </li>
              <li>
                <NavLink to="test4">
                  Sidebar Item 1</NavLink>
              </li>

            </ul>
          </div>


        </div>

      </ul>

    </div>

  );
};

export default Sidebar;