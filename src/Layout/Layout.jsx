import React from 'react'
import { Link, Outlet } from "react-router";
import Footer from '../pages/Footer';

const Layout = () => {
  return (
    <div className='max-w-[1200px] m-auto flex flex-col p-[10px] gap-[20px]'>
<nav className='flex  items-center gap-[20px] justify-around'>
  
<img src="/logo.png" alt="" />
<p className='w-[280px] text-[15px]'>Качественные детали и узлы для сельскохозяйственной техники</p>

<div className='flex flex-col w-[180px]  '>
  <p className='text-right'>звонок бесплатный</p>
  <div className='flex gap-[10px] items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone preview-icon"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
 <p className='text-[15px] font-medium' >8 800 505 72 32</p>
  </div>
</div>

<div className='flex flex-col w-[200px]  '>
  <p className='text-right'>отвечаем быстро</p>
  <div className='flex gap-[10px] items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
 <p className='text-[14px] font-medium' >info@kd-grupp.com</p>
  </div>
</div>

<div className='flex  items-center'>
<img src="/вк.png" alt="" />
<img src="/buttons.png" alt="" />
</div>

</nav>

<nav className='flex  items-center justify-between'>
  <div className='flex gap-[55px]'>
    <Link className='hover:underline hover:text-[#36895F] font-bold' to={'/'}>Главная</Link>
  <Link className='hover:underline hover:text-[#36895F] font-bold' to={'/catalog'}>Каталог</Link>
  <Link className='hover:underline hover:text-[#36895F] font-bold' to={'aboutUs'}>О нас</Link>
  <h1>Новости</h1>
  <h1>Партнеры</h1>
  <h1>Контакты</h1>
  </div>
<div className='flex border p-[7px] rounded-2xl bg-[#F3F3F3] gap-[5px] w-[280px] border-gray-500'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
    <input  type="text" placeholder='поиск по каталогу' name="" id="" />

  </div>
  
  </nav>

      <div>
        <Outlet/>
      </div>

<Footer/>

    </div>
  )
}

export default Layout