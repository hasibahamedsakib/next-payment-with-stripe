'use client'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import Image from 'next/image';
import CarImg1 from "@/public/images/CarMainImg.webp"
import CarImg2 from "@/public/images/CarSideImg.webp"
import CarImg3 from "@/public/images/CarBackImg.webp"
import CarImg4 from "@/public/images/CarInnerImg.webp"


export default function CarImageUpload() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="w-full ">
            <button onClick={() => setOpenModal(true)} className=" py-6 w-full text-left font-semibold ">
                Add Photos
            </button>
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100]  w-screen ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-white/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute   rounded-lg  bg-white p-6  drop-shadow-lg ${openModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                    <div className=' flex justify-end mb-5 text-[1.5rem] '>
                      <RxCross2  onClick={()=>setOpenModal(false)} className=' cursor-pointer ' />
                    </div>
                    
                    <div>
                      <h2 className=' font-semibold text-[1.3rem] '>Picture of the vehicle</h2>
                      <p>We only display cars with photos. You can start with one and add more after your listing is live.</p>
                      <div className=' mt-3 flex flex-col gap-3 '>
                        <h3 className=' text-[1.2rem] font-semibold '>Our Tips</h3>
                        <div className=' grid grid-cols-2 gap-2 '>
                          <div className=' flex items-center gap-2 '>
                            <FaCheck className=' bg-green-500/10 text-green-500 p-1 text-2xl rounded-full ' />
                            <span>Use the landscape format</span>
                          </div>
                          <div className=' flex items-center gap-2 '>
                            <FaCheck className=' bg-green-500/10 text-green-500 p-1 text-2xl rounded-full ' />
                            <span>Follow our angle guidelines</span>
                          </div>
                          <div className=' flex items-center gap-2 '>
                            <FaCheck className=' bg-green-500/10 text-green-500 p-1 text-2xl rounded-full ' />
                            <span>Keep the background clear and neutral</span>
                          </div>
                          <div className=' flex items-center gap-2 '>
                            <FaCheck className=' bg-green-500/10 text-green-500 p-1 text-2xl rounded-full ' />
                            <span>Use only natural daylight</span>
                          </div>
                        </div>
                      </div>

                        <div className=' grid grid-cols-2 place-items-center gap-4 mt-6 '>
                        <div className='  '>
                          <div className=' flex flex-col gap-2 '>
                            <h3 className=' text-[1.1rem] font-semibold '>Main Picture</h3>
                            <div className=' flex '>
                              <div className=' flex-1 flex items-center justify-center text-lg md:text-2xl border '>
                                <LuImagePlus />
                              </div>
                              <div className=' flex-1 h-[10rem] '>
                                <Image src={CarImg1} alt='car main img ' className='  object-cover w-full ' height={150} width={200} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='  '>
                          <div className=' flex flex-col gap-2 '>
                            <h3 className=' text-[1.1rem] font-semibold '>Side Picture</h3>
                            <div className=' flex '>
                              <div className=' flex-1 flex items-center justify-center text-lg md:text-2xl border '>
                                <LuImagePlus />
                              </div>
                              <div className=' flex-1 h-[10rem] border '>
                                <Image src={CarImg2} alt='car main img ' className='  object-contain w-full ' height={150} width={200} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=' '>
                          <div className=' flex flex-col gap-2 '>
                            <h3 className=' text-[1.1rem] font-semibold '>Back Picture</h3>
                            <div className=' flex '>
                              <div className=' flex-1 flex items-center justify-center text-lg md:text-2xl border '>
                                <LuImagePlus />
                              </div>
                              <div className=' flex-1 h-[10rem] border '>
                                <Image src={CarImg3} alt='car main img ' className='  object-cover w-full ' height={150} width={200} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='  '>
                          <div className=' flex flex-col gap-2 '>
                            <h3 className=' text-[1.1rem] font-semibold '>Inner side Picture</h3>
                            <div className=' flex '>
                              <div className='flex-1  flex items-center justify-center text-lg md:text-2xl border '>
                                <LuImagePlus />
                              </div>
                              <div className=' flex-1 h-[10rem] '>
                                <Image src={CarImg4} alt='car main img ' className='  object-contain w-full   ' width={200} height={200} />
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div onClick={()=>setOpenModal(false)} className=' mt-5 '>
                          <button className=' bg-green-500 text-[#fff] text-sm font-semibold py-2 w-full rounded-md '>Save</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>
  );
}