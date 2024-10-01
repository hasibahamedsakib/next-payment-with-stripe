"use client";
import React, { useState } from "react";
import CarImg1 from "@/public/images/CarImg1.webp";
import CarImg2 from "@/public/images/CarImg2.webp";
import CarImg3 from "@/public/images/CarImg3.webp";
import CarImg4 from "@/public/images/CarImg4.webp";
import Image from "next/image";

const CarTypes = () => {
  const [cardHover1, setCardHover1] = useState(false);
  const [cardHover2, setCardHover2] = useState(false);
  const [cardHover3, setCardHover3] = useState(false);
  const [cardHover4, setCardHover4] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" max-w-[1250px] mx-auto px-3 pb-[4rem]  ">
      <div className=" text-center text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold w-full pb-10  ">
        <h3>Biler for dine behov</h3>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-1  md:gap-3 ">
        {/* <div
          onMouseOver={() => setCardHover1(true)}
          onMouseLeave={() => setCardHover1(false)}
          className=" relative "
        >
          <div
            className={`${
              cardHover1 ? "cardTypeHover1" : "nCardTypeHover1"
            } transition-all duration-500 ease-in-out rounded-lg absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center `}
          >
            <h3 className=" text-[#fff] text-[3rem]  ">Pickup</h3>
          </div>
          <Image
            src={CarImg1}
            alt="Car img"
            className=" w-full h-full  object-cover rounded-lg  "
          />
        </div>
        <div
          onMouseOver={() => setCardHover2(true)}
          onMouseLeave={() => setCardHover2(false)}
          className=" relative "
        >
          <div
            className={`${
              cardHover2 ? "cardTypeHover2" : "nCardTypeHover2"
            } transition-all duration-500 ease-in-out rounded-lg absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center `}
          >
            <h3 className=" text-[#fff] text-[3rem]  ">Kommersiell</h3>
          </div>
          <Image
            src={CarImg2}
            alt="Car img"
            className=" w-full h-full  object-cover rounded-lg "
          />
        </div>
        <div
          onMouseOver={() => setCardHover3(true)}
          onMouseLeave={() => setCardHover3(false)}
          className=" relative "
        >
          <div
            className={`${
              cardHover3 ? "cardTypeHover1" : "nCardTypeHover1"
            } transition-all duration-500 ease-in-out rounded-lg absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center `}
          >
            <h3 className=" text-[#fff] text-[3rem]  ">Familiebil</h3>
          </div>
          <Image
            src={CarImg3}
            alt="Car img"
            className=" w-full  object-fill h-full rounded-lg "
          />
        </div>
        <div
          onMouseOver={() => setCardHover4(true)}
          onMouseLeave={() => setCardHover4(false)}
          className=" relative "
        >
          <div
            className={`${
              cardHover4 ? "cardTypeHover2" : "nCardTypeHover2"
            } transition-all duration-500 ease-in-out rounded-lg absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center `}
          >
            <h3 className=" text-[#fff] text-[3rem]  ">SUV</h3>
          </div>
          <Image
            src={CarImg4}
            alt="Car img"
            className=" w-full h-full  object-fill rounded-lg "
          />
        </div> */}

        <div className=" bg-green-500 p-2 text-[rgb(255,255,255)] text-[1.5rem] rounded-md  w-full ">
          <Image
            src={CarImg1}
            alt="Car Type Img"
            placeholder="blur"
            className=" w-full sm:h-[12rem] object-fill rounded-md "
          />
          <div className=" w-full flex bg-green-500 items-center justify-center ">
            <h3 className=" pt-2 ">Pickup</h3>
          </div>
        </div>
        <div className=" bg-green-500 p-2 text-[#fff] text-[1.5rem] rounded-md  w-full ">
          <Image
            src={CarImg2}
            alt="Car Type Img"
            placeholder="blur"
            className=" w-full sm:h-[12rem] object-fill rounded-md "
          />
          <div className=" w-full flex bg-green-500 items-center justify-center ">
            <h3 className=" pt-2 ">Kommersiell</h3>
          </div>
        </div>
        <div className=" bg-green-500 p-2 text-[#fff] text-[1.5rem] rounded-md  w-full ">
          <Image
            src={CarImg3}
            alt="Car Type Img"
            placeholder="blur"
            className=" w-full sm:h-[12rem] object-fill rounded-md "
          />
          <div className=" w-full flex bg-green-500 items-center justify-center ">
            <h3 className=" pt-2 ">Familiebil</h3>
          </div>
        </div>
        <div className=" bg-green-500 p-2 text-[#fff] text-[1.5rem] rounded-md  w-full ">
          <Image
            src={CarImg4}
            alt="Car Type Img"
            placeholder="blur"
            className=" w-full sm:h-[12rem] object-fill rounded-md "
          />
          <div className=" w-full flex bg-green-500 items-center justify-center ">
            <h3 className=" pt-2 ">SUV</h3>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mx-auto flex w-72 items-center justify-center">
          <button
            onClick={() => setOpenModal(true)}
            className="rounded-md bg-indigo-600 px-4 py-[6px] text-white"
          >
            Attention!
          </button>
          <div
            onClick={() => setOpenModal(false)}
            className={`fixed z-[100] flex items-center justify-center ${
              openModal ? "opacity-1 visible" : "invisible opacity-0"
            } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
          >
            <div
              onClick={(e_) => e_.stopPropagation()}
              className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
                openModal
                  ? "opacity-1 translate-y-0 duration-300"
                  : "translate-y-20 opacity-0 duration-150"
              }`}
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <svg
                  className="w-16 stroke-rose-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g strokeLinecap="round" strokeLinejoin="round"></g>
                  <g>
                    <path
                      opacity="0.4"
                      d="M12 7.75V13"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M12 16.2002V16.3002"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <h6 className="text-center text-sm font-medium opacity-70">
                  Elevate your React projects with beautifully crafted
                  components designed for TailwindCSS.
                </h6>
                <div className="flex gap-2">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white"
                  >
                    Explore now
                  </button>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
                  >
                    Not Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTypes;
