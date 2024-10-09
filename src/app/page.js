// import Blogs from "@/components/Blogs";
import CarTypes from "@/components/CarTypes";
import Faq from "@/components/Faq";
// import Footer from "@/components/Footer";
import HomeAbout from "@/components/HomeAbout";
import Homecountries from "@/components/Homecountries";
import HomeHero from "@/components/HomeHero";
import HomeListCar from "@/components/HomeListCar";
import HomeSearch from "@/components/HomeSearch";


export default function Home() {
  return (
    <div className="  ">
      <HomeHero />
      <HomeSearch />
      <HomeAbout />
      <CarTypes />
      <Homecountries />
      <HomeListCar />
      {/* <Blogs /> */}
      <Faq />
      
    </div>
  );
}
