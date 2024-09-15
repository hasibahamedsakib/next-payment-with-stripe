import React from 'react'
import HomeAboutImg1 from '@/public/images/HomeAboutImg1.webp'
import HomeAboutImg2 from '@/public/images/HomeAboutImg2.webp'
import Image from 'next/image'
import { BsEmojiGrinFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";
import { RiArrowRightDoubleFill } from "react-icons/ri";



const HomeAbout = () => {
  return (
    <div className=' max-w-[1250px] mx-auto px-3 py-[5rem] md:py-[7rem] '>
      <div className='  flex  w-full md:flex-row flex-col gap-10  md:gap-3 lg:gap-[3%] '>
      <div className=' flex-1 flex gap-2 sm:gap-4 '>
        <div className=' flex-1 '>
          <Image src={HomeAboutImg2} className=' w-full h-[20rem] sm:h-full object-cover  rounded-lg ' />
        </div>
        <div className=' flex-1 flex flex-col gap-2 sm:gap-4 '>
          <div className=' flex-1 '>
            <Image src={HomeAboutImg1} className=' w-full h-full object-cover object-top rounded-lg ' />
          </div>
          <div className=' flex-1 flex items-center justify-center text-center text-[1.5rem] sm:text-[2rem] leading-tight font-semibold bg-black text-[#fff]  rounded-lg '>
            <h3>5+ Years <br /> Experience </h3>
          </div>
        </div>
      </div>
      <div className=' flex-1 '>
        <div>
          <h3 className=' text-[2rem] sm:text-[3rem] leading-none '>Discover the new way</h3>
         <h4 className=' text-[1.5rem] sm:text-[2rem] text-green-500 leading-tight '> to rent a car</h4>
        </div>
        <p className=' text-base text-[#444] font-light my-5 '>Choose from thousands of cars available from private and professional owners near you.</p>
        <div className=' flex items-start gap-3  '>
          <BsEmojiGrinFill  className=' mt-1 text-green-500 text-xl ' />
          <div>
            <h4 className=' text-[1.3rem] sm:text-[1.5rem] font-normal leading-none '>Prices by the hour or day</h4>
            <p className=' font-light text-base text-[#444] mt-2 '>Trip liability insurance is included. You can even add another driver at no extra cost.</p>
          </div>
        </div>
        <div className=' flex items-start gap-3 mt-4 '>
          <IoShieldCheckmarkSharp  className=' mt-1 text-green-500 text-xl ' />
          <div>
            <h4 className=' text-[1.3rem] sm:text-[1.5rem] font-normal leading-none '>No waiting around</h4>
            <p className=' font-light text-base text-[#444] mt-2 '>Book a car near you instantly, even at the last minute. No lines. No paperwork.</p>
          </div>
        </div>
        <div className=' flex items-start gap-3 mt-4 '>
          <FaCarOn  className=' -mt-2 text-green-500 text-4xl ' />
          <div>
            <h4 className=' text-[1.3rem] sm:text-[1.5rem] font-normal leading-none '>Unlock the car with the app</h4>
            <p className=' font-light text-base text-[#444] mt-2 '>Our secure Getaround Connect technology allows you to do the walkaround inspection of the car with the app. The car opens. The keys are inside. Off you go!</p>
          </div>
        </div>
        <div className='  mt-7 '>
                <button className=' flex items-center gap-1 bg-green-500 group hover:gap-3 transition-all duration-150 ease-linear rounded-md px-5 py-2 font-semibold '>
                    <span className=' text-xl text-[#fff] '>See How it works</span>
                    <RiArrowRightDoubleFill className='  text-[#fff] text-xl ' />
                </button>
            </div>
      </div>
    </div>
    </div>
  )
}

export default HomeAbout