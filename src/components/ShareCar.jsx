import React from 'react'
import rentCarImg from '@/public/images/rentCarImg.webp'
import Image from 'next/image'
import { LiaUserFriendsSolid } from "react-icons/lia";


const ShareCar = () => {
  return (
    <div className=' flex px-3 md:flex-row flex-col gap-4 '>
        <div className=' flex-1 '>
            <Image src={rentCarImg} alt='Key Exchange Image' className=' w-full h-full object-cover rounded-lg ' />
        </div>
        <div className=' flex-1 flex flex-col justify-between h-full gap-3 '>
            <div className=' mb-6 '>
            <h3 className=' text-[2rem] font-light leading-tight '>Way to share</h3>
            <p className=' text-[1.3rem] font-bold '>Key exchange</p>
            </div>
            <div className=' flex items-center gap-4 bg-green-500 px-4 py-5 text-[#fff] rounded-md '>
                <div className=' text-[2rem] '>
                    <LiaUserFriendsSolid />
                </div>
                <div className=' flex flex-col leading-none gap-1 '>
                    <h4 className=' text-[1.5rem] font-semibold '>Meet Drivers</h4>
                    <p>Hand over the keys every time</p>
                </div>
            </div>
            <p className=' my-7 '>Meet drivers at each check-in and check-out to sign the rental agreement.</p>
            <p className=' font-semibold '>Suitable for car sharing outside of Getaround Connect eligible zones.</p>
        </div>
    </div>
  )
}

export default ShareCar