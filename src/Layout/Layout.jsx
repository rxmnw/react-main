import React from 'react'
import {Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
        <nav className='flex gap-10 p-3  bg-black text-white items-center border-b  justify-around '>
            <img src="/Logo.png" alt="" />
           <div className='flex gap-[30px]'>
             <Link className='hover:underline' to={'/'}>Home</Link>
            <Link className='hover:underline' to={'/services'}>Services</Link>
            <Link className='hover:underline' to={'/careers'}>Careers</Link>
            <Link className='hover:underline' to={'/careerDetails'}>Career Details</Link>
            <Link className='hover:underline' to={'/Contact'}>Contact</Link>
           </div>
            <button className='bg-[#0A84FF] hover:bg-[#146dc5] rounded-xl px-[10px] h-[40px]'>Contact Us</button>
        </nav>
         <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout