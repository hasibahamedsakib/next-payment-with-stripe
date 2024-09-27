"use client";
import React, { useEffect, useState } from "react";
import DashboardIcon1 from "@/public/images/dashboardIcon1.png";
import Image from "next/image";
import axios from "axios";
import { GiCarDoor } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";




const Cars = () => {
  const [id, setId] = useState('')
  useEffect(()=> {
    const userId = localStorage.getItem("id");
    if(userId){

      setId(userId)
    }
  }, [])


  console.log("id", id);

  const [Listings, setListings] = useState(null);

    useEffect(() => {
      const fetchListedCar = async () => {
        try {
          const res = await axios.post(
            "/api/user/listing/getlistings",
            { userId: id },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res.data);
          if(res.data.success){
            setListings(res.data.data)
          }
        } catch (error) {
          console.log("Listing fetch failed");
          
        }
      };
      fetchListedCar();
    }, [id]);

    console.log(Listings);
    

  return (
    <div className=" mt-8 border rounded-md h-full min-h-[30rem] ">
      {Listings ? (
        <div className=" p-7 flex flex-col gap-4 ">
          {
            Listings.map((listing, idx)=> (
              <div key={idx} className=" flex gap-4 border px-5 py-2 rounded-md ">
                <div>
                  <Image src={listing?.image} alt="Car Image" className=" object-cover " width={200} height={100} />
                </div>
                <div className=" flex flex-col gap-2 ">
                <div className=" flex items-center gap-2 text-[1.6rem] ">
                  <h3>{listing?.carName}</h3>
                  <h3>{listing?.carModel}</h3>
                  <h3>{listing?.yearOfRegistation}</h3>
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
                  <span className=" text-gray-600 ">Meeting point: </span>
                  <p className=" text-gray-400 ">{listing?.meetingPoint}</p>
                </div>
                </div>
                
              </div>
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

export default Cars;
