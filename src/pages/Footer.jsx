import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#EFEFEF] w-full  mt-[100px]'>
        <div className='max-w-[1200px] m-auto   p-[50px] flex flex-col gap-[50px]'>
        
<div className='flex justify-between items-center'>
    <img src="/logo.png" alt="" />
    <img src="/social.png" alt="" />
</div>


<div className='flex justify-around'>

    <div className='flex flex-col gap-[7px]'>
    <h1 className='text-[20px] font-medium'>Информация</h1>
    <p>О нас</p>
    <p>Партнерам</p>
    <p>Карьера</p>
    <p>Контакты</p>
</div>

    <div className='flex flex-col gap-[7px] w-[200px]'>
    <h1 className='text-[20px] font-medium'>Каталог</h1>
    <p>Свеклоуборочная техника</p>
    <p>Картофелеуборочная техника</p>
    <p>Транспортеры MEDO</p>
    <p>Комплектующие MEDO</p>
</div>

    <div className='flex flex-col gap-[7px]'>
    <h1 className='text-[20px] font-medium'>Блог</h1>
    <p>Новости</p>
    <p>События</p>
</div>

    <div className='flex flex-col gap-[7px] w-[200px]'>
    <h1 className='text-[20px] font-medium'>Адрес</h1>
    <p>юридический и фактический:</p>
    <p className='font-bold'>117638, Россия, г. Москва, ул. Криворожская, д. 6А, стр. 2,  пом. 236</p>
    <p>адрес производства:</p>
    <p>г. Брянск, Московский проезд, д10а</p>
</div>

    <div className='flex flex-col gap-[7px]'>
    <h1 className='text-[20px] font-medium'>Контакты</h1>
    <p>звонок бесплатный</p>
    <h1 className='font-bold text-[24px]'>8 800 505 72 32</h1>
    <p>электронная почта</p>
    <h1 className='font-bold text-[24px]'>info@kd-grupp.com</h1>
<button className='bg-transparent border hover:bg-[#20945ad0] hover:text-white border-[#36895F] rounded-3xl text-[#36895F] py-[10px] px-[20px] font-medium'>написать нам</button>
</div>


</div>

 <div className='flex justify-between'>
    <p>© 2020 ООО «КД-Групп». Все права защищены</p>
    <p>Разработка и продвижение SilverDuck</p>

 </div>

        
    </div>
    </div>
  )
}

export default Footer