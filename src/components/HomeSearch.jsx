import React from 'react'
import { FaSearch } from "react-icons/fa";


const HomeSearch = () => {
  return (
    <div className=' max-w-[1250px] mx-auto px-3 '>
      <div className="  lg:mt-0 mt-10 py-[3rem] px-3 sm:px-[2rem] bg-white shadow-md rounded-lg border border-green-300">
  <div className="flex justify-between flex-wrap items-end gap-4">
    
    {/* <!-- Select Vehicle --> */}
    <div className=' w-full sm:w-[48%] lg:w-[15%] '>
      <label htmlFor="vehicle" className="block  font-medium text-gray-700">Velg kjøretøy</label>
      <select id="vehicle" className="mt-1 text-[#2b2b2b] block text-base w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500  px-2 py-3 outline-none focus:border-green-500 ">
        <option className=' text-base bg-slate-300 rounded-none text-[#585858] '>Velg en</option>
        {/* <!-- Add other options here --> */}
      </select>
    </div>
    
    {/* <!-- Pick Up --> */}
    <div className=' w-full sm:w-[48%] lg:w-[22%] '>
      <label htmlFor="pickup" className="block  font-medium text-gray-700">Hent</label>
      <select id="pickup" className="mt-1 text-[#2b2b2b] block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 px-2 py-3 outline-none focus:border-green-500 ">
        <option>Velg en</option>
        {/* <!-- Add other options here --> */}
      </select>
    </div>

    {/* <!-- Date --> */}
    <div className=' w-full sm:w-[48%] lg:w-[22%] '>
      <label htmlFor="dates" className="block  font-medium text-gray-700">Dato</label>
      <input type="datetime-local" id="dates" placeholder="Start Date - End Date" className="mt-1 placeholder:text-green-500  block w-full border border-gray-300 px-2 py-2 outline-none text-green-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 "/>
    </div>

    {/* <!-- Drop off --> */}
    <div className=' w-full sm:w-[48%] lg:w-[22%] '>
      <label htmlFor="dropoff" className="block  font-medium text-gray-700">Lever</label>
      <select id="dropoff" className="mt-1 block w-full border border-gray-300 text-[#2b2b2b] rounded-md shadow-sm focus:ring-green-500  px-2 py-3 outline-none focus:border-green-500 ">
        <option>Velg en</option>
        {/* <!-- Add other options here --> */}
      </select>
    </div>

    {/* <!-- Search Button --> */}
    <div className="flex items-end h-full justify-end w-full lg:w-[10%]">
      <button type="submit" className="flex outline-none items-center gap-2 justify-center w-full px-2 py-[12px] border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-offset-2 focus:ring-green-500">
        <FaSearch />
        Søk
      </button>
    </div>

  </div>
</div>
    </div>

  )
}

export default HomeSearch