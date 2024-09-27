"use client";
import { useFormContext } from "@/context/FormContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const token = localStorage.getItem("token");
  const router = useRouter();
  console.log(token);

  !token && router.push("/auth/signin");

  const { formData, updateFormData } = useFormContext();

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState(
    formData.carName ? formData.carName : "Toyota"
  );
  const options1 = ["Tesla", "Tata", "Suzuki"];

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedValue2, setSelectedValue2] = useState(
    formData.carModel ? formData.carModel : "Camry"
  );
  const options2 = ["Crafter van", "Cross polo", "Derby"];
  const ProgressNumber = 9;

  const [carNames, setCarNames] = useState([]);

  useEffect(() => {
    const fetchCarNames = async () => {
      try {
        const response = await axios.get("/api/data/cars");
        setCarNames(response.data.data);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCarNames();
  }, []);

  // console.log(carNames);

  const [carModels, setCarModels] = useState([]);

  useEffect(() => {
    const fetchCarModels = async () => {
      try {
        const response = await axios.get("/api/data/carmodels");
        setCarModels(response.data.data);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCarModels();
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
          <p className=" text-[1.7rem] ">Confirm the model of your car</p>
        </div>
        <div className=" relative w-full  ">
          {/* dropdown - btn */}
          <div className=" flex flex-col gap-1 ">
            <label className=" ml-2 text-black font-semibold " htmlFor="">
              Make
            </label>
            <div
              onClick={() => setIsOpen1(!isOpen1)}
              className=" flex w-full items-center justify-between rounded-md bg-white px-6 py-2 border"
            >
              <h1 className="font-medium text-gray-600">{selectedValue1}</h1>
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
            } absolute z-50 h-[400px] overflow-y-scroll w-full my-4 bg-green-500 text-[#fff]  rounded-md py-4 border duration-300`}
          >
            {carNames?.map((car, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue1(e.target.textContent);
                  updateFormData('carName', e.target.textContent)
                  setIsOpen1(false);
                }}
                className="px-6 py-2 font-semibold hover:bg-green-400"
              >
                {car.name}
              </div>
            ))}
          </div>
        </div>

        <div className=" relative w-full ">
          {/* dropdown - btn */}
          <div className=" flex flex-col gap-1 ">
            <label className=" text-black font-semibold " htmlFor="">
              Model
            </label>
            <div
              onClick={() => setIsOpen2(!isOpen2)}
              className=" flex w-full items-center justify-between rounded-md bg-white px-6 py-2 border"
            >
              <h1 className="font-medium text-gray-600">{selectedValue2}</h1>
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
            } absolute my-4 w-full h-[400px] overflow-y-scroll z-50 rounded-md bg-green-500 py-4 border duration-300`}
          >
            {carModels?.map((model, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue2(e.target.textContent);
                  updateFormData("carModel", e.target.textContent)
                  setIsOpen2(false);
                }}
                className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
              >
                {model}
              </div>
            ))}
          </div>
        </div>

        <Link href={"registation"} className=" mt-8 ">
          <button className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
