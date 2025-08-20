import React from 'react'
import { motion } from 'framer-motion';
import Techprop from '../components/Techprop'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js-official.svg'
import react from '../assets/logos_react.svg'
import redux from '../assets/Redux.png'
import boostrap from '../assets/Bootstrap.svg'
import tailwind from '../assets/tailwind.svg'
import sass from '../assets/logos_sass.svg'
import git from '../assets/logos_git-icon.svg'
import greensock from '../assets/cib_greensock 2.svg'
import vscode from '../assets/vscode.svg'
import githubb from '../assets/akar-icons_github-fill 3.svg' 

const Techstack = () => {
  return (
    <div>
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='py-10 my-10'
      >
            <Techprop 
                heading='My Tech Stack'
                body=' Technologies I’ve been working with recently'
                word1= 'HTML'
                image1= {html}
                word2='CSS'
                image2= {css}
                word3='Javascript'
                image3= {js}
                word4='React.js'
                image4= {react}
                word5='Redux'
                image5= {redux}
                word6='Boostrap'
                image6= {boostrap}
                word7='Tailwind CSS'
                image7= {tailwind}
                word8='Git'
                image8= {git}
                word9='Greensock'
                image9= {greensock}
                word10='SASS'
                image10= {sass}
                word11='VsCode'
                image11= {vscode}
                word12='Github'
                image12= {githubb}
                
        />
        </motion.div>

    </div>
  )
}

export default Techstack