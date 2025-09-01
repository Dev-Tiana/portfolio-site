import React from 'react';
import { motion } from 'framer-motion';
import Aboutcard from '../components/Aboutcard';
import Aboutcard2 from '../components/Aboutcard2';

const About = () => {
  return (
    <div className='pb-10 mb-10'>

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='md:pr-[35%] md:pl-[8%] py-10 my-10 px-[6%] md:px-[0]'
      >
        <h1 className='font-[Sora] font-bold text-[48px] text-[#D7FFE0] pr-[8%] py-6'>About Me</h1>
        <p className='font-[Sora] font-normal text-[#CCCCCC] text-[16px]'>
          I'm a frontend developer with a passion for building clean, responsive, and meaningful digital experiences. With a background in crafting modern web applications, I focus on turning ideas into interactive and engaging platforms. I recently built BeyondBarriers, a platform that helps the deaf connect with medical experts and become part of a supportive community. I thrive in startup environments, love solving problems with code, and am constantly learning new tools to improve my craft.
        </p>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='font-[Sora] font-bold text-[48px] text-[#D7FFE0] px-[8%] py-6'>Work Experience</h1>
        <Aboutcard />
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className=''
      >
        <h1 className='font-[Sora] font-bold text-[48px] text-[#D7FFE0] px-[8%]'>Education</h1>
        <Aboutcard2 />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
       <div className='flex items-center gap-6 md:gap-10 px-[8%] py-10 whitespace-nowrap'>
         <a href="https://drive.google.com/file/d/1sx7FlExDrHLuhkcI0F6ntNYwCHuU68wx/view?usp=sharing">
          <button className='text-[#018C0F] text-[16px] font-bold bg-[#D7FFE0] py-3 px-6 rounded-[25px] mx-[8%]'>
          Download Cv
        </button>
         </a>
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPQwJZAITGFZR8S7m5RGGPDmwC62o0knOVy3qWPsHnH1fZOg/viewform?usp=header">
          <button className='text-[#018C0F] text-[16px] font-bold bg-[#D7FFE0] py-3 px-6 rounded-[25px] mx-[8%]'>
          Hire Me
        </button>
         </a>
       </div>
      </motion.div>

    </div>
  );
};

export default About;
