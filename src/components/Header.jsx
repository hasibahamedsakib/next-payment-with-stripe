"use client";

import React, { useState } from "react";
import Logo from "@/public/images/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";



const Header = () => {
 
    const [menuOpen, setMenuOpen] = useState(false)

  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className=" max-w-[1250px] mx-auto flex items-center justify-between px-3 relative z-50  py-2 ">
      <Link href={'/'}>
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
          Home
        </Link>
        <Link
          href={"/aboutus"}
          className={` ${pathname ==='/aboutus' ? 'before:w-full' : 'before:w-0'} relative before:absolute before:left-0 before:top-full before:h-[2px] before:bg-green-500 hover:before:w-full before:transition-all before:duration-300 before:ease-linear text-[1.1rem] px-2  `}
        >
          About
        </Link>
        <Link
          href={"/rentcar"}
          className={` ${pathname ==='/rentcar' ? 'before:w-full' : 'before:w-0'} relative before:absolute before:left-0 before:top-full before:h-[2px] before:bg-green-500 hover:before:w-full before:transition-all before:duration-300 before:ease-linear text-[1.1rem] px-2  `}
        >
          Rent out Your Car
        </Link>
      </div>
      <div className=" hidden md:flex items-center gap-2 lg:gap-5 ">
        <button className=" bg-transparent px-5 py-1 font-semibold border border-green-600 rounded-md shadow-md ">
          Login
        </button>
        <button className=" px-5 py-2 font-semibold border  bg-green-500 rounded-md ">
          Register
        </button>
      </div>
      <div className=" md:hidden block text-[1.5rem] pr-3 transition-all duration-300 ease-in-out ">
        {
            menuOpen ? <RxCross2 onClick={()=>setMenuOpen(false)} /> : <HiMiniBars3 onClick={()=>setMenuOpen(true)} />
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
            
      <div className="   flex flex-col  text-[#fff] text-[1.6rem] font-medium gap-5 pb-10 pt-20   w-full left-0 ">
      <Link
          href={"/"}
          className={` ${pathname ==='/' ? 'bg-black/40' : ''} relative before:absolute before:left-0 before:top-full before:h-[2px] hover:before:w-full before:transition-all before:duration-500 before:ease-linear px-5 py-2 hover:bg-black/55 z-50  `}
        >
          Home
        </Link>
        <Link
          href={"/aboutus"}
          className={` ${pathname ==='/aboutus' ? 'bg-black/40' : ''} relative before:absolute before:left-0 before:top-full before:h-[2px] hover:before:w-full before:transition-all before:duration-350 before:ease-linear  px-5 py-2 hover:bg-black/40 z-50  `}
        >
          About
        </Link>
        <Link
          href={"/rentcar"}
          className={` ${pathname ==='/rentcar' ? 'bg-black/40' : ''} relative before:absolute before:left-0 before:top-full before:h-[2px] hover:before:w-full before:transition-all before:duration-350 before:ease-linear  px-5 py-2 hover:bg-black/40 z-50  `}
        >
          Rent out Your Car
        </Link>
        <div className=" flex items-center gap-7 text-xl px-5 py-2 ">
        <button className=" bg-transparent px-7 py-2 font-semibold border border-green-600 rounded-md shadow-md ">
          Login
        </button>
        <button className="  px-7 py-2 font-semibold border text-[#000]  bg-green-400 rounded-md ">
          Register
        </button>
      </div>
      </div>
        </div>

      
    </div>
  );
};

export default Header;
