import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router';
import ScrollToTop from './components/utils/ScrollToTop';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './pages/DashboardLayout/DashboardLayout';
import HomePage from './pages/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import Customers from './pages/Dashboard/Customer/Customers';
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
              <Route path="*" element={<h1>test</h1>}></Route>
             
            </Route>

          </Routes>
        </ScrollToTop>


      </div>
    </HelmetProvider >
  );
}

export default App;
