import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/myLogo.png'
import linkedin from '../assets/social_linkedin.svg'
import twitter from '../assets/twitter-circle-filled.svg'
import github from '../assets/github.svg'
import menu from '../assets/Menu.png'

const Navbar = () => {
  const [isopen, setOpen] = useState(false);
  const handleToggle = () =>setOpen(prev=>!prev);
  return (
    <div className='flex justify-between items-start md:items-center px-[8%] py-6 '>
        <img className='w-[70px] h-[70px]' src={logo} alt="" />
        <div className='flex justify-between items-center gap-8 hidden md:flex'>
        <div className=''>
            <ul className='flex justify-between items center gap-8'>
                <NavLink to='/'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Home</li></NavLink>
                <NavLink to='about'><li className='font-[Sora] font-normal text-[#A7A7A7]'>About</li></NavLink>
                <NavLink to='techstack'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Tech Stack</li></NavLink>
                <NavLink to='projects'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Projects</li></NavLink>
                <NavLink to='contacts'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Contact</li></NavLink>
            </ul>
        </div>
        <div className='flex justify-between items-center gap-6'>
            <a href="https://github.com/Dev-Tiana"><img src={github} alt="" /></a>
            <a href=""><img src={twitter} alt="" /></a>
            <a href="https://www.linkedin.com/in/evi-okpako-562641238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9xxXrlPyTxeYHd5R6Coz%2Fg%3D%3D"><img src={linkedin} alt="" /></a>
        </div>
        </div>

        {isopen && (
        <div className='flex flex-col justify-center items-center md:hidden gap-2'>
        <div className='flex flex-col'>
            <ul className='flex flex-col justify-between items center gap-8'>
                <NavLink to='/'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Home</li></NavLink>
                <NavLink to='about'><li className='font-[Sora] font-normal text-[#A7A7A7]'>About</li></NavLink>
                <NavLink to='techstack'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Tech Stack</li></NavLink>
                <NavLink to='projects'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Projects</li></NavLink>
                <NavLink to='contacts'><li className='font-[Sora] font-normal text-[#A7A7A7]'>Contact</li></NavLink>
            </ul>
        </div>
        <div className='flex justify-between items-center gap-6'>
            <a href=""><img src={github} alt="" /></a>
            <a href=""><img src={twitter} alt="" /></a>
            <a href=""><img src={linkedin} alt="" /></a>
        </div>
        </div>
        )}

        <button className='flex md:hidden' onClick={handleToggle}><img src={menu} alt="" /></button>
    </div>
  )
}

export default Navbar