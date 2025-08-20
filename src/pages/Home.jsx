import React from 'react';
import profilepics from '../assets/dp-picture2.jpg';
import Stackprop from '../components/Stackprop';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js-official.svg';
import react from '../assets/logos_react.svg';
import redux from '../assets/Redux.png';
import boostrap from '../assets/Bootstrap.svg';
import tailwind from '../assets/tailwind.svg';
import sass from '../assets/logos_sass.svg';
import git from '../assets/logos_git-icon.svg';
import greensock from '../assets/cib_greensock 2.svg';
import vscode from '../assets/vscode.svg';
import githubb from '../assets/akar-icons_github-fill.svg';
import Homecard from '../components/Homecard';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='my-10'>
      
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 px-[8%] md:py-20'>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='basis-1/2'
        >
          <h1 className='text-center md:text-left font-[Sora] font-bold text-[38px] lg:text-[46px] text-[#D9D9D9]'>
            Hi 👋, <br />My name is<br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FEF300] to-[#E216AD]'>
            Evi Okpako
            </span> <br />I build things for web.
          </h1>
          <a className='mt-6' href="https://docs.google.com/forms/d/e/1FAIpQLSfPQwJZAITGFZR8S7m5RGGPDmwC62o0knOVy3qWPsHnH1fZOg/viewform?usp=header"><button className='text-[#E216AD] text-[16px] font-bold bg-white py-3 px-6 rounded-[25px] hover:bg-[#FEF300]'>
          Hire Me
        </button></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-[4px] rounded-full bg-gradient-to-b from-[#FEF300] to-[#E216AD] inline-block">
            <img
              src={profilepics}
              alt="Profile"
              className="w-[300px] h-[300px] rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='py-10 my-10'
      >
        <Stackprop 
          heading='My Tech Stack'
          body='Technologies I’ve been working with recently'
          image1={html}
          image2={css}
          image3={js}
          image4={react}
          image5={redux}
          image6={boostrap}
          image7={tailwind}
          image8={git}
          image9={greensock}
          image10={sass}
          image11={vscode}
          image12={githubb}
        />
      </motion.div>

      {/* Projects Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='py-10'
      >
        <div className='flex flex-col justify-center items-center gap-3'>
          <h1 className='font-[Sora] font-bold text-[#CCCCCC] text-[25px]'>Projects</h1>
          <h2 className='font-normal font-[Sora] text-[#A7A7A7] text-[18px]'>Things I’ve built so far</h2>
        </div>
      </motion.div>

      {/* Projects Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Homecard />
      </motion.div>
      
    </div>
  );
};

export default Home;
