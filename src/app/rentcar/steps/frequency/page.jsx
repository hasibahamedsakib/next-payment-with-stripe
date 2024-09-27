'use client'
import { useFormContext } from '@/context/FormContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {

  const token = localStorage.getItem("token");
  const router = useRouter();
  console.log(token);

  !token && router.push("/auth/signin");

  const { formData, updateFormData } = useFormContext();
  console.log(formData);

    const [selectedOption, setSelectedOption] = useState(formData.availableWeekends ? formData.availableWeekends : "");

    const handleOptionChange = (option) => {
      setSelectedOption(option);
      updateFormData("availableWeekends", option)
    }

    const ProgressNumber = 77

    console.log(selectedOption);
    

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
          <p className=" text-[1.7rem] ">How many weekends per month will your car be available?</p>
        </div>
        <div className="flex flex-col space-y-4 py-7 ">
      <label className={` ${selectedOption === 'all' ? 'bg-green-500/10' : null} px-3 py-4 border rounded-md flex items-center gap-5 text-start cursor-pointer  `}>
        <input
          type="radio"
          name="owner"
          value="all"
          className="hidden"
          checked={selectedOption === "all"}
          onChange={() => handleOptionChange("all")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
            selectedOption === "all" ? "border-green-500" : "border-gray-300"
          }`}
        >
          {selectedOption === "all" && (
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          )}
        </span>
        <div>
        <span className=" text-gray-800 font-semibold ">All weekends</span>
        <p>This car will be exclusively dedicated to rentals</p>
        </div>
      </label>

      <label className={` ${selectedOption ==='twoToFour' ? 'bg-green-500/10' :null} inline-flex items-center cursor-pointer px-3 py-4 border rounded-md gap-5`}>
        <input
          type="radio"
          name="owner"
          value="twoToFour"
          className="hidden"
          checked={selectedOption === "twoToFour"}
          onChange={() => handleOptionChange("twoToFour")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
            selectedOption === "twoToFour" ? "border-green-500" : "border-gray-300"
          }`}
        >
          {selectedOption === "twoToFour" && (
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          )}
        </span>
        <div>
        <span className=" text-gray-800 font-semibold ">2 to 4 weekends on average</span>
        <p>This car will regularly be available at weekends</p>
        </div>
      </label>

      <label className={` ${selectedOption ==='zeroToOne' ? 'bg-green-500/10' :null} inline-flex items-center cursor-pointer px-3 py-4 border rounded-md gap-5`}>
        <input
          type="radio"
          name="owner"
          value="zeroToOne"
          className="hidden"
          checked={selectedOption === "zeroToOne"}
          onChange={() => handleOptionChange("zeroToOne")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
            selectedOption === "zeroToOne" ? "border-green-500" : "border-gray-300"
          }`}
        >
          {selectedOption === "zeroToOne" && (
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          )}
        </span>
        <div>
        <span className=" text-gray-800 font-semibold ">0 to 1 weekends on average</span>
        <p>This car will regularly be available at weekends</p>
        </div>
      </label>

    </div>
      <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"contact"} className="  w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          {
            selectedOption ? <Link href={"well-maintained"} className=" w-full ">
            <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
              Next
            </button>
          </Link> : <div onClick={()=>toast.error("Select one option please")} className=" w-full ">
            <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
              Next
            </button>
          </div>
          }
        </div>
       </div>
    </div>
  )
}

export default Page