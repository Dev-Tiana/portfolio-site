import React from 'react'

const Stackprop = ({heading, body, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12 }) => {
  return (
    <div className='flex flex-col gap-4 px-[7%] py-10 my-15'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='font-[Sora] font-bold text-[#CCCCCC] text-[25px]'>{heading}</h1>
            <p className='font-normal  font-[Sora] text-[#A7A7A7] text-[18px]'>{body}</p>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6 gap-2 '>
            <img className='w-[80px] h-[80px] my-6' src={image1} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image2} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image3} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image4} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image5} alt="" />
            <img className='w-[80px] h-[80px] my-6 md:ml-6' src={image6} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image7} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image8} alt="" />
            <img className='w-[80px] h-[80px] my-6 color-[white]' src={image9} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image10} alt="" />
            <img className='w-[80px] h-[80px] my-6' src={image11} alt="" />
            <img className='w-[80px] h-[80px] my-6  md:ml-6' src={image12} alt="" />
        </div>
    </div>
  )
}

export default Stackprop