'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState("0-25,000 mi")
    const options1 = ['0-25,000 mi', '25-50,000 mi', '50-75,000 mi', '75-1,00,000 mi', '100-2,00,000 mi', '+2,00,000 mi'];

    const ProgressNumber = 27;

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
                <p className=' text-[1.7rem] '>Is the mileage accurate?</p>
            </div>
        

        <div className=' relative w-full '>
          {/* dropdown - btn */}
            <div  className=' flex flex-col gap-1 '>
                <label className=' text-black font-semibold ml-2 ' htmlFor="">Mileage</label>
                <div onClick={() => setIsOpen1(!isOpen1)} className=" flex w-full items-center justify-between rounded-md bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600">{selectedValue1}</h1>
                <svg className={`${isOpen1 ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            </div>
            {/* dropdown - options  */}
            <div className={`${isOpen1 ? 'visible top-16 opacity-100' : 'invisible top-4 opacity-0'} absolute my-4 w-full  z-50 rounded-md bg-green-500 py-4 border duration-300`}>
                {options1?.map((option, idx) => (
                    <div key={idx} onClick={(e) => { setSelectedValue1(e.target.textContent); setIsOpen1(false);}} className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400">
                        {option}
                    </div>
                ))}
            </div>
        </div>
            
            <div className=' flex items-center gap-5 mt-10 justify-between '>
            <Link href={'registation'} className='  w-[40%]  md:w-[20%] '>
                <button className=' bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] '>Previous</button>
            </Link>
            <Link href={'energy'} className=' w-full '>
                <button className=' bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 '>Confirm</button>
            </Link>
            </div>

        </div>

    </div>
  )
}

export default Page