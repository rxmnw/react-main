import React from 'react'
 import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
   < >
     <div className='p-[10px] bg-[black] text-[white] flex justify-center'>
       <Link className='p-3' to = '/'>Home</Link> 
       <Link className='p-3' to = '/about'>About</Link>
       <Link className='p-3' to = '/login'>Login</Link>
    </div>
       <Outlet/> 
   </>
) 
}       