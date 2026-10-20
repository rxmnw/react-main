import React from 'react'
import Layout from './Layout/Layout'
 import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
  import Home from './pages/Home'; 
import Products from './pages/Products';
import ProductsById from './pages/ProductsById';
 
 const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'products', 
        element : <Products/>
      },
      {
        path:'products', 
        element : <ProductsById/>
      },
       
    ]
  }
]);
   return (
      <RouterProvider router={router} />
   )
 }
 
 export default App