import Image from 'next/image'
import React from 'react'
import PlaceImg2 from '@/public/images/place2.webp'
import PlaceImg1 from '@/public/images/place1.webp'
import PlaceImg3 from '@/public/images/place3.webp'
import PlaceImg4 from '@/public/images/place4.webp'
import PlaceImg5 from '@/public/images/place5.webp'
import PlaceImg6 from '@/public/images/place6.webp'
import PlaceImg7 from '@/public/images/place7.webp'
import PlaceImg8 from '@/public/images/place8.webp'

const Homecountries = () => {
  return (
    <div className=' max-w-[1250px] mx-auto pt-[2rem] pb-[7rem] px-3 '>
        <div className=' text-center  text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold w-full pb-10  '>
            <h3>Tilgjengelig over hele Norge</h3>
        </div>
        <div className=' flex md:h-[20rem] gap-1 md:gap-3 md:flex-row flex-col '>
            <div className=' w-full md:w-[45%] overflow-hidden rounded-xl relative '>
                <Image src={PlaceImg1} placeholder='blur' alt='Place image' className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>Oslo</div>
            </div>
            <div className=' w-full md:w-[30%] overflow-hidden rounded-xl  relative '>
                <Image src={PlaceImg2} placeholder='blur' alt='Place image' className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out  ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>Østfold</div>
            </div>
            <div className=' w-full md:w-[30%] overflow-hidden rounded-xl  relative '>
                <Image src={PlaceImg3} placeholder='blur' alt='Place image' className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out  ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>
                Akershus</div>
            </div>
        </div>
        <div className=' flex  md:h-[20rem] gap-1 md:gap-3  mt-1 md:mt-4 md:flex-row flex-col '>
            {/* <div className='  w-full md:w-[30%] overflow-hidden rounded-xl  relative '>
                <Image src={PlaceImg5} className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out  ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>
                Las Vegas</div>
            </div> */}
            <div className='  w-full md:w-[50%] overflow-hidden rounded-xl  relative '>
                <Image src={PlaceImg4} placeholder='blur' alt='Place image' className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out  ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>
                Buskerud</div>
            </div>
            <div className='  w-full md:w-[50%] overflow-hidden rounded-xl  relative '>
                <Image src={PlaceImg5} placeholder='blur' alt='Place image' className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out  ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>
                Vestfold </div>
            </div>
        </div>
        {/* <div className=' flex md:h-[20rem] overflow-hidden rounded-3xl gap-1 md:gap-3 mt-1 md:mt-4 md:flex-row flex-col '>
            <div className='  w-full md:w-[45%] overflow-hidden rounded-xl relative'>
                <Image src={PlaceImg7} className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>
                Oakland</div>
            </div>
            <div className='  w-full md:w-[30%] overflow-hidden rounded-xl  relative '>
                <Image src={PlaceImg8} className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out  ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>Honolulu</div>
            </div>
            <div className='  w-full md:w-[30%] overflow-hidden rounded-xl  relative '>
                <Image src={PlaceImg3} className=' h-full w-full object-cover rounded-xl hover:scale-110  transition-all duration-300 ease-in-out  ' />
                <div className=' absolute h-[5rem] bg-gradient-to-b from-transparent to-black w-full left-0 bottom-0 text-[#fff] text-[2rem] flex items-center justify-center '>Chicago</div>
            </div>
        </div> */}
    </div>
  )
}

export default Homecountries