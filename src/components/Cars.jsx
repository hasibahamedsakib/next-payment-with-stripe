
import React from "react";
import DashboardIcon1 from "@/public/images/dashboardIcon1.png";
import Image from "next/image";
import { GiCarDoor } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";





const cars = async () => {
  

  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  
  let tokendata = null;
if (token) {
  tokendata = jwt.decode(token);
} else {
  console.log("Token not found");
  return null; // or handle it appropriately
}


 
  // console.log("tokendata",tokendata)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  

  const res = await fetch(`${apiUrl}/api/user/listing/getlistings`,{
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: tokendata?.id }), 
});

  if (!res.ok) {
    console.log('Failed to fetch data');
    
}

  const data = await res.json();
  const listings = data.data
  // console.log("car Data",listings);
    
  return (
    <div className=" mt-8 border rounded-md h-full min-h-[30rem] ">
      {listings || listings.length > 0 ? (
        <div className=" p-7 flex flex-col gap-4 ">
          {
            listings.map((listing, idx)=> (
              <Link href={`${listing?.plateNumber}`} key={idx} className="  border px-5 py-2 rounded-md cursor-pointer ">
                
                <div className=" flex items-center justify-between mb-5 ">
                  <div className=" flex items-center gap-2 text-[1.3rem] text-gray-600 ">
                    <IoLocationOutline className=" text-gray-800 " />
                    <span>{listing?.city}, {listing?.state}</span>
                  </div>
                <div className="  text-end py-3 ">
                  <span className=" bg-yellow-100 px-5 py-2 rounded-md font-semibold ">Incomplete</span>
                </div>
                </div>
                
                <div className=" flex gap-4 ">
                <div>
                  <Image src={listing?.image} alt="Car Image" className=" object-cover " width={200} height={400}  />
                </div>
                <div className=" flex flex-col gap-2 ">
                <div className=" flex items-center gap-2 md:text-[1.4rem] leading-tight text-[1.2rem] lg:text-[1.6rem] ">
                  <h3>{listing?.carName}</h3>
                  <h3>{listing?.carModel}</h3>
                  <h3>{listing?.yearOfRegistation}</h3>
                </div>
                <div>
                  <span className=" font-semibold text-gray-600 ">{listing?.plateNumber}</span>
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
                  <p className=" text-gray-400 ">{listing?.meetingPoint}</p>
                </div>
                </div>
                </div>
                
              </Link>
            ))
          }
        </div>
      ) : (
        <div className=" flex items-center justify-center mt-[8rem] w-full ">
          <div className=" flex flex-col justify-center items-center text-center ">
            <div>
              <Image
                src={DashboardIcon1}
                alt="requests icon"
                className=" w-[15rem] h-full object-cover "
              />
            </div>
            <div>
              <h3 className=" text-[1.4rem] font-semibold ">
                No booking requests
              </h3>
              <p className=" font-light ">
                You don&apos;t have any requests right now. Why not jazz up your
                listing?
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
  );
};

export default cars;
