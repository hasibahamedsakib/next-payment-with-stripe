"use client";
import { useFormContext } from "@/context/FormContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [token, setToken] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      if (!storedToken) {
        router.push("/auth/signin");
      }
    }
  }, []);
  console.log(token);


  const { formData, updateFormData } = useFormContext();


  
  const ProgressNumber = 90;

 

  

  console.log(formData);

  return (
    <div className=" max-w-[700px] mx-auto min-h-[70vh]   ">
      <div className=" flex flex-col gap-5 border p-5 rounded-md mt-10 ">
        <div className="mx-auto flex w-full flex-col gap-2">
          <div className="flex h-3 w-full  items-center justify-center rounded-full bg-slate-200">
            <div
              style={{ width: `${ProgressNumber}%` }}
              className="transition-width mr-auto h-3 w-0 rounded-full  bg-green-500 duration-500"
            ></div>
          </div>
          <span className="text-center text-sm font-medium text-green-500">
            {ProgressNumber}%
          </span>
        </div>

        <div className=" mb-5 ">
          <h3 className=" text-[1.4rem] text-green-500 font-semibold ">
            List My car
          </h3>
          <p className=" text-[1.7rem] ">Set your per day price</p>
        </div>

        <div className=" flex flex-col gap-1 ">
            <label className=" ml-2 font-semibold text-gray-700 " htmlFor="">Set Price ($)*</label>
            <input type="number" name="" id="" defaultValue={formData?.perDayPrice ? formData?.perDayPrice : 0} onChange={(e)=> {
                updateFormData("perDayPrice", e.target.value)
            }} placeholder="Enter your per day  price ($)" className=" w-full bg-slate-100 outline-none border py-2 rounded-md  px-3 " />
        </div>
        

        <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"well-maintained"} className=" w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          {
            formData?.registeredBusiness ? <Link href={"parking-address"} className=" w-full ">
            <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
              Next
            </button>
          </Link> : <div onClick={()=>toast.error("You have to select one option")} className=" w-full ">
            <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
              Next
            </button>
          </div>
          }
        </div>

        
      </div>
    </div>
  );
};

export default Page;
