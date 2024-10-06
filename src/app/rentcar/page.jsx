"use client";
import React, { useEffect, useState } from "react";
import rentCarImg from "@/public/images/RentCar.webp";
import Image from "next/image";
import ShareCar from "@/components/ShareCar";
import WithUs from "@/components/WithUs";
import Achivement from "@/components/Achievement";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useFormContext } from "@/context/FormContext";

const Page = () => {
  const { formData, updateFormData } = useFormContext();

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState(
    formData.carName ? formData.carName : "Toyota"
  );
  const options1 = ["Tesla", "Tata", "Suzuki"];
  console.log(selectedValue1);
  console.log("rentcar", formData.carName);

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedValue2, setSelectedValue2] = useState(
    formData.carModel ? formData.carModel : "Camry"
  );
  const options2 = ["Crafter van", "Cross polo", "Derby"];

  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedValue3, setSelectedValue3] = useState(
    formData.yearOfRegistation ? formData.yearOfRegistation : "2024"
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

  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedValue4, setSelectedValue4] = useState(
    formData.mileage ? formData.mileage : "0-25,000 mi"
  );
  const options4 = [
    "0-25,000 mi",
    "25-50,000 mi",
    "50-75,000 mi",
    "75-1,00,000 mi",
    "100-2,00,000 mi",
    "+2,00,000 mi",
  ];

  const [isOpen5, setIsOpen5] = useState(false);
  const [selectedValue5, setSelectedValue5] = useState("0-25,000 mi");
  const options5 = [
    "0-25,000 mi",
    "25-50,000 mi",
    "50-75,000 mi",
    "75-1,00,000 mi",
    "100-2,00,000 mi",
    "+2,00,000 mi",
  ];

  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  console.log(token);

  const [query, setQuery] = useState(formData?.city ? formData?.city : "");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(formData?.city ? formData?.city : "");

  const handleInputChange = async (e) => {
    const searchValue = e.target.value;

    setQuery(searchValue);

    if (searchValue.length > 1) {
      setIsOpen5(true);
      setIsOpen4(false);
      setIsOpen3(false);
      setIsOpen2(false);
      setIsOpen1(false);
      // const options = {
      //   method: "GET",
      //   url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
      //   params: { namePrefix: searchValue },
      //   headers: {
      //     "X-RapidAPI-Key":
      //       "e9ecc692c3msha1a81c5683deebcp16349djsnf50d21355932",
      //     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      //   },
      // };

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            searchValue
          )}&format=json&addressdetails=1&limit=5&countrycodes=NO`
        );
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    } else {
      setCities([]);
      setIsOpen5(false);
    }
  };

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

  const handleCityChange = (e) => {
    setQuery(city?.name);
    updateFormData("city", e.target.textContent);
    setCity(e.target.textContent);
    setIsOpen5(false);
  };

  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedToken = localStorage.getItem("token");
  //     setToken(storedToken);
  //   }
  // }, []);
  // const router = useRouter();
  // console.log(token);

  // updateFormData('carName', "lambo")

  console.log(formData);
  // console.log("qu", query);

  // console.log(carModels);

  return (
    <div className=" max-w-[1250px] mx-auto ">
      <div className=" flex gap-2 lg:gap-5 mt-14 px-3 ">
        <div className=" flex-1 flex flex-col justify-center gap-10 ">
          <div>
            <h2 className=" text-[2.5rem] lg:text-[3rem] font-semibold ">
              Earn money by sharing your car with locals
            </h2>
          </div>
          <div className=" flex gap-5 ">
            <div className=" relative w-full ">
              {/* dropdown - btn */}
              <div
                onClick={() => {
                  setIsOpen1(!isOpen1);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
                className=" flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border"
              >
                <h1 className="font-medium text-gray-600">
                  {formData?.carName}
                </h1>
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
              {/* dropdown - options  */}
              <div
                className={`${
                  isOpen1
                    ? "visible top-10 opacity-100"
                    : "invisible top-0 opacity-0"
                } absolute z-50 h-[400px] no-scrollbar overflow-y-scroll w-full my-4 bg-green-500 text-[#fff]  rounded-xl py-4 border duration-300`}
              >
                {carNames?.map((car, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setSelectedValue1(e.target.textContent);
                      updateFormData("carName", e.target.textContent);
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
              <div
                onClick={() => {
                  setIsOpen2(!isOpen2);
                  setIsOpen1(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
                className=" flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border"
              >
                <h1 className="font-medium text-gray-600">
                  {formData?.carModel}
                </h1>
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
              {/* dropdown - options  */}
              <div
                className={`${
                  isOpen2
                    ? "visible top-10 opacity-100"
                    : "invisible top-0 opacity-0"
                } absolute my-4 w-full h-[400px] overflow-y-scroll no-scrollbar z-50 rounded-xl bg-green-500 py-4 border duration-300`}
              >
                {carModels?.map((model, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setSelectedValue2(e.target.textContent);
                      updateFormData("carModel", e.target.textContent);
                      setIsOpen2(false);
                    }}
                    className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
                  >
                    {model}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" flex gap-3 ">
            <div className=" relative w-full ">
              {/* dropdown - btn */}
              <div
                onClick={() => {
                  setIsOpen3(!isOpen3);
                  setIsOpen1(false);
                  setIsOpen2(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
                className=" flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border"
              >
                <h1 className="font-medium text-gray-600">
                  {formData?.yearOfRegistation}
                </h1>
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
              {/* dropdown - options  */}
              <div
                className={`${
                  isOpen3
                    ? "visible top-10 opacity-100"
                    : "invisible top-0 opacity-0"
                } absolute h-[400px] overflow-y-scroll no-scrollbar z-50 w-full my-4 bg-green-500 text-[#fff]  rounded-xl py-4 border duration-300`}
              >
                {options3?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setSelectedValue3(e.target.textContent);
                      updateFormData("yearOfRegistation", e.target.textContent);
                      setIsOpen3(false);
                    }}
                    className="px-6 py-1 font-semibold hover:bg-green-400"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            <div className=" relative w-full ">
              {/* dropdown - btn */}
              <div
                onClick={() => {
                  setIsOpen4(!isOpen4);
                  setIsOpen1(false);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen5(false);
                }}
                className=" flex w-full items-center justify-between rounded-md bg-white px-6 py-2 border"
              >
                <h1 className="font-medium text-gray-600">
                  {formData?.mileage}
                </h1>
                <svg
                  className={`${
                    isOpen4 ? "-rotate-180" : "rotate-0"
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
              {/* dropdown - options  */}
              <div
                className={`${
                  isOpen4
                    ? "visible top-10 opacity-100"
                    : "invisible top-0 opacity-0"
                } absolute  z-50 my-4 w-full rounded-md bg-green-500 py-4 border duration-300`}
              >
                {options4?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setSelectedValue4(e.target.textContent);
                      updateFormData("mileage", e.target.textContent);
                      setIsOpen4(false);
                    }}
                    className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className=" relative ">
              <input
                defaultValue={city}
                // value={formData?.city}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter your city"
                required
                className=" w-full px-5 py-2 bg-white rounded-lg border outline-none font-semibold placeholder:text-gray-600 "
              />

              <div
                className={`${
                  isOpen5
                    ? "visible top-10 opacity-100"
                    : "invisible top-0 opacity-0"
                } absolute no-scrollbar z-50 my-4 w-full rounded-md bg-green-500 py-4 border duration-300`}
              >
                {cities?.map((city, idx) => (
                  <div
                    key={idx}
                    onClick={handleCityChange}
                    className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
                  >
                    {city?.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {token ? (
            formData?.city ? (
              <Link href={"rentcar/steps/model"}>
                <button className=" w-full text-[#fff] font-semibold bg-green-500 rounded-lg py-2 ">
                  Next
                </button>
              </Link>
            ) : (
              <div onClick={() => toast.error("Location is required")}>
                <button className=" w-full text-[#fff] font-semibold bg-green-500 rounded-lg py-2 ">
                  Next
                </button>
              </div>
            )
          ) : (
            <div onClick={() => toast.error("Sign in please")}>
              <button className=" w-full text-[#fff] font-semibold bg-green-500 rounded-lg py-2 ">
                Next
              </button>
            </div>
          )}
        </div>
        <div className=" flex-1 md:block hidden  ">
          <Image
            src={rentCarImg}
            alt="Rent a car image"
            className=" w-full h-full object-cover rounded-md "
          />
        </div>
      </div>

      <div className=" my-20 ">
        <Achivement />
      </div>
      <div className=" my-20 ">
        <ShareCar />
      </div>
      <div className=" my-20 ">
        <WithUs />
      </div>
    </div>
  );
};

export default Page;
