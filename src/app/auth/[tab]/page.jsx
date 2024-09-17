'use client'
import Signin from '@/components/Signin';
import Signup from '@/components/Signup';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import LoginImg from '@/public/images/LoginImg.webp'

const page = ({params}) => {

  const router = useRouter();
  const { tab } = params;

    console.log(tab);

    useEffect(() => {
      if (!tab || (tab !== 'signin' && tab !== 'signup')) {
        router.push('/auth/signin'); // Default to login if no tab or incorrect tab
      }
    }, [tab, router]);
    

  return (
    <div className=' max-w-[1250px] mx-auto flex pt-10 '>

<div className=" flex-1 flex items-center h-full justify-center">
      <div className="w-full p-6 bg-white h-full rounded-md shadow-md">
        <div className="flex px-[5%] justify-center mb-6  ">
          <button
            className={`text-[1.4rem] border-b-4 flex-1 w-full py-3 transition-colors duration-300 ease-in-out ${
              tab === 'signin'
                ? 'text-green-500 bg-green-500/10 border-green-500'
                : 'text-gray-400'
            }`}
            onClick={() => router.push('/auth/signin')}
          >
            Sign In
          </button>
          <button
            className={`text-[1.4rem]  border-b-4 flex-1 w-full py-3 ${
              tab === 'signup'
                ? 'text-green-500 bg-green-500/10 border-green-500'
                : 'text-gray-400'
            }`}
            onClick={() => router.push('/auth/signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Render the appropriate form based on the URL */}
        {tab === 'signin' && <Signin />}
        {tab === 'signup' && <Signup />}
      </div>
    </div>

    <div className=' flex-1 lg:block hidden relative  '>
      <Image src={LoginImg} alt='Login Image' className=' w-full  h-full object-cover rounded-r-md ' />
      <div className=' absolute w-full h-full left-0 top-0 bg-black/30  rounded-r-md '></div>
    </div>

    </div>
  )
}

export default page