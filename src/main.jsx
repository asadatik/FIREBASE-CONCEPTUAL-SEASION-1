import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root.jsx/Root';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import Home from './Pages/Home/Home';
import AuthProvider from './Provider/AuithProvider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
     { path: "/",
      element:<Home>
        <h1>Inside home</h1>
      </Home>
    },
    
    {
      path: "/login",
    element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register> 
    },
    {

    },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  
  
  
  </React.StrictMode>,
)
