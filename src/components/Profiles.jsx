'use client'

import axios from 'axios';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function Profiles({img}) {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const router = useRouter()
  // const items = ['React', 'Angular', 'Vue'];
  
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close)
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

      

    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <div ref={dropDownRef} className="relative mx-auto text-white">
      <div onClick={() => setOpen((prev) => !prev)} className="rounded-full bg-slate-200 cursor-pointer ">
        <Image src={img} alt='Profile img' width={50} height={50} />
      </div>
      <ul className={`${open ? 'visible' : 'invisible'} absolute right-20 top-16 z-50 w-full space-y-1`}>
        
          <Link  href={'/profile'}>
          <li 
            // key={idx}
            className={`rounded-sm cursor-pointer w-28 pl-3 right-0 bg-green-400 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-green-500`}
            style={{ transform: `translateY(${open ? 0 : (0 + 1) * 10}px)`}}
          >
            Profile
          </li>
          </Link>
          <li 
            // key={idx}
            onClick={handleSignout}
            className={`rounded-sm cursor-pointer w-28   pl-3 right-0 bg-green-400 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-green-500`}
            style={{ transform: `translateY(${open ? 0 : (1 + 1) * 10}px)`}}
          >
            Sign Out
          </li>
        
      </ul>
    </div>
  );
}
