import React from 'react'
import logo from '../assets/myLogo.png'
import github from '../assets/github.svg'
import twitter from '../assets/twitter-circle-filled.svg'
import linkedin from '../assets/social_linkedin.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-left md:items-center justify-between px-[8%] py-6 gap-2 md:gap-0'>
            <img className='w-[70px] h-[70px]' src={logo} alt="" />
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <div className='flex items-center gap-6'>
                    <a href="tel:+2349060810705">+2349060810705</a>
                    <a href="mailto:eviokpako.c@gmail.com">eviokpako.c@gmail.com</a>
                </div>
                 <div className='flex items-center gap-6'>
                    <a href=""><img src={github} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>
        <hr className='text-[#333333] font-bold h-px w-full my-4' />
        <div className='flex flex-col md:flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center px-[8%] py-6'>
         <div className=''>
            <ul className='flex items center gap-8'>
                <NavLink to='/'><li className='font-[Sora] font-normal text-[#666666]'>Home</li></NavLink>
                <NavLink to='about'><li className='font-[Sora] font-normal text-[#666666]'>About</li></NavLink>
                <NavLink to='techstack'><li className='font-[Sora] font-normal text-[#666666]'>Technologies</li></NavLink>
                <NavLink to='projects'><li className='font-[Sora] font-normal text-[#666666]'>Projects</li></NavLink>
                <NavLink to='contacts'><li className='font-[Sora] font-normal text-[#666666]'>Contact</li></NavLink>
            </ul>
        </div>
        <div>
            <h1 className='font-[Sora] font-normal text-[#666666]'>Built by @ <span className='text-[#FEF300]'>Dev-Tiana</span> with <span className='text-[#E216AD]'>Love</span> and <span className='text-[#E216AD]'>Food</span></h1>
        </div>
        </div>
    </div>
  )
}

export default Footer