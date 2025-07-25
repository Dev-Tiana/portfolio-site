import React from 'react'
import logo from '../assets/myLogo.png'
import github from '../assets/github.svg'
import twitter from '../assets/twitter-circle-filled.svg'
import linkedin from '../assets/social_linkedin.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-left md:items-center justify-between px-[4%] lg:px-[8%] py-6 gap-2 md:gap-0'>
            <img className='w-[70px] h-[70px]' src={logo} alt="" />
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-8'>
                <div className='flex items-center gap-2'>
                    <a className='text-[10px] md:text-[14px]' href="tel:+2349060810705">+2349060810705</a>
                    <a className='text-[10px] md:text-[14px]' href="mailto:eviokpako.c@gmail.com">eviokpako.c@gmail.com</a>
                </div>
                 <div className='flex items-center gap-6'>
                    <a href="https://github.com/Dev-Tiana"><img src={github} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/in/evi-okpako-562641238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9xxXrlPyTxeYHd5R6Coz%2Fg%3D%3D"><img src={linkedin} alt="" /></a>
                </div>
            </div>
        </div>
        <hr className='text-[#333333] font-bold h-px w-full my-4' />
        <div className='flex flex-col md:flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center px-[8%] py-6'>
         <div className=''>
            <ul className='flex items center gap-2 md:gap-8'>
                <NavLink to='/'><li className='font-[Sora] font-normal text-[#666666] text-[10px] md:text-[16px]'>Home</li></NavLink>
                <NavLink to='about'><li className='font-[Sora] font-normal text-[#666666] text-[10px] md:text-[16px]'>About</li></NavLink>
                <NavLink to='techstack'><li className='font-[Sora] font-normal text-[#666666] text-[10px] md:text-[16px]'>Technologies</li></NavLink>
                <NavLink to='projects'><li className='font-[Sora] font-normal text-[#666666] text-[10px] md:text-[16px]'>Projects</li></NavLink>
                <NavLink to='contacts'><li className='font-[Sora] font-normal text-[#666666] text-[10px] md:text-[16px]'>Contact</li></NavLink>
            </ul>
        </div>
        <div>
            <h1 className='font-[Sora] font-normal text-[#666666] text-center  md:text-start'>Built by @ <span className='text-[#FEF300]'>Dev-Tiana</span> with <span className='text-[#E216AD]'>Love</span> and <span className='text-[#E216AD]'>Food</span></h1>
        </div>
        </div>
    </div>
  )
}

export default Footer