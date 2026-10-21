import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from '../Layout/Layout';
import Birzha from './pages/Birzha';

const App = () => {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
   index:true,
    element: <Birzha/>,
  },
  
    ]
}
]);
  return (
  <RouterProvider router={router} />
  )
}

export default App