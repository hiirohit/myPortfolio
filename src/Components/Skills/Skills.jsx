import React from 'react'
import {SkillsInfo} from '../../constants'
import Tilt from 'react-parallax-tilt'
function Skills() {
  return (
   <section  id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    style={{
      background: `
      linear-gradient(
        to bottom,
       #050414 5%,
      #080628 10%,
      #0a0735 25%,
      #0e0945 50%,
      #120b56 70%,
      #160d66 90%,   /* keep previous dark blue */
      #1a0033 100%   /* dark purple at the very bottom */
      )
    `,
     clipPath: "polygon(0 0, 100% 0, 100% 98%, 75% 95%, 0 100%)"
  }}>
      {/* skills titles */}
      <div className='text-center md-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>Skills</h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
           A collection of my technical skills and expertise honed through various projects and experiences
      </p>
      </div>
      {/* skills categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category)=>(
          <div key={category.title} className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* skill Items - 3 per row on larger screen */}
             <Tilt
                        key={category.title}
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                      >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
              {category.skills.map((skill)=>(
                <div key={skill.name} className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-3 sm:py-2 sm:px-3 text-center"
                >
                  <img src={skill.logo} alt={`${skill.name}logo` } className="w-5 h-5 sm:w-8 sm:h-8" />
                  <span className="text-xs sm:text-[15px] text-gray-300 overflow-hidden">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            </Tilt>
          </div>
        ))}
      </div>

   </section>
  )
}

export default Skills