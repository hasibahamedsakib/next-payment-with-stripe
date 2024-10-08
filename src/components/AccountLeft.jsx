'use client'
import axios from 'axios';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const AccountLeft = () => {

    const pathname = usePathname()
    

    const [isOpen, setIsOpen] = useState(false);
      const [selectedValue, setSelectedValue] = useState("Edit Profile")
      const [userData, setUserData] = useState("");
      
      const options = ['Apple', 'banana', 'chips'];
  
    //   useEffect(() => {
    //     const hello = async () => {
    //       const response = await axios.get(`/api/user/details`, {
    //         withCredentials: true,
    //       }); // Revalidate every 10 seconds
    //       // console.log(response.json());
    
    //       setUserData(response.data.data);
    //       // console.log(response);
    //     };
    //     hello();
    //   }, []);

  return (
    
        <>
       
       <div className=' hidden md:flex w-full md:w-[30%] lg:w-[20%]  flex-col gap-2 border-r py-7 px-2 '>
        <Link href={'/dashboard/account/edit-profile'} className={` ${pathname==='/dashboard/account/edit-profile' ? 'bg-green-500/10 text-green-500' : null} hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md  `}>
          <span>Edit Profile</span>
        </Link>
        <Link  href={'/dashboard/account/verify-profile'}  className={` ${pathname==='/dashboard/account/verify-profile' ? 'bg-green-500/10 text-green-500' : null} hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md  `}>
          <span>Verify Profile</span>
        </Link>
        <Link  href={'/dashboard/account/account-settings'}  className={`${pathname==='/dashboard/account/account-settings' ? 'bg-green-500/10 text-green-500' : null} hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md  `}>
          <span>Account Setting</span>
        </Link>
        <Link  href={'/dashboard/account/payment-methods'}  className={`${pathname==='/dashboard/account/payment-methods' ? 'bg-green-500/10 text-green-500' : null} hover:bg-green-500/10 cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md } `}>
          <span>Payment Methods</span>
        </Link>
        <Link  href={'/dashboard/account/payment-setting'}  className={`${pathname==='/dashboard/account/payment-setting' ? 'bg-green-500/10 text-green-500' : null} hover:bg-green-500/10  cursor-pointer hover:text-green-500 transition-colors ease-in-out duration-300 px-2 py-2 rounded-md  `}>
          <span>Payment Setting</span>
        </Link>
       </div>

        <div className=' md:hidden block '>
        <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex w-full items-center justify-between rounded-xl mt-5 bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600">{selectedValue}</h1>
                <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            <div className={`${isOpen ? 'selectOpen h-full top-0 ' : 'selectClose h-0 -top-4 '} relative flex flex-col gap-2 mx-auto w-full rounded-xl border transition-all ease-in-out duration-300`}>
                
                    <Link href={'/dashboard/account/edit-profile'}  onClick={(e) => { setIsOpen(false);}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Edit Profile</span>
                    </Link>
                    <Link href={'/dashboard/account/verify-profile'}  onClick={(e) => { setIsOpen(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Verify Profile</span>
                    </Link>
                    <Link href={'/dashboard/account/account-settings'}  onClick={(e) => { setIsOpen(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Account Setting</span>
                    </Link>
                    <Link href={'/dashboard/account/payment-methods'}  onClick={(e) => { setIsOpen(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Payment Methods</span>
                    </Link>
                    <Link href={'/dashboard/account/payment-setting'}  onClick={(e) => { setIsOpen(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                        <span>Payment Setting</span>
                    </Link>
                
            </div>
        </div>

       {/* <div className=' w-full md:w-[70%] lg:w-[80%] transition-all duration-300 ease-linear '>
      {
        value === 'EDITPROFILE' &&  <EditProfile userData={userData} />
       
      }
      {
        value === 'VERIFYPROFILE' &&  <VerifyProfile />
        
      }
      {
        value === 'ACCOUNTSETTING' &&  <AccountSettings userData={userData} />
        
      }
      {
        value === 'PAYMENTMETHOD' &&  <PaymentMethods />
        
      }
      {
        value === 'PAYMENTSETTING' && <PaymentSetting  userData={userData}  />
        
      }
       </div> */}

</>
   
  )
}

export default AccountLeft