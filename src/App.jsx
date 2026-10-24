import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
  
 const App = () => {
  const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
   index:true,
    element: <AboutUs/>,
  },
      {
  path:'courses',
    element: <Courses/>,
  },
    ]
  }
]);
  return (
  <RouterProvider router={router} />   
  )
}

export default App

 