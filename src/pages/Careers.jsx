import React from 'react'
import Card2 from '../Card2'
import Footer from '../Footer'

const Careers = () => {
  return (
    <div className='max-w-[1200px] m-auto'>
       <div className='flex justify-around items-center bg-[#141414] p-[20px] rounded-xl mt-[75px]'>
       <div className='w-[600px] bg-[#141414] flex flex-col gap-[20px]'>
         <h1 className='text-[30px] bg-[#141414] font-bold'>Build the Future with Us </h1>
        <p className='text-[#FFFFFFE5] bg-[#141414]'>We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.</p>
                <button className='bg-[#0A84FF] w-[250px] rounded-xl px-[10px] h-[40px] w-'>Explore Open Positions</button>

      </div>
      <img className='w-[300px] bg-[#141414]' src="/calogo1 2.png" alt="" />
      </div>

  <div className='bg-[#0B0B0B] rounded-2xl flex justify-around mt-[60px]   p-[40px]'>

<div className='flex bg-[#191919] p-[10px] rounded-2xl w-[180px] justify-around'>
  <p className='bg-[#191919]'>Departments</p>
  <svg className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
</div>
<div className='flex bg-[#191919] p-[10px] rounded-2xl w-[180px] justify-around'>
  <p className='bg-[#191919]'>Experience</p>
  <svg className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
</div>
<div className='flex bg-[#191919] p-[10px] rounded-2xl w-[180px] justify-around'>
  <p className='bg-[#191919]'>Job Type</p>
  <svg className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
</div>
<div className='flex bg-[#191919] p-[10px] rounded-2xl w-[180px] justify-around'>
  <p className='bg-[#191919]'>Workplace Type</p>
  <svg  className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down preview-icon"><path d="m6 9 6 6 6-6"/></svg>
</div>

<div className='flex items-center p-[10px] rounded-xl bg-[#191919]'>
  <input type="text" placeholder='Search by keywords... ' name="" id="" />
<svg className='bg-transparent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#459CF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>

</div>

</div>

<div className='mt-[120px] flex flex-col gap-[45px]'>
  <h1 className='text-[30px] text-center font-medium'>Open Position</h1>
    
 <div className='flex justify-center gap-[40px]'>  
<Card2 img = '/Icon Container (1).png' experience={'1+ year'} deadline={'30/09/2025'} skills = 'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.'  h1 = 'Web Designer' salary={'$45,000 - $60,000'}/>
<Card2 img = '/Icon Container (d1).png' experience={'2+ year'} deadline={'15/10/2025'} skills = 'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.'  h1 = 'Mobile App Developer' salary={'$55,000 - $75,000'}/>
</div>
 <div className='flex justify-center gap-[40px]'> {/*2taga*/}
<Card2 img = '/Icon Container (1).png' experience={'3+ year'} deadline={'20/11/2025'} skills = 'Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.'  h1 = 'Digital Marketing Specialist' salary={'$50,000 - $65,000'}/>
<Card2 img = '/Icon Container (d1).png' experience={'5+ year'} deadline={'05/12/2025'} skills = 'Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.'  h1 = 'Project Manager' salary={'$60,000 - $80,000'}/>
</div>

</div>


<img className='mt-[75px] w-[1000px] m-auto' src="/Frame 1707480641.png" alt="" />




<Footer/>


    </div>
  )
}

export default Careers