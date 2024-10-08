"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PublishListingButton = ({ listingId, listing }) => {
  const [publishStatus, setPublishStatus] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`/api/user/listing/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listingId: listingId, status: true }),
      });

      if (!res.ok) {
        console.log("Failed to fetch data");
      }
    
      const data = await res.json()
      if(data.success){
        console.log("Listing published");
        toast.success("Listing Published Successfully")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
      }else{
        console.log("Listing Published failed");
        toast.error("Listing Published failed")
      }
    } catch (error) {
      console.log("Listing publish error");
      setPublishStatus(false);
      toast.error("Listing Publish failed");
    }
  };

  return (
    <div className=" w-full ">
      {listing?.status ? (
        <button
          
          disabled
          className={`
          } w-full bg-green-500 py-2 rounded-md text-[#fff] text-base font-semibold cursor-not-allowed  `}
        >
          Published
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className={` ${
            listing?.image1 ? "cursor-pointer" : "cursor-not-allowed"
          } w-full bg-green-500 py-2 rounded-md text-[#fff] text-base font-semibold  `}
        >
          {publishStatus ? "Loading..." : "Publish listing"}
        </button>
      )}
    </div>
  );
};

export default PublishListingButton;
