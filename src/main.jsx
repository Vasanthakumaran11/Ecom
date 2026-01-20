import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from "./components/Auth/Login";
import Register from './components/Auth/Register.jsx';
import Home from './components/customer/Home.jsx';
import {createBrowserRouter ,Routes,Route, BrowserRouter,RouterProvider,useNavigate} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
