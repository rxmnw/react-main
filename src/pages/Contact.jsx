import React from 'react'
import Footer from '../Footer'

const Contact = () => {
  return (
    < >
       <div className='flex justify-around items-center bg-[#141414] p-[10px] rounded-xl mt-[75px]'>
       <div className='w-[600px] bg-[#141414] flex flex-col gap-[20px]'>
         <h1 className='text-[30px] bg-[#141414] font-bold'>Contact Us </h1>
        <p className='text-[#FFFFFFE5] bg-[#141414]'>Get in touch with our team to discuss how we can help transform your business.
We’re here to help.</p>
                <button className='bg-[#0A84FF] w-[250px] rounded-xl px-[10px] h-[40px] w-'>Get In Touch Now</button>

      </div>
      <img className='w-[300px] bg-[#141414]' src="/calogo1 2 (1).png" alt="" />
      </div>



      <div className='flex justify-between items-center'> 
        
<div className='flex flex-col gap-[20px] p-[45px] w-[48%] rounded-xl mt-[75px] bg-[#141414]'>
  <h1 className='bg-transparent'>Apply Now</h1>
  <div className='flex bg-transparent items-center gap-[20px]'>
<input className='border border-gray-800 rounded-[5px] w-[80%] py-[5px] px-[10px]' type="text" placeholder='First Name*' name="" id="" />
<input  className='border border-gray-800 rounded-[5px] w-[80%] py-[5px] px-[10px]' type="text" placeholder='Last Name*' name="" id="" />
  </div>
  <input className='border border-gray-800 rounded-[5px] w-[100%] py-[5px] px-[10px]' placeholder='Email*' type="text" name="" id="" />
  <input className='border border-gray-800 rounded-[5px] w-[100%] py-[5px] px-[10px]' placeholder='Headline (Optional)' type="text" name="" id="" />
  <input className='border border-gray-800 rounded-[5px] w-[100%] py-[5px] px-[10px]' placeholder='Phone Number' type="text" name="" id="" />
<textarea  className='border border-gray-800 rounde rounded-[5px] w-[100%] py-[5px] px-[10px]' placeholder='Application Submission' name="" id=""></textarea>

<button className='bg-[#0A84FF]  hover:bg-[#146dc5]  rounded-xl py-[10px]'>Send </button>
</div>

<div className='bg-[#141414] w-[48%] p-[30px] flex-col h-[300px] flex gap-[20px] rounded-2xl'>
  <h1 className='font-bold bg-transparent'>Contact Information</h1>

<div className='flex bg-transparent items-center gap-[10px]'>
  <svg className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#459CF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  <div className='flex flex-col bg-transparent'>
    <p className='bg-transparent'>Email</p>
    <p className='bg-transparent'>contact@catalystanalytics.io</p>
  </div>
</div>

<div className='flex bg-transparent items-center gap-[10px]'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#459CF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone preview-icon"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>  <div className='flex flex-col bg-transparent'>
    <p className='bg-transparent'>Phone</p>
    <p className='bg-transparent'>(469) 712-4672</p>
  </div>
</div>
 
<div className='flex bg-transparent items-center gap-[10px]'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#459CF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>  <div className='flex flex-col bg-transparent'>
    <p className='bg-transparent'>Office</p>
    <p className='bg-transparent'> 
5511 Parkcrest Dr, Suite 103
Austin, TX 78731
United States</p>
  </div>
</div>

</div>



      </div>

{/* <div className='w-[48%] bg-[#141414] rounded-2xl mt-[10px] m-auto p-[25px] flex flex-col gap-[10px]  '>
  <h1 className='bg-transparent font-bold'>Contact Information</h1>
  <p className='bg-transparent text-gray-400'>Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts. We'll help you understand how our solutions can benefit your business.</p>
<button className='bg-[#0A84FF]  hover:bg-[#146dc5]  rounded-xl py-[10px] px-[20px]'>Book a Meeting</button>
</div> */}

<Footer/>
      
    </>
  )
}

export default Contact