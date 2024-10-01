'use client'
import React, { useState } from "react";
import Link from "next/link";
import { format, isBefore, isToday, isPast  } from 'date-fns';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Page = ({ params }) => {

    const [showForm, setShowForm] = useState(false); // state to show form
  
  const { tab, car } = params;


  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();

  const daysInMonth = Array.from(
    { length: new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate() },
    (_, index) => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1)
  );

  const timeSlots = Array.from({ length: 24 }, (_, index) => ({
    time: `${index === 0 ? 12 : index % 12}:00 ${index < 12 ? 'AM' : 'PM'}`,
    value: index
  }));

  const isPastDate = (day) => {
    return isBefore(day, today);
  };

  const isPastTime = (time) => {
    const currentHour = today.getHours();
    return isToday(selectedDate) && time.value < currentHour;
  };
  


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


        <div className="flex justify-between w-full mt-8 border    ">
      {/* Calendar Side */}
      <div className=" w-[70%] py-4 px-2 ">
        <div className="flex justify-between mb-8">
          <button
            className="text-2xl  border py-2 px-5 rounded-md bg-green-500 text-[#fff] "
            onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <h2 className="text-lg font-bold text-green-500 ">
            {format(selectedDate, 'MMMM yyyy')}
          </h2>
          <button
            className="text-2xl  border py-2 px-5 rounded-md bg-green-500 text-[#fff] "
            onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-medium">
              {day}
            </div>
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`cursor-pointer text-center py-2 rounded-lg ${
                format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                  ? 'bg-purple-200'
                  : 'hover:bg-gray-100'
              } ${isPastDate(day) ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => !isPastDate(day) && setSelectedDate(day)}
            >
              {format(day, 'd')}
            </div>
          ))}
        </div>
      </div>

      {/* Time Slot Side */}
      {
        !showForm ? 
        <div className=" w-[30%] border-l  py-4 px-2 ">
        <h3 className="text-lg font-bold text-center mb-4">
          {format(selectedDate, 'MMMM do, yyyy')}
        </h3>
        <div className="h-[400px] overflow-y-auto">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className={`cursor-pointer py-2 px-4 border-b text-center ${
                isPastTime(slot)
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => !isPastTime(slot) && console.log(`Selected time: ${slot.time}`)}
            >
              {slot.time}
            </div>
          ))}
        </div>
        <div className=" flex justify-end w-full ">
        <button onClick={()=>setShowForm(true)} className="  bottom-4 right-4 bg-purple-500 text-white rounded-full p-4 shadow-lg">
          +
        </button>
        </div>
      </div>
      : 
      
      <>
        <div className="  py-4 px-2 w-[30%] border-l h-full min-h-[300px] ">
      <div className="flex items-center">
        <button onClick={() => setShowForm(false)} className="text-purple-600">
          ←
        </button>
        <h2 className="ml-2 font-semibold">Car unavailable</h2>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium">Start</label>
        <div className="flex space-x-2 mt-2">
          <input type="date" className="w-full p-2 border rounded-md" />
          <input type="time" className="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">End</label>
        <div className="flex space-x-2 mt-2">
          <input type="date" className="w-full p-2 border rounded-md" />
          <input type="time" className="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Reason</label>
        <select className="w-full p-2 border rounded-md">
          <option>Select reason</option>
          <option>Maintenance</option>
          <option>Rented</option>
        </select>
      </div>

      <button className="mt-4 w-full bg-purple-600 text-white p-2 rounded-md">
        Save
      </button>
    </div>
      </>


      }



    </div>

        
      </div>
    </div>
  );
};

export default Page;
