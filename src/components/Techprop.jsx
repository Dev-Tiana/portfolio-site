import React from 'react'

const Techprop = ({heading, body, word1, image1, word2, image2, word3, image3, word4, image4, word5, image5, word6, image6, word7, image7, word8, image8, word9, image9, word10, image10, word11, image11, word12, image12 }) => {
  return (
    <div className='flex flex-col gap-4 px-[7%] py-10 my-15'>
        <div className='flex flex-col justify-left items-left gap-4 py-8'>
            <h1 className='font-[Sora] font-bold text-[#42446E] text-[25px]'>{heading}</h1>
            <p className='font-normal  font-[Sora] text-[#666666] text-[18px]'>{body}</p>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6 gap-2 '>
            <div>
              <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word1}</h1>
              <img className='w-[80px] h-[80px] my-6' src={image1} alt="" />
            </div>
            <div>
              <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word2}</h1>
               <img className='w-[80px] h-[80px] my-6' src={image2} alt="" />
            </div>
            <div>
               <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word3}</h1>
              <img className='w-[80px] h-[80px] my-6' src={image3} alt="" />
            </div>
            
            <div>
              <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word4}</h1>
              <img className='w-[80px] h-[80px] my-6' src={image4} alt="" />
            </div>
            <div>
                <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word5}</h1>
               <img className='w-[80px] h-[80px] my-6' src={image5} alt="" />
            </div>
             <div>
              <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word6}</h1>
              <img className='w-[80px] h-[80px] my-6 md:ml-6' src={image6} alt="" />
             </div>
            <div>
                <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word7}</h1>
               <img className='w-[80px] h-[80px] my-6' src={image7} alt="" />
            </div>
             <div>
                <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word8}</h1>
              <img className='w-[80px] h-[80px] my-6' src={image8} alt="" />
             </div>
             <div>
                <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word9}</h1>
              <img className='w-[80px] h-[80px] my-6' src={image9} alt="" />
             </div>
             <div>
                <h1 className='font-normal  font-[Sora] text-[#666666] text-[18px]'>{word10}</h1>
              <img className='w-[80px] h-[80px] my-6' src={image10} alt="" />
             </div>
             <div>
                <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word11}</h1>
              <img className='w-[80px] h-[80px] my-6' src={image11} alt="" />
             </div>
             <div>
                <h1 className='font-normal  font-[Sora] text-[#666666] text-[15px]'>{word12}</h1>
              <img className='w-[80px] h-[80px] my-6  md:ml-6' src={image12} alt="" />
             </div>
        </div>
    </div>
  )
}

export default Techprop