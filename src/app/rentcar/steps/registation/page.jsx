"use client";
import { useFormContext } from "@/context/FormContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  const [numberPlate, setNumberPlate] = useState(
    formData.plateNumber ? formData.plateNumber : ""
  );

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState(
    formData.countryOfRegistation
      ? formData.countryOfRegistation
      : "United States"
  );
  const options1 = ["United States", "Australia", "Norway"];

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedValue2, setSelectedValue2] = useState(
    formData.state ? formData.state : "Alaska"
  );
  const options2 = ["Alaska", "Lowa", "Hawaii"];

  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedValue3, setSelectedValue3] = useState(
    formData.yearOfRegistation ? formData.yearOfRegistation : "2019"
  );
  const options3 = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
  ];

  const ProgressNumber = 18;

  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get("/api/data/country");
        setCountryCodes(response.data.data);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("/api/data/states");
        setStates(response.data.data);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchStates();
  }, []);

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
          <p className=" text-[1.7rem] ">What&apos;s your plate number?</p>
        </div>
        <div className=" relative w-full  ">
          <div className=" flex flex-col gap-1 ">
            <label className=" ml-2 text-black font-semibold " htmlFor="">
              Plate Number
            </label>
            <input
              type="text"
              defaultValue={formData?.plateNumber}
              onChange={(e) =>{
                setNumberPlate(e.target.value)
                updateFormData("plateNumber", e.target.value)
              }}
              placeholder="Enter your car plate number"
              className=" bg-[#fff] px-4 py-2 rounded-md outline-none border font-semibold placeholder:text-gray-600 "
            />
          </div>
        </div>

        <div className=" relative w-full ">
          {/* dropdown - btn */}
          <div className=" flex flex-col gap-1 ">
            <label className=" text-black font-semibold ml-2 " htmlFor="">
              Country of registration
            </label>
            <div
              onClick={() =>{
                setIsOpen1(!isOpen1)
                setIsOpen2(false)
                setIsOpen3(false)
              }}
              className=" flex w-full items-center justify-between rounded-md bg-white px-6 py-2 border"
            >
              <h1 className="font-medium text-gray-600">{formData?.countryOfRegistation}</h1>
              <svg
                className={`${
                  isOpen1 ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          {/* dropdown - options  */}
          <div
            className={`${
              isOpen1
                ? "visible top-16 opacity-100"
                : "invisible top-4 opacity-0"
            } absolute my-4 w-full h-[400px] overflow-y-scroll no-scrollbar z-50 rounded-md bg-green-500 py-4 border duration-300`}
          >
            {countryCodes?.map((countries, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue1(e.target.textContent);
                  updateFormData("countryOfRegistation", e.target.textContent)
                  setIsOpen1(false);
                }}
                className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
              >
                {countries.country}
              </div>
            ))}
          </div>
        </div>
        <div className=" relative w-full ">
          {/* dropdown - btn */}
          <div className=" flex flex-col gap-1 ">
            <label className=" text-black font-semibold ml-2 " htmlFor="">
              State
            </label>
            <div
              onClick={() => {
                setIsOpen2(!isOpen2)
                setIsOpen1(false)
                setIsOpen3(false)
              }}
              className=" flex w-full items-center justify-between rounded-md bg-white px-6 py-2 border"
            >
              <h1 className="font-medium text-gray-600">{formData?.state}</h1>
              <svg
                className={`${
                  isOpen2 ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          {/* dropdown - options  */}
          <div
            className={`${
              isOpen2
                ? "visible top-16 opacity-100"
                : "invisible top-4 opacity-0"
            } absolute my-4 w-full h-[400px] overflow-y-scroll no-scrollbar z-50 rounded-md bg-green-500 py-4 border duration-300`}
          >
            {states?.map((state, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue2(e.target.textContent);
                  updateFormData("state", e.target.textContent)
                  setIsOpen2(false);
                }}
                className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
              >
                {state}
              </div>
            ))}
          </div>
        </div>
        <div className=" relative w-full ">
          {/* dropdown - btn */}
          <div className=" flex flex-col gap-1 ">
            <label className=" text-black font-semibold ml-2 " htmlFor="">
              Year of first registration
            </label>
            <div
              onClick={() => {
                setIsOpen3(!isOpen3)
                setIsOpen1(false)
                setIsOpen2(false)
              }}
              className=" flex w-full items-center justify-between rounded-md bg-white px-6 py-2 border"
            >
              <h1 className="font-medium text-gray-600">{formData?.yearOfRegistation}</h1>
              <svg
                className={`${
                  isOpen3 ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={25}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          {/* dropdown - options  */}
          <div
            className={`${
              isOpen3
                ? "visible top-16 opacity-100"
                : "invisible top-4 opacity-0"
            } absolute my-4 w-full  h-[400px] overflow-y-scroll no-scrollbar z-50 rounded-md bg-green-500 py-4 border duration-300`}
          >
            {options3?.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue3(e.target.textContent);
                  updateFormData("yearOfRegistation", e.target.textContent)
                  setIsOpen3(false);
                }}
                className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"model"} className="  w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 py-2 w-full font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          {formData?.plateNumber ? (
            <Link href={"mileage"} className=" w-full ">
              <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
                Next
              </button>
            </Link>
          ) : (
            <div
              onClick={() => toast.error("Number Plate is required")}
              className=" w-full "
            >
              <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
