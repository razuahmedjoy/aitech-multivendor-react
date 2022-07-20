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
              <Route path="invoices" element={<Invoices />}></Route>
              <Route path="add-invoice" element={<AddInvoice />}></Route>
              <Route path="orders" element={<AllOrders />}></Route>
              <Route path="users" element={<AllUsers />}></Route>
              <Route path="add-user" element={<AddUser />}></Route>
              <Route path="products" element={<AllProducts />}></Route>
              <Route path="add-product" element={<AddProducts />}></Route>
              <Route path="edit-product" element={<EditProduct />}></Route>
              <Route path="categories" element={<Categories />}></Route>
              <Route path="tags" element={<Tags />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="*" element={<h1>test</h1>}></Route>

            </Route>

          </Routes>
        </ScrollToTop>


      </div>
    </HelmetProvider >
  );
}

export default App;
