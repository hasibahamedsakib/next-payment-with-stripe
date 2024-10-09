"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch, FaTimes } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const HomeSearch = () => {
  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [startDateAndTime, setStartDateAndTime] = useState("");
  const [endDateAndTime, setEndDateAndTime] = useState("");

  const router = useRouter(); // Initialize router

  // For pickup location:
  const fetchPickupLocationSuggestions = async (query) => {
    if (query.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            query
          )}&format=json&addressdetails=1&limit=5&countrycodes=NO`
        );
        const data = await response.json();
        setPickupSuggestions(data); // Store suggestions for pickup
      } catch (error) {
        console.error("Error fetching pickup location suggestions:", error);
      }
    } else {
      setPickupSuggestions([]); // Clear suggestions if input is less than 3 characters
    }
  };

  // Handle pickup input change
  const handlePickupInputChange = (e) => {
    const query = e.target.value;
    setPickupAddress(query);
    fetchPickupLocationSuggestions(query);
  };

  // Handle suggestion clicks for pickup location
  const handleLocationSuggestionClick = (suggestion) => {
    setPickupAddress(suggestion.display_name); // Set pickup address
    setPickupSuggestions([]); // Clear suggestions
  };

  // Clear the pickup input
  const handleClearPickup = () => {
    setPickupAddress("");
    setPickupSuggestions([]);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (pickupAddress && startDateAndTime && endDateAndTime) {
      // Redirect to /search page with query parameters
      router.push(
        `/search?pickup=${encodeURIComponent(
          pickupAddress
        )}&startDate=${encodeURIComponent(
          startDateAndTime
        )}&endDate=${encodeURIComponent(endDateAndTime)}`
      );
    } else {
      toast.error("Please fill in all fields.");
      router.push(`/search`);
    }
  };

  return (
    <div className="w-full max-w-[1250px] mx-auto px-3 md:mt-0 mt-10 ">
      <div className="w-full   ">
        <form
          onSubmit={handleFormSubmit}
          className=" gap-3 flex items-center lg:flex-row flex-col justify-between w-full bg-white pt-10 pb-12 px-4 border border-green-300 rounded-md "
        >
          {/* Pickup location input */}
          <div className=" w-full flex-1 ">
            <label
              htmlFor="pickup"
              className="block font-medium text-gray-800 ml-1 text-lg"
            >
              Hent:
            </label>
            <div className="relative">
              <input
                // required
                type="text"
                value={pickupAddress}
                onChange={handlePickupInputChange}
                placeholder={`Enter pickup location`}
                className="mt-1 block text-base w-full border hover:border-green-500 border-gray-300 rounded-md shadow-sm ring-green-200 focus:ring-green-500 pl-3 pr-10 py-3 outline-none font-semibold text-gray-600 capitalize"
              />
              {/* Clear icon */}
              {pickupAddress && (
                <span
                  onClick={handleClearPickup}
                  className="absolute right-3 top-4 cursor-pointer text-red-300 hover:text-red-600 border-[2px] border-red-300 hover:border-red-500 rounded-full p-[2px] transition-all duration-300 bg-white opacity-40 hover:opacity-70 "
                >
                  <FaTimes size={14} />
                </span>
              )}
              {/* Suggestions dropdown */}
              {pickupSuggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-10">
                  {pickupSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleLocationSuggestionClick(suggestion)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-start space-x-1"
                    >
                      <IoLocationSharp className="text-green-500 mt-[6px]" />
                      <span> {suggestion.display_name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Start Date and Time */}
          {/* <div className=" flex items-center justify-between gap-4"> */}
          <div className="flex-1 w-full ">
            <label
              htmlFor="dates"
              className="block font-medium text-gray-800 ml-1 text-lg"
            >
              Dato:
            </label>
            <input
              // required
              type="datetime-local"
              id="dates"
              onChange={(e) => setStartDateAndTime(e.target.value)}
              placeholder="Start Date - End Date"
              className="mt-1 placeholder:text-green-500 block w-full border hover:border-green-500 border-gray-300 rounded-md shadow-sm ring-green-200 focus:ring-green-500 px-3 py-3 outline-none font-semibold text-gray-600 "
            />
          </div>

          {/* End Date and Time */}
          <div className="md:flex-1 w-full ">
            <label
              htmlFor="dates"
              className="block font-medium text-gray-800 ml-1 text-lg"
            >
              Lever:
            </label>
            <input
              // required
              type="datetime-local"
              id="dates"
              onChange={(e) => setEndDateAndTime(e.target.value)}
              placeholder="Start Date - End Date"
              className="mt-1 placeholder:text-green-500 block w-full border hover:border-green-500 border-gray-300 rounded-md shadow-sm ring-green-200 focus:ring-green-500 px-3 py-3 outline-none font-semibold text-gray-600 "
            />
          </div>
          {/* </div> */}

          {/* Search Button */}
          <div className="flex md:w-auto w-full ">
            <button
              type="submit"
              className="flex mt-7 outline-none items-center gap-2 justify-center w-full px-8 py-3 border text-base border-transparent font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-offset-2 focus:ring-green-700 transition-all duration-300"
            >
              <FaSearch />
              <span>Søk</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeSearch;
