import React from "react";
import HomeListCarImg from "@/public/images/HomeListCarImg.webp";
import CarListImg from "@/public/images/CarListImg.jpg";
import Image from "next/image";

const HomeListCar = () => {
  return (
    <div>
      <div className=" py-10 mb-[5rem] relative bg-green-500 ">
        {/* <Image
          src={HomeListCarImg}
          className=" w-full h-full object-cover "
          placeholder="blur"
          alt="listing img"
        /> */}
        <div className=" max-w-[1250px] mx-auto  flex  px-3 md:flex-row flex-col md:gap-2 gap-7 ">
        <div className=" flex-1 md:order-1 order-2 ">
          <div className=" text-[#000] flex flex-col gap-10 items-start justify-start h-full ">
            <div className=" flex flex-col text-left ">
              <h3 className=" text-[1.5rem] sm:text-[2rem] md:text-[3rem] leading-tight text-white font-bold ">Eier du en bil? Sett den i arbeid!</h3>
              <p className=" text-[1.1rem] md:text-[1.5rem] font-extralight text-[#ebebeb] ">
              Tjen opptil $800 per måned ved å dele bilen din <br /> med Getaround Connect.
              </p>
            </div>
          <div className=" flex justify-start  ">
          <button type="button" className="group z-50 relative h-14 w-60 overflow-hidden border-2 rounded-sm text-white border-white text-base md:text-xl  hover:text-sky-200"><span className="bg-green-600 ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-green-600 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>Legg ut bilen min</button>

          </div>
          </div>
        </div>
        <div className=" flex-1 md:order-2 order-1 ">
          <Image src={CarListImg} alt="Home Listing car image" className=" w-full h-full object-cover rounded-lg " placeholder="blur" priority={false} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeListCar;
