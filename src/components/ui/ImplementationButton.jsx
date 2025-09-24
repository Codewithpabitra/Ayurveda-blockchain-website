import React from 'react'
import { easeInOut, motion } from "framer-motion"
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImplementationButton = () => {
  return (
    <div className='conatiner my-10' 
    
    >
     <motion.button 

     whileHover={{
      rotateX: 20,
      rotateY: 10,
      boxShadow: '0px 20px 50px rgba(34,197,94,0.7)'
     }}

     style={{
      translateZ: 100
     }}

     transition={{
      duration: 0.3,
      ease: easeInOut
     }}
     
     className='group relative text-neutral-500 px-10 py-4 rounded-lg bg-black shadow-[0px
     _1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer'><span className='flex items-center justify-center gap-3 group-hover:text-green-500 transition-colors duration-300 '><Link to='/farmer-portal' >Start Implementation</Link> <ArrowRight style={{ height: '1rem', width: '1rem' }} /></span>
     
     <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4 mx-auto  '></span>

     <span className='absolute opacity-0 group-hover:opacity-100  transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto h-[4px] blur-md '></span>
     </motion.button>

     
    </div>
  )
}

export default ImplementationButton;
