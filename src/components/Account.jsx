'use client'
import React, { useState } from 'react'
import DashboardIcon1 from '@/public/images/dashboardIcon1.png'
import Image from 'next/image'
import Link from 'next/link';
import EditProfile from '@/dashboardComponents/EditProfile';
import VerifyProfile from '@/dashboardComponents/VerifyProfile';
import AccountSettings from '@/dashboardComponents/AccountSettings';
import PaymentMethods from '@/dashboardComponents/PaymentMethods';
import PaymentSetting from '@/dashboardComponents/PaymentSetting';
const Account = ({params}) => {

  const [value, setValue] = useState('EDITPROFILE')

  const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Choose One")
    // array of options 
    const options = ['Apple', 'banana', 'chips'];
  

  return (
    <div className=' mt-8 border rounded-md h-full min-h-[30rem] flex md:flex-row flex-col '>
       
       <div className=' hidden md:flex w-full md:w-[30%] lg:w-[20%]  flex-col gap-2 border-r py-7 px-2 '>
        <div onClick={()=>setValue('EDITPROFILE')} className={` hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md ${value==='EDITPROFILE' ? 'bg-green-500/10 text-green-500' : null} `}>
          <span>Edit Profile</span>
        </div>
        <div onClick={()=>setValue('VERIFYPROFILE')} className={` hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md ${value==='VERIFYPROFILE' ? 'bg-green-500/10 text-green-500' : null} `}>
          <span>Verify Profile</span>
        </div>
        <div onClick={()=>setValue('ACCOUNTSETTING')} className={` hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md ${value==='ACCOUNTSETTING' ? 'bg-green-500/10 text-green-500' : null} `}>
          <span>Account Setting</span>
        </div>
        <div onClick={()=>setValue('PAYMENTMETHOD')} className={` hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md ${value==='PAYMENTMETHOD' ? 'bg-green-500/10 text-green-500' : null} `}>
          <span>Payment Methods</span>
        </div>
        <div onClick={()=>setValue('PAYMENTSETTING')} className={` hover:bg-green-500/10  cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md ${value==='PAYMENTSETTING' ? 'bg-green-500/10 text-green-500' : null} `}>
          <span>Payment Setting</span>
        </div>
       </div>

        <div className=' md:hidden block '>
        <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex w-full items-center justify-between rounded-xl mt-5 bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600">{selectedValue}</h1>
                <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            {/* dropdown - options  */}
            <div className={`${isOpen ? 'selectOpen h-full top-0 ' : 'selectClose h-0 -top-4 '} relative flex flex-col gap-2 mx-auto w-full rounded-xl border transition-all ease-in-out duration-300`}>
                
                    <div  onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); setValue('EDITPROFILE')}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Edit Profile</span>
                    </div>
                    <div  onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); setValue('VERIFYPROFILE')}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Verify Profile</span>
                    </div>
                    <div  onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); setValue('ACCOUNTSETTING')}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Account Setting</span>
                    </div>
                    <div  onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); setValue('PAYMENTMETHOD')}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Payment Methods</span>
                    </div>
                    <div  onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false); setValue('PAYMENTSETTING')}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Payment Setting</span>
                    </div>
                
            </div>
        </div>

       <div className=' w-full md:w-[70%] lg:w-[80%] transition-all duration-300 ease-linear '>
      {
        value === 'EDITPROFILE' && <EditProfile />
      }
      {
        value === 'VERIFYPROFILE' && <VerifyProfile />
      }
      {
        value === 'ACCOUNTSETTING' && <AccountSettings />
      }
      {
        value === 'PAYMENTMETHOD' && <PaymentMethods />
      }
      {
        value === 'PAYMENTSETTING' && <PaymentSetting />
      }
       </div>

    </div>
  )
}

export default Account