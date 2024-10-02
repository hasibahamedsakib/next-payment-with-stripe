"use client";
import Image from "next/image";
import BlogImg1 from "@/public/images/BlogImg2.webp";

import { useEffect, useState } from "react";

const SearchPage = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    // Only run the code on the client side
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      const pickup = params.get("pickup");
      const start = params.get("startDate");
      const end = params.get("endDate");
      setLocation(pickup);
      setStartDate(start);
      setEndDate(end);
      // Extract the query parameters
    }
  }, []);
  console.log({ location, startDate, endDate });

  return (
    <section className="max-w-[1250px] mx-auto px-3 py-6">
      {/* search box header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vehicle Listings</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="border-0 border-gray-300 rounded shadow-sm ring-2 ring-green-200 focus:ring-green-500 px-6 py-2 outline-none font-semibold text-gray-600  w-[390px]"
          />
          <button className="bg-green-500 hover:bg-green-700 transition-all duration-300 text-white rounded px-4 py-2">
            Search
          </button>
        </div>
      </header>
      {/* filtering options */}
      <div className="flex justify-between mb-4">
        <div>
          <span className="font-semibold text-gray-600">
            40 results out of 390
          </span>
        </div>
        <div className="flex space-x-4">
          <select className="border-0 border-gray-300 rounded shadow-sm ring-2 ring-green-200 focus:ring-green-500 px-2 py-2 outline-none font-semibold text-gray-600 capitalize ">
            <option>Total price</option>
            <option>Lowest to Highest</option>
            <option>Highest to Lowest</option>
          </select>
          <select className="border-0 border-gray-300 rounded shadow-sm ring-2 ring-green-200 focus:ring-green-500 px-2 py-2 outline-none font-semibold text-gray-600 capitalize ">
            <option>Vehicle type</option>
            <option>Car</option>
            <option>Truck</option>
          </select>
          <select className="border-0 border-gray-300 rounded shadow-sm ring-2 ring-green-200 focus:ring-green-500 px-2 py-2 outline-none font-semibold text-gray-600 capitalize ">
            <option>Pickup method</option>
            <option>Contactless</option>
            <option>In-person</option>
          </select>
        </div>
      </div>
      <div className="grid items-center justify-between gap-4 grid-cols-4">
        <div className="col-span-2 w-full space-y-3">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
          {/* Vehicle Card 1 */}
          <div className=" flex items-start justify-between gap-4 border rounded shadow-sm">
            <Image
              src={BlogImg1}
              alt="Dodge Grand Caravan"
              className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
              loading="lazy"
              draggable={false}
            />
            <div className="py-2 pr-5">
              <h2 className="text-lg font-semibold text-gray-700 leading-7 pt-2">
                Dodge Grand Caravan American Value Package 2014
              </h2>
              <p className="text-gray-600 leading-7">
                Rating: 4.09 (348 reviews)
              </p>
              <div className="text-end">
                <p className="text-xl font-bold">$1,427</p>
                {/* <p>For 23 days, 1 hr, 30 min</p> */}
              </div>
            </div>
          </div>

          <div className=" flex items-start justify-between gap-4 border rounded shadow-sm">
            <Image
              src={BlogImg1}
              alt="Dodge Grand Caravan"
              className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
              loading="lazy"
              draggable={false}
            />
            <div className="py-2 pr-5">
              <h2 className="text-lg font-semibold text-gray-700 leading-7 pt-2">
                Dodge Grand Caravan American Value Package 2014
              </h2>
              <p className="text-gray-600 leading-7">
                Rating: 4.09 (348 reviews)
              </p>
              <div className="text-end">
                <p className="text-xl font-bold">$1,427</p>
                {/* <p>For 23 days, 1 hr, 30 min</p> */}
              </div>
            </div>
          </div>
          <div className=" flex items-start justify-between gap-4 border rounded shadow-sm">
            <Image
              src={BlogImg1}
              alt="Dodge Grand Caravan"
              className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
              loading="lazy"
              draggable={false}
            />
            <div className="py-2 pr-5">
              <h2 className="text-lg font-semibold text-gray-700 leading-7 pt-2">
                Dodge Grand Caravan American Value Package 2014
              </h2>
              <p className="text-gray-600 leading-7">
                Rating: 4.09 (348 reviews)
              </p>
              <div className="text-end">
                <p className="text-xl font-bold">$1,427</p>
                {/* <p>For 23 days, 1 hr, 30 min</p> */}
              </div>
            </div>
          </div>

          {/* Add more vehicle cards as needed */}
          {/* </div> */}
        </div>
        <div className="col-span-2   w-full h-full">
          {/* Add your map component here */}

          {/* Embed a map here (e.g., Google Maps) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13184923.40045496!2d4.763220016153098!3d62.90059680047999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d3d75bc58c2b49%3A0x1b5cbf7edbd02a8f!2sNorway!5e0!3m2!1sen!2sus!4v1696490000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
