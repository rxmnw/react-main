import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import Birzha from './pages/Birzha';
import Works from './pages/Works';
import Competitions from './pages/Competitions';
import CreateWork from './pages/CreateWork';
import CreateOrder from './pages/CreateOrder';
 
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
    element:<Works/>
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