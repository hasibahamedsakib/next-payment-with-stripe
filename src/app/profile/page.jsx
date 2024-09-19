'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {

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

  console.log(`userdata: ${userData}`);

  
 
  

  return (
    <div className=" min-h-[60vh] ">
      <div className=" max-w-[50rem] bg-[#FFFFFF] mx-auto rounded-md mt-[10%] flex shadow-md px-6 ">
        {/* <h2 className=' text-[2.5rem] font-semibold text-center text-[#000] py-5 '>My Profile</h2> */}
        <div className=" flex-1 ">
          {userData && (
            <div className=" flex flex-col gap-6 py-8 ">
              {/* <div className=' flex flex-col gap-1 px-3 text-[#454545] '>
          <label className=' font-semibold text-[#A4A4A4] ' htmlFor="">Username</label>
          <input value={userData?.username}  className=' border-b-2 text-[#000]  py-1 text-xl outline-none  ' type="text" name="" id="username" />
        </div> */}
              <div className=" flex flex-col gap-1 px-3 text-[#454545] ">
                <label className=" font-semibold text-[#A4A4A4] " htmlFor="">
                  First Name
                </label>
                <input
                  value={userData?.firstName}
                  className=" border-b-2 text-[#000]  py-1 text-xl outline-none  "
                  type="text"
                  name=""
                  id="firstName"
                />
              </div>
              <div className=" flex flex-col gap-1 px-3 text-[#454545] ">
                <label className=" font-semibold text-[#A4A4A4] " htmlFor="">
                  Last Name
                </label>
                <input
                  value={userData?.lastName}
                  className=" border-b-2 text-[#000]  py-1 text-xl outline-none  "
                  type="text"
                  name=""
                  id="lastName"
                />
              </div>
              <div className=" flex flex-col gap-1 px-3 text-[#454545] ">
                <label className=" font-semibold text-[#A4A4A4] " htmlFor="">
                  Email
                </label>
                <input
                  value={userData?.email}
                  className=" border-b-2 text-[#000]  py-1 text-xl outline-none  "
                  type="email"
                  name=""
                  id="email"
                />
              </div>
            </div>
          )}
        </div>
        <div className=" flex-1 flex justify-center mt-[5%] ">
          <img
            src={userData?.profileImg}
            className=" w-[15rem] h-[15rem] rounded-full bg-slate-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
