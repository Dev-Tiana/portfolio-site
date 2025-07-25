import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import link from  '../assets/link.png'
import image1 from '../assets/AI project1.PNG'
import link2 from '../assets/github.svg'
import image2 from '../assets/AI project4.PNG'
import image3 from '../assets/marketingsite.PNG'
import image4 from '../assets/Nike12.PNG'
import image5 from '../assets/sneakers.PNG'
import image6 from '../assets/youtubesite.PNG'
import image7 from '../assets/friutsite.PNG'
import image8 from '../assets/beyondsite.png'
import image9 from '../assets/beyonddoc1.png'
import image10 from '../assets/electricsite.PNG'
import image11 from '../assets/quilovatesite.PNG'

const Homecard = () => {
    const navigate = useNavigate()
    const cardList = [
        {'id': 1,
            "image": image2,
            "heading": "Zarrin",
            "details": "A clean, user-friendly platform built for writers to create, publish, and share their stories with the world. Designed for simplicity, creativity, and community",
            "technologies": "Tech stack : HTML , JavaScript, React, tailwind, Git",
            "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "https://github.com/Dev-Tiana/Zarrin",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://dev-tiana.github.io/Zarrin/"
        },
        {'id': 2,
            "image": image3,
            "heading": "Digital Marketing Landing Site",
            "details": "A modern marketing website built to help brands showcase their services, capture leads, and drive conversions. It features responsive design, tailored for online business visibility",
            "technologies": "Tech stack : HTML , CSS, JavaScript, SASS, Git",
             "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "https://github.com/Dev-Tiana/simple",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://dev-tiana.github.io/simple/AssSimple.html"
        },
        {'id': 3,
            "image": image8,
            "heading": "BeyondBarriers",
            "details": "An accessibility-focused platform designed to help deaf individuals connect with medical experts, access essential resources, and engage with a supportive community.",
            "technologies": "Tech stack : HTML, CSS, JavaScript, SASS,  Git",
            "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "https://github.com/Dev-Tiana/BeyondBarriersProject",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://beyondbarrier.netlify.app/"
        },
        {'id': 4,
            "image": image5,
            "heading": "eCommerce Shoe Store",
            "details": "A sleek and responsive eCommerce website built for showcasing and selling footwear online. It features smooth product browsing, secure checkout.",
            "technologies": "Tech stack : HTML, CSS, JavaScript, SASS, vsCode",
             "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "https://github.com/Dev-Tiana/Nike2nd",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://mellifluous-pithivier-195f89.netlify.app/"
        },
        {'id': 5,
            "image": image7,
            "heading": "Fruit Juice Landing Page",
            "details": "A vibrant and responsive landing page designed for a fresh fruit juice brand. Built to capture attention and drive sales, it showcase the brand’s offerings.",
            "technologies": "Tech stack : HTML, CSS JavaScript, Git vsCode",
             "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "https://github.com/Dev-Tiana/fruitSite",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://dev-tiana.github.io/fruitSite/"
        },
        {'id': 6,
            "image": image6,
            "heading": "YouTube StreamLite",
            "details": "A YouTube-style video browsing website designed to mimic the layout and feel of the YouTube interface. It features a clean, responsive design with video thumbnails.",
            "technologies": "Tech stack : HTML, CSS, JavaScript, Sass Git vsCode",
             "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "https://github.com/Dev-Tiana/Youtube-site",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://dev-tiana.github.io/Youtube-site/NewYoutube.html"
        },
        {'id': 7,
            "image": image10,
            "heading": "Electrical Company Website",
            "details": "A modern, responsive website built for a professional electrical services company. It features clean design, service listings, and contact forms to showcase expertise.",
            "technologies": "Tech stack : HTML, JavaScript, SASS, React, tailwind, Git",
             "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://timely-belekoy-4a534d.netlify.app/"
        },
        {'id': 8,
            "image": image4,
            "heading": "Nike-AirFlex",
            "details": "A responsive eCommerce site modeled after Nike’s online store. Designed to showcase footwear in a modern layout, it features smooth user interface",
            "technologies": "Tech stack : HTML, JavaScript, SASS, React, tailwind, Git",
             "linkImage": link,
            "linkName": "Live Preview",
            "linkk": "https://github.com/Dev-Tiana/nikelandingpagenew",
            "linkImage2": link2,
            "linkName2": "View Code",
            "link": "https://dev-tiana.github.io/nikelandingpagenew/"
        },
        {'id': 9,
            "image": image11,
            "heading": "Quillovate",
            "details": "A clean, professional website built for a writing and research business. It highlights services, showcases client benefits, and includes clear calls-to-action for easy inquiries.",
            "technologies": "Tech stack : HTML, JavaScript, SASS, React, tailwind, Git",
             "linkImage": link,
            "linkName": "Live Preview",
           "link": "https://dev-tiana.github.io/quilovate-site/",
            "linkImage2": link2,
            "linkName2": "View Code",
            "linkk": "https://github.com/Dev-Tiana/quilovate-site",
        },
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-[6%] py-8'>
        {cardList.map((card) =>(
            <div className='flex flex-col gap-3 rounded-[16px] shadow-[2px_4px_10px_rgba(0.25,0,0,0.25)] pb-6' key={card.id}>
                {/* <div className='w-[300px] h-[300px] object-center' style={{backgroundImage: `Url(${card.image})`}}></div> */}
                <img className='w-full h-fit rounded-t-2xl' src={card.image} alt="" />
                <h1 className='font-[Sora] font-bold text-[18px] text-[#333333] px-6'>{card.heading}</h1>
                <p className='font-[Sora] font-normal text-[15px] text-[#666666] px-6'>{card.details}</p>
                <h2 className='font-[Sora] font-[400] text-[13px] text-[#666666] px-6'>{card.technologies}</h2>
                <div className='px-6 flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <img src={card.linkImage} alt="" />
                        <a className='font-[Sora] font-[500] text-[13px] text-[#333333] px-2' href={card.link} >{card.linkName}</a>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={card.linkImage2} alt="" />
                        {/* <Link className='font-[Sora] font-[500] text-[13px] text-[#333333] px-2' to={card.link}>{card.linkName2}</Link> */}
                        <a className='font-[Sora] font-[500] text-[13px] text-[#333333] px-2' href={card.linkk} >{card.linkName2}</a>

                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Homecard