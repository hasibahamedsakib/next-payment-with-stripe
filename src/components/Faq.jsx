"use client";
import React from "react";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "Move Around bilutleie",
      description:
        'Lei det perfekte kjøretøyet med Move Around bilutleietjenester Det finnes tusen grunner til at du kan trenge en leiebil. Kanskje du skal flytte og trenger en varebil for å flytte møblene dine til den andre siden av byen. Kanskje du skal på en romantisk ferie med partneren din og vil leie en cabriolet for å cruise rundt i. Eller kanskje du skal på en forretningsreise og trenger en luksusleiebil for å imponere kundene dine! Uansett hvilke behov du har, er Move Around det perfekte bilutleievalget.',
    },
    {
      title: "Hvorfor du bør velge Move Around bilutleie",
      description:
        "Move Around bilutleie er et miljøvennlig, praktisk og rimelig alternativ til tradisjonell bilutleie. Når du leier en bil med Move Around, velger du aktivt å dele en individuell eieres bil når de uansett ikke ville kjørt den. Dette bidrar til å holde nye biler borte fra veiene, og gir miljøet en liten pause det desperat trenger. Move Around-biler er praktisk plassert i lokalsamfunn, på flyplasser og i byer over hele verden. Det betyr at bil-deling gjester drar nytte av å ha rimelig og praktisk tilgang til nærliggende leiebiler. Men det er mer! Getaround bilutleie er superfleksibel. Du kan leie en bil per time eller per dag. Og, hvis planene dine endres, ingen stor sak! Du kan avbestille innen 1 time etter bestilling eller mer enn 24 timer før starten av turen din, gratis.",
    },
    {
      title: "Hvordan fungerer Move Around bilutleie?",
      description:
        "Å leie en bil med Getaround er like enkelt som én, to, tre. 1) Last ned den gratis Move Around-appen til smarttelefonen din. Søk etter kjøretøyet du ønsker å leie basert på plassering og varighet (per time eller dag…), og bestill det kjøretøyet som best møter dine behov. 2) Begynn å kjøre! Getaround-appen gjør smarttelefonen din til en bilnøkkel. Du kan låse opp bilen direkte fra appen, noe som gir deg full fleksibilitet til å hente bilen når som helst etter leieoppstartstiden.",
    },
    {
      title: "Typer biler du kan leie med Move Around",
      description:
        "Move Around tilbyr et stort utvalg av kjøretøytyper, inkludert lastebiler, varebiler, biler, cabrioleter, SUV-er og mye mer. Variasjonen av størrelser, stiler, farger, modeller og merker er like stor som fellesskapet eller området der du leier en bil. Når du søker etter en bil å bestille på Move Around-appen eller nettsiden, kan du filtrere etter dine behov. I vårt kategorifilter kan du velge typen kjøretøy du trenger: SUV/Jeep? Coupé/Sedan? Minivan? Pickup truck? Bilutleiealternativene er uendelige. I vårt klassefilter kan du velge mellom økonomi, luksus og ytelse. Og gjett hva? Du kan til og med filtrere etter girkasse (automatisk eller manuell) og drivlinje (firehjulstrekk, kanskje?). Men det stopper ikke der! Du kan til og med filtrere etter spesialfunksjoner. Hvis du skal på skitur og trenger takstativ, kan du søke spesifikt etter det. Kjæledyrvennlige biler, biler med sykkelstativ og biler med Bluetooth… Du kan be om hva du trenger fra din Move Around leiebil. Enten du skal på biltur med venner eller ta en helgetur, møter Move Around bilutleie alle dine bilutleiebehov.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className=" max-w-[1300px] mx-auto px-3 ">
      <div className=" text-center text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold w-full pb-10  ">
        <h3>Ofte stilte spørsmål</h3>
      </div>

      <div className="mx-auto w-full rounded-lg">
        {dataArr.map((PerAccordion, idx) => (
          <div
            key={idx}
            className="my-2 rounded-lg border border-green-500 px-3 py-4 *:mix-blend-difference text-black "
          >
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between font-medium text-[#fff] outline-none"
            >
              <span className=" text-[1.1rem] md:text-[1.3rem] text-start ">{PerAccordion.title}</span>
              <span className="rounded-full">
                <svg
                  className="ml-8 size-3 shrink-0 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
                isOpen === idx
                  ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pr-4 text-sm sm:text-base md:text-xl">
                {PerAccordion.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
