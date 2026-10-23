import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import Birzha from './pages/Birzha';
 import Competitions from './pages/Competitions';
import CreateWork from './pages/CreateWork';
import CreateOrder from './pages/CreateOrder';
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
  },
  {
    path:'/konkursi',
    element:<Competitions/>
  },
  {
    path:'/sozdatwork',
    element:<CreateWork/>
  },
  {
    path:'/sozdatzakaz',
    element:<CreateOrder/>
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