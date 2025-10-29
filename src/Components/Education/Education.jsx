import React from 'react'
import { education } from '../../constants'

function Education() {
  return (
    <section id='education'
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
      style={{
        background: `
      linear-gradient(
        to bottom,
       #050414 0%,
      #080628 15%,
      #0a0735 30%,
      #0e0945 50%,
      #120b56 70%,
      #160d66 90%,   /* keep previous dark blue */
      #1a0033 100%   /* dark purple at the very bottom */
      )
    `,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 75% 97%, 0 100%)"
      }}>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-40 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my degrees and the schools I’ve attended over the years.
        </p>
      </div>
      {/* education Timeline */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full"></div>
        {/* education Entries */}
        {education.map((education, index) => (
          <div key={education.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}>
            {/* Content Section */}
            <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md  ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
              {/* Flex container for image and text */}
              <div className=" flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-20 h-18 bg-white rounded-md overflow-hidden">
                  <img src={education.img} alt={education.school} className="w-full h-full object-cover" />
                </div>
                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{education.degree}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{education.school}</h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{education.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-bold">Grade :{education.grade}</p>
              <p className='mt-4 text-gray-400'>{education.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Education