import React from 'react'
import { RiArrowRightDoubleFill } from "react-icons/ri";
import HeroImg from '@/public/images/HeroImg.webp'
import Image from 'next/image';


const HomeHero = () => {
  return (
    <div className='  max-w-[1250px] mx-auto px-3 flex items-center justify-between md:h-[35rem] md:flex-row flex-col md:gap-5 gap-10 '>
        <div className=' w-full md:flex-1 md:order-1 order-2 '>
            <h4 className=' text-[1.8rem] italic text-green-500 font-medium  '>Flytte rundt</h4>
            <div className=' text-[4rem] font-bold leading-tight pt-3 pb-4'>
                <h3>Lei en bil på</h3>
                <h3>bare noen få</h3>
                <h3>trykk</h3>
            </div>
            <p className=' text-green-500 text-xl '>Finn bilen som møter dine behov</p>
            {/* <div className='  mt-7 '>
                <button className=' flex items-center gap-1 bg-green-500 group hover:gap-3 transition-all duration-150 ease-linear rounded-md px-5 py-2 font-semibold '>
                    <span>Kontakt oss</span>
                    <RiArrowRightDoubleFill />
                </button>
            </div> */}
        </div>
        <div className=' w-full md:flex-1 relative md:order-2 order-1 md:pt-0 pt-10 '>
            <div className=' md:absolute right-0 xl:right-[-100px] flex items-center justify-center h-full sm:w-[25rem] md:w-[30rem] mx-auto top-0 '>
            <Image src={HeroImg} alt='Hero Img'  priority={true} className=' w-full   object-cover ' />
            </div>
        </div>
    </div>
  )
}

export default HomeHero