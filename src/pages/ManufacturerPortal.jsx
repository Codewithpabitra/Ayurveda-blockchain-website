import React from 'react'
import { motion } from 'framer-motion'
import { IoQrCode } from "react-icons/io5";
import BatchForm from '../components/ui/BatchForm';

const ManufacturerPortal = () => {
  return (
    <div className='container flex flex-col gap-10 justify-center items-center'>
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

         className="w-fit first flex justify-center items-center gap-3 border border-red-600 px-4 py-1 mt-20 rounded-full  ">
          <IoQrCode className='text-green-500 w-fit ' />
          <p className='text-gray-200 text-xl w-fit '>QR Tracking</p>
        </motion.div>

        <div className="container flex flex-col gap-2 ">
            <h1 className='text-2xl font-bold text-white'>Manufacturer Portal</h1>
            <p className='text-lg text-gray-400 '>Package verified herbs and generate QR codes for consumer tracking</p>
        </div>
      <div className="conatiner flex justify-between gap-20 ">
        {/* components */}

        <BatchForm/>
      </div>
    </div>
  )
}

export default ManufacturerPortal
