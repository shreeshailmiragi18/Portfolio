import React from 'react';
import { SkillsInfo } from '../../constants.js';
import '/src/index.css';
import Tilt from 'react-parallax-tilt';
import ReactParallaxTilt from 'react-parallax-tilt';

const Skills = () => {
    return (
        <section id='skills' className='py-24 pb-24 px-[4vw] md:px-[2vw] lg:px-[8vw] font-sans bg-skills-gradient [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]'>
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2">
                 </div>
                 <p className="text-gray-400 mt-4 text-lg font-semibold">A collection of my technical skills and experties honed through various projects and learnings</p>
            </div>
            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {SkillsInfo.map((category) => (
                      <div key={category.title} className='bg-gray-900 backdrop-blur-md sm:px-6 py-8 sm:py-4 mb-8 w-full sm:w-[48%] rounded-2xl border border-white shadow-10[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:-translate-y-2  '>
                        <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>{category.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2 w-full ">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center '>
                                    <img src={skill.logo} alt={`${skill.name} logo`} className='w-6 h-6 sm:w-8 sm:h-8 ' />
                                    <span className="text-xs sm:text-sm text-gray-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                            </div>
                    </div>
                ))}
           </div>

        </section>
    )
}

export default Skills;