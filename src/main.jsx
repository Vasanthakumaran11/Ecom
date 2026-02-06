import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserTypeSelection from './components/Auth/UserTypeSelection';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register.jsx';
import CustomerHome from './components/customer/Home.jsx';
import FarmerDashboard from './components/Vendor/Dashboard.jsx';
import Cart from './components/customer/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTypeSelection />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/customer/home",
    element: <CustomerHome />
  },
  {
    path: "/farmer/dashboard",
    element: <FarmerDashboard />
  },
  {
    path: "/cart",
    element: <Cart />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
