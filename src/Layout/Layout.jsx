import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='max-w-300 m-auto'>
      <nav className='flex justify-around items-center h-[100px] border-b border-dashed border-black p-[20px]'>
        <img src="/Слой 2.png" alt="" />
        <Link className='font-bold  hover:underline hover:text-[#004900] ' to="/">Биржа</Link>
        <Link className='font-bold  hover:underline hover:text-[#004900] ' to="/vorky">Ворки</Link>
        <Link className='font-bold  hover:underline hover:text-[#004900] ' to="/konkursi">Конкурсы</Link>
         <Link className='font-bold  hover:underline hover:text-[#004900] ' to="/sozdatzakaz">Создать заказ</Link>
        <div className='flex gap-[10px]'>
          <button className='text-[#1DBF73] bg-[#F2F0FE] rounded-full p-[10px]'>Регистрация</button>
          <button className='bg-[#1DBF73] text-[#F2F0FE] rounded-full p-[10px]'>Войти</button>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout