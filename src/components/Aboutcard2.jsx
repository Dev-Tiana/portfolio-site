import React from 'react'
import { useNavigate } from 'react-router-dom'
import companyicon from '../assets/companyicon.png'
import loctionicon from '../assets/locationicon.png'
import dateicon from '../assets/dateicon.png'

const Aboutcard2 = () => {
    const navigate = useNavigate()
        const cardList = [
            {"id": 1,
                "heading": "Bsc Human Anatomy",
                "time": "Full Time",
                "companyimage": companyicon,
                "company": "Osun State University",
                "locationimage": loctionicon,
                "location": "Nigeria",
                "dateimage": dateicon,
                "date": "Sep 2018 - Aug 2023",
            },

        ]
    
  return (
    <div className='flex flex-col items-left md:gap-6 md:pl-[8%] md:pr-[30%] lg:pr-[35%] px-[6%] md:px-[0]'>
        {cardList.map((card) => (
            <div className=''>
                <div className='flex justify-between items-center'>
                    <h1 className='font-[Sora] font-normal text-[#CCCCCC] text-[14px] md:text-[18px]'>{card.heading}</h1>
                   <button className='text-[#018C0F] text-[12px] font-bold bg-[#D7FFE0] py-2 px-5 rounded-[25px]'>{card.time}</button>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-[16px] h-[12px] text-black' src={card.companyimage} alt="" />
                        <p className='font-[Sora] font-normal text-[#CCCCCC] text-[14px]'>{card.company}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-[16px] h-[12px] text-black' src={card.locationimage} alt="" />
                        <p>{card.location}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-[16px] h-[12px] text-black' src={card.dateimage} alt="" />
                        <p className='font-[Sora] font-normal text-[#CCCCCC] text-[14px]'>{card.date}</p>
                    </div>
                </div>
                <hr className='my-6' />
            </div>
            
        ))}
    </div>
  )
}

export default Aboutcard2