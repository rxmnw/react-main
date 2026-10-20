import React from 'react'

const Footer = () => {
  return (
    <>
<hr  className='mt-[75px]  '/>
   <div className='flex flex-col gap-[40px] max-w-[1200px] m-auto'>
     <div className='flex items-center justify-around mt-[90px] '>
       <img src="/public/Logo.png" alt="" />
      <div className='flex gap-[25px]'>
        <p>Home</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>About Us</p>
        <p>Careers</p>
      </div>
<img src="/Sub Container.png" alt="" />
    </div>

<div className='flex justify-around'>
  <div className='flex  gap-[30px]'>
  <div className='flex items-center gap-[10px]'>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
<p>contact@catalystanalytics.io</p>
</div>
<div className='flex items-center gap-[10px]'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone preview-icon"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg><p>+1 (469) 712-4672</p>
</div>
<div className='flex items-center gap-[10px]'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A84FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
<p>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
</div>
</div>
<div className='flex gap-[10px]'>
  <p className='text-[gray]'>Privacy Policy</p>
  <p className='text-[gray]'>Terms of Service</p>
</div>

</div>
<p className='text-center text-[gray]'>© 2025 Catalyst Analytics. All rights reserved.</p>
   </div>
    </>
  )
}

export default Footer