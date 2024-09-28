// 'use client'
import Account from '@/components/Account';
import Cars from '@/components/Cars';
import Payments from '@/components/Payments';
import Performance from '@/components/Performance';
import Rentals from '@/components/Rentals';
import Requests from '@/components/Requests';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React, { useEffect } from 'react'

const Page = ({params}) => {

    // const router = useRouter();
  const { tab, subtab } = params;

    // console.log(tab, subtab);

    // useEffect(() => {
    //   if (!tab || (tab !== 'requests' && tab !== 'rentals' && tab!='cars' && tab!='performance' && tab!='account' && tab!='payments')) {
    //     router.push('/dashboard/requests'); // Default to login if no tab or incorrect tab
    //   }
    // }, [tab, router]);

  return (
    <div>
      <div className=' max-w-[1250px] min-h-[60vh] mx-auto w-full '>
        <div className=' flex items-center text-xl lg:overflow-x-hidden overflow-x-scroll overflow-hidden  '>
          <Link href={'/dashboard/requests'} className={` px-7 py-5 border-b-4 ${tab==='requests' ? 'border-green-500 bg-green-500/5 ' : null}   `}>REQUESTS</Link>
          <Link href={'/dashboard/rentals'} className={` px-7 py-5 border-b-4 ${tab==='rentals' ? 'border-green-500 bg-green-500/5 ' : null}   `}>RENTALS</Link>
          <Link href={'/dashboard/cars'} className={` px-7 py-5 border-b-4 ${tab==='cars' ? 'border-green-500 bg-green-500/5 ' : null}   `}>CARS</Link>
          <Link href={'/dashboard/performance'} className={` px-7 py-5 border-b-4 ${tab==='performance' ? 'border-green-500 bg-green-500/5 ' : null}   `}>PERFORMANCE</Link>
          <Link href={'/dashboard/payments'} className={` px-7 py-5 border-b-4 ${tab==='payments' ? 'border-green-500 bg-green-500/5 ' : null}   `}>PAYMENTS</Link>
          <Link href={'/dashboard/account'} className={` px-7 py-5 border-b-4 ${tab==='account' ? 'border-green-500 bg-green-500/5 ' : null}   `}>ACCOUNT</Link>
        </div>
      <div className=' py-6 mt-8 px-5 border rounded-md border-l-4 border-l-red-500 lg:mx-0 mx-2  '>
        <h3 className=' text-[1.4rem] font-semibold '>Update your payment method</h3>
        <p className=' font-light '>You do not have a payment method for your Getaround Connect subscription.</p>
        <div className=' mt-5 '>
          <Link href={'/dashboard/account'} className=' px-6 py-2 rounded-md border border-green-500 text-xl '>Update your payment method</Link>
        </div>
      </div>
        {
            tab === 'requests' && <Requests />
        }
        {
            tab === 'rentals' && <Rentals />
        }
        {
            tab === 'cars' && <Cars />
        }
        {
            tab === 'performance' && <Performance />
        }
        {
            tab === 'payments' && <Payments />
        }
        {
            tab === 'account' && <Account params={params} />
        }
      </div>

    </div>
  )
}

export default Page