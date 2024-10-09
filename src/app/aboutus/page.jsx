import AboutFirst from '@/components/AboutFirst'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className=' w-full bg-green-500/10 py-10 md:py-20  '>
        <h3 className=' text-center text-[2rem] '>About Us</h3>
      </div>
      <AboutFirst />
    </div>
  )
}

export default page