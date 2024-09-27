"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/public/images/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import Profiles from "./Profiles";
import { useSession } from "next-auth/react";
import { useFormContext } from "@/context/FormContext";



const Header = ({user, userData}) => {
  // console.log(userData.id);

  const { formData, updateFormData } = useFormContext();
  console.log(formData);
  useEffect(()=> {
     
    if(userData?.id){
      updateFormData("userId", userData?.id )
      localStorage.setItem('id', userData?.id)
    }
  }, [])
  
 
    const [menuOpen, setMenuOpen] = useState(false)
    // const [userData, setUserData] = useState(null)
    useEffect(()=> {
      user ? localStorage.setItem('token', true) : localStorage.removeItem('token')
    },[])

  const pathname = usePathname();
  // const { data: session } = useSession()
  // console.log(`session: ${session}`);

  // console.log(pathname);
  // console.log(data);

  // useEffect(()=>{

  //   (async function() {
  //     const res = await axios.get('api/user/details');
  //   const data = res.data;
  //   if(data.success){
  //     setUserData(data.data)
  //   }
  //   console.log(data);
  //   })()

  // },[])
  // console.log(userData);
  
  

  return (
    <div className=" max-w-[1250px] mx-auto flex items-center justify-between px-3 relative z-50  py-2 ">
      <Link  onClick={()=>setMenuOpen(false)} href={'/'}>
        <Image
          alt="Logo"
          priority={true}
          src={Logo}
          className=" w-[10rem] h-full object-cover "
        />
      </Link>
      <div className=" hidden md:flex items-center gap-2 lg:gap-7  ">
        <Link
          href={"/"}
          className={` ${pathname ==='/' ? 'before:w-full' : 'before:w-0'} relative before:absolute before:left-0 before:top-full before:h-[2px] before:bg-green-500 hover:before:w-full before:transition-all before:duration-300 before:ease-linear text-[1.1rem] px-2  `}
        >
          Hjem
        </Link>
        <Link
          href={"/aboutus"}
          className={` ${pathname ==='/aboutus' ? 'before:w-full' : 'before:w-0'} relative before:absolute before:left-0 before:top-full before:h-[2px] before:bg-green-500 hover:before:w-full before:transition-all before:duration-300 before:ease-linear text-[1.1rem] px-2  `}
        >
          Om
        </Link>
        <Link
          href={"/rentcar"}
          className={` ${pathname ==='/rentcar' ? 'before:w-full' : 'before:w-0'} relative before:absolute before:left-0 before:top-full before:h-[2px] before:bg-green-500 hover:before:w-full before:transition-all before:duration-300 before:ease-linear text-[1.1rem] px-2  `}
        >
          Lei ut bilen din
        </Link>
      </div>
      
        <div className=" flex items-center gap-5 ">
        <div className=" md:hidden block text-[1.5rem] pr-3 transition-all duration-300 ease-in-out ">
        {
            menuOpen ? <RxCross2 onClick={()=>setMenuOpen(false)} /> : <HiMiniBars3 onClick={()=>setMenuOpen(true)} />
        }
      </div>
        {
          user ? <div className=" ">
            <Profiles img={userData?.profileImg} />
          </div> : <>
          <div className=" hidden md:flex items-center gap-2 lg:gap-5 ">
          <Link href={'/auth/signin'} className=" bg-transparent px-5 py-2 font-semibold border text-[#000] hover:text-[#fff] border-green-600 hover:bg-green-500 transition-colors duration-300 ease-in-out rounded-md shadow-md ">
        Logg inn
        </Link>
        <Link href={'/auth/signup'} className=" px-5 py-2 font-semibold border hover:bg-transparent text-[#fff] hover:text-[#000] border-green-500  bg-green-500 rounded-md  transition-colors duration-300 ease-in-out">
        Registrer deg
        </Link>
        </div>
          </>
        }
      
      
        </div>


        <div className={` md:hidden flex flex-col absolute top-full left-0 w-full min-h-[100vh] z-40  bg-black/60 ${menuOpen ? 'menuOpen' : 'nMenuOpen'} transition-all duration-500 ease-in-out `}>

            {/* <div className=" flex items-center justify-between bg-[#fff] text-[#000] px-3 pr-5 py-2 ">
            <div>
            <Image
          alt="Logo"
          priority={true}
          src={Logo}
          className=" w-[10rem] h-full object-cover "
        />
            </div>
            <div>
                <RxCross2 className=" text-[1.7rem] font-semibold  " />
            </div>
            </div> */}
            
      <div className="   flex flex-col  text-[#fff] text-[1.6rem] font-medium gap-5 pb-10 pt-20 px-2  w-full left-0 ">
      <Link
          href={"/"}
          onClick={()=>setMenuOpen(false)}
          className={` ${pathname ==='/' ? 'bg-green-500 text-white' : ''} relative before:absolute before:left-0 before:top-full before:h-[2px] hover:before:w-full before:transition-all before:duration-500 before:ease-linear px-5 py-2  hover:bg-green-500 hover:text-white rounded-md z-50  `}
        >
          Hjem
        </Link>
        <Link
         onClick={()=>setMenuOpen(false)}
          href={"/aboutus"}
          className={` ${pathname ==='/aboutus' ? 'bg-green-500 text-white' : ''} relative before:absolute before:left-0 before:top-full before:h-[2px] hover:before:w-full before:transition-all before:duration-350 before:ease-linear  px-5 py-2 hover:bg-green-500 hover:text-white rounded-md z-50  `}
        >
          Om
        </Link>
        <Link
         onClick={()=>setMenuOpen(false)}
          href={"/rentcar"}
          className={` ${pathname ==='/rentcar' ? 'bg-green-500 text-white' : ''} relative before:absolute before:left-0 before:top-full before:h-[2px] hover:before:w-full before:transition-all before:duration-350 before:ease-linear  px-5 py-2  hover:bg-green-500 hover:text-white rounded-md z-50  `}
        >
          Lei ut bilen din
        </Link>
        {
          !user && 
          <div className=" flex items-center gap-7 text-base md:text-xl px-5 py-2 mt-10 ">
        <Link onClick={()=>setMenuOpen(false)} href={'/auth/signin'} className=" bg-transparent px-10 py-2 font-semibold border border-green-600 hover:bg-green-500 transition-colors duration-300 ease-in-out rounded-md shadow-md ">
        Logg inn
        </Link>
        <Link onClick={()=>setMenuOpen(false)} href={'/auth/signup'} className="  px-10 py-2 font-semibold border text-[#fff] hover:bg-transparent border-green-500 transition-colors duration-300 ease-in-out  bg-green-500 rounded-md ">
        Registrer deg
        </Link>
      </div>
        }
      </div>
        </div>

      
    </div>
  );
};

export default Header;



