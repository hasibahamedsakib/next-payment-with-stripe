import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Signup = () => {
  return (
    <div className=" flex flex-col items-center px-[5%] py-8 ">
      <h3 className=" text-[1.5rem] font-semibold mb-5 ">
        Log in to your account
      </h3>
      <div className=" flex flex-col gap-4 w-full ">
        <div className=" flex items-center text-[1.4rem] gap-3 rounded-md border-2 border-gray-400 w-full text-center justify-center py-2 cursor-pointer ">
          <FaGoogle />
          <span>Continue with Google</span>
        </div>
        <div className=" bg-[#0165E1] text-[#fff] flex items-center text-[1.4rem] gap-3 rounded-md border-2 border-[#0165E1] w-full text-center justify-center py-2 cursor-pointer ">
          <FaFacebookSquare />
          <span>Continue with Facebook</span>
        </div>
        <div className=" flex items-center text-[#fff] bg-black text-[1.4rem] gap-3 rounded-md border-2 border-black w-full text-center justify-center py-2 cursor-pointer ">
          <FaApple className=" text-[1.6rem] " />
          <span>Continue with Apple</span>
        </div>
      </div>
      <p className=" py-8 text-[1.5rem] ">Or</p>
      <div className=" w-full flex flex-col gap-4 ">
        
        <div className=" flex gap-2 items-center ">
        <div className=" flex-1 flex flex-col w-full  text-[1.2rem] md:text-[1.3rem]  ">
          <label className=" pl-1 font-light " htmlFor="">
            First Name*
          </label>
          <div className=" relative ">
            <input
              type="text"
              className="  outline-none bg-green-500/10 w-full py-2 rounded-md pl-5 md:pl-8 md:pr-3 border md:placeholder:text-[1.3rem] placeholder:text-base "
              placeholder="Enter your firstname"
            />
            <FaUser className=" text-[.9rem] md:text-[1.1rem] absolute top-0 h-full flex items-center text-gray-600 left-1 md:left-2 " />
          </div>
        </div>
        <div className=" flex-1 flex flex-col w-full  text-[1.2rem] md:text-[1.3rem]  ">
          <label className=" pl-1 font-light " htmlFor="">
            Last Name*
          </label>
          <div className=" relative ">
            <input
              type="text"
              className="  outline-none bg-green-500/10 w-full py-2 rounded-md pl-5 md:pl-8 md:pr-3 border md:placeholder:text-[1.3rem] placeholder:text-base "
              placeholder="Enter your lastname"
            />
            <FaUser className=" text-[.9rem] md:text-[1.1rem] absolute top-0 h-full flex items-center text-gray-600 left-1 md:left-2 " />
          </div>
        </div>
        </div>

        <div className=" flex flex-col w-full  text-[1.2rem] md:text-[1.3rem]  ">
          <label className=" pl-1 font-light " htmlFor="">
            Email*
          </label>
          <div className=" relative ">
            <input
              type="email"
              className="  outline-none bg-green-500/10 w-full py-2 rounded-md pl-8 pr-3 border "
              placeholder="Enter your email"
            />
            <MdEmail className=" absolute top-0 h-full flex items-center text-gray-600 left-1 " />
          </div>
        </div>
        <div className=" flex flex-col w-full  text-[1.2rem] md:text-[1.3rem]  ">
          <label className=" pl-1 font-light " htmlFor="">
            Password*
          </label>
          <div className=" relative ">
            <input
              type="password"
              className=" outline-none bg-green-500/10 w-full py-2 rounded-md pl-8 pr-3 border "
              placeholder="Enter your password"
            />
            <FaLock className=" absolute top-0 text-[1rem] h-full flex items-center text-gray-600 left-2 " />
          </div>
        </div>
        <div className=" mt-6 ">
          <button className=" bg-green-500 w-full text-[1.4rem] py-2 rounded-md text-[#fff] ">
            Sign Up
          </button>
        </div>
        <p className=" text-center font-medium mt-5 ">
          Don&apos;t have a Move Around account ?{" "}
          <Link
            href={"/auth/signin"}
            className=" underline pb-2 text-green-500 "
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
