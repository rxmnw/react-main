import React from 'react'
import Card2 from '../Card2'
import Footer from '../Footer'

const CareerDetails = () => {
  return (
    <div className='max-w-[1200px] m-auto'>
<div className="w-full h-[300px] rounded-xl flex flex-col mt-[70px] gap-[20px] justify-center items-center bg-[url('/image%206.png')] bg-cover bg-center">
  <h1 className="text-lg bg-transparent text-[60px] font-bold">Web Designer</h1>

  <button className="bg-[#0A84FF]  hover:bg-[#146dc5]  px-[50px] py-[10px] rounded-xl">
    Apply Now
  </button>
</div>

 <div className='mt-[80px] flex justify-between'> {/*Baroi flex*/}

<div className='bg-[#1A1A1A] w-[720px] flex flex-col gap-[75px] p-[40px] rounded-2xl'>
  <div className='flex bg-transparent flex-col gap-[30px]'>
    <h1 className='bg-transparent text-[30px]'>About this position</h1>
    <p className='bg-transparent text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
    <p className='bg-transparent text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
    <p className='bg-transparent text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>

  <div className='flex bg-transparent flex-col gap-[30px]'>
    <h1 className='bg-transparent text-[30px]'>Responsibilities</h1>
    <p className='bg-transparent text-gray-400'>-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        <p className='bg-transparent text-gray-400'>-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

    <p className='bg-transparent text-gray-400'>-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
  </div>

  <div className='flex bg-transparent flex-col gap-[30px]'>
    <h1 className='bg-transparent text-[30px]'>Requirements</h1>
    <p className='bg-transparent text-gray-400'>-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
        <p className='bg-transparent text-gray-400'>-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

    <p className='bg-transparent text-gray-400'>-Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
  </div>

  <div className='flex bg-transparent flex-col gap-[30px]'>
    <h1 className='bg-transparent text-[30px]'>Benefits</h1>
    <p className='bg-transparent text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>
    <p className='bg-transparent text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
    <p className='bg-transparent text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>

<div className='bg-[#1A1A1A] p-[40px] flex flex-col rounded-2xl h-[550px] w-[450px] gap-[15px]'>
  <h1 className='bg-transparent text-[35px]'>Web Designer</h1>
  <div className='bg-[#1F1F1F] px-[15px] py-[10px] rounded-3xl w-[300px]'>
    <h1  className='bg-transparent'>Salary - $45.000-$60000 per year</h1>
  </div>
  <div className='bg-[#1F1F1F] px-[15px] py-[10px] rounded-3xl w-[300px]'>
    <h1 className='bg-transparent'>Experience +1year</h1>
  </div>
  <div className='bg-[#1F1F1F] px-[15px] py-[10px] rounded-3xl w-[300px]'>
    <h1 className='bg-transparent'>Deadline - 30/09/2025</h1>
  </div>
  <h1 className='bg-transparent text-[30px]'>SKILLS</h1>
  <p className='bg-transparent'>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</p>
<button className='bg-[#0A84FF]  hover:bg-[#146dc5]  py-[10px] px-[40px] rounded-xl'>Apply Now</button>
</div>

</div>


<div className='flex flex-col gap-[20px] p-[45px] rounded-xl mt-[75px] bg-[#141414]'>
  <h1 className='bg-transparent'>Apply Now</h1>
  <div className='flex bg-transparent items-center gap-[20px]'>
<input className='border border-gray-800 rounded-[5px] w-[450px] py-[5px] px-[10px]' type="text" placeholder='First Name*' name="" id="" />
<input  className='border border-gray-800 rounded-[5px] w-[450px] py-[5px] px-[10px]' type="text" placeholder='Last Name*' name="" id="" />
  </div>
  <input className='border border-gray-800 rounded-[5px] w-[650px] py-[5px] px-[10px]' placeholder='Email*' type="text" name="" id="" />
  <input className='border border-gray-800 rounded-[5px] w-[650px] py-[5px] px-[10px]' placeholder='Headline (Optional)' type="text" name="" id="" />
  <input className='border border-gray-800 rounded-[5px] w-[650px] py-[5px] px-[10px]' placeholder='Phone Number' type="text" name="" id="" />
<textarea  className='border border-gray-800 rounde rounded-[5px] w-[850px] py-[5px] px-[10px]' placeholder='Application Submission' name="" id=""></textarea>

<button className='bg-[#0A84FF]  hover:bg-[#146dc5]  rounded-xl py-[10px]'>Submit Application</button>
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

<Footer/>

    </div>
  )
}

export default CareerDetails