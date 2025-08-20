import React from 'react';
import { motion } from 'framer-motion';
import Homecard from '../components/Homecard';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className='py-10 mt-[3rem]'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex flex-col gap-3 px-[6%]'
        >
          <h1 className='font-[Sora] font-bold text-[#CCCCCC] text-[25px]'>Projects</h1>
          <h2 className='font-normal font-[Sora] text-[#A7A7A7] text-[18px]'>
            Things I’ve built so far
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Homecard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
