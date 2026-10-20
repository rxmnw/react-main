 import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';

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
        path : 'catalog',
        element : <Catalog/>
      },
      {
        path : 'aboutUs',
        element : <AboutUs/>
      },
    ]
  },
]);
   return (
     <>
       <RouterProvider router={router} />,
      </>
   )
 }
 
 export default App