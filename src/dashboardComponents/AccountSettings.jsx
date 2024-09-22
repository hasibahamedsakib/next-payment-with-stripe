'use client'
import axios from 'axios'
import { SessionContext } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AccountSettings = ({userData}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [changeEmailStatus, setChangeEmailStatus] = useState(false)

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [changePasswordStatus, setChangePasswordStatus] = useState('')
  const [userDeleteStatus, setUserDeleteStatus] = useState(false)
  const router = useRouter()

  const handleEmailChange = async () => {
    setChangeEmailStatus(true)
    try {
      const res = await axios.post('/api/user/edit', {
        email,
        password,
        userId: userData?._id
      },{
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(res.data);
      
      if(res?.data?.success){
        toast.success("Email Updated successfully")
      }
      setChangeEmailStatus(false)
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
      setChangeEmailStatus(false)
    }
  }
  console.log(userData?._id);

  const handlePasswordChange = async () => {
    setChangePasswordStatus(true)
    try {
      if(newPassword !== confirmPassword){
        toast.error("New Password and Confirm Password should be mathch")
        return;
      }
      const res = await axios.post('/api/user/edit', {
        oldPassword,
        newPassword,
        userId: userData?._id
      },{
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(res.data);
      
      if(res?.data?.success){
        toast.success("Password Updated successfully")
      }
      setChangePasswordStatus(false)
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
      setChangePasswordStatus(false)
    }
  }
  console.log(newPassword, confirmPassword);


const deleteAccount = async () => {
  setUserDeleteStatus(true)
  try {
    const response = await axios.post('/api/user/delete', { userId: userData?._id });
    console.log(response);
    
    if (response.data?.success) {
      toast.success("User deleted successfully") 
    } 
    setUserDeleteStatus(false)
    window.location.reload()
    router.push('/auth/signin')
  } catch (error) {
    toast.error(error.message)
    setUserDeleteStatus(false)
    console.error('Error deleting account:', error);
  }
};

// Example usage
// deleteAccount('userIdFromStateOrContext');

  
  

  return (
    <div className=' px-2  '>
      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Change your email</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >New Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='shahed@gmail.com' className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex justify-end '>
            <span className=' text-base underline hover:text-green-500 font-light cursor-pointer '>Forgot Password</span>
          </div>
          <div>
            <button onClick={handleEmailChange} disabled={changeEmailStatus} className=' bg-green-500 py-2 w-full rounded-md text-[#fff] active:scale-110 '>
              {
                changeEmailStatus ? "updating" : "Change your email"
              }
            </button>
          </div>
          
        </div>
      </div>


      <div className=' mt-10 '>
        <h3 className=' text-[1.4rem] '>Change your password</h3>
        <div className=' mt-5 flex flex-col gap-4 '>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Old Password</label>
            <input onChange={(e)=>setOldPassword(e.target.value)} type="password" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex justify-end '>
            <span className=' text-base underline hover:text-green-500 font-light cursor-pointer '>Forgot Password</span>
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >New Password</label>
            <input onChange={(e)=>setNewPassword(e.target.value)} type="password" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>
          <div className=' flex flex-col gap-1 '>
            <label htmlFor="" className=' font-light ' >Confirm Password</label>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className=' outline-none px-2 py-2 rounded-md bg-green-500/5 ' />
          </div>

          <div>
            <button onClick={handlePasswordChange} disabled={changePasswordStatus} className=' bg-green-500 py-2 w-full rounded-md text-[#fff] active:scale-110 '>
              {
                changePasswordStatus ? "Loading" : "Change your Password"
              }
            </button>
          </div>
          
        </div>
      </div>

      <div className=' py-10 '>
        <h3 className=' text-[1.4rem] text-red-500 '>Delete your account</h3>
        <div className=' mt-5 '>
          <button onClick={deleteAccount} disabled={userDeleteStatus} className=' bg-black/50 py-2 rounded-md text-white w-full '>
              {
                userDeleteStatus ? "Deleting" : "Delete your account"
              }
          </button>
        </div>
      </div>

    </div>
  )
}

export default AccountSettings