import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import AuthFlow from './pages/AuthFlow';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthFlow>
      <Layout/>
    </AuthFlow>,
    children : [
      {
        index : true , 
        element: <Home/>
      },
      {
        path : 'about' , 
        element: <About/>
      },
      {
        path : 'login' , 
        element: <Login/>
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