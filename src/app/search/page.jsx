"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CheckoutModal from "@/components/CheckoutModal";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
const SearchPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [findListedCars, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(true);

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
  const makePayment = async (carInfo) => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
      );
      const body = { listedCar: [carInfo] };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(`/api/payment/checkout`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if ((await result).error) {
        console.log(error);
      } else {
        // On successful payment, store payment data in localStorage
        localStorage.setItem(
          "paymentInfo",
          JSON.stringify({
            paymentIntentId: session.paymentIntentId,
            rentalFee: carInfo.perDayPrice,
            listerStripeAccountId:
              carInfo.listerStripeAccountId ?? "acct_1Q7XfcJB7MPY3OkO",
          })
        );
        setPaymentStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Function to handle payment
  const makePaymentXYZ = async (carInfo) => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
      );
      const body = { listedCar: [carInfo] };
      const response = await fetch(`/api/payment/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log(result.error);
      } else {
        // On successful payment, store payment data in localStorage
        localStorage.setItem(
          "paymentInfo",
          JSON.stringify({
            paymentIntentId: session.paymentIntentId,
            rentalFee: carInfo.perDayPrice,
            listerStripeAccountId:
              carInfo.listerStripeAccountId ?? "acct_1Q7XfcJB7MPY3OkO",
          })
        );
        setPaymentStatus("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle ride completion
  const completeRide = async (carInfo) => {
    try {
      const paymentInfo = {
        paymentIntentId: "pi_3Q7wIeCLqXvgIfXy1k6LlsSr",
        rentalFee: carInfo?.perDayPrice,
        listerStripeAccountId: `acct_1Q7XfcJB7MPY3OkO`,
      };
      const response = await fetch(`/api/payment/splitpayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentInfo, carInfo }),
      });

      if (response.ok) {
        setRideCompleted(true);
        alert("Ride completed, payment has been split!");
      } else {
        alert("Error completing the ride.");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                        src={item?.image1 ?? item?.image}
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
                            Price/Day{" "}
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
                          <button
                            onClick={() => makePayment(item)}
                            className="bg-purple-500 hover:bg-purple-700 text-sm transition-all duration-300 text-white rounded px-2 py-1 mt-2 ml-2"
                          >
                            Checkout
                          </button>
                          {paymentStatus && (
                            <span>
                              <button
                                onClick={() => completeRide(item)}
                                className="bg-blue-500 text-sm  text-white px-2 py-2 mr-2 hover:bg-blue-600 transition"
                              >
                                Complete
                              </button>
                              <Link href="/payment/cancel">
                                <button className="bg-red-500 text-sm  text-white px-2 py-2  hover:bg-red-600 transition">
                                  Cancel
                                </button>
                              </Link>
                            </span>
                          )}
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
//! code not worked
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { loadStripe } from "@stripe/stripe-js";

// const SearchPage = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [location, setLocation] = useState("");
//   const [findListedCars, setListings] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [paymentStatus, setPaymentStatus] = useState(null); // To track payment status
//   const [rideCompleted, setRideCompleted] = useState(false); // To track ride completion status

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const params = new URLSearchParams(window.location.search);
//       const pickup = params.get("pickup");
//       setLocation(pickup);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const response = await fetch(`/api/user/listing/getallcars`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ location }),
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch listings");
//         }

//         const data = await response.json();
//         setListings(data.allListedCars);
//         setIsLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setIsLoading(false);
//       }
//     };

//     fetchListings();
//   }, [location]);

//   // Function to handle payment
//   const makePayment = async (carInfo) => {
//     try {
//       const stripe = await loadStripe(
//         process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
//       );
//       const body = { listedCar: [carInfo] };
//       const response = await fetch(`/api/payment/checkout`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(body),
//       });
//       const session = await response.json();
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });
//       if (result.error) {
//         console.log(result.error);
//       } else {
//         // On successful payment, store payment data in localStorage
//         localStorage.setItem(
//           "paymentInfo",
//           JSON.stringify({
//             paymentIntentId: session.paymentIntentId,
//             rentalFee: carInfo.perDayPrice,
//             listerStripeAccountId:
//               carInfo.listerStripeAccountId ?? "acct_1Q7XfcJB7MPY3OkO",
//           })
//         );
//         setPaymentStatus("success");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Function to handle ride completion
//   const completeRide = async (carInfo) => {
//     try {
//       const paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));
//       const response = await fetch(`/api/payment/splitpayment`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ paymentInfo, carInfo }),
//       });

//       if (response.ok) {
//         setRideCompleted(true);
//         alert("Ride completed, payment has been split!");
//       } else {
//         alert("Error completing the ride.");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className="max-w-[1250px] min-h-[90vh] mx-auto px-4 py-6">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-semibold text-gray-800">
//           Vehicle Listings
//         </h1>
//         <div className="flex space-x-2">
//           <input
//             onBlur={(e) => setLocation(e.target.value)}
//             type="text"
//             placeholder="Search vehicles..."
//             className="border border-gray-300 rounded-lg shadow-sm px-4 py-2 w-[400px] text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
//           />
//           <button className="bg-green-500 text-white rounded-lg px-5 py-2 font-medium hover:bg-green-600 transition">
//             Search
//           </button>
//         </div>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {isLoading ? (
//           <p>Loading... Please wait</p>
//         ) : findListedCars?.length >= 1 ? (
//           findListedCars.map((item, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
//             >
//               <Image
//                 src={item?.image1 ?? item?.image}
//                 alt={item?.carName}
//                 className="w-full h-56 object-cover"
//                 width={300}
//                 height={192}
//               />
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                   {item?.carName} {item?.carModel} - {item?.yearOfRegistation}
//                 </h2>
//                 <p className="text-gray-600 mb-4">Rating: 4.09 (348 reviews)</p>
//                 <p className="text-xl font-bold text-green-500 mb-4">
//                   ${item?.perDayPrice} / Day
//                 </p>
//                 <button
//                   onClick={() => makePayment(item)}
//                   className="bg-purple-500 text-white w-full py-2 rounded-lg hover:bg-purple-600 transition"
//                 >
//                   Checkout
//                 </button>
//               </div>
//               {paymentStatus === "success" && (
//                 <div className="p-4">
//                   <button
//                     onClick={() => completeRide(item)}
//                     className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition mb-2"
//                   >
//                     Complete Ride
//                   </button>
//                   <button className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition">
//                     Cancel Ride
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No cars found for this location.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default SearchPage;
