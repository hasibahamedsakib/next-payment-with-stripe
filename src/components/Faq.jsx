"use client";
import React from "react";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dataArr = [
    {
      title: "Move Around car rental",
      description:
        'Rent the perfect vehicle with Move Around car rental services There are a thousand reasons why you may need a rental car. Maybe you\'re moving and need a cargo van to move your furniture across town. Perhaps you\'re going on a romantic getaway with your partner and want to rent a convertible to cruise around in. Or maybe you\'re going on a business trip and need a luxury rental car to impress your clients! No matter what your needs are, Move Around is the perfect car rental option.',
    },
    {
      title: "Why you should choose Move Around car rental",
      description:
        "Move Around car sharing is an environmentally friendly, convenient, and affordable alternative to traditional car rental. When you rent a car with Move Around, you\'re actively choosing to share an individual owner\'s car when they wouldn\'t be driving it anyway. That helps keep new cars off the road, giving the environment a tiny break it desperately needs.Move Around cars are conveniently located across communities, at airports, and in cities around the world. That means car-sharing guests benefit from having affordable and convenient access to nearby rental cars. But there\'s more! Getaround car rental is super flexible. You can rent a car by the hour or by the day. And, if your plans change, no big deal! You can cancel within 1 hour of booking or more than 24 hours before the start of your trip for free.",
    },
    {
      title: "How does Move Around car rental work?",
      description:
        "Renting a car with Getaround is as easy as one, two, three.1) Download the free Move Around app to your smartphone. Search for the vehicle you\'d like to rent based on location and duration (by the hour or day…), and book the vehicle that best meets your needs.2) Start driving! The Getaround app turns your smartphone into a car key. You can unlock the car directly from the app, meaning you have full flexibility to get the car any time after your rental pickup time.The convenience of a Move Around rental car can\'t be beat. Why not give it a shot?",
    },
    {
      title: "Types of cars you can rent with Move Around",
      description:
        "Move Around offers a huge array of fleet styles including trucks, vans, cars, convertibles, SUVs, and so much more. The variety of sizes, styles, colors, models, and makes is as large as the community or area where you\'re renting a car. When you search for a car to book on the Move Around app or website, you can filter by your needs.In our category filter, you can choose the type of vehicle you need: SUV/Jeep? Coupe/Sedan? Minivan? Pickup truck? The car rental options are endless. In our class filter, you can choose between economy, luxury, and performance. And guess what? You can even filter by transmission (automatic or manual) and by drivetrain (all-wheel drive, anyone?). But it doesn\'t end there! You can even filter by special features. If you\'re going on a ski trip and need a roof rack, you can search specifically for that. Pet-friendly cars, cars with bike racks, and cars with Bluetooth… You can request whatever you need from your Move Around rental car.Whether you\'re going on a road trip with friends or taking a weekend getaway, Move Around car rental meets all your vehicle rental needs.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className=" max-w-[1300px] mx-auto px-3 ">
      <div className=" text-center text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold w-full pb-10  ">
        <h3>Frequently Asked Questions</h3>
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
