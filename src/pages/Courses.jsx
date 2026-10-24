import React from 'react'

const Courses = () => {
  return (
    <div>
      
      <div className=' flex  p-[30px] items-center justify-around'>
      <div className='  w-[350px] flex flex-col gap-[30px]'>
        <h1 className='text-[40px] font-bold '>Createx Online School is a leader in online studying</h1>
<div className='flex gap-[20px]'>
  <button className='text-[#F75E05] py-[10px] px-[15px] rounded-xl border border-[#F75E05]'>Explore events</button>
  <button className='bg-[#F75E05] py-[10px] px-[15px] rounded-xl text-white'>Browse courses</button>
</div>
      </div>
      <img className='w-[400px]' src="/illustrationd.png" alt="" />
    </div>
      <div className=' flex  p-[30px] items-center justify-around'>
              <img className='w-[400px]' src="/elkfnkn;lekn.png" alt="" />
      <div className='  w-[350px] flex flex-col  gap-[30px]'>
        <div>
          <h1 className='text-[30px]'><span className='font-bold text-[#FF3F3A] '>1200</span> students graduated</h1>
          <h1 className='text-[30px]'><span className='font-bold text-[#FF3F3A] '>84</span> completed courses</h1>
          <h1 className='text-[30px]'><span className='font-bold text-[#FF3F3A] '>16</span> qualified tutors</h1>
          <h1 className='text-[30px]'><span className='font-bold text-[#FF3F3A] '>5</span> years of experience</h1>
        </div>
      </div>
    </div>

 <section className="h-[700px] mt-[90px] items-center pt-[50px]">
        <div className="flex justify-around items-center">
          <h1>Our blog Latest posts</h1>
          <button className="text-[white] border bg-[#F75E05] p-[10px]">
            Go to blog
          </button>
        </div>
        <div className="flex justify-center gap-[25px] items-center mt-[100px]">
          <div className="flex gap-[20px]">
            <div className=" w-[300px] h-[400px] ">
              <img
                src="/public/image1.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <img src="/public/content.png" alt="" />
              </div>
            </div>
            <div className=" w-[300px] h-[400px] ">
              <img
                src="/public/image1.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <img src="/public/content.png" alt="" />
              </div>
            </div>
            <div className=" w-[300px] h-[400px] ">
              <img
                src="/public/image1.png"
                className="w-[100%] h-[70%]"
                alt=""
              />
              <div className="flex flex-col gap-[10px] w-[62x%]">
                <img src="/public/content.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="h-[400px] bg-[#ef720c67] text-center items-center">
        <div className="flex flex-col gap-[30px] pt-[100px]">
          <h1 className="text-[30px]">
            Subscribe to the Createx School <br /> announcements
          </h1>
          <div>
            <input
              type="search"
              placeholder="Your working email
Subscribe"
              className="bg-[white] p-[10px] w-[400px] rounded-2xl"
            />
            <button className="text-[white] border bg-[#F75E05] p-[10px] rounded-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
<footer>
        <img src="/public/Footer.png" className="h-[300px] w-[100%]" alt="" />
      </footer>
    </div>
    
  )
}

export default Courses