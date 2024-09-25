"use client";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      // Remove option if already clicked (toggle off)
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // Add option if not clicked
      setSelectedOptions([...selectedOptions, option]);
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
          <label htmlFor="" className=" ml-2 text-black font-semibold ">
            Number of Doors
          </label>
          <div className=" grid grid-cols-3 md:grid-cols-4 gap-3 ">
            <div
              onClick={() => handleOptionClick(1)}
              className={` ${
                selectedOptions.includes(1) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Air conditioning
            </div>
            <div
              onClick={() => handleOptionClick(2)}
              className={` ${
                selectedOptions.includes(2) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Bluetooth Audio
            </div>
            <div
              onClick={() => handleOptionClick(3)}
              className={` ${
                selectedOptions.includes(3) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Hitch
            </div>
            <div
              onClick={() => handleOptionClick(4)}
              className={` ${
                selectedOptions.includes(4) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Audio / iPod input
            </div>
            <div
              onClick={() => handleOptionClick(5)}
              className={` ${
                selectedOptions.includes(5) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Wheelchair accessible
            </div>
            <div
              onClick={() => handleOptionClick(6)}
              className={` ${
                selectedOptions.includes(6) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Apple CarPlay
            </div>
            <div
              onClick={() => handleOptionClick(7)}
              className={` ${
                selectedOptions.includes(7) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Android Auto
            </div>
            <div
              onClick={() => handleOptionClick(8)}
              className={` ${
                selectedOptions.includes(8) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Dashcam
            </div>
            <div
              onClick={() => handleOptionClick(9)}
              className={` ${
                selectedOptions.includes(9) ? "border-green-500 border-2" : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Four-wheel drive
            </div>
            <div
              onClick={() => handleOptionClick(10)}
              className={` ${
                selectedOptions.includes(10)
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Ski racks
            </div>
            <div
              onClick={() => handleOptionClick(11)}
              className={` ${
                selectedOptions.includes(11)
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Snow chains
            </div>
            <div
              onClick={() => handleOptionClick(12)}
              className={` ${
                selectedOptions.includes(12)
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Winter tires
            </div>
            <div
              onClick={() => handleOptionClick(13)}
              className={` ${
                selectedOptions.includes(13)
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Bike rack
            </div>
            <div
              onClick={() => handleOptionClick(14)}
              className={` ${
                selectedOptions.includes(14)
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Roof box
            </div>
            <div
              onClick={() => handleOptionClick(15)}
              className={` ${
                selectedOptions.includes(15)
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              Baby seat
            </div>
            <div
              onClick={() => handleOptionClick(16)}
              className={` ${
                selectedOptions.includes(16)
                  ? "border-green-500 border-2"
                  : null
              } px-1 text-center border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              GPS
            </div>
            <div
              onClick={() => handleOptionClick(17)}
              className={` ${
                selectedOptions.includes(17)
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
