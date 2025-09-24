import React from 'react'
import HarvestForm from '../components/ui/HarvestForm'
import {motion} from "framer-motion"
import { GiHerbsBundle } from "react-icons/gi";
import DashboardForm from '../components/ui/DashboardForm';


const FarmerPortal = () => {
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

         className="w-fit first flex justify-center items-center gap-3 border border-red-600 px-4 py-1 mt-30  rounded-full  ">
          <GiHerbsBundle className='text-green-500 w-fit ' />
          <p className='text-gray-200 text-xl w-fit '>Herbs Traceability</p>
        </motion.div>

        <div className="container flex flex-col gap-2 ">
            <h1 className='text-2xl font-bold text-white'>Farmer Portal</h1>
            <p className='text-lg text-gray-400 '>Register your herbal crops and start the traceability journey</p>
        </div>
      <div className="conatiner flex justify-between gap-20 ">
        <HarvestForm />
        <DashboardForm />
      </div>
    </div>
  )
}

export default FarmerPortal
