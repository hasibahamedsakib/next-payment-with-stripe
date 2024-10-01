import Image from "next/image";
import BlogImg1 from "@/public/images/BlogImg2.webp";
const SearchPage = () => {
  return (
    <section className="max-w-[1250px] mx-auto px-3">
      {/* search box header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vehicle Listings</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded p-2"
          />
          <button className="bg-blue-500 text-white rounded p-2">Search</button>
        </div>
      </header>
      {/* filtering options */}
      <div className="flex justify-between mb-4">
        <div>
          <span>40 results out of 390</span>
        </div>
        <div className="flex space-x-4">
          <select className="border rounded p-2">
            <option>Total price</option>
            <option>Lowest to Highest</option>
            <option>Highest to Lowest</option>
          </select>
          <select className="border rounded p-2">
            <option>Vehicle type</option>
            <option>Car</option>
            <option>Truck</option>
          </select>
          <select className="border rounded p-2">
            <option>Pickup method</option>
            <option>Contactless</option>
            <option>In-person</option>
          </select>
        </div>
      </div>
      <div className="grid items-center justify-between gap-4 grid-cols-4">
        <div className="col-span-2  w-full ">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
          {/* Vehicle Card 1 */}
          <div className=" flex items-center justify-between gap-4 border rounded shadow-sm">
            <Image
              src={BlogImg1}
              alt="Dodge Grand Caravan"
              className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
              loading="lazy"
              draggable={false}
            />
            <div className="p-2">
              <h2 className="text-[1.25em] font-semibold">
                Dodge Grand Caravan American Value Package 2014
              </h2>
              <p className="text-gray-600">Rating: 4.09 (348 reviews)</p>
              <p className="text-xl font-bold">$1,427</p>
              <p>For 23 days, 1 hr, 30 min</p>
            </div>
          </div>
          <div className=" flex items-center justify-between gap-4 border rounded shadow-sm">
            <Image
              src={BlogImg1}
              alt="Dodge Grand Caravan"
              className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
              loading="lazy"
              draggable={false}
            />
            <div className="p-2">
              <h2 className="text-[1.25em] font-semibold">
                Dodge Grand Caravan American Value Package 2014
              </h2>
              <p className="text-gray-600">Rating: 4.09 (348 reviews)</p>
              <p className="text-xl font-bold">$1,427</p>
              <p>For 23 days, 1 hr, 30 min</p>
            </div>
          </div>
          <div className=" flex items-center justify-between gap-4 border rounded shadow-sm">
            <Image
              src={BlogImg1}
              alt="Dodge Grand Caravan"
              className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
              loading="lazy"
              draggable={false}
            />
            <div className="p-2">
              <h2 className="text-[1.25em] font-semibold">
                Dodge Grand Caravan American Value Package 2014
              </h2>
              <p className="text-gray-600">Rating: 4.09 (348 reviews)</p>
              <p className="text-xl font-bold">$1,427</p>
              <p>For 23 days, 1 hr, 30 min</p>
            </div>
          </div>

          {/* Add more vehicle cards as needed */}
          {/* </div> */}
        </div>
        <div className="col-span-2   w-full h-full">
          {/* Add your map component here */}

          {/* Embed a map here (e.g., Google Maps) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13184923.40045496!2d4.763220016153098!3d62.90059680047999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d3d75bc58c2b49%3A0x1b5cbf7edbd02a8f!2sNorway!5e0!3m2!1sen!2sus!4v1696490000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
