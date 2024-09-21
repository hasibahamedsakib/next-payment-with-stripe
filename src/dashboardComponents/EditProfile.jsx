'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const EditProfile = () => {

  const [userData, setUserData] = useState(null)
  useEffect(()=> {
    const hello = async ()=> {
      const response = await axios.get(`/api/user/details`, {
        withCredentials: true,
      }); // Revalidate every 10 seconds
      // console.log(response.json());
      
      setUserData(response.data.data)
      // console.log(response);
    }
    hello()
  },[] )

  console.log(userData);
  

  return (
    <div className=' px-3 py-8 '>
      <div>
        <p className=' font-light bg-[#fff] py-10 px-5 border-l-4 border-green-500 shadow-md '>Some of this information appear on your profile. Owners will access your profile when you send them a booking request. If you publish a car listing, your profile becomes public so that drivers can access a recap of your reviews.</p>
      </div>
      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Your Photo</h3>
        <div className=' mt-5 '>
          <span className='  '>picture</span>
          <Image src={userData?.profileImg} width={150} height={150} className=' bg-slate-100 object-cover mt-2 ' />
        </div>
      </div>
      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Personal Information</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >First Name</label>
            <input type="text" name="" id="" defaultValue={userData?.firstName} className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Last Name</label>
            <input type="text" name="" id="" defaultValue={userData?.lastName} className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Birth Date</label>
            <input type="date" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Place of Birth</label>
            <input type="text" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          
        </div>
      </div>

      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Driving license</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >License number</label>
            <input type="text" name="" id="" placeholder='e.g: 121075012xxx' className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >First issue date</label>
            <input type="date" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Country of issue</label>
            <input type="text" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          
        </div>
      </div>

      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Contact</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Email</label>
            <input type="email" name="" id="" placeholder='shahed@gmail.com' defaultValue={userData?.email} className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Number</label>
            <input type="number" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          {/* <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Language</label>
            <input type="text" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div> */}
          
        </div>
      </div>

      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Address</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Address</label>
            <input type="text" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Address line 2</label>
            <input type="text" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Postal Code</label>
            <input type="number" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >City</label>
            <input type="text" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >State</label>
            <input type="text" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          
        </div>
      </div>

      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Additional details</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >About Me</label>
            <textarea name="" id="" rows={6} className=' outline-none px-2 py-2 rounded-md bg-green-500/5  '></textarea>
          </div>
          
          
        </div>
      </div>

      <div className=' mt-10 '>
        <button className=' w-full py-2 bg-green-500 rounded-md text-[#fff] '>Update My Profile</button>
      </div>

    </div>
  )
}

export default EditProfile