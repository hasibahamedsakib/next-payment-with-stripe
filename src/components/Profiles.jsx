'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosLogOut } from "react-icons/io";


export default function Profiles({img}) {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const router = useRouter()
  
  
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);


  const handleSignout = async () => {
  // await signOut({
  //   redirect: false
  // })
  try {
    
    const res = await axios.get("/api/auth/signout")
    console.log(res);
    
    if(res.data.success){
      toast.success("Sign Out Successfully")
      window.location.reload()
      router.push('/auth/signin')
    }

    setOpen(false)

  } catch (error) {
    console.log(error.message);
    
  }
}


  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
      <button onClick={() => setOpen((prev) => !prev)} className=" bg-slate-100 rounded-full">
        <Image src={img} width={45} height={45} className=' w-full p-2 h-full ' />
      </button>
      <ul className={`${open ? 'visible translate-y-0 duration-300' : 'invisible translate-y-4'} absolute top-20 flex flex-col gap-2 w-64 z-50 px-2 py-5  right-0 space-y-1 rounded-md bg-white border text-[#000] shadow-md`}>
        
          {/* <Link  onClick={() => setOpen(false)} href={'/dashboard/requests'}>
          <li className={`hover:rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-green-500 hover:text-white border-b  `}>
            Dashboard
          </li>
          </Link> */}
          <Link onClick={() => setOpen(false)} href={'/dashboard/requests'}>
          <li className={`hover:rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-green-500 hover:text-white border-b  `}>
            Requests
          </li>
          </Link>
          <Link onClick={() => setOpen(false)} href={'/dashboard/requests'}>
          <li className={`hover:rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-green-500 hover:text-white border-b  `}>
            Rentals
          </li>
          </Link>
          <Link onClick={() => setOpen(false)} href={'/dashboard/requests'}>
          <li className={`hover:rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-green-500 hover:text-white border-b  `}>
          Cars
          </li>
          </Link>
          <Link onClick={() => setOpen(false)} href={'/dashboard/requests'}>
          <li className={`hover:rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-green-500 hover:text-white border-b  `}>
          Performance
          </li>
          </Link>
          <Link onClick={() => setOpen(false)} href={'/dashboard/requests'}>
          <li className={`hover:rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-green-500 hover:text-white border-b  `}>
          Payments
          </li>
          </Link>
          <Link onClick={() => setOpen(false)} href={'/dashboard/account'}>
          <li className={`hover:rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-green-500 hover:text-white border-b  `}>
          Accounts
          </li>
          </Link>
          <div onClick={handleSignout}>
          <li className={`rounded-md p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} bg-slate-200 mt-5 cursor-pointer flex items-center justify-between   `}>
            <span>Sign Out</span>
            <IoIosLogOut className=' text-[#000] text-[1.3rem] ' />
          </li>
          </div>
        
      </ul>
    </div>
  );
}



















