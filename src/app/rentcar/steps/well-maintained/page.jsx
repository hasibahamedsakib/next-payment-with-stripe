'use client'
import { useFormContext } from '@/context/FormContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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

  const { formData, updateFormData } = useFormContext();
  console.log(formData);

    const [selectedOption, setSelectedOption] = useState(false);

    const handleOptionChange = (option) => {
      setSelectedOption(option);
      if(option==='well-maintained'){
      updateFormData("wellMaintained", option)
      }
      else{
        updateFormData("uptodate", option)
      }
    }

    const ProgressNumber = 85

  return (
    <div className=' max-w-[700px] mx-auto min-h-[70vh] '>
       <div className=' border p-5 rounded-md mt-10  '>

       <div className="mx-auto flex w-full flex-col gap-2">
            <div className="flex h-3 w-full  items-center justify-center rounded-full bg-slate-200">
                <div style={{ width: `${ProgressNumber}%` }} className="transition-width mr-auto h-3 w-0 rounded-full  bg-green-500 duration-500"></div>
            </div>
            <span className="text-center text-sm font-medium text-green-500">{ProgressNumber}%</span>
        </div>

       <div className=" mb-5 ">
          <h3 className=" text-[1.4rem] text-green-500 font-semibold ">
            List My car
          </h3>
          <p className=" text-[1.7rem] ">Is your car well-maintained?</p>
        </div>
        <div className="flex flex-col space-y-4 py-7 ">
      <label className="inline-flex items-center cursor-pointer  ">
        <input
          type="radio"
          name="owner"
          value=""
          className="hidden"
          checked={formData?.wellMaintained==='well-maintained'}
          onChange={() => handleOptionChange('well-maintained')}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
            formData?.wellMaintained=== 'well-maintained' ? "border-green-500" : "border-gray-300"
          }`}
        >
          {formData?.wellMaintained==='well-maintained' && (
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          )}
        </span>
        <span className="ml-3 text-gray-800">My vehicle is well maintained</span>
      </label>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="owner"
          value=""
          className="hidden"
          checked={formData?.uptodate==='uptodate'}
          onChange={() => handleOptionChange('uptodate')}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
            formData?.uptodate==='uptodate' ? "border-green-500" : "border-gray-300"
          }`}
        >
          {formData?.uptodate==='uptodate' && (
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          )}
        </span>
        <span className="ml-3 text-gray-800">My vehicle has an up-to-date roadworthiness test</span>
      </label>
    </div>
      <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"frequency"} className="  w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          <Link href={"parking-address"} className=" w-full ">
            <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
              Next
            </button>
          </Link>
        </div>
       </div>
    </div>
  )
}

export default Page