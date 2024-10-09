import React from "react";
// import Account from '@/components/Account';
// import Cars from '@/components/Cars';
// import Payments from '@/components/Payments';
// import Performance from '@/components/Performance';
// import Rentals from '@/components/Rentals';
// import Requests from '@/components/Requests';
import Link from "next/link";
import DashboardIcon1 from "@/public/images/dashboardIcon1.png";
import Image from "next/image";
import { GiCarDoor } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { IoLocationOutline } from "react-icons/io5";

const page = async ({ params }) => {
  const { tab, car } = params;
  console.log(car);

  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  let tokendata = null;
  if (token) {
    tokendata = jwt.decode(token);
  } else {
    console.log("Token not found");
    return null; // or handle it appropriately
  }

  // console.log("tokendata",tokendata)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/user/listing/getlistings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify({ userId: tokendata?.id }),
    cache: 'no-store'
  });

  if (!res.ok) {
    console.log("Failed to fetch data");
  }

  const data = await res.json();
  const listings = data?.data;
  console.log("car Data",listings);
  // console.log(res)
  

  return (
    <div>
      <div className=" max-w-[1250px] min-h-[60vh] mx-auto w-full ">
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
        <div className=" py-6 mt-8 px-5 border rounded-md border-l-4 border-l-red-500 lg:mx-0 mx-2  ">
          <h3 className=" text-[1.4rem] font-semibold ">
            Update your payment method
          </h3>
          <p className=" font-light ">
            You do not have a payment method for your Getaround Connect
            subscription.
          </p>
          <div className=" mt-5 ">
            <Link
              href={"/dashboard/account"}
              className=" px-6 py-2 rounded-md border border-green-500 text-xl "
            >
              Update your payment method
            </Link>
          </div>
        </div>

        <div className=" mt-8 border rounded-md h-full min-h-[30rem] ">
          {listings && listings?.length > 0 ? (
            <div className=" p-7 flex flex-col gap-4 ">
              {listings.map((listing, idx) => (
                <Link
                  href={`cars/${listing?.plateNumber}`}
                  key={idx}
                  className="  border px-5 py-2 rounded-md cursor-pointer "
                >
                  <div className=" flex items-center justify-between mb-5 ">
                    <div className=" flex items-center gap-2 text-[1.3rem] text-gray-600 ">
                      <IoLocationOutline className=" text-gray-800 " />
                      <span>
                        {listing?.city}, {listing?.state}
                      </span>
                    </div>
                    <div className=" flex items-center gap-3 ">
                    <div className="  text-end py-3 ">
                      <span className={` ${listing?.available ? "bg-green-100" : "bg-red-100"} px-5 py-2 rounded-md font-semibold `}>
                        {
                          listing?.available ? "Availabled" : "Unavailable"
                        }
                      </span>
                    </div>
                    <div className="  text-end py-3 ">
                      {
                        listing?.status ? <span className=" bg-green-100 px-5 py-2 rounded-md font-semibold ">
                        Completed
                      </span> : <span className=" bg-yellow-100 px-5 py-2 rounded-md font-semibold ">
                        Incompleted
                      </span>
                      }
                    </div>
                    </div>
                  </div>

                  <div className=" flex gap-4  ">
                    <div className=" relative h-[6rem] sm:h-[8rem] w-[13rem] ">
                      <Image
                        src={listing?.image1 ? listing?.image1 : listing?.image}
                        alt="Car Image"
                        className="w-full h-full object-cover rounded-md "
                        loading="lazy"
                        fill
                      />
                    </div>
                    <div className=" flex-1 flex flex-col gap-2 ">
                      <div className=" flex items-center gap-2 md:text-[1.4rem] leading-tight text-[1.2rem] lg:text-[1.6rem] ">
                        <h3>{listing?.carName}</h3>
                        <h3>{listing?.carModel}</h3>
                        <h3>{listing?.yearOfRegistation}</h3>
                      </div>
                      <div>
                        <span className=" font-semibold text-gray-600 ">
                          {listing?.plateNumber}
                        </span>
                      </div>
                      <div className=" flex items-center gap-5 ">
                        <div className=" flex items-center gap-1 ">
                          <GiCarDoor />
                          <span>{listing?.numberOfDoors}</span>
                        </div>
                        <div className=" flex items-center gap-1 ">
                          <GiCarSeat />
                          <span>{listing?.numberOfSeats}</span>
                        </div>
                      </div>
                      <div className=" flex gap-3 ">
                        <span className=" text-gray-600 ">Key Exchange: </span>
                        <p className=" text-gray-400 ">
                          {listing?.meetingPoint}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className=" flex items-center justify-center mt-[8rem] w-full ">
              <div className=" flex flex-col justify-center items-center text-center ">
                <div>
                  <Image
                    src={DashboardIcon1}
                    alt="requests icon"
                    className=" w-[15rem] h-full object-cover "
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className=" text-[1.4rem] font-semibold ">
                    No booking requests
                  </h3>
                  <p className=" font-light ">
                    You don&apos;t have any requests right now. Why not jazz up
                    your listing?
                  </p>
                </div>
                <div className=" mt-5 ">
                  <button className=" px-12 text-xl py-2 rounded-md border border-green-500 ">
                    Manage Listings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
