import React from 'react'

const Card = ({img,h1,p, textDot, textDot2, textDot3, textDot4, textDot5}) => {
  return (
    <div className='bg-[#141414] p-[40px] w-[500px] rounded-3xl flex flex-col items-center text-center gap-[20px]'>
        <img className='bg-[#141414] w-[180px]' src={`${img}`} alt="" />
        <h1 className='bg-[#141414] text-xl font-semibold' >{h1}</h1>
        <p className='bg-[#141414]' >{p}</p>

 <div className='flex bg-[#141414] gap-[20px] text-left'> 
    <div className='flex bg-[#141414] flex-col gap-[20px]'>
<div className='flex bg-[#141414] gap-[10px]'>
    <svg className='bg-[#141414]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/></svg>
<p className='bg-[#141414]'>{textDot}</p>
</div>
<div className='flex bg-[#141414] gap-[10px]'>
    <svg className='bg-[#141414]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/></svg>
<p className='bg-[#141414]'>{textDot2}</p>
</div>
<div className='flex bg-[#141414] gap-[10px]'>
    <svg className='bg-[#141414]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/></svg>
<p className='bg-[#141414]'>{textDot3}</p>
</div>
    </div>
    <div className='flex bg-[#141414] flex-col gap-[20px]'>
<div className='flex bg-[#141414] gap-[10px]'>
    <svg className='bg-[#141414]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/></svg>
<p className='bg-[#141414]'>{textDot4}</p>
</div>
<div className='flex bg-[#141414] gap-[10px]'>
    <svg className='bg-[#141414]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/></svg>
<p className='bg-[#141414]'>{textDot5}</p>
</div>
    </div>
</div>

<div className='flex bg-[#262626] items-center gap-[10px] p-[5px] pl-[15px] rounded-xl'>
    <p className='bg-[#262626]'>Book a Call</p>
    <div className='bg-[#0A84FF] rounded-lg p-[5px]'>
        <svg className='bg-[#0A84FF]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
    </div>
</div>

    </div>
  )
}

export default Card