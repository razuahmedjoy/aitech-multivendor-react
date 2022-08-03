import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router';
import ScrollToTop from './components/utils/ScrollToTop';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './pages/DashboardLayout/DashboardLayout';
import HomePage from './pages/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import Customers from './pages/Dashboard/Customer/Customers';
import Invoices from './pages/Dashboard/Billing/Billing';
import AddInvoice from './pages/Dashboard/Billing/AddInvoice';
import AllOrders from './pages/Dashboard/Orders/AllOrders';
import AllUsers from './pages/Dashboard/Users/AllUsers';
import AllProducts from './pages/Dashboard/AllProducts/AllProducts';
import AddProducts from './pages/Dashboard/AddProducts/AddProducts';
import EditProduct from './pages/Dashboard/EditProduct/EditProduct';
import Categories from './pages/Dashboard/Categories/Categories';
import Tags from './pages/Dashboard/Tags/Tags';
import Settings from './pages/Dashboard/Settings/Settings';
import AddUser from './pages/Dashboard/Users/AddUser';
import UserLayout from './pages/User/UserLayout';
import UserIndex from './pages/User/UserIndex';
import Profile from './pages/User/Profile/Profile';
import Addresses from './pages/User/Addresses/Addresses';
import PaymentMethod from './pages/User/PaymentMethod/PaymentMethod';
import ChangePassword from './pages/User/ChangePassword/ChangePassword';
import Orders from './pages/User/Orders/Orders';


import AdminDashboard from './pages/Admin/AdminDashboard';
import Leads from './pages/Admin/Leads/Leads';
import AddLead from "./pages/Admin/Leads/AddLead";
import EditLead from "./pages/Admin/Leads/EditLead";

import Vendors from "./pages/Admin/Vendors/Vendors";
import AddVendor from "./pages/Admin/Vendors/AddVendor";
import EditVendor from "./pages/Admin/Vendors/EditVendor";
import Quotes from "./pages/Admin/Quotes/Quotes";
import AddQuote from "./pages/Admin/Quotes/AddQuote";
import EditQuote from "./pages/Admin/Quotes/EditQuote";
import Tickets from "./pages/Admin/Tickets/Tickets";
import AddTicket from "./pages/Admin/Tickets/AddTicket";
import EditTicket from "./pages/Admin/Tickets/EditTicket";
import Contacts from "./pages/Admin/Contacts/Contacts";
import AddContact from "./pages/Admin/Contacts/AddContact";
import EditContact from "./pages/Admin/Contacts/EditContact";
import Events from "./pages/Admin/Events/Events";
import EditInvoice from "./pages/Admin/Billing/EditInvoice";

import AddEvent from "./pages/Admin/Events/AddEvent";
import EditEvent from "./pages/Admin/Events/EditEvent";

import Users from "./pages/Admin/Users/Users";
import EditUser from "./pages/Admin/Users/EditUser";
import AdminLayout from './pages/Admin/AdminLayout';
import PaymentMethods from './pages/Dashboard/Settings/PaymentMethods';
import ShippingMethods from './pages/Dashboard/Settings/ShippingMethods';
import AddOrder from './pages/Dashboard/Orders/AddOrder';
import AddCustomer from './pages/Dashboard/Customer/AddCustomer';

function App() {
  return (
    <HelmetProvider>

      <div className="App">

        <ScrollToTop>
          <Routes>

            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<Orders />}></Route>
              <Route path='orders' element={<Orders />}></Route>
              <Route path='profile' element={<Profile />}></Route>
              <Route path='addresses' element={<Addresses />}></Route>
              <Route path='payment-methods' element={<PaymentMethod />}></Route>
              <Route path='change-password' element={<ChangePassword />}></Route>

            </Route>

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />}></Route>
              <Route path="customers" element={<Customers />}></Route>
              <Route path="add-customer" element={<AddCustomer/>}></Route>
              <Route path="invoices" element={<Invoices />}></Route>
              <Route path="add-invoice" element={<AddInvoice />}></Route>
              <Route path="orders" element={<AllOrders />}></Route>
              <Route path="add-order" element={<AddOrder />}></Route>
              <Route path="users" element={<AllUsers />}></Route>
              <Route path="add-user" element={<AddUser />}></Route>
              <Route path="products" element={<AllProducts />}></Route>
              <Route path="add-product" element={<AddProducts />}></Route>
              <Route path="edit-product" element={<EditProduct />}></Route>
              <Route path="categories" element={<Categories />}></Route>
              <Route path="tags" element={<Tags />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="settings/payment-methods" element={<PaymentMethods />}></Route>
              <Route path="settings/shipping-methods" element={<ShippingMethods />}></Route>
              <Route path="*" element={<h1>Not Found</h1>}></Route>

            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />}></Route>
              {/* <Route path="customers" element={<Customers />}></Route> */}
              <Route path="leads" element={<Leads />}>
                {" "}
              </Route>

              <Route path="add-lead" element={<AddLead />}></Route>
              <Route path="edit-lead" element={<EditLead />}></Route>
              <Route path="edit-event" element={<EditEvent />}></Route>
              <Route path="Vendors" element={<Vendors />}></Route>
              <Route path="add-vendor" element={<AddVendor />}></Route>
              <Route path="edit-vendor" element={<EditVendor />}></Route>
              <Route path="Quotes" element={<Quotes />}></Route>
              <Route path="add-quote" element={<AddQuote />}></Route>
              <Route path="edit-quote" element={<EditQuote />}></Route>
              <Route path="invoices" element={<Invoices />}></Route>
              <Route path="add-invoice" element={<AddInvoice />}></Route>
              <Route path="edit-invoice" element={<EditInvoice />}></Route>
              <Route path="Tickets" element={<Tickets />}></Route>
              <Route path="add-ticket" element={<AddTicket />}></Route>
              <Route path="edit-ticket" element={<EditTicket />}></Route>
              <Route path="Contacts" element={<Contacts />}></Route>
              <Route path="add-contact" element={<AddContact />}></Route>
              <Route path="edit-contact" element={<EditContact />}></Route>
              <Route path="users" element={<Users />}></Route>
              <Route path="add-user" element={<AddUser />}></Route>
              <Route path="edit-user" element={<EditUser />}></Route>
              <Route path="add-invoice" element={<AddUser />}></Route>
              <Route path="Events" element={<Events />}></Route>
              <Route path="add-event" element={<AddEvent />}></Route>

              <Route path="settings" element={<Settings />}></Route>
              <Route path="*" element={<h1>Not Found Page</h1>}></Route>
            </Route>

          </Routes>
        </ScrollToTop>


      </div>
    </HelmetProvider >
  );
}

export default App;
