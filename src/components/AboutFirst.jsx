import React from "react";
import About1 from "@/public/images/About1.webp";
import About2 from "@/public/images/About2.webp";
import About3 from "@/public/images/About3.webp";
import Image from "next/image";
import { FiCheckSquare } from "react-icons/fi";
import { IoCheckboxSharp } from "react-icons/io5";


const AboutFirst = () => {
  return (
    <div className="  ">
      <div className=" max-w-[1250px] mx-auto md:py-[6rem] py-[5rem] lg:py-[7rem] flex items-center md:flex-row flex-col md:gap-0 gap-8 px-3 ">
        <div className=" flex-1 ">
          <Image
            src={About1}
            alt="About Image"
            placeholder="blur"
            className=" w-full h-full md:h-[25rem] object-cover rounded-md shadow-lg "
          />
        </div>
        <div className=" flex-1 lg:pr-3 md:pl-4 lg:pl-7 ">
          <h3 className=" text-[1.5rem] md:text-[1.8rem] font-semibold ">
            Velkommen til MoveAround -
          </h3>
          <p className=" text-[1.2rem] lg:text-[1.3rem] text-zinc-600 mt-7 ">
            din ultimate plattform for bilutleie! Hos Move Around er vårt mål å
            gjøre bilutleie enkelt, effektivt og skreddersydd for dine behov.
            Enten du trenger en bil for en kort tur, en lengre reise, eller en
            spesifikk anledning, Om selskapet har vi et bredt utvalg av kjøretøy
            som kan møte dine krav
          </p>
        </div>
      </div>
      <div className=" pb-20  h-[30rem] mb-16 relative ">
        <div className=" absolute w-full h-full left-0 top-0 bg-black/50 flex items-center justify-center flex-col text-[#fff] px-2  ">
          <h3 className=" text-[1.6rem] sm:text-[1.8rem] md:text-[2.5rem] font-semibold ">
            Spar mye med vår billige leiebil!
          </h3>
          <h4 className=" text-[1.3rem] sm:text-[1.4rem] md:text-[1.8rem] font-light ">
            Topp uttak. Lokale leverandører.
          </h4>
          <div className=" flex items-center gap-5 mt-6 ">
            <button className=" px-6 py-2 rounded-md bg-green-500 border-2 border-green-500 hover:bg-transparent transition-all duration-300 ease-in-out ">
              Bestill tur
            </button>
            <button className="  px-6 py-2 rounded-md bg-transparent border-2 hover:bg-green-500 transition-all duration-300 ease-in-out border-green-500 ">
              Kontakt oss
            </button>
          </div>
        </div>
        <Image
          src={About2}
          alt="About Image2"
          placeholder="blur"
          className=" h-[30rem] object-cover w-full "
        />
      </div>


      <div className=" max-w-[1250px] mx-auto md:py-[6rem] py-[5rem] lg:py-[7rem] flex items-center md:flex-row flex-col md:gap-3 gap-8 px-3 ">
        
        <div className=" flex-1 ">
          <h3 className=" text-[1.5rem] md:text-[1.8rem] font-light text-green-500 ">Hvorfor velge oss?</h3>
          <h4 className=" text-[1.5rem] font-semibold ">Opplev fortreffelighet på hver mil</h4>
          <p className=" text-[1.2rem] lg:text-[1.3rem] text-zinc-600 mt-7 ">
          Vår plattform er designet for å gi deg en sømløs opplevelse fra start til slutt. Med Move Around kan du enkelt søke etter og leie biler som passer perfekt til dine behov, enten det er en liten bybil, en romslig SUV eller en luksuriøs sedan. Vår brukervennlige nettside og app gjør det enkelt å finne det du leter etter, sammenligne alternativer og booke din bil på bare noen få minutter. Vi er dedikert til å gi deg den beste bilutleieopplevelsen, og vi jobber kontinuerlig med å forbedre våre tjenester. I nær fremtid kan du forvente mange spennende oppdateringer og nye funksjoner som vil gjøre bilutleie enda mer praktisk og tilpasset dine behov. Fra forbedrede søkeverktøy til flere fleksible leiealternativer, vi har store planer for å sikre at Move Around alltid møter dine forventninger. Takk for at du velger Move Around. Vi ser frem til å hjelpe deg med å finne den perfekte bilen og gjøre reisen din så behagelig og problemfri som mulig. Bli med oss på reisen mot en enklere og mer moderne bilutleieopplevelse!
          </p>
          <div className=" flex items-center gap-6 md:gap-10 mt-4  ">
            <div className=" flex flex-col gap-3 ">
                <div className=" flex items-center gap-2 text-[1.1rem] md:text-[1.3rem] ">
                    <FiCheckSquare className=" text-green-500 " />
                    <h4>Ekspertstab</h4>
                </div>
                <div className=" flex items-center gap-2 text-[1.1rem] md:text-[1.3rem] ">
                    <FiCheckSquare className=" text-green-500 " />
                    <h4>Pålitelige kjøretøy</h4>
                </div>
                <div className=" flex items-center gap-2 text-[1.1rem] md:text-[1.3rem] ">
                    <FiCheckSquare className=" text-green-500 " />
                    <h4>Eksepsjonell service</h4>
                </div>
            </div>
            <div className=" flex flex-col gap-3 ">
                <div className=" flex items-center gap-2 text-[1.1rem] md:text-[1.3rem] ">
                    <FiCheckSquare className=" text-green-500 " />
                    <h4>Praktisk booking</h4>
                </div>
                <div className=" flex items-center gap-2 text-[1.1rem] md:text-[1.3rem] ">
                    <FiCheckSquare className=" text-green-500 " />
                    <h4>Rimelige priser</h4>
                </div>
                <div className=" flex items-center gap-2 text-[1.1rem] md:text-[1.3rem] ">
                    <FiCheckSquare className=" text-green-500 " />
                    <h4>Enkel prosess</h4>
                </div>
            </div>
          </div>
          <div className=" mt-[2rem] ">
            <button className=" px-10 group rounded-md py-2 bg-green-500 text-[#fff] flex items-center gap-2 text-xl ">
                <p>Finn Tilbud</p>
                <IoCheckboxSharp className=" group-hover:ml-3 transition-all duration-300 ease-in-out " />
            </button>
          </div>
        </div>
        <div className=" flex-1 ">
          <Image
            src={About3}
            alt="About Image"
            placeholder="blur"
            className=" w-full h-auto lg:h-[50rem] object-cover lg:object-fill rounded-md shadow-lg "
          />
        </div>
      </div>

    </div>
  );
};

export default AboutFirst;
