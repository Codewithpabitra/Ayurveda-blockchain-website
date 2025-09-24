import React from 'react'
import { HeroScrollDemo } from '../components/HeroScrollDemo'
import { FcTimeline } from "react-icons/fc";
import {easeOut, motion} from 'framer-motion'
import BlockchainTimeline from '../components/ui/BlockchainTimeline';
import ImplementationButton from '../components/ui/ImplementationButton';


const Solution = () => {
  return (
    <div className='container flex flex-col justify-center items-center '>

         <motion.div 
         initial={{
            top: '0px',
            opacity: 0
          }}
          animate={{
            top: '50px',
            opacity: 1,
            
          }}

          transition={{
            duration: 2,
            delay: 1
          }}

         className="w-fit first flex justify-center items-center gap-3 border border-red-600 px-4 py-1 mt-30 rounded-full  ">
          <FcTimeline className='w-fit ' />
          <p className='text-gray-200 text-xl w-fit '>Blockchain Timeline </p>
        </motion.div>
       
        <HeroScrollDemo />

        <BlockchainTimeline />

        <ImplementationButton />
    </div>
  )
}

export default Solution
