import React from 'react'

const Card2 = ({ img, h1, salary, experience, deadline, skills }) => {
  return (
    <div className="w-[440px] max-w-[1200px] bg-[#1A1A1A] text-white rounded-2xl p-6 flex flex-col gap-6">
       <div className="flex items-center gap-4 bg-transparent">
        <div className="w-12 h-12 shrink-0 bg-[#262626] rounded-xl flex items-center justify-center">
          <img src={img} alt="" className="w-6 h-6 object-contain bg-transparent" />
        </div>
        <h1 className="bg-transparent text-xl font-medium uppercase">{h1}</h1>
      </div>

       <div className="flex flex-col gap-3 bg-transparent">
        <div className="self-start flex items-center gap-2 bg-[#262626] rounded-full px-4 py-2 text-sm">
          <span className="bg-transparent text-gray-400">Salary</span>
          <span className="bg-transparent text-gray-400">•</span>
          <span className="bg-transparent">{salary} per year</span>
        </div>

        <div className="flex flex-wrap gap-3 bg-transparent">
          <div className="flex items-center gap-2 bg-[#262626] rounded-full px-4 py-2 text-sm">
            <span className="bg-transparent text-gray-400">Experience</span>
            <span className="bg-transparent text-gray-400">•</span>
            <span className="bg-transparent">{experience}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#262626] rounded-full px-4 py-2 text-sm">
            <span className="bg-transparent text-gray-400">Deadline</span>
            <span className="bg-transparent text-gray-400">•</span>
            <span className="bg-transparent">{deadline}</span>
          </div>
        </div>
      </div>

       <section className="flex flex-col gap-2 bg-transparent">
        <h2 className="bg-transparent text-lg font-medium  ">Skills</h2>
        <p className="bg-transparent text-sm text-gray-400 ">{skills}</p>
      </section>

       <button className="w-full bg-[#0A84FF]   rounded-xl py-3  font-medium">
        Apply Now
      </button>
    </div>
  )
}

export default Card2