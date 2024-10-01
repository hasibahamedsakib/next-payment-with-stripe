"use client";
import React, { useState } from "react";

import { format, isBefore, isToday, isPast } from "date-fns";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

const CarCalendar = () => {


    const [showForm, setShowForm] = useState(false); // state to show form
    const [toggle, setToggle] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();

  const daysInMonth = Array.from(
    {
      length: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
      ).getDate(),
    },
    (_, index) =>
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1)
  );

  const timeSlots = Array.from({ length: 24 }, (_, index) => ({
    time: `${index === 0 ? 12 : index % 12}:00 ${index < 12 ? "AM" : "PM"}`,
    value: index,
  }));

  const isPastDate = (day) => {
    return isBefore(day, today);
  };

  const isPastTime = (time) => {
    const currentHour = today.getHours();
    return isToday(selectedDate) && time.value < currentHour;
  };

  return (
    <div className="flex justify-between w-full mt-8 border rounded-md  min-h-[600px]   ">
        
{/*         
          <div className=" w-[70%] py-4 px-2 ">
            <div className="flex justify-between mb-8">
              <button
                className="text-2xl  border py-2 px-5 rounded-md bg-green-500 text-[#fff] "
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.setMonth(selectedDate.getMonth() - 1))
                  )
                }
              >
                <MdOutlineKeyboardDoubleArrowLeft />
              </button>
              <h2 className="text-lg font-bold text-green-500 ">
                {format(selectedDate, "MMMM yyyy")}
              </h2>
              <button
                className="text-2xl  border py-2 px-5 rounded-md bg-green-500 text-[#fff] "
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.setMonth(selectedDate.getMonth() + 1))
                  )
                }
              >
                <MdKeyboardDoubleArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-medium">
                  {day}
                </div>
              ))}
              {daysInMonth.map((day) => (
                <div
                  key={day}
                  className={`cursor-pointer text-center py-2 rounded-lg ${
                    format(day, "yyyy-MM-dd") ===
                    format(selectedDate, "yyyy-MM-dd")
                      ? "bg-green-200  "
                      : "hover:bg-green-500/10"
                  } ${isPastDate(day) ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => !isPastDate(day) && setSelectedDate(day)}
                >
                  {format(day, "d")}
                </div>
              ))}
            </div>
          </div>

          
          {!showForm ? (
            <div className=" w-[30%] border-l flex flex-col justify-between  py-4 px-2 ">
              <div>
                <h3 className="text-lg font-bold text-center mb-4">
                  {format(selectedDate, "MMMM do, yyyy")}
                </h3>
                <div className="h-[400px] overflow-y-auto">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer py-2 px-4 border-b text-center ${
                        isPastTime(slot)
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() =>
                        !isPastTime(slot) &&
                        console.log(`Selected time: ${slot.time}`)
                      }
                    >
                      {slot.time}
                    </div>
                  ))}
                </div>
              </div>
              <div className=" flex justify-end w-full ">
                <button
                  onClick={() => setShowForm(true)}
                  className="   bg-green-500 text-white rounded-full p-4 shadow-lg"
                >
                  <FiPlus className=" text-[#fff] font-semibold text-xl " />
                </button>
              </div>
            </div>
          ) : ( */}
            <>
              <div className=" border-l w-full">
                <div className="  py-4 px-2 flex flex-col justify-between h-full ">
                  <div className="  ">
                    <div className="flex items-center ">
                      <button
                        onClick={() => setShowForm(false)}
                        className="text-green-500"
                      >
                        <MdOutlineKeyboardDoubleArrowLeft className=" text-3xl " />
                      </button>
                      <h2 className="ml-5 uppercase font-semibold text-lg ">
                        Car unavailable
                      </h2>
                    </div>

                    <div className=" flex items-center justify-between border px-3 py-2 rounded-md gap-3 mt-5 ">
                        <label htmlFor="" className=" text-lg font-semibold uppercase ">All Day</label>
                      <button
                        onClick={() => setToggle((prev) => !prev)}
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
                        />
                         {
                            !toggle && <input
                            type="time"
                            className="w-full bg-green-500/5 p-2 border rounded-md"
                          />
                        }
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium">End</label>
                      <div className="flex space-x-2 mt-2">
                        <input
                          type="date"
                          className="w-full bg-green-500/5 p-2 border rounded-md"
                        />
                        {
                            !toggle && <input
                            type="time"
                            className="w-full bg-green-500/5 p-2 border rounded-md"
                          />
                        }
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium">
                        Reason
                      </label>
                      <select className="w-full p-2 bg-green-500/5 outline-none border rounded-md">
                        <option>Select reason</option>
                        <option>Maintenance</option>
                        <option>Rented</option>
                      </select>
                    </div>
                  </div>

                  <button className="mt-4  w-full bg-green-500 text-white p-2 rounded-md">
                    Save
                  </button>
                </div>
              </div>
            </>
          {/* )} */}
        </div>
  )
}

export default CarCalendar