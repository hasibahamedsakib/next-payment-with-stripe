import { FaCheck } from "react-icons/fa6";
import React from "react";
import Link from "next/link";
import CarImageUpload from "@/dashboardComponents/CarImageUpload";

const Page = async ({ params }) => {
  // const [openModal, setOpenModal] = useState(false);
  const { tab, car } = params;


  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/user/listing/getlisting`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plateNumber: car }),
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log("Failed to fetch data");
  }

  const data = await res.json()
  const listing = data.data

  // console.log(listing.image1)
  


  return (
    <div>
      <div className={`  max-w-[1250px] mx-auto px-3 py-6 `}>
        <div className=" flex items-center text-xl lg:overflow-x-hidden overflow-x-scroll overflow-hidden  ">
          <Link
            href={"/dashboard/requests"}
            className={` px-7 py-5 border-b-4 ${
              tab === "requests" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            REQUESTS
          </Link>
          <Link
            href={"/dashboard/rentals"}
            className={` px-7 py-5 border-b-4 ${
              tab === "rentals" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            RENTALS
          </Link>
          <Link
            href={"/dashboard/cars"}
            className={` px-7 py-5 border-b-4 border-green-500 bg-green-500/5    `}
          >
            CARS
          </Link>
          <Link
            href={"/dashboard/performance"}
            className={` px-7 py-5 border-b-4 ${
              tab === "performance" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            PERFORMANCE
          </Link>
          <Link
            href={"/dashboard/payments"}
            className={` px-7 py-5 border-b-4 ${
              tab === "payments" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            PAYMENTS
          </Link>
          <Link
            href={"/dashboard/account"}
            className={` px-7 py-5 border-b-4 ${
              tab === "account" ? "border-green-500 bg-green-500/5 " : null
            }   `}
          >
            ACCOUNT
          </Link>
        </div>

        <div className=" mt-6 ">
        <div>
              <div className=" flex items-center gap-4 text-[1.8rem] font-semibold mb-5 ">
                <h3>{listing?.carName}</h3>
                <h3>{listing?.carModel}</h3>
                <h3>{listing?.yearOfRegistation}</h3>
              </div>
              <span>Number plate: {listing?.plateNumber}</span>
            </div>
          <h2 className=" font-semibold text-[1.3rem] ">
            Picture of the vehicle
          </h2>
          <p>
            We only display cars with photos. You can start with one and add
            more after your listing is live.
          </p>
          <div className=" mt-3 flex flex-col gap-3 ">
            <h3 className=" text-[1.2rem] font-semibold ">Our Tips</h3>
            <div className=" grid grid-cols-2 gap-2 ">
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Use the landscape format</span>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Follow our angle guidelines</span>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Keep the background clear and neutral</span>
              </div>
              <div className=" flex items-center gap-2 ">
                <FaCheck className=" bg-green-500/10 text-green-500 p-1 text-2xl rounded-full " />
                <span>Use only natural daylight</span>
              </div>
            </div>
          </div>

            <CarImageUpload car={car} cImage1={listing?.image1 ? listing?.image1 : null} cImage2={listing?.image2 ? listing?.image2 : null} cImage3={listing?.image3 ? listing?.image3 : null} cImage4={listing?.image4 ? listing?.image4 : null} />
          
        </div>
      </div>
    </div>
  );
};

export default Page;
