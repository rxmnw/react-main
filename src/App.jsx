import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
const Works = lazy(() => import ("./pages/Works"))
 
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
  {
    path:'/vorky',
    element:
    <Suspense fallback = {<div><h1>LOADING...........</h1></div>}>
      <Works/>
    </Suspense>
  }
    ]
  }
]);
  return (
  <RouterProvider router={router} />
  )
}

export default App

//app.jsx