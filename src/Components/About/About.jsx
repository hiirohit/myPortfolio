import React from 'react'
import profileImage from '../../MyPhoto/rohit kumar.jpeg'
import Tilt from 'react-parallax-tilt'
import Typewriter from "typewriter-effect";
function About() {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row  justify-between items-center'>
        {/* lift side part */}
        <div className='md:w-1/2 text-center mr-auto md:text-left mt-8 md:mt-20'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>Hi, I am </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>Rohit kumar</h2>
          <h3 className='text-x1 sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
          <span className="text-white mr-3 ">I am a </span>  <span className='inline-block ' ><Typewriter
              options={{
                strings: [
                  "FrontEnd Developer",
                  "BackEnd Developer",
                  "software Developer",
                  "UI/UX Designer",
                  "Java FullStack Developer",
                ],
                autoStart: true,     // starts typing automatically
                loop: true,          // keeps repeating
                delay: 75,           // typing speed (ms per char)
                deleteSpeed: 50,     // erase speed
                pauseFor: 2000,      // wait time before erasing
                cursor: "<span class='text-[#8245ec]'>|</span>", // custom colored cursor
              }}
            /></span>
          </h3>
          {/* about paragaraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
             I am a Java Full Stack Developer. Skilled in both front-end and back-end development, I specialize in building scalable web applications using modern technologies like Java, Spring Boot, React, and SQL. Passionate about crafting efficient solutions and continuously learning new tools in the full stack ecosystem.
          </p>
          <a href="https://drive.google.com/file/d/1Ccsxtbenuw7QN7mMzDkKuF0GNAtaAPIE/view?usp=drive_link"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 15px #8245ec',
            }}
          > Download CV </a>
        </div>
        {/* right side details */}
        <div className=' md:w-1/2 flex  justify-center md:justify-end mt-6'>
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 border-4 border-purple-400 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt="Rohit kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_10px_rgba(130,69,236,0.5)]" />
          </Tilt>
        </div>
      </div>

    </section>
  )
}

export default About