import React from 'react'
import { Link, Outlet } from 'react-router'
import ThemeToggle from '../components/ThemeToggle'

const Layout = () => {
  return (
    <div >
        <nav className='bg-[black] text-[white] p-[15px] flex justify-center gap-[20px]'>
          <ThemeToggle />
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/login'}>Login</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout