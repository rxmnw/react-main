import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Layout/Layout';
import About from './pages/Aboutus';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        index : true, 
        element : <Home/>
      }, 
      {
        path : "about", 
        element : <About/>
      }, 
      {
        path : "login", 
        element : <Login/>
      }, 
    ]
  },
]);


  return (    
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App