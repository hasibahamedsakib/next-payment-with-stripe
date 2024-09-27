"use client";
import { useFormContext } from "@/context/FormContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {

  const token = localStorage.getItem("token");
  const router = useRouter();
  console.log(token);

  !token && router.push("/auth/signin");

  const { formData, updateFormData } = useFormContext();
  console.log(formData);
  

  const [selectedOptions, setSelectedOptions] = useState(formData?.otherFeatures?.length > 0 ? formData.otherFeatures : []);
  console.log(selectedOptions);
  

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      // Remove option if already clicked (toggle off)
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
      updateFormData("otherFeatures", selectedOptions.filter((item) => item !== option))
    } else {
      // Add option if not clicked
      setSelectedOptions([...selectedOptions, option]);
      updateFormData("otherFeatures", [...selectedOptions, option])
    }
  };

  const ProgressNumber = 54

  return (
    <div className=" max-w-[700px] mx-auto min-h-[70vh]   ">
      <div className=" flex flex-col gap-5 border p-5 rounded-md mt-10 ">

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
          <p className=" text-[1.7rem] ">Other Features</p>
        </div>

        <div className=" flex flex-col gap-2 ">
          
          <div className=" grid grid-cols-3 md:grid-cols-4 gap-3 ">
            <div
              onClick={() => handleOptionClick("Air conditioning")}
              className={` ${
                selectedOptions.includes("Air conditioning") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Air conditioning
            </div>
            <div
              onClick={() => handleOptionClick("Bluetooth Audio")}
              className={` ${
                selectedOptions.includes("Bluetooth Audio") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Bluetooth Audio
            </div>
            <div
              onClick={() => handleOptionClick("Hitch")}
              className={` ${
                selectedOptions.includes("Hitch") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Hitch
            </div>
            <div
              onClick={() => handleOptionClick("Audio / iPod input")}
              className={` ${
                selectedOptions.includes("Audio / iPod input") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Audio / iPod input
            </div>
            <div
              onClick={() => handleOptionClick("Wheelchair accessible")}
              className={` ${
                selectedOptions.includes("Wheelchair accessible") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Wheelchair accessible
            </div>
            <div
              onClick={() => handleOptionClick("Apple CarPlay")}
              className={` ${
                selectedOptions.includes("Apple CarPlay") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Apple CarPlay
            </div>
            <div
              onClick={() => handleOptionClick("Android Auto")}
              className={` ${
                selectedOptions.includes("Android Auto") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Android Auto
            </div>
            <div
              onClick={() => handleOptionClick("Dashcam")}
              className={` ${
                selectedOptions.includes("Dashcam") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Dashcam
            </div>
            <div
              onClick={() => handleOptionClick("Four-wheel drive")}
              className={` ${
                selectedOptions.includes("Four-wheel drive") ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Four-wheel drive
            </div>
            <div
              onClick={() => handleOptionClick("Ski racks")}
              className={` ${
                selectedOptions.includes("Ski racks")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Ski racks
            </div>
            <div
              onClick={() => handleOptionClick("Snow chains")}
              className={` ${
                selectedOptions.includes("Snow chains")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Snow chains
            </div>
            <div
              onClick={() => handleOptionClick("Winter tires")}
              className={` ${
                selectedOptions.includes("Winter tires")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Winter tires
            </div>
            <div
              onClick={() => handleOptionClick("Bike rack")}
              className={` ${
                selectedOptions.includes("Bike rack")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Bike rack
            </div>
            <div
              onClick={() => handleOptionClick("Roof box")}
              className={` ${
                selectedOptions.includes("Roof box")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Roof box
            </div>
            <div
              onClick={() => handleOptionClick("Baby seat")}
              className={` ${
                selectedOptions.includes("Baby seat")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Baby seat
            </div>
            <div
              onClick={() => handleOptionClick("GPS")}
              className={` ${
                selectedOptions.includes("GPS")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              GPS
            </div>
            <div
              onClick={() => handleOptionClick("Cruise control")}
              className={` ${
                selectedOptions.includes("Cruise control")
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Cruise control
            </div>
          </div>
        </div>

        <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"seats-and-doors"} className="  w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          <Link href={"is-business"} className=" w-full ">
            <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
