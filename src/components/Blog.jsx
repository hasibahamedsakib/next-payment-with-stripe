import Image from "next/image";
import React from "react";

const Blog = ({ img, title, dec, created }) => {
  return (
    <div className=" shadow-lg border rounded-xl ">
      <div className="  h-[15rem] w-full rounded-lg ">
      <Image src={img} alt="Blog Img" placeholder="blur" className=" w-full h-full object-cover rounded-t-lg  " />
    </div>
    <div className=" bg-[#fff] pt-6 px-4 pb-10 rounded-b-lg ">
      <button className=" px-4 py-1 font-semibold rounded-full border border-green-500 flex ">#{created}</button>
      <h3 className=" text-[1.3rem] font-semibold mt-3 line-clamp-1 ">{title}</h3>
      <p className=" font-light line-clamp-2 ">{dec}</p>
    </div>
    </div>
  );
};

export default Blog;
