import React from 'react'
import DashboardIcon3 from '@/public/images/dashboardIcon3.png'
import Image from 'next/image'
const Performance = () => {
  return (
    <div className=' mt-8 border rounded-md h-full min-h-[30rem] '>
        <div className=' flex items-center justify-center mt-[12rem] w-full '>
        <div className=' flex flex-col justify-center items-center text-center '>
        <div>
            <Image src={DashboardIcon3} alt='requests icon' loading='lazy' className=' w-[15rem] h-full object-cover ' />
        </div>
        <div>
            <h3 className=' text-[1.4rem] font-semibold '>No data available</h3>
            <p className=' font-light '>You need an active car or at least one rental since last year.</p>
        </div>
        {/* <div className=' mt-5 '>
            <button className=' px-6 py-1 rounded-md border border-green-500 '>Manage Listings</button>
        </div> */}
        </div>
        </div>
    </div>
  )
}

export default Performance