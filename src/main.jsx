import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from "./components/Auth/Login";
import Register from './components/Auth/Regiser.jsx';
import Home from './components/customer/Home.jsx';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/home",
    element: <Home/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
