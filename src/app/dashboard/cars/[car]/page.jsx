import React from 'react'
import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";
import { MdCameraEnhance } from "react-icons/md";
import CarImageUpload from '@/dashboardComponents/CarImageUpload';


const page = async ({params}) => {

    const { tab, car } = params;
    // console.log(car);

  
    // const [openModal, setOpenModal] = useState(false);
    // let open = false

 
  // console.log("tokendata",tokendata)
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  

  const res = await fetch(`${apiUrl}/api/user/listing/getlisting`,{
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plateNumber: car }), 
});

  if (!res.ok) {
    console.log('Failed to fetch data');
    
}

  const data = await res.json();
  const listing = data.data

  // console.log(listing)
  
    

  return (
    <>
      <div>
      <div className=' max-w-[1250px] min-h-[60vh] mx-auto w-full '>
        <div className=' flex items-center text-xl lg:overflow-x-hidden overflow-x-scroll overflow-hidden  '>
          <Link href={'/dashboard/requests'} className={` px-7 py-5 border-b-4 ${tab==='requests' ? 'border-green-500 bg-green-500/5 ' : null}   `}>REQUESTS</Link>
          <Link href={'/dashboard/rentals'} className={` px-7 py-5 border-b-4 ${tab==='rentals' ? 'border-green-500 bg-green-500/5 ' : null}   `}>RENTALS</Link>
          <Link href={'/dashboard/cars'} className={` px-7 py-5 border-b-4 border-green-500 bg-green-500/5    `}>CARS</Link>
          <Link href={'/dashboard/performance'} className={` px-7 py-5 border-b-4 ${tab==='performance' ? 'border-green-500 bg-green-500/5 ' : null}   `}>PERFORMANCE</Link>
          <Link href={'/dashboard/payments'} className={` px-7 py-5 border-b-4 ${tab==='payments' ? 'border-green-500 bg-green-500/5 ' : null}   `}>PAYMENTS</Link>
          <Link href={'/dashboard/account'} className={` px-7 py-5 border-b-4 ${tab==='account' ? 'border-green-500 bg-green-500/5 ' : null}   `}>ACCOUNT</Link>
        </div>
      
        <div className=' py-5 px-3 '>
          <div>
          <div className=' flex items-center gap-4 text-[1.8rem] font-semibold '>
          <h3>{listing?.carName}</h3>
          <h3>{listing?.carModel}</h3>
          <h3>{listing?.yearOfRegistation}</h3>
          </div>
          <span>Number plate: {listing?.plateNumber}</span>
          </div>

          <div className=' flex flex-col gap-6 '>
            <h3 className=' text-[1.4rem] font-semibold ml-3 mt-7 '>My Listing</h3>
            
            <div className=' flex md:flex-row flex-col md:border rounded-md  '>
            <div className=' flex-1  flex flex-col '>
              <div className=' py-6 border-b hover:bg-green-500/10  px-4 flex items-center gap-2 '>
                <FaCheck className=' text-green-500 p-1 text-3xl rounded-full bg-green-500/10 ' />



                <span className=' font-semibold '>Add car information</span>

                

                
              </div>
              <div className=' border-b hover:bg-green-500/10 px-4 flex items-center gap-2 '>
                <MdCameraEnhance className=' text-gray-700 p-1 text-3xl rounded-full bg-gray-500/10 ' />
                {/* <span className=' font-semibold '>Add Photos</span> */}
                <CarImageUpload />
              </div>
              <div className=' py-6 border-b hover:bg-green-500/10 px-4 flex items-center gap-2 '>
                <FaCheck className=' text-gray-700 p-1 text-3xl rounded-full bg-gray-500/10 ' />
                <span className=' font-semibold '>Update your calender</span>
              </div>
              <Link href={'/dashboard/account'} className=' py-6 md:border-none hover:bg-green-500/10 border-b px-4 flex items-center gap-2 '>
                <FaCheck className=' text-gray-700 p-1 text-3xl rounded-full bg-gray-500/10 ' />
                <span className=' font-semibold '>Update your Billing information</span>
              </Link>
            </div>
            <div className=' flex-1 md:border-l md:mt-0 mt-10 flex flex-col md:gap-0 gap-10  '>
              <div className=' border flex-1 flex items-center justify-center px-3 flex-col gap-2 '>
                <p className=' text-[1.2rem] font-light text-gray-500 '>Make sure all steps are complete</p>
                <button className=' w-full bg-green-500 py-2 rounded-md text-[#fff] text-base font-semibold cursor-not-allowed '>Publish listing</button>
              </div>
              <div className=' border flex-1 flex items-end justify-center px-3 '>
                <button className=' w-full bg-red-500/80 py-2 rounded-md text-[#fff] text-base font-semibold '>Delete listing</button>
              </div>
            </div>
            </div>

          </div>

        </div>
        
      </div>

    </div>
    </>
  )
}

export default page