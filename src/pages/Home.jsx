import React from 'react'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
        <div className='flex items-center justify-center max-w-[1200px] mx-auto'>
           <div className='w-[600px]  flex flex-col gap-[25px]'>
             <h1 className='text-[60px] font-bold'>Transforming Data into <span className='bg-[#0A84FF] rounded-xl p-[3px]'>Decisions</span></h1>
            <p className='text-[gray]'>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
                <button className='bg-[#0A84FF]  hover:bg-[#146dc5]  w-[180px] rounded-xl px-[10px] h-[40px]'>Book a Meeting</button>
             <img className='w-[300px]' src="/clients.png" alt="" />
              </div>  
               <img className='w-[650px]' src="/robot area.png" alt="" />
         </div>

         <div className='flex border-y p-[10px] border-[#0A84FF]'>
            <img src="/Card.png" alt="" />
            <img src="/Card2.png" alt="" />
            <img src="/Card3.png" alt="" />
            <img src="/Card4.png" alt="" />
            <img src="/Card5.png" alt="" />
            <img src="/Card6.png" alt="" />
         </div>

         <div className='flex flex-col items-center gap-[50px] mt-[70px]'>
        <h1 className='text-[25px] font-medium w-[450px] text-center'>Our Ultimate Set of Services for Your Ideas Implementation</h1>
   <div className='flex gap-[50px]'>  

<div className='bg-[#141414] p-[15px] w-[300px] flex flex-col gap-[5px] rounded-2xl'>
    <img className='bg-[#141414]' src="/72355892508 1.png" alt="" />
    <h3 className='bg-[#141414] text-center  text-[20px]'>Predictive Analytics</h3>
    <p className='bg-[#141414] text-center'>Forecast trends and make data-driven decisions with our advanced ML models.</p>
</div>

<div className='bg-[#141414] p-[15px] w-[300px] flex flex-col gap-[5px] rounded-2xl'>
    <img className='bg-[#141414]' src="/72355892508 2.png" alt="" />
    <h3 className='bg-[#141414] text-center  text-[20px]'>AI Consulting </h3>
    <p className='bg-[#141414] text-center'>Expert guidance on implementing AI solutions for your business needs.</p>
</div>

<div className='bg-[#141414] p-[15px] w-[300px] flex flex-col gap-[5px] rounded-2xl'>
    <img className='bg-[#141414]' src="/72355892508 3.png" alt="" />
    <h3 className='bg-[#141414] text-center  text-[20px]'>Data Engineering</h3>
    <p className='bg-[#141414] text-center'>Build robust data pipelines and infrastructure for ML operations.</p>
</div>

<div>

</div>

  </div>
         </div>
        
         <div className='mt-[75px]'>
              <div className="max-w-[1200px] mx-auto">
  <h1 className="text-[50px]  text-center mt-[100px]">
    Frequently Asked Questions
  </h1>
  <div>
    <div className="w-[80%] m-auto h-[250px] bg-[#1E1E1E] rounded-3xl mt-[100px] p-[10px]">
      <div className="flex justify-around bg-[#1E1E1E] items-center">
        <img className='bg-[#1E1E1E]' src="/Container.png" alt="" />
        <h1 className='bg-[#1E1E1E]'>What services does Catalyst Analytics provide?</h1>
        <img className= "bg-[#1E1E1E] w-[40px] h-[40px]" src="/Icon.png" alt="" />
      </div>
      <h1 className="w-[70%]   bg-[#1E1E1E]  m-auto mt-[20px] text-[19px]">
        Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
      </h1>
    </div>
    <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
        <img className='rounded-xl' src="/Container (1)d.png" alt="" />
        <h1 className='bg-[#1E1E1E]' >Lorem Ipsum is simply dummy text of the printing </h1>
        <img className= "bg-[#1E1E1E] w-[40px] h-[40px]" src="/Icon (1).png" alt="" />
    </div>
    <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
        <img className='rounded-xl' src="/Container (1).png" alt="" />
        <h1 className='bg-[#1E1E1E]'>Lorem Ipsum is simply dummy text of the printing  </h1>
        <img className="bg-[#1E1E1E] w-[40px] h-[40px]" src="/Icon (1).png" alt="" />
    </div>
    <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
        <img className='rounded-xl' src="/Container (2).png" alt="" />
        <h1 className='bg-[#1E1E1E]'>Lorem Ipsum is simply dummy text of the printing  </h1>
        <img className="bg-[#1E1E1E] w-[40px] h-[40px]" src="/Icon (1).png" alt="" />
    </div>
    <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
        <img className='rounded-xl' src="/Container (3).png" alt="" />
        <h1 className='bg-[#1E1E1E]'>Lorem Ipsum is simply dummy text of the printing </h1>
        <img className="w-[40px] h-[40px] bg-[#1E1E1E]" src="/Icon (1).png" alt="" />
    </div>
  </div>
</div>
         </div>
 

<Footer/>

    </div>
  )
}

export default Home