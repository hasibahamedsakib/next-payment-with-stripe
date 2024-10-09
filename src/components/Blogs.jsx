'use client'
import React from 'react'
import Blog from './Blog'
import BlogImg1 from '@/public/images/BlogImg1.webp'
import BlogImg2 from '@/public/images/BlogImg2.webp'
import BlogImg3 from '@/public/images/BlogImg3.webp'
import BlogImg4 from '@/public/images/BlogImg4.webp'
import BlogImg5 from '@/public/images/BlogImg5.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-next-arrow absolute -bottom-28 right-0  rounded-md  bg-[#000] transform -translate-y-1/2" onClick={onClick}>
      <MdOutlineKeyboardArrowRight className="text-[#fff] text-[3rem] p-2 cursor-pointer" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-next-arrow absolute z-40 -bottom-28 right-16 rounded-md bg-[#000] transform -translate-y-1/2" onClick={onClick}>
      <MdOutlineKeyboardArrowLeft className="text-[#fff] text-[3rem] p-2   cursor-pointer  " />
    </div>
  );
}

const Blogs = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  };

  return (
    <div className='  max-w-[1250px] mx-auto px-3 pb-[10rem]  '>
        <div className=' text-center text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold w-full pb-10  '>
            <h3>Latest News</h3>
        </div>
        <div className="slider-container">
      <Slider {...settings}>
        <Blog img={BlogImg1} title="Turn your car into a pay check" dec="Buying, insuring, and maintaining your car is expensive — but you can change that" created="Owners" />
        <Blog img={BlogImg2} title="The best San Francisco to Los Angeles road trip" dec="A direct trip can take 7 hours. There's so much to see in California, so why not make a few stops?" created="Inspiration" />
        <Blog img={BlogImg3} title="The opening ceremony of the 2024 Olympic Games" dec="Coming to Paris? We've gathered all the information you need to know about the Opening Ceremony" created="Owners" />
        <Blog img={BlogImg4} title="Turn your car into a pay check" dec="Buying, insuring, and maintaining your car is expensive — but you can change that" created="Owners" />
        <Blog img={BlogImg5} title="The best San Francisco to Los Angeles road trip" dec="A direct trip can take 7 hours. There's so much to see in California, so why not make a few stops?" created="Inspiration" />
        
      </Slider>
    </div>
    </div>
  )
}

export default Blogs