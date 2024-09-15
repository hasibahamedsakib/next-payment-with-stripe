import React from "react";
import HomeListCarImg from "@/public/images/HomeListCarImg.webp";
import Image from "next/image";

const HomeListCar = () => {
  return (
    <div>
      <div className=" h-[40rem] mb-[5rem] relative ">
        <Image
          src={HomeListCarImg}
          className=" w-full h-full object-cover "
          placeholder="blur"
          alt="listing img"
        />
        <div className=" absolute w-full h-full left-0 top-0 bg-black/50 ">
          <div className=" text-[#fff] flex flex-col gap-10 items-center justify-center h-full ">
            <div className=" flex flex-col text-center ">
              <h3 className=" text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold ">Own a car? Put it to work!</h3>
              <p className=" text-[1.1rem] md:text-[1.5rem] lg:text-[2rem] font-extralight text-[#ebebeb] ">
                Earn up to $800 per month by <br /> sharing your car with Getaround
                Connect.
              </p>
            </div>
          <div className="   ">
          <button type="button" className="group z-50 relative h-14 w-48 overflow-hidden border-2 rounded-md text-white border-green-500 text-base md:text-xl  hover:text-sky-200"><span className="bg-green-500/80 ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-green-500/90 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>List My Car</button>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeListCar;
