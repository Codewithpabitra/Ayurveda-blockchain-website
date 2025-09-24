import React from 'react'
import ProductVerification from '../components/ui/ProductVerification';
import { AiOutlineProduct } from "react-icons/ai";
import { motion } from 'framer-motion';
import GoFarmerPortalButton from '../components/ui/GoFarmerPortalButton';

const TrackProduct = () => {
  return (
    <div className='conatiner mx-auto flex flex-col justify-center items-center gap-2 my-10'>
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

         className="w-fit first flex justify-center items-center gap-3 border border-red-600 px-4 py-1 mt-20  rounded-full  ">
          <AiOutlineProduct className='text-green-500 w-fit ' />
          <p className='text-gray-200 text-xl w-fit '>Herbs Traceability</p>
        </motion.div>
      <ProductVerification />
      <GoFarmerPortalButton />
    </div>
  )
}

export default TrackProduct
