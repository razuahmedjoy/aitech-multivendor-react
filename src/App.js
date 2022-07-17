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

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard/>}></Route>
              <Route path="customers" element={<Customers/>}></Route>
              <Route path="invoices" element={<Invoices/>}></Route>
              <Route path="add-invoice" element={<AddInvoice/>}></Route>
              <Route path="orders" element={<AllOrders/>}></Route>
              <Route path="users" element={<AllUsers/>}></Route>
              <Route path="products" element={<AllProducts/>}></Route>
              <Route path="add-product" element={<AddProducts/>}></Route>
              <Route path="edit-product" element={<EditProduct/>}></Route>
              <Route path="categories" element={<Categories/>}></Route>
              <Route path="tags" element={<Tags/>}></Route>
              <Route path="settings" element={<Settings/>}></Route>
              <Route path="*" element={<h1>test</h1>}></Route>
             
            </Route>

          </Routes>
        </ScrollToTop>


      </div>
    </HelmetProvider >
  );
}

export default App;
