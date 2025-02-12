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


  const { formData, updateFormData } = useFormContext();
  console.log(formData);

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState(
    formData.countryCode ? formData.countryCode : "AF(+93)"
  );
  const options1 = ["Bangladesh(+880)", "Afghanistan (+93)", "Chad (+235)"];
  const [number, setNumber] = useState(formData.number ? formData.number : "");
  const [code, setCode] = useState("+93");

  const ProgressNumber = 70;
  // const value = code + phoneNumber
  // updateFormData("phoneNumber", value)

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

  // console.log(value);

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
          <p className=" text-[1.7rem] ">What&apos;s your phone number?</p>
        </div>

        <label className=" text-black font-semibold ml-2 " htmlFor="">
          Phone No.
        </label>
        <div className=" flex items-center gap-5 ">
          <div className=" relative w-[40%] ">
            <div className=" flex flex-col gap-1 ">
              <div
                onClick={() => setIsOpen1(!isOpen1)}
                className=" flex w-full items-center justify-between rounded-md bg-white px-2 py-2 border"
              >
                <h1 className="font-medium text-gray-600">{formData?.countryCode ? formData?.countryCode : selectedValue1}</h1>
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

            <div
              className={`${
                isOpen1
                  ? "visible top-10 opacity-100"
                  : "invisible top-4 opacity-0"
              } absolute my-4 w-full h-[400px] overflow-y-scroll no-scrollbar  z-50 rounded-md bg-green-500 py-4 border duration-300`}
            >
              {countryCodes?.map((country, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setSelectedValue1(e.target.textContent);
                    setCode(country.code);
                    updateFormData("countryCode", e.target.textContent);
                    updateFormData("phoneNumber", country.code+number);
                    setIsOpen1(false);
                  }}
                  className="px-2 py-2 text-[#fff] font-semibold hover:bg-green-400"
                >
                  {country.shortForm}({country.code})
                </div>
              ))}
            </div>
          </div>

          <div className=" w-full ">
            <input
              type="number"
              defaultValue={formData?.number}
              onChange={(e) => {
                setNumber(e.target.value);
                updateFormData("number", e.target.value);
                updateFormData("phoneNumber", code+e.target.value);
              }}
              placeholder="Enter your contact no."
              className=" w-full outline-none border rounded-md py-2 px-3  "
            />
          </div>
        </div>

        <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"is-business"} className=" w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          {formData?.number ? (
            <Link href={"frequency"} className=" w-full ">
              <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
                Next
              </button>
            </Link>
          ) : (
            <div
              onClick={() => toast.error("Phone Number is required")}
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
