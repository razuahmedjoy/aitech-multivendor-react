import { BsSpeedometer2 } from 'react-icons/bs';
import { MdLabelImportantOutline, MdLabelImportant } from 'react-icons/md';
import { AiOutlineUsergroupDelete, AiOutlineUserAdd, AiFillMail } from 'react-icons/ai';
import { RiBillLine } from 'react-icons/ri';
import { BsWallet, BsGear } from 'react-icons/bs';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { BiCategory } from 'react-icons/bi';

// route wise components
import Dashboard from '../../../pages/Dashboard/Dashboard';
import Customers from '../../../pages/Dashboard/Customer/Customers';


const vendorDashboardRoutes = [
    {
        title: 'Dashboard',
        icon: <BsSpeedometer2 />,
        path: '/dashboard/',
        component: <Dashboard />

    },
    {
        title: 'Products',
        icon: <MdLabelImportantOutline />,
        submenu: [
            {
                title: 'All Products',
                path: 'products',
                component: <hi>hi</hi>,
            },
            {
                title: 'Add Product',
                path: 'add-product',
                component: <hi>hi</hi>,
            }

        ]

    },
    {
        title: 'Customers',
        icon: <AiOutlineUsergroupDelete />,
        path: '/dashboard/customers',
        component: <Customers/>

    },
    {
        title: 'Billing',
        icon: <BsWallet />,
        submenu: [
            {
                title: 'Invoices',
                path: 'invoices',
                component: <hi>invoices</hi>,
            },
            {
                title: 'Add Invoice',
                path: 'add-invoice',
                component: <hi>add invoice</hi>,
            }

        ]

    },
    {
        title: 'Orders',
        icon: <RiBillLine />,
        submenu: [
            {
                title: 'All Orders',
                path: 'orders',
                component: <hi>Orders</hi>,
            },
          

        ]

    },
    {
        title: 'Reports',
        icon: <HiOutlineDocumentReport />,
        submenu: [
            {
                title: 'Sales',
                path: 'sales',
                component: <hi>sales report</hi>,
            },
            {
                title: 'Visitors',
                path: 'visitors',
                component: <hi>viditors report</hi>,
            },
            {
                title: 'Targets',
                path: 'targets',
                component: <hi>Target report</hi>,
            },

        ]

    },
    {
        title: 'Users',
        icon: <AiOutlineUserAdd />,
        submenu: [
            {
                title: 'All Users',
                path: 'users',
                component: <hi>Users</hi>,
            },
            {
                title: 'Add User',
                path: 'add-user',
                component: <hi>Add user</hi>,
            },
            {
                title: 'Edit Roles',
                path: 'roles',
                component: <hi>Roles</hi>,
            },

        ]

    },
    {
        title: 'Product Tags',
        icon: <MdLabelImportant />,
        submenu: [
            {
                title: 'All Tags',
                path: 'tags',
                component: <hi>Tags</hi>,
            },
            {
                title: 'Add New Tag',
                path: 'add-tag',
                component: <hi>Add Tag</hi>,
            },
         

        ]

    },
    {
        title: 'Categories',
        icon: <BiCategory />,
        submenu: [
            {
                title: 'All Categories',
                path: 'categories',
                component: <hi>Categories</hi>,
            },
            {
                title: 'Add Category',
                path: 'add-category',
                component: <hi>Add Category</hi>,
            },
         

        ]

    },
    {
        title: 'MailBox',
        icon: <AiFillMail />,
        submenu: [
            {
                title: 'Inbox',
                path: 'inbox',
                component: <hi>Inbox</hi>,
            },
            {
                title: 'Compose',
                path: 'compose',
                component: <hi>Compose</hi>,
            },
         

        ]

    },
    {
        title: 'Settings',
        icon: <BsGear />,
        path: '/dashboard/settings',
        component: <hi>Settings</hi>

    },

]

export default vendorDashboardRoutes;