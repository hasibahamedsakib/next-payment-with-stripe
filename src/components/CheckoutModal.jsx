import Image from "next/image";
import { useRouter } from "next/navigation";

const CheckoutModal = ({ openModal, setOpenModal, item }) => {
  const router = useRouter();
  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          //   onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full lg:w-1/3 rounded-lg bg-white p-6 text-center drop-shadow-2xl  ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className=" flex items-start justify-between gap-4 border rounded shadow-sm">
              <Image
                src={item?.image}
                alt="Dodge Grand Caravan"
                className="w-[300px] h-48 object-cover rounded-tl-md rounded-bl-md"
                loading="lazy"
                width={300}
                height={192}
                draggable={false}
              />
              <div className="py-2 pr-5">
                <h2 className="text-lg font-semibold text-gray-700 leading-7 pt-2">
                  {item?.carName}_{item?.carModel} {item?.countryOfRegistation}{" "}
                  - {item?.yearOfRegistation}
                  {/* Dodge Grand Caravan American Value Package 2014 */}
                </h2>
                <p className="text-gray-600 leading-7">
                  Rating: 4.09 (348 reviews)
                </p>
                <div className="text-end">
                  <p className=" font-bold">
                    Price/H{" "}
                    <span className="text-xl font-bold">
                      {" "}
                      : ${item?.perDayPrice}
                    </span>
                  </p>
                  {/* <p>For 23 days, 1 hr, 30 min</p> */}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => router.replace("/payment")}
                className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white"
              >
                Pay
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutModal;
