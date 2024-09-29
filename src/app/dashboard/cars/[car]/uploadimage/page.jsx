"use client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import Image from "next/image";
import CarImg1 from "@/public/images/CarMainImg.webp";
import CarImg2 from "@/public/images/CarSideImg.webp";
import CarImg3 from "@/public/images/CarBackImg.webp";
import CarImg4 from "@/public/images/CarInnerImg.webp";
import React from "react";
import Link from "next/link";

const Page = ({ params }) => {
  // const [openModal, setOpenModal] = useState(false);
  const { tab, car } = params;
  return (
    <div>
      <div className={`  max-w-[1250px] mx-auto p-6 `}>
        <div className=" flex items-center text-xl lg:overflow-x-hidden overflow-x-scroll overflow-hidden  ">
          <Link
            href={"/dashboard/requests"}
            className={` px-7 py-5 border-b-4 ${
              tab === "requests" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            REQUESTS
          </Link>
          <Link
            href={"/dashboard/rentals"}
            className={` px-7 py-5 border-b-4 ${
              tab === "rentals" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            RENTALS
          </Link>
          <Link
            href={"/dashboard/cars"}
            className={` px-7 py-5 border-b-4 border-green-500 bg-green-500/5    `}
          >
            CARS
          </Link>
          <Link
            href={"/dashboard/performance"}
            className={` px-7 py-5 border-b-4 ${
              tab === "performance" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            PERFORMANCE
          </Link>
          <Link
            href={"/dashboard/payments"}
            className={` px-7 py-5 border-b-4 ${
              tab === "payments" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            PAYMENTS
          </Link>
          <Link
            href={"/dashboard/account"}
            className={` px-7 py-5 border-b-4 ${
              tab === "account" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            ACCOUNT
          </Link>
        </div>

        <div className=" mt-6 ">
          <h2 className=" font-semibold text-[1.3rem] ">
            Picture of the vehicle
          </h2>
          <p>
            We only display cars with photos. You can start with one and add
            more after your listing is live.
          </p>
          <div className=" mt-3 flex flex-col gap-3 ">
            <h3 className=" text-[1.2rem] font-semibold ">Our Tips</h3>
            <div className=" grid grid-cols-2 gap-2 ">
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Use the landscape format</span>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Follow our angle guidelines</span>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Keep the background clear and neutral</span>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Use only natural daylight</span>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
            <div className="  ">
              <div className=" flex flex-col gap-2 ">
                <h3 className=" text-[1.1rem] font-semibold ">Main Picture</h3>
                <div className=" flex ">
                  <div className=" flex-1 flex items-center justify-center text-lg md:text-2xl border ">
                    <LuImagePlus />
                  </div>
                  <div className=" flex-1 lg:h-[12rem] ">
                    <Image
                      src={CarImg1}
                      alt="car main img "
                      className="  object-cover w-full h-full "
                     
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className=" flex flex-col gap-2 ">
                <h3 className=" text-[1.1rem] font-semibold ">Side Picture</h3>
                <div className=" flex ">
                  <div className=" flex-1 flex items-center justify-center text-lg md:text-2xl border ">
                    <LuImagePlus />
                  </div>
                  <div className=" flex-1 border lg:h-[12rem] ">
                    <Image
                      src={CarImg2}
                      alt="car main img "
                      className="  object-cover w-full h-full "
                      
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className=" flex flex-col gap-2 ">
                <h3 className=" text-[1.1rem] font-semibold ">Back Picture</h3>
                <div className=" flex ">
                  <div className=" flex-1 flex items-center justify-center text-lg md:text-2xl border ">
                    <LuImagePlus />
                  </div>
                  <div className=" flex-1 border lg:h-[12rem] ">
                    <Image
                      src={CarImg3}
                      alt="car main img "
                      className="  object-cover w-full h-full "
                     
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="  ">
              <div className=" flex flex-col gap-2 ">
                <h3 className=" text-[1.1rem] font-semibold ">
                  Inner side Picture
                </h3>
                <div className=" flex ">
                  <div className="flex-1  flex items-center justify-center text-lg md:text-2xl border ">
                    <LuImagePlus />
                  </div>
                  <div className=" flex-1 lg:h-[12rem] ">
                    <Image
                      src={CarImg4}
                      alt="car main img "
                      className="  object-cover w-full h-full   "
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 flex items-center gap-3 ">

            <Link href={`/dashboard/cars/${car}`} className="w-[30%] bg-green-500 text-[#fff] text-sm font-semibold text-center py-2 rounded-md ">
              Previous
            </Link>
            <button className=" bg-green-500 text-[#fff] text-sm font-semibold py-2 w-full rounded-md ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
