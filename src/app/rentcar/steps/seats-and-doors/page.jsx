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

  const { formData, updateFormData } = useFormContext();
  console.log(formData);
  

  const [numDoors, setNumDoors] = useState(
    formData.numberOfDoors ? formData?.numberOfDoors : '2'
  );
  const [numSeats, setNumSeats] = useState(
    formData.numberOfSeats ? formData?.numberOfSeats : '4'
  );
  const ProgressNumber = 45;

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
          <p className=" text-[1.7rem] ">Add more details</p>
        </div>

        <div className=" flex flex-col gap-2 ">
          <label htmlFor="" className=" ml-2 text-black font-semibold ">
            Number of Doors
          </label>
          <div className=" grid grid-cols-4 gap-3 ">
            <div
              onClick={() => {
                setNumDoors('2')
                updateFormData("numberOfDoors", '2')
              }}
              className={` ${
                formData?.numberOfDoors === '2' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              2
            </div>
            <div
              onClick={() => {
                setNumDoors('3')
                updateFormData("numberOfDoors", '3')
              }}
              className={` ${
                formData?.numberOfDoors === '3' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              3
            </div>
            <div
              onClick={() => {
                setNumDoors('4')
                updateFormData("numberOfDoors", '4')
              }}
              className={` ${
                formData?.numberOfDoors === '4' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              4
            </div>
            <div
              onClick={() => {
                setNumDoors('5')
                updateFormData("numberOfDoors", '5')
              }}
              className={` ${
                formData?.numberOfDoors === '5' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              5
            </div>
            <div
              onClick={() => {
                setNumDoors('6')
                updateFormData("numberOfDoors", '6')
              }}
              className={` ${
                formData?.numberOfDoors === '6' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              6
            </div>
            <div
              onClick={() => {
                setNumDoors('7')
                updateFormData("numberOfDoors", '7')
              }}
              className={` ${
                formData?.numberOfDoors === '7' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              7
            </div>
            <div
              onClick={() => {
                setNumDoors('8')
                updateFormData("numberOfDoors", '8')
              }}
              className={` ${
                formData?.numberOfDoors === '8' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              8
            </div>
            <div
              onClick={() => {
                setNumDoors("9+")
                updateFormData("numberOfDoors", '9+')
              }}
              className={` ${
                formData?.numberOfDoors === "9+" ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              9+
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 ">
          <label htmlFor="" className=" ml-2 text-black font-semibold ">
            Number of Seats
          </label>
          <div className=" grid grid-cols-4 gap-3 ">
            <div
              onClick={() => {
                setNumSeats('2')
                updateFormData("numberOfSeats", '2')
              }}
              className={` ${
                formData?.numberOfSeats === '2' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              2
            </div>
            <div
              onClick={() => {
                setNumSeats('3')
                updateFormData("numberOfSeats", '3')
              }}
              className={` ${
                formData?.numberOfSeats === '3' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              3
            </div>
            <div
              onClick={() => {
                setNumSeats('4')
                updateFormData("numberOfSeats", '4')
              }}
              className={` ${
                formData?.numberOfSeats === '4' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              4
            </div>
            <div
              onClick={() => {
                setNumSeats('5')
                updateFormData("numberOfSeats", '5')
              }}
              className={` ${
                formData?.numberOfSeats === '5' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              5
            </div>
            <div
              onClick={() => {
                setNumSeats('6')
                updateFormData("numberOfSeats", '6')
              }}
              className={` ${
                formData?.numberOfSeats === '6' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              6
            </div>
            <div
              onClick={() => {
                setNumSeats('7')
                updateFormData("numberOfSeats", '7')
              }}
              className={` ${
                formData?.numberOfSeats === '7' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              7
            </div>
            <div
              onClick={() => {
                setNumSeats('8')
                updateFormData("numberOfSeats", '8')
              }}
              className={` ${
                formData?.numberOfSeats === '8' ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              8
            </div>
            <div
              onClick={() => {
                setNumSeats("9+")
                updateFormData("numberOfSeats", '9+')
              }}
              className={` ${
                formData?.numberOfSeats === "9+" ? "border-green-500 border-2" : null
              } border hover:border-green-500 transition-colors duration-300 ease-in-out cursor-pointer py-3 rounded-lg flex items-center justify-center `}
            >
              9+
            </div>
          </div>
        </div>

        <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"energy"} className="  w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          <Link href={"options"} className=" w-full ">
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
