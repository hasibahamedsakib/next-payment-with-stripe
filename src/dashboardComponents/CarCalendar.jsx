"use client";
import React, { useState } from "react";

import { format, isBefore, isToday, isPast } from "date-fns";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const CarCalendar = ({ car, listingId }) => {
  const [toggle, setToggle] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(false)

  const [form, setForm] = useState({
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus(true);
    try {
      const res = await axios.post('/api/user/listing/update', {
        listingId: listingId, 
        unavailability: form
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      
      if (res.data.success) {
        toast.success('Car Unavailabled successfully');
        console.log(res.data.data);
        
      } else {
        toast.error('car unavailable failed');
      }
    } catch (error) {
      console.error('Error uploading car unavailable data:', error);
      toast.error('Car unavailabl failed');
    }
    setUploadStatus(false);
  };


  // console.log(form);
  // console.log("listingid", listingId);
  

  return (
    <div className="flex justify-between w-full mt-8 border rounded-md  min-h-[600px]   ">
      <>
        <form onSubmit={handleSubmit} className=" border-l w-full">
          <div className="  py-4 px-2 flex flex-col justify-between h-full ">
            <div className="  ">
              <div className="flex items-center ">
                <Link
                  href={`/dashboard/cars/${car}`}
                  className="text-green-500"
                >
                  <MdOutlineKeyboardDoubleArrowLeft className=" text-3xl " />
                </Link>
                <h2 className="ml-5 uppercase font-semibold text-lg ">
                  Car unavailable
                </h2>
              </div>

              <div className=" flex items-center justify-between border px-3 py-2 rounded-md gap-3 mt-5 ">
                <label htmlFor="" className=" text-lg font-semibold uppercase ">
                  All Day
                </label>
                <button
                  onClick={() => {
                    setToggle((prev) => !prev);
                    if (!toggle) {
                      // If the toggle is being turned on (all-day selected)
                      setForm((prevForm) => ({
                        ...prevForm,
                        startTime: "00:00", // Set start time to 00:00 (midnight)
                        endTime: "23:59", // Set end time to 23:59 (end of the day)
                      }));
                    } else {
                      // If the toggle is being turned off (reset or default)
                      setForm((prevForm) => ({
                        ...prevForm,
                        startTime: "", // You can reset or keep the previous values
                        endTime: "",
                      }));
                    }
                  }}
                  className={`flex h-fit w-[42px] items-center  border border-green-500 ${
                    toggle ? "bg-green-400/20 duration-500" : "duration-300"
                  }`}
                >
                  <div
                    className={`size-5  bg-green-500 duration-300 ${
                      toggle ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </button>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium">Start</label>
                <div className="flex space-x-2 mt-2">
                  <input
                    type="date"
                    className="w-full bg-green-500/5 p-2 border rounded-md"
                    id="startDate"
                    required
                    onChange={handleChange}
                  />
                  {!toggle && (
                    <input
                      type="time"
                      className="w-full bg-green-500/5 p-2 border rounded-md"
                      onChange={handleChange}
                      id="startTime"
                      required
                    />
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium">End</label>
                <div className="flex space-x-2 mt-2">
                  <input
                    type="date"
                    className="w-full bg-green-500/5 p-2 border rounded-md"
                    id="endDate"
                    required
                    onChange={handleChange}
                  />
                  {!toggle && (
                    <input
                      type="time"
                      className="w-full bg-green-500/5 p-2 border rounded-md"
                      id="endTime"
                      required
                      onChange={handleChange}
                    />
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium">Reason</label>
                <select
                  id="reason"
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-green-500/5 outline-none border rounded-md"
                >
                  <option>Select reason</option>
                  <option>Maintenance</option>
                  <option>Rented</option>
                </select>
              </div>
            </div>

            <button disabled={uploadStatus} className="mt-4  w-full bg-green-500 text-white p-2 rounded-md">
              {
                uploadStatus ? "Loading..." : "Save"
              }
            </button>
          </div>
        </form>
      </>
    </div>
  );
};

export default CarCalendar;
