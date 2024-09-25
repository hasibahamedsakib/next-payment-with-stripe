'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState("Tesla")
    const options1 = ['Tesla', 'Tata', 'Suzuki'];

  const [isOpen2, setIsOpen2] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState("Crafter van")
    const options2 = ['Crafter van', 'Cross polo', 'Derby'];

  const [isOpen3, setIsOpen3] = useState(false);
    const [selectedValue3, setSelectedValue3] = useState("Crafter van")
    const options3 = ['Crafter van', 'Cross polo', 'Derby'];

    const ProgressNumber = 95

  return (
    <div className=' max-w-[700px] mx-auto min-h-[70vh]   '>
         
        <div className=' flex flex-col gap-5 border p-5 rounded-md mt-10 '>

        <div className="mx-auto flex w-full flex-col gap-2">
            <div className="flex h-3 w-full  items-center justify-center rounded-full bg-slate-200">
                <div style={{ width: `${ProgressNumber}%` }} className="transition-width mr-auto h-3 w-0 rounded-full  bg-green-500 duration-500"></div>
            </div>
            <span className="text-center text-sm font-medium text-green-500">{ProgressNumber}%</span>
        </div>

            <div className=' mb-5 '>
                <h3 className=' text-[1.4rem] text-green-500 font-semibold '>List My car</h3>
                <p className=' text-[1.7rem] '>Where will you meet drivers for check-in?</p>
            </div>
        <div className=' relative w-full  '>
          
            <div className=' flex flex-col gap-2 '>
                <label className=' ml-2 text-black font-semibold ' htmlFor="">Meeting point</label>
                <input type="text" placeholder='Enter address' className=' bg-[#fff] px-4 py-2 rounded-md outline-none border font-semibold placeholder:text-gray-600 '  />
            </div>
           
            
        </div>

        
        
       
            
            <div className=' flex items-center gap-5 mt-10 justify-between '>
            <Link href={'well-maintained'} className='  w-[40%]  md:w-[20%] '>
                <button className=' bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] '>Previous</button>
            </Link>
            <Link href={''} className=' w-full '>
                <button className=' bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 '>Next</button>
            </Link>
            </div>

        </div>

    </div>
  )
}

export default Page