import AccountLeft from "@/components/AccountLeft";
import { useUserDataContext } from "@/context/UserDataContext";
import axios from "axios";
import { cookies } from "next/headers";
// import { useUserDataContext } from "@/context/UserDataContext.js";
import Link from "next/link";
import React from "react";
import jwt from 'jsonwebtoken'

export const metadata = {
  title: "Account",
  description: "Account Details",
};

export default async function accountLayout({ children }) {

  

  return (
    <div className=" max-w-[1250px] mx-auto ">
      <div className=" flex items-center text-xl lg:overflow-x-hidden overflow-x-scroll overflow-hidden  ">
        <Link
          href={"/dashboard/requests"}
          className={` px-7 py-5 border-b-4    `}
        >
          REQUESTS
        </Link>
        <Link
          href={"/dashboard/rentals"}
          className={` px-7 py-5 border-b-4    `}
        >
          RENTALS
        </Link>
        <Link
          href={"/dashboard/cars"}
          className={` px-7 py-5 border-b-4   `}
        >
          CARS
        </Link>
        <Link
          href={"/dashboard/performance"}
          className={` px-7 py-5 border-b-4   `}
        >
          PERFORMANCE
        </Link>
        <Link
          href={"/dashboard/payments"}
          className={` px-7 py-5 border-b-4  `}
        >
          PAYMENTS
        </Link>
        <Link
          href={"/dashboard/account"}
          className={` px-7 py-5 border-b-4  border-green-500 bg-green-500/5 `}
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

      <div className=" mt-8 border rounded-md h-full min-h-[30rem] flex md:flex-row flex-col ">
        <AccountLeft />

        <div className=" w-full md:w-[70%] lg:w-[80%] transition-all duration-300 ease-linear ">
        {children}
        </div>
      </div>
    </div>
  );
}
