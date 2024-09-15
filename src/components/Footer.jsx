import Logo from "@/public/images/Logo.webp"
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




function Footer() {
  return (
    <div className=" bg-[#fff] text-[#000] mt-10  pt-10  ">
      <div className=" max-w-[1250px] mx-auto  px-3 mb-10">

        <div className="  grid grid-cols-2 sm:grid-cols-4 gap-3 ">
        <div className="  ">
        <div>
          <Image src={Logo} className=" w-[10rem] object-cover h-full " />
          <h3 className=" mt-5 mb-2 text-[1.5rem] ">About Us</h3>
          <p className=" text-sm md:text-base text-[#000]  ">Move Around makes sharing cars and trucks simple through its proprietary cloud and in-car Connect® technology. Move Around on-demand technology enables a contactless experience — no waiting in line at a car rental facility, manually completing paperwork, or meeting anyone to collect or drop off car keys.</p>
        </div>
        </div>
        
        <div className=" flex flex-col items-end sm:items-center  gap-3 text-[#000] ">
          <div className=" text-left flex flex-col gap-3  ">
          <h3 className=" mb-5 font-semibold text-xl ">Learn more</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">How does it work?</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">A trusted service</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Move Around app</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Contact</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Blog</h3>
          </div>
        </div>

        <div className=" flex flex-col  sm:mt-0 mt-5 items-center gap-3 text-[#000] ">
          <div className=" text-left flex flex-col gap-3 ">
          <h3 className=" mb-5 font-semibold text-xl  ">Resources</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Owner resources</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Pros</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Help center</h3>
          </div>
        </div>
        
        <div className=" flex flex-col items-center md:items-end  sm:mt-0 mt-5 gap-3 text-[#000] ">
          <div className=" text-left flex flex-col gap-3 ">
          <h3 className=" mb-5 font-semibold text-xl ">Partners</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Partner with us</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Drive with Uber</h3>
          </div>
        </div>
        </div>

        

      </div>
      <div className=" flex items-center justify-center gap-8 text-[1.7rem] py-5 ">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className=" bg-[#fff] py-4  text-[#000] text-sm text-center border-t border-[#9b9b9b] ">
      
      <p className=" ">Copyright 2024 Move Around  |  All rights reserved.</p>
          
      </div>
    </div>
  );
}

export default Footer;
