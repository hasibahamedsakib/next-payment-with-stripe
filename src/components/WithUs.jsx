import React from 'react'

const WithUs = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className=' text-center text-[2rem] font-semibold mb-9 '>With Move Around</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {/* Step 1: List your car */}
          <div>
            <div className="flex justify-center items-center bg-green-500/20 w-12 h-12 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500 font-semibold "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m-4 10a8 8 0 110-16 8 8 0 010 16z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">List your car</h3>
            <p className="text-gray-600">
              Fill in essential information about your car so you can start renting.
            </p>
          </div>

          {/* Step 2: Receive bookings */}
          <div>
            <div className="flex justify-center items-center bg-green-500/20 w-12 h-12 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m-6 0l3-3V8m9-4v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h14a2 2 0 012 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Receive bookings</h3>
            <p className="text-gray-600">
              Activate Instant Booking or accept requests. Confirm the check-in time and place with the driver.
            </p>
          </div>

          {/* Step 3: Rent your car */}
          <div>
            <div className="flex justify-center items-center bg-green-500/20 w-12 h-12 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6.5M4.5 12.5v6.5M19.5 12.5v6.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Rent your car</h3>
            <p className="text-gray-600">
              Do the walkaround inspection and sign the rental agreement with the driver.
            </p>
          </div>

          {/* Step 4: Get paid */}
          <div>
            <div className="flex justify-center items-center bg-green-500/20 w-12 h-12 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v7.5m-3-3h6m9-1.5c0 5.523-4.477 10-10 10S2 18.523 2 13 6.477 3 12 3s10 4.477 10 10z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Get paid</h3>
            <p className="text-gray-600">
              Receive a bank transfer 5 working days after each rental, including compensation for extra mileage.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WithUs