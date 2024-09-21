import React from 'react'
import DashboardIcon2 from '@/public/images/dashboardIcon2.png'
import Image from 'next/image'
const Rentals = () => {
  return (
    <div className=' mt-8 border rounded-md h-full min-h-[30rem] '>
        <div className=' flex items-center justify-center mt-[8rem] w-full '>
        <div className=' flex flex-col justify-center items-center text-center '>
        <div>
            <Image src={DashboardIcon2} alt='requests icon' className=' w-[15rem] h-full object-cover ' />
        </div>
        <div>
            <h3 className=' text-[1.4rem] font-semibold '>No booking requests</h3>
            <p className=' font-light '>You don't have any rentals planned. Lets fix that!</p>
        </div>
        <div className=' mt-5 '>
            <button className=' px-6 py-1 rounded-md border border-green-500 '>Find a car</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Rentals