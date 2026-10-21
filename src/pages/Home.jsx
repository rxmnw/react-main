import React from 'react'

const Home = () => {
  return (
    <div className='max-w-300 w-full m-auto mt-[50px]'>
     <img src="/main banner.png" alt="" /> 

<div className='flex flex-col gap-[15px] justify-center items-center mt-[75px]'>
  <h1 className='font-medium text-[33px]'>Каталог товаров</h1>
  <p className='text-gray-500 w-[270px] text-center'>Небольшое описание блока размеров в две строки</p>
  
  <img src="/public/cards.png" alt="" />

<button className='rounded-3xl py-[10px] px-[25px] hover:bg-[#097042] bg-[#00552F] font-medium text-white'>ПЕРЕЙТИ В КАТАЛОГ</button>

</div>

<div className='flex flex-col gap-[28px] justify-center items-center mt-[100px]'>

  <h1 className='text-[35px] font-medium'>О компании</h1>
<p>ООО «КД-ГРУПП» — это команда единомышленников и профессионалов в таких направлениях, как сельскохозяйственная и специальная техника. Основной состав компании сформирован из инженеров-производственников, которые не по наслышке знают все трудности и проблемы, с которыми Вам приходится сталкиваться в процессе работы с техникой. Мы всегда готовы прийти Вам на помощь.</p>
<p>А также, наша компания предлагает к поставке прутковые транспортеры и комплектующие собственного производства под брендом MEDO. В кратчайшие сроки выполним заказ на изготовление транспортера для сельхозтехники по уборке урожая овощных культур. Дополнительно, мы оказывает услуги по восстановлению ваших б/у транспортёров с заменой всех ремней, пластинок, заклёпок и замков.</p>

<div className='flex gap-[50px]'>

<div className='flex flex-col  items-center'>
  <h2 className='text-[#00552F] text-[45px] font-extrabold'>500</h2>
  <p className='mt-[-10px] text-[23px] font-medium'>товаров</p>
</div>

<div className='flex flex-col  items-center'>
  <h2 className='text-[#00552F] text-[45px] font-extrabold'>300+</h2>
  <p className='mt-[-10px] text-[23px] font-medium'>клиентов</p>
</div>

<div className='flex flex-col  items-center'>
  <h2 className='text-[#00552F] text-[45px] font-extrabold'>15+</h2>
  <p className='mt-[-10px] text-[23px] font-medium'>специалистов</p>
</div>
  
</div>

<img src="/public/gallery.png" alt="" />

</div>

    </div>
  )
}

export default Home