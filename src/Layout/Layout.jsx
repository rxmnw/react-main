import React from 'react'
import {Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-10'>
         
             <Link to={'/'}>Home</Link>
             <Link to={'/product'}>Products</Link>
            
         <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout