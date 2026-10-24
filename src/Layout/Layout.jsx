import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <div className='max-w-300 m-auto'>
     <div className=' bg-[#FEDAD5] flex items-center justify-around p-[10px]'>
      <img src="/public/logo.png" alt="" />
<div className='flex gap-[25px]'>
  <Link className='font-bold hover:underline' to = '/'>About Us</Link>
  <Link className='font-bold hover:underline' to = '/courses'>Courses</Link>  
  <p>Events</p>
  <p>Blog</p>
  <p>Contacts</p>
</div>
<div className='flex gap-[20px] '>
  <button className='bg-[#F75E05] py-[15px] px-[20px] rounded-xl text-white'>Get consultation</button>
<div className='flex  items-center    '>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round preview-icon"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>   
    <button className='  py-[15px] px-[20px] rounded-xl text-gray-700'>Log in / Register</button>
</div>
</div>
    </div>
    <Outlet/>
   </div>

  )
}

export default Layout