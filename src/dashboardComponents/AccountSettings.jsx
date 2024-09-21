import React from 'react'

const AccountSettings = () => {
  return (
    <div className=' px-2  '>
      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Change your email</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >New Email</label>
            <input type="email" name="" id="" placeholder='shahed@gmail.com' className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Password</label>
            <input type="password" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex justify-end '>
            <span className=' text-base underline hover:text-green-500 font-light cursor-pointer '>Forgot Password</span>
          </div>
          <div>
            <button className=' bg-green-500 py-2 w-full rounded-md text-[#fff] active:scale-110 '>Change your email</button>
          </div>
          
        </div>
      </div>


      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Change your password</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Old Password</label>
            <input type="password" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex justify-end '>
            <span className=' text-base underline hover:text-green-500 font-light cursor-pointer '>Forgot Password</span>
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >New Password</label>
            <input type="password" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Confirm Password</label>
            <input type="password" name="" id="" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>

          <div>
            <button className=' bg-green-500 py-2 w-full rounded-md text-[#fff] active:scale-110 '>Change your Password</button>
          </div>
          
        </div>
      </div>

      <div className=' py-10 '>
        <h3 className=' text-[1.4rem] text-red-500 '>Change your email</h3>
        <div className=' mt-5 '>
          <button className=' bg-black/50 py-2 rounded-md text-white w-full '>Delete your account</button>
        </div>
      </div>

    </div>
  )
}

export default AccountSettings