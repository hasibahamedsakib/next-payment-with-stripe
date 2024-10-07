"use client";
import { useFormContext } from "@/context/FormContext";
// import MapView from '@/components/Mapview';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [token, setToken] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      if (!storedToken) {
        router.push("/auth/signin");
      }
    }
  }, []);

  const { formData, updateFormData, resetFormData } = useFormContext();
  console.log(formData);

  useEffect(()=> {
    updateFormData("userId", localStorage.getItem('id'))
  }, [])

  const [address, setAddress] = useState(
    formData.meetingPoint ? formData.meetingPoint : ""
  );
  const [suggestions, setSuggestions] = useState([]);

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState("");
  const options1 = ["Tesla", "Tata", "Suzuki"];

  const handleInputChange = async (e) => {
    updateFormData("meetingPoint", "")
    
    const searchValue = e.target.value;
    setSelectedValue1(searchValue)
    searchValue.length < 2 ? setIsOpen1(false) : null;
    setAddress(searchValue);

    if (searchValue.length > 1) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            searchValue
          )}&format=json&addressdetails=1&limit=5&countrycodes=NO`
        );
        const data = await response.json();

        if (data.length > 0) {
          setSuggestions(data); // Update suggestions based on response data
          setIsOpen1(true); // Open suggestions dropdown if there are results
        } else {
          setIsOpen1(false); // Close the dropdown if no suggestions found
        }
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
        setIsOpen1(false); // Close the dropdown in case of an error
      }
    } else {
      setSuggestions([]);
    }
  };
console.log('su', isOpen1);

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if(!formData?.meetingPoint){
      toast.error("Meeting point is required")
      return
    }

    try {
      
      setLoading(true)
      const res = await axios.post("/api/user/listing/create", formData,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log(res.data);
      
      if(res.data.success){
        ProgressNumber = 100
        resetFormData()
        toast.success("The car listed Successfully",{
          duration: 3000
        })
        setTimeout(() => {
          window.location.reload()
        }, 3000);
        router.push('/dashboard/cars')
        
      }else{
        toast.error(res.data.message)
      }
      setLoading(false)

    } catch (error) {
      toast.error('Car listed failed')
      console.log("Car listed failed");
      setLoading(false)
    }

  }

  // const [locationData, setLocationData] = useState({
  //   lat: 31.1188962,
  //   lon: 78.3427722,
  //   displayName: "Osla, Mori, Uttarkashi, Uttarakhand, India",
  // });

  console.log(suggestions);

  let ProgressNumber = 95;

  return (
    <div className=" max-w-[700px] mx-auto min-h-[70vh]   ">
      <div className=" flex flex-col gap-5 border p-5 rounded-md mt-10 ">
        <div className="mx-auto flex w-full flex-col gap-2">
          <div className="flex h-3 w-full  items-center justify-center rounded-full bg-slate-200">
            <div
              style={{ width: `${ProgressNumber}%` }}
              className="transition-width mr-auto h-3 w-0 rounded-full  bg-green-500 duration-500"
            ></div>
          </div>
          <span className="text-center text-sm font-medium text-green-500">
            {ProgressNumber}%
          </span>
        </div>

        <div className=" mb-5 ">
          <h3 className=" text-[1.4rem] text-green-500 font-semibold ">
            List My car
          </h3>
          <p className=" text-[1.7rem] ">
            Where will you meet drivers for check-in?
          </p>
        </div>
        <div className=" relative w-full  ">
          <div className=" flex flex-col gap-2 ">
            <label className=" ml-2 text-black font-semibold " htmlFor="">
              Meeting point
            </label>
            <input
              type="text"
              value={ selectedValue1 || formData?.meetingPoint}
              // value={address}
              onChange={handleInputChange}
              placeholder="Enter address"
              className=" bg-[#fff] px-4 py-2 rounded-md outline-none border font-semibold placeholder:text-gray-600 "
            />

            <div
              className={`${
                isOpen1
                  ? "visible top-16 opacity-100"
                  : "invisible top-4 opacity-0"
              } absolute my-4 w-full  z-[100000000] rounded-md bg-green-500 py-4 border duration-300`}
            >
              {suggestions?.map((suggestion, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setAddress(e.target.textContent);
                    updateFormData("meetingPoint", e.target.textContent);
                    setSelectedValue1(suggestion?.display_name)
                    setIsOpen1(false);
                  }}
                  className="px-6 py-2 text-[#fff] font-semibold hover:bg-green-400"
                >
                  {suggestion.display_name}
                </div>
              ))}
            </div>

            {/* <MapView
        lat={locationData.lat}
        lon={locationData.lon}
        displayName={locationData.displayName}
      /> */}

            {/* {suggestions.length > 0 && (
        <ul className="border mt-2 rounded bg-white">
          {suggestions.map((suggestion) => (
            <li key={suggestion.place_id} className="p-2 border-b">
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )} */}
          </div>
        </div>

        <div className=" flex items-center gap-5 mt-10 justify-between ">
          <Link href={"set-price"} className="  w-[40%]  md:w-[20%] ">
            <button className=" bg-green-500 w-full py-2 font-semibold rounded-md text-[#fff] ">
              Previous
            </button>
          </Link>
          <div onClick={handleSubmit}  className=" w-full ">
            <button disabled={loading} className=" bg-green-500 rounded-md w-full font-semibold text-[#fff] py-2 ">
              {
                loading ? "Loading" : "Submit"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
