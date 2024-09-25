'use client'
import React, { useState } from 'react'
import rentCarImg from '@/public/images/RentCar.webp'
import Image from 'next/image'
import ShareCar from '@/components/ShareCar'
import WithUs from '@/components/WithUs'
import Achivement from '@/components/Achievement'
import Link from 'next/link'


const page = () => {
  
  
  const [isOpen1, setIsOpen1] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState("Tesla")
    const options1 = ['Tesla', 'Tata', 'Suzuki'];

  const [isOpen2, setIsOpen2] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState("Crafter van")
    const options2 = ['Crafter van', 'Cross polo', 'Derby'];

  const [isOpen3, setIsOpen3] = useState(false);
    const [selectedValue3, setSelectedValue3] = useState("2024")
    const options3 = ['2024', '2023', '2022','2021', '2020', '2019','2018', '2017', '2016','2015', '2014', '2013','2012', '2011', '2010','2009', '2008', '2007','2006', '2005', '2004'];

  const [isOpen4, setIsOpen4] = useState(false);
    const [selectedValue4, setSelectedValue4] = useState("0-25,000 mi")
    const options4 = ['0-25,000 mi', '25-50,000 mi', '50-75,000 mi', '75-1,00,000 mi', '100-2,00,000 mi', '+2,00,000 mi'];

    

  // const [isOpen5, setIsOpen5] = useState(false);
  //   const [selectedValue5, setSelectedValue5] = useState("Crafter van")
  //   const options5 = ['Crafter van', 'Cross polo', 'Derby'];

  return (
    <div className=' max-w-[1250px] mx-auto '>
      <div className=' flex gap-2 lg:gap-5 mt-14 px-3 '>
        <div className=' flex-1 flex flex-col justify-center gap-10 '>
          <div>
            <h2 className=' text-[2.5rem] lg:text-[3rem] font-semibold '>Earn money by sharing your car with locals</h2>
          </div>
        <div className=' flex gap-5 '>
        <div className=' relative w-full '>
          {/* dropdown - btn */}
            <div onClick={() => setIsOpen1(!isOpen1)} className=" flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600">{selectedValue1}</h1>
                <svg className={`${isOpen1 ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            {/* dropdown - options  */}
            <div className={`${isOpen1 ? 'visible top-10 opacity-100' : 'invisible top-0 opacity-0'} absolute z-50  w-full my-4 bg-green-500 text-[#fff]  rounded-xl py-4 border duration-300`}>
                {options1?.map((option, idx) => (
                    <div key={idx} onClick={(e) => { setSelectedValue1(e.target.textContent); setIsOpen1(false);}} className="px-6 py-2 font-semibold hover:bg-green-400">
                        {option}
                    </div>
                ))}
            </div>
        </div>

        <div className=' relative w-full '>
          {/* dropdown - btn */}
            <div onClick={() => setIsOpen2(!isOpen2)} className=" flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600">{selectedValue2}</h1>
                <svg className={`${isOpen2 ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            {/* dropdown - options  */}
            <div className={`${isOpen2 ? 'visible top-10 opacity-100' : 'invisible top-0 opacity-0'} absolute my-4 w-full  z-50 rounded-xl bg-green-500 py-4 border duration-300`}>
                {options2?.map((option, idx) => (
                    <div key={idx} onClick={(e) => { setSelectedValue2(e.target.textContent); setIsOpen2(false);}} className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400">
                        {option}
                    </div>
                ))}
            </div>
        </div>
        </div>

        <div className=' flex gap-3 '>
        <div className=' relative w-full '>
          {/* dropdown - btn */}
            <div onClick={() => setIsOpen3(!isOpen3)} className=" flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600">{selectedValue3}</h1>
                <svg className={`${isOpen3 ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            {/* dropdown - options  */}
            <div className={`${isOpen3 ? 'visible top-10 opacity-100' : 'invisible top-0 opacity-0'} absolute  z-50 w-full my-4 bg-green-500 text-[#fff]  rounded-xl py-4 border duration-300`}>
                {options3?.map((option, idx) => (
                    <div key={idx} onClick={(e) => { setSelectedValue3(e.target.textContent); setIsOpen3(false);}} className="px-6 py-1 font-semibold hover:bg-green-400">
                        {option}
                    </div>
                ))}
            </div>
        </div>

        <div className=' relative w-full '>
          {/* dropdown - btn */}
            <div onClick={() => setIsOpen4(!isOpen4)} className=" flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600">{selectedValue4}</h1>
                <svg className={`${isOpen4 ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            {/* dropdown - options  */}
            <div className={`${isOpen4 ? 'visible top-10 opacity-100' : 'invisible top-0 opacity-0'} absolute  z-50 my-4 w-full rounded-xl bg-green-500 py-4 border duration-300`}>
                {options4?.map((option, idx) => (
                    <div key={idx} onClick={(e) => { setSelectedValue4(e.target.textContent); setIsOpen4(false);}} className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400">
                        {option}
                    </div>
                ))}
            </div>
        </div>
        </div>

        <div>
          <div>
            <input type="text" placeholder='Enter your city' className=' w-full px-5 py-2 bg-white rounded-lg border outline-none font-semibold placeholder:text-gray-600 ' />
          </div>
        </div>

        <Link href={'rentcar/steps/model'}>
          <button  className=' w-full text-[#fff] font-semibold bg-green-500 rounded-lg py-2 '>Next</button>
        </Link>

        </div>
        <div className=' flex-1 md:block hidden  '>
          <Image src={rentCarImg} alt='Rent a car image' className=' w-full h-full object-cover rounded-md ' />
        </div>
      </div>

      <div className=' my-20 '>
        <Achivement />
      </div>
      <div className=' my-20 '>
        <ShareCar />
      </div>
      <div className=' my-20 '>
        <WithUs />
      </div>

    </div>
  )
}

export default page