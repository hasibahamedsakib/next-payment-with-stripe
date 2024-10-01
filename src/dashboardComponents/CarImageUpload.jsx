"use client";
import { useRef, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import Image from "next/image";
import CarImg1 from "@/public/images/CarMainImg.webp";
import CarImg2 from "@/public/images/CarSideImg.webp";
import CarImg3 from "@/public/images/CarBackImg.webp";
import CarImg4 from "@/public/images/CarInnerImg.webp";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";


export default function CarImageUpload({car, cImage1, cImage2, cImage3, cImage4}) {

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [previewUrl1, setPreviewUrl1] = useState(null)
  const [previewUrl2, setPreviewUrl2] = useState(null)
  const [previewUrl3, setPreviewUrl3] = useState(null)
  const [previewUrl4, setPreviewUrl4] = useState(null)
  const [uploadStatus, setUploadStatus] = useState(false);

  const handleImageChange = (e, setFile, setPreviewUrl) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setFile(reader.result); // Save base64 string
      };
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus(true);
    try {
      const res = await axios.post('/api/user/listing/uploadcarimage', {
        images: [image1, image2, image3, image4], 
        plateNumber: car
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.success) {
        toast.success('Images uploaded successfully');
        console.log(res.data.imageUrls);
        
      } else {
        toast.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading images:', error);
      toast.error('Image upload failed');
    }
    setUploadStatus(false);
  };

console.log("image1",image1);
console.log("image2",image2);
console.log("image3",image3);
console.log("image4",image4);


    return (
      <div>
        <form onSubmit={handleSubmit}>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
        <div className=" h-full ">
          <div className=" flex flex-col h-full gap-2 ">
            <h3 className=" text-[1.1rem] font-semibold ">
              Main Picture
            </h3>
            <div className=" flex gap-2 h-full ">
              <div onClick={()=>ref1.current.click()} className=" group flex-1  cursor-pointer relative transition-all duration-300 ease-in-out flex items-center justify-center text-lg md:text-2xl border rounded-md ">
                <div className={`${cImage1 ? 'group-hover:flex hidden' : 'hidden'} absolute transition-all duration-300 ease-in-out w-full h-full left-0 top-0 bg-black/30 rounded-md z-50  items-center justify-center text-[#fff] `}><LuImagePlus /></div>
                {
                  previewUrl1 || cImage1 ? <Image src={previewUrl1 ? previewUrl1 : cImage1} alt="main demo img" loading="lazy" className="  w-full h-full object-cover rounded-md " fill   /> : <LuImagePlus />
                }

                <input type="file" ref={ref1} hidden name="" id="" onChange={(e) => handleImageChange(e, setImage1, setPreviewUrl1)} />
              </div>
              <div className=" flex-1 h-full p-2 flex flex-col gap-2 border rounded-md  ">
                <p className=" text-sm font-semibold text-gray-500 ">A side photo to give an idea of the size of your car.</p>
                <Image
                  src={CarImg1}
                  alt="car main img "
                  className="  object-cover w-full h-full  rounded-md "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" flex flex-col gap-2 h-full ">
            <h3 className=" text-[1.1rem] font-semibold ">
              Side Picture
            </h3>
            <div className=" flex h-full gap-2 ">
              <div onClick={()=>ref2.current.click()} className=" group flex-1  cursor-pointer relative flex items-center justify-center text-lg md:text-2xl border rounded-md ">
              <div className={`${cImage2 ? 'group-hover:flex hidden' : 'hidden'} absolute transition-all duration-300 ease-in-out w-full h-full left-0 top-0 bg-black/30 rounded-md z-50  items-center justify-center text-[#fff] `}><LuImagePlus /></div>
              {
                  previewUrl2 || cImage2 ? <Image src={previewUrl2 ? previewUrl2 : cImage2} alt="side demo img" loading="lazy" className=" w-full h-full object-cover rounded-md " fill   /> : <LuImagePlus />
                }
                <input ref={ref2} type="file" hidden onChange={(e) => handleImageChange(e, setImage2, setPreviewUrl2)} />
              </div>
              <div className=" flex-1  p-2 flex flex-col gap-2 border  rounded-md ">
                <p className=" text-sm font-semibold text-gray-500 ">A front photo that stands out: it is the first one drivers see.</p>
                <Image
                  src={CarImg2}
                  alt="car main img "
                  className="  object-cover w-full h-full  rounded-md "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full ">
          <div className=" flex flex-col gap-2 h-full ">
            <h3 className=" text-[1.1rem] font-semibold ">
              Back Picture
            </h3>
            <div className=" flex h-full gap-2 ">
              <div onClick={()=>ref3.current.click()} className=" group cursor-pointer flex-1 relative flex items-center justify-center text-lg md:text-2xl border rounded-md ">
              <div className={`${cImage3 ? 'group-hover:flex hidden' : 'hidden'} absolute transition-all duration-300 ease-in-out w-full h-full left-0 top-0 bg-black/30 rounded-md z-50  items-center justify-center text-[#fff] `}><LuImagePlus /></div>
              {
                  previewUrl3 || cImage3 ? <Image src={previewUrl3 ? previewUrl3 : cImage3} alt="back demo img" loading="lazy" className=" w-full h-full object-cover rounded-md " fill   /> : <LuImagePlus />
                }
                <input type="file" hidden ref={ref3} name="" id="" onChange={(e) => handleImageChange(e, setImage3, setPreviewUrl3)} />
              </div>
              <div className=" flex-1  p-2 flex flex-col gap-2 border rounded-md  ">
                <p className=" text-sm font-semibold text-gray-500 ">A 3/4 back photo to complete the exterior overview.</p>
                <Image
                  src={CarImg3}
                  alt="car main img "
                  className="  object-fill w-full h-full  rounded-md "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" flex flex-col gap-2 h-full ">
            <h3 className=" text-[1.1rem] font-semibold ">
              Inner side Picture
            </h3>
            <div className=" flex h-full gap-2 ">
              <div onClick={()=>ref4.current.click()} className=" group flex-1 cursor-pointer relative flex items-center justify-center text-lg md:text-2xl border rounded-md ">
              <div className={`${cImage4 ? 'group-hover:flex hidden' : 'hidden'} absolute transition-all duration-300 ease-in-out w-full h-full left-0 top-0 bg-black/30 rounded-md z-50  items-center justify-center text-[#fff] `}><LuImagePlus /></div>
              {
                  previewUrl4 || cImage4 ? <Image src={previewUrl4 ? previewUrl4 : cImage4} alt="interior demo img" loading="lazy" className=" w-full h-full object-cover  rounded-md " fill   /> : <LuImagePlus />
                }
                <input type="file" hidden ref={ref4} name="" id="" onChange={(e) => handleImageChange(e, setImage4, setPreviewUrl4)} />
              </div>
              <div className=" flex-1  p-2 flex flex-col gap-2 border rounded-md  ">
                <p className=" text-sm font-semibold text-gray-500 ">An interior photo to help drivers picture themselves behind the wheel.</p>
                <Image
                  src={CarImg4}
                  alt="car main img "
                  className="  object-cover w-full h-full  rounded-md "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex items-center gap-3 ">
        <Link
          href={`/dashboard/cars/${car}`}
          className="w-[30%] bg-green-500 text-[#fff] text-sm font-semibold text-center py-2 rounded-md "
        >
          Previous
        </Link>
        <button disabled={!image1 && !image2 && !image3 && !image4} className={` ${!image1 && !image2 && !image3 && !image4 && "cursor-not-allowed"}  bg-green-500 text-[#fff] text-sm font-semibold py-2 w-full rounded-md `}>
          {
            uploadStatus ? "Loading" : "Save"
          }
        </button>
      </div>
    </form>
      </div>
  );
}
