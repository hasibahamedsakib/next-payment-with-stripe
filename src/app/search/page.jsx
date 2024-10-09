"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CheckoutModal from "@/components/CheckoutModal";

const SearchPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [findListedCars, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    }
  }, []);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(`/api/user/listing/getallcars`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ location }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch listings");
        }

        const data = await response.json();
        setListings(data.allListedCars);
        console.log(data);

        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchListings();
  }, [location]);
  return (
    <section className="max-w-[1250px] min-h-[90vh] mx-auto px-3 py-6">
      {/* search box header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Vehicle Listings</h1>
        <div className="flex space-x-2">
          <input
            onBlur={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded shadow-sm hover:border-green-500 px-3 py-2 outline-none font-semibold text-gray-600 w-[390px]"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 transition-all duration-300 text-white rounded px-8 py-2"
          >
            Search
          </button>
        </div>
      </header>
      {/* filtering options */}
      <div className="flex justify-between mb-4">
        <div>
          <span className="font-semibold text-gray-600">
            {findListedCars?.length || 0} results out of 390
          </span>
        </div>
        <div className="flex space-x-4">
          <select className="border hover:border-green-500 border-gray-300 rounded shadow-sm  px-3 py-2 outline-none font-semibold text-gray-600 capitalize ">
            <option>Total price</option>
            <option>Lowest to Highest</option>
            <option>Highest to Lowest</option>
          </select>
          <select className="border hover:border-green-500 border-gray-300 rounded shadow-sm  px-3 py-2 outline-none font-semibold text-gray-600 capitalize ">
            <option>Vehicle type</option>
            <option>Car</option>
            <option>Truck</option>
          </select>
          <select className="border hover:border-green-500 border-gray-300 rounded shadow-sm  px-3 py-2 outline-none font-semibold text-gray-600 capitalize ">
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

          {isLoading
            ? "loading... please wait"
            : findListedCars?.length >= 1
            ? findListedCars?.map((item, index) => {
                return (
                  <div key={index}>
                    {openModal && (
                      <CheckoutModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        item={item}
                      />
                    )}
                    <div className=" flex items-start justify-between gap-4 border rounded shadow-sm">
                      <Image
                        src={item?.image1 ? item?.image1 : item?.image}
                        alt="Dodge Grand Caravan"
                        className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
                        loading="lazy"
                        width={300}
                        height={192}
                        draggable={false}
                      />
                      <div className="py-2 pr-5">
                        <h2 className="text-lg font-semibold text-gray-700 leading-7 pt-2">
                          {item?.carName}_{item?.carModel}{" "}
                          {item?.countryOfRegistation} -{" "}
                          {item?.yearOfRegistation}
                          {/* Dodge Grand Caravan American Value Package 2014 */}
                        </h2>
                        <p className="text-gray-600 leading-7">
                          Rating: 4.09 (348 reviews)
                        </p>
                        <div className="text-end">
                          <p className=" font-bold">
                            Price/H{" "}
                            <span className="text-xl font-bold">
                              {" "}
                              : ${item?.perDayPrice}
                            </span>
                          </p>
                          {/* <p>For 23 days, 1 hr, 30 min</p> */}
                          <button
                            onClick={() => {
                              setOpenModal(true);
                            }}
                            className="bg-green-500 hover:bg-green-700 text-sm transition-all duration-300 text-white rounded px-2 py-1 mt-2"
                          >
                            See Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Car Not found at this location"}
          {/* {openModal && (
            <CheckoutModal openModal={openModal} setOpenModal={setOpenModal} carInfo={item} />
          )} */}
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
