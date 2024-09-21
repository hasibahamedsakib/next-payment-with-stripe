import React from 'react'
import DashboardIcon1 from '@/public/images/dashboardIcon1.png'
import Image from 'next/image'
const Cars = () => {
  return (
    <div className=' mt-8 border rounded-md h-full min-h-[30rem] '>
        <div className=' flex items-center justify-center mt-[8rem] w-full '>
        <div className=' flex flex-col justify-center items-center text-center '>
        <div>
            <Image src={DashboardIcon1} alt='requests icon' className=' w-[15rem] h-full object-cover ' />
        </div>
        <div>
            <h3 className=' text-[1.4rem] font-semibold '>No booking requests</h3>
            <p className=' font-light '>You don't have any requests right now. Why not jazz up your listing?</p>
        </div>
        <div className=' mt-5 '>
            <button className=' px-6 py-1 rounded-md border border-green-500 '>Manage Listings</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Cars