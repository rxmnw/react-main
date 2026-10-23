import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='max-w-300 m-auto'>
        <Link className='font-bold  hover:underline hover:text-[#004900] ' to="/">Биржа</Link>
        
      <Outlet />
    </div>
  )
}

export default Layout