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
          <Image src={Logo} alt="Footer Logo" placeholder="blur" className=" w-[10rem] object-cover h-full " />
          <h3 className=" mt-5 mb-2 text-[1.5rem] ">Om oss</h3>
          <p className=" text-sm md:text-base text-[#000]  ">Move Around gjør det enkelt å dele biler og lastebiler gjennom sin egenutviklede sky- og in-car Connect®-teknologi. Move Arounds etterspørsels-teknologi muliggjør en kontaktfri opplevelse — ingen venting i kø på en bilutleiefasilitet, manuell utfylling av papirarbeid, eller møte noen for å hente eller levere bilnøkler.</p>
        </div>
        </div>
        
        <div className=" flex flex-col items-end sm:items-center  gap-3 text-[#000] ">
          <div className=" text-left flex flex-col gap-3  ">
          <h3 className=" mb-5 font-semibold text-xl ">Lær mer</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Hvordan fungerer det?</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">En pålitelig tjeneste</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Move Around-appen</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Kontakt</h3>
          {/* <h3 className=" hover:text-green-500 cursor-pointer ">Blog</h3> */}
          </div>
        </div>

        <div className=" flex flex-col  sm:mt-0 mt-5 items-center gap-3 text-[#000] ">
          <div className=" text-left flex flex-col gap-3 ">
          <h3 className=" mb-5 font-semibold text-xl  ">Ressurser</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Eierressurser</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Fordeler</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Hjelpesenter</h3>
          </div>
        </div>
        
        <div className=" flex flex-col items-center md:items-end  sm:mt-0 mt-5 gap-3 text-[#000] ">
          <div className=" text-left flex flex-col gap-3 ">
          <h3 className=" mb-5 font-semibold text-xl ">Partnere</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Bli partner med oss</h3>
          <h3 className=" hover:text-green-500 cursor-pointer ">Kjør med Uber</h3>
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
      
      <p className=" ">© 2024 Move Around | Alle rettigheter reservert.</p>
          
      </div>
    </div>
  );
}

export default Footer;
