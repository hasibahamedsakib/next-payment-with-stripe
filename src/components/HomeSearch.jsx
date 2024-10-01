"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa"; // Import the clear icon
import { IoLocationSharp } from "react-icons/io5";

// all vehicle
const vehicleOptions = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Tesla",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Nissan",
  "Hyundai",
  "Kia",
  "Mazda",
  "Subaru",
  "Lexus",
  "Jeep",
  "Dodge",
  "Ram",
  "GMC",
  "Buick",
  "Cadillac",
  "Chrysler",
  "Volvo",
  "Jaguar",
  "Land Rover",
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Mitsubishi",
  "Suzuki",
  "Peugeot",
  "Renault",
  "Skoda",
  "Fiat",
  "Alfa Romeo",
  "Acura",
  "Infiniti",
  "Lincoln",
  "Mini",
  "Bentley",
  "Rolls-Royce",
  "Maserati",
  "Aston Martin",
  "Bugatti",
  "McLaren",
  "Pagani",
  "Koenigsegg",
];

const HomeSearch = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [pickupAddress, setPickupAddress] = useState(""); // Pickup location input
  const [dropoffAddress, setDropoffAddress] = useState(""); // Dropoff location input
  const [pickupSuggestions, setPickupSuggestions] = useState([]); // Suggestions for Hent (Pick Up)
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]); // Suggestions for Lever (Drop Off)

  // Handle input change and provide suggestions
  const handleInputChange = (e) => {
    const query = e.target.value;
    setAddress(query);

    if (query.length > 0) {
      const filteredSuggestions = vehicleOptions.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setAddress(suggestion);
    setSuggestions([]);
  };

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

  // pickup changer
  const handlePickupInputChange = (e) => {
    const query = e.target.value;
    setPickupAddress(query);
    fetchPickupLocationSuggestions(query); // Fetch suggestions for pickup location
  };

  // For dropoff location:
  const fetchDropoffLocationSuggestions = async (query) => {
    if (query.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            query
          )}&format=json&addressdetails=1&limit=5&countrycodes=NO`
        );
        const data = await response.json();
        setDropoffSuggestions(data); // Store suggestions for dropoff
      } catch (error) {
        console.error("Error fetching dropoff location suggestions:", error);
      }
    } else {
      setDropoffSuggestions([]); // Clear suggestions if input is less than 3 characters
    }
  };

  // dropOff changer
  const handleDropoffInputChange = (e) => {
    const query = e.target.value;
    setDropoffAddress(query);
    fetchDropoffLocationSuggestions(query); // Fetch suggestions for dropoff location
  };

  // Handle suggestion clicks for locations:
  const handleLocationSuggestionClick = (suggestion, type) => {
    if (type === "pickup") {
      setPickupAddress(suggestion.display_name); // Set pickup address
      setPickupSuggestions([]); // Clear pickup suggestions
    } else if (type === "dropoff") {
      setDropoffAddress(suggestion.display_name); // Set dropoff address
      setDropoffSuggestions([]); // Clear dropoff suggestions
    }
  };

  // Handle input click to select all text
  const handleInputClick = (e) => {
    e.target.select();
  };

  // Clear the pickup input
  const handleClearPickup = () => {
    setPickupAddress("");
    setPickupSuggestions([]);
  };

  // Clear the dropoff input
  const handleClearDropoff = () => {
    setDropoffAddress("");
    setDropoffSuggestions([]);
  };

  return (
    <div className="max-w-[1250px] mx-auto px-3">
      <div className="lg:mt-0 mt-10 py-[3rem] px-3 sm:px-[2rem] bg-white shadow-md rounded-lg border border-green-300">
        <form className="flex justify-between flex-wrap items-end gap-4">
          {/* <!-- Select Vehicle (conditionally render select or input) --> */}
          <div className="w-full sm:w-[48%] lg:w-[15%]">
            <label
              htmlFor="vehicle"
              className="block font-medium text-gray-700"
            >
              Velg kjøretøy
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={address}
                onChange={handleInputChange}
                placeholder="Enter vehicle"
                className="mt-1 block text-base w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 px-2 py-3 outline-none focus:border-green-500"
              />
              {/* Suggestions dropdown */}
              {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-10">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* <!-- Pick Up --> */}
          <div className="w-full sm:w-[48%] lg:w-[22%]">
            <label htmlFor="pickup" className="block font-medium text-gray-700">
              Hent
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={pickupAddress}
                onChange={handlePickupInputChange}
                onClick={handleInputClick} // Select all text on click
                placeholder="Enter pickup location"
                className="mt-1 block text-base w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 px-2 py-3 outline-none focus:border-green-500"
              />
              {/* Clear icon for pickup */}
              {pickupAddress && (
                <span
                  onClick={handleClearPickup}
                  className="absolute right-2 top-2 cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </span>
              )}
              {/* Suggestions dropdown for Hent */}
              {pickupSuggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-10">
                  {pickupSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        handleLocationSuggestionClick(suggestion, "pickup")
                      }
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-start space-x-1"
                    >
                      <span>
                        <IoLocationSharp className="text-green-500 mt-[6px]" />
                      </span>{" "}
                      <span> {suggestion.display_name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="w-full sm:w-[48%] lg:w-[22%]">
            <label htmlFor="dates" className="block font-medium text-gray-700">
              Dato
            </label>
            <input
              required
              type="datetime-local"
              id="dates"
              placeholder="Start Date - End Date"
              className="mt-1 placeholder:text-green-500 block w-full border border-gray-300 px-2 py-2 outline-none text-green-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* <!-- Drop off --> */}
          <div className="w-full sm:w-[48%] lg:w-[22%]">
            <label
              htmlFor="dropoff"
              className="block font-medium text-gray-700"
            >
              Lever
            </label>
            <div className="relative">
              <input
                required
                type="text"
                value={dropoffAddress}
                onChange={handleDropoffInputChange}
                onClick={handleInputClick} // Select all text on click
                placeholder="Enter dropoff location"
                className="mt-1 block text-base w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 px-2 py-3 outline-none focus:border-green-500"
              />
              {/* Clear icon for dropoff */}
              {dropoffAddress && (
                <span
                  onClick={handleClearDropoff}
                  className="absolute right-2 top-2 cursor-pointer text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </span>
              )}
              {/* Suggestions dropdown for Lever */}
              {dropoffSuggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-10">
                  {dropoffSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        handleLocationSuggestionClick(suggestion, "dropoff")
                      }
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-start space-x-1"
                    >
                      <span>
                        <IoLocationSharp className="text-green-500 mt-[6px]" />
                      </span>{" "}
                      <span> {suggestion.display_name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* <!-- Search Button --> */}
          <div className="flex items-end h-full justify-end w-full lg:w-[10%]">
            <Link href="/search">
              <button
                type="submit"
                className="flex outline-none items-center gap-2 justify-center w-full px-2 py-[12px] border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-offset-2 focus:ring-green-500"
              >
                <FaSearch />
                Søk
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeSearch;
