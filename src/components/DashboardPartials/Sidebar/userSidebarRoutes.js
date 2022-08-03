import { BsSpeedometer2 } from 'react-icons/bs';
import { AiOutlineUsergroupDelete, AiOutlineUserAdd } from 'react-icons/ai';

import { BsWallet, BsGear } from 'react-icons/bs';

const userSidebarRoutes = [
    {
        title: 'Orders',
        icon: <BsSpeedometer2 />,
        path: '/user/orders',
        component:""

    },
  
    {
        title: 'Profile Info',
        icon: <AiOutlineUserAdd />,
        path: '/user/profile',
        component: ""

    },

  
    {
        title: 'Addresses',
        icon: <AiOutlineUsergroupDelete />,
        path: '/user/addresses',
        component: ""

    },
    {
        title: 'Payment Methods',
        icon: <BsWallet />,
        path: '/user/payment-methods',
        component: ""

    },
    {
        title: 'Change Password',
        icon: <BsGear />,
        path: '/user/change-password',
        component: ""

    }

]

export default userSidebarRoutes;