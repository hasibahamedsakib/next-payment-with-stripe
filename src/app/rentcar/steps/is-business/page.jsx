'use client'
import { useFormContext } from '@/context/FormContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

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
  console.log(formData);

    const [selectedOption, setSelectedOption] = useState(formData?.registeredBusiness ? formData?.registeredBusiness : "");

    const handleOptionChange = (option) => {
      setSelectedOption(option);
      updateFormData("registeredBusiness", option)
    }

    const ProgressNumber = 63;

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
          <p className=" text-[1.7rem] ">Are you operating as a registered business?</p>
        </div>
        <div className="flex flex-col space-y-4 py-7 ">
      <label className="inline-flex items-center cursor-pointer  ">
        <input
          type="radio"
          name="owner"
          value="professional"
          className="hidden"
          checked={formData?.registeredBusiness === "professional"}
          onChange={() => handleOptionChange("professional")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
            formData?.registeredBusiness === "professional" ? "border-green-500" : "border-gray-300"
          }`}
        >
          {formData?.registeredBusiness === "professional" && (
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          )}
        </span>
        <span className="ml-3 text-gray-800">Yes, I&apos;m a professional owner</span>
      </label>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          name="owner"
          value="private"
          className="hidden"
          checked={formData?.registeredBusiness === "private"}
          onChange={() => handleOptionChange("private")}
        />
        <span
          className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
            formData?.registeredBusiness === "private" ? "border-green-500" : "border-gray-300"
          }`}
        >
          {formData?.registeredBusiness === "private" && (
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          )}
        </span>
        <span className="ml-3 text-gray-800">No, I&apos;m a private owner</span>
      </label>
    </div>
      <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"options"} className=" w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          {
            formData?.registeredBusiness ? <Link href={"contact"} className=" w-full ">
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
  )
}

export default Page