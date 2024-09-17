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
                <Image src={CarImg1} alt="Car Type Img" placeholder="blur" className=" w-full sm:h-[12rem] object-fill rounded-md " />
                <div className=" w-full flex bg-green-500 items-center justify-center ">
                    <h3 className=" pt-2 ">Pickup</h3>
                </div>
            </div>
            <div className=" bg-green-500 p-2 text-[#fff] text-[1.5rem] rounded-md  w-full ">
                <Image src={CarImg2} alt="Car Type Img" placeholder="blur" className=" w-full sm:h-[12rem] object-fill rounded-md " />
                <div className=" w-full flex bg-green-500 items-center justify-center ">
                    <h3 className=" pt-2 ">Kommersiell</h3>
                </div>
            </div>
            <div className=" bg-green-500 p-2 text-[#fff] text-[1.5rem] rounded-md  w-full ">
                <Image src={CarImg3} alt="Car Type Img" placeholder="blur" className=" w-full sm:h-[12rem] object-fill rounded-md " />
                <div className=" w-full flex bg-green-500 items-center justify-center ">
                    <h3 className=" pt-2 ">Familiebil</h3>
                </div>
            </div>
            <div className=" bg-green-500 p-2 text-[#fff] text-[1.5rem] rounded-md  w-full ">
                <Image src={CarImg4} alt="Car Type Img" placeholder="blur" className=" w-full sm:h-[12rem] object-fill rounded-md " />
                <div className=" w-full flex bg-green-500 items-center justify-center ">
                    <h3 className=" pt-2 ">SUV</h3>
                </div>
            </div>
            

      </div>
    </div>
  );
};

export default CarTypes;
