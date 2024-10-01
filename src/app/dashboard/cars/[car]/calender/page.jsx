
import React from "react";
import Link from "next/link";
import CarCalendar from "@/dashboardComponents/CarCalendar";

const page = async ({ params }) => {
    
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

        <div className=" my-5 ">
              <div className=" flex items-center gap-4 text-[1.8rem] font-semibold  ">
                <h3>{listing?.carName}</h3>
                <h3>{listing?.carModel}</h3>
                <h3>{listing?.yearOfRegistation}</h3>
              </div>
              <span>Number plate: {listing?.plateNumber}</span>
            </div>

            <CarCalendar />
        
      </div>
    </div>
  );
};

export default page;
