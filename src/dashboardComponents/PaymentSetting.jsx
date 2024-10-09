'use cient'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const PaymentSetting = ({userData}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [addressLine1, setAddressLIne1] = useState("");
  const [addressLine2, setAddressLIne2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState( userData?.countryWithCode ? userData?.countryWithCode : "AF(+93)");
  const [countryCode, setCountryCode] = useState(userData?.countryCode ? userData?.countryCode : '+93')
  const [number, setNumber] = useState(userData?.number ? userData?.number : 0)
  const [country, setCountry] = useState('')
  const [ssnNumber, setssnNumber] = useState(null)


  const [validBirthDate, setValidBirthDate] = useState('');
  const [validLicenseIssueDate, setValidLicenseIssueDate] = useState('')

  useEffect(() => {
    if (userData?.birthDate) {
      const formattedDate = new Date(userData.birthDate).toISOString().split('T')[0];
      setValidBirthDate(formattedDate);
    }
    if (userData?.licenseIssueDate) {
      const formattedDate = new Date(userData.licenseIssueDate).toISOString().split('T')[0];
      setValidLicenseIssueDate(formattedDate);
    }
  }, [userData]);

  const [countryCodes, setCountryCodes] = useState([]);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get("/api/data/country");
        setCountryCodes(response.data.data);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  // console.log(countryCodes);



  const handleSubmit = async () => {
    const pNumber = number.toString()
    setPhoneNumber(countryCode+pNumber)
    console.log(phoneNumber);
    

    try {
      setLoading(true);
      const res = await axios.post(
        "/api/user/edit",
        {
          firstName,
          lastName,
          phoneNumber,
          birthDate,
          addressLine1,
          addressLine2,
          postalCode,
          city,
          state,
          country,
          countryWithCode: selectedValue1,
          number,
          countryCode,
          ssnNumber,
          userId: userData?._id
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      // console.log(res.data.success);

      if (res.data.success) {
        toast.success("Billing address update Successfully", {
          duration: 3000,
        });
      }

      setLoading(false);
      setTimeout(()=> {
        window.location.reload()
      }, 3000)
      // router.push('/dashboard/account')
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      setLoading(false);
      console.log("hello");
    }
  };
  

  return (
    <div className=' py-4 px-2 lg:px-4 '>
      <p className=' text-gray-600 font-semibold '>Don&apos;t forget to complete your payment settings so you can receive your payments!</p>
      <form onSubmit={handleSubmit} className=' mt-10 '>
        <h3 className=' text-[1.4rem] font-semibold '>Billing information</h3>
        <div className=" mt-5 flex flex-col gap-4 ">
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name=""
              required
              id=""
              defaultValue={userData?.firstName}
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name=""
              required
              id=""
              defaultValue={userData?.lastName}
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Birth Date
            </label>
            <input
              onChange={(e) => setBirthDate(e.target.value)}
              defaultValue={validBirthDate}
              // value={'hello'}
              required
              type="date"
              name=""
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              SSN <span className=' text-gray-500 '>(last 4 digit)</span>
            </label>
            <input
              onChange={(e) => setssnNumber(e.target.value)}
              defaultValue={userData?.ssnNumber}
              // value={'hello'}
              required
              type="number"
              name=""
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>


          <div className=' flex flex-col gap-1 '>
          <label className=" text-gray-600  ml-2 " htmlFor="">
          Phone No.
        </label>
        <div className=" flex items-center gap-5 ">
          <div className=" relative w-[40%] ">
            <div className=" flex flex-col gap-1 ">
              <div
                onClick={() => setIsOpen1(!isOpen1)}
                className=" flex w-full items-center justify-between rounded-md bg-green-500/5 px-2 py-2 border"
              >
                <h1 className="font-medium text-gray-600">{selectedValue1}</h1>
                <svg
                  className={`${
                    isOpen1 ? "-rotate-180" : "rotate-0"
                  } duration-300`}
                  width={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>

            <div
              className={`${
                isOpen1
                  ? "visible top-10 opacity-100"
                  : "invisible top-4 opacity-0"
              } absolute my-4 w-full h-[400px] overflow-y-scroll no-scrollbar  z-50 rounded-md bg-green-500 py-4 border duration-300`}
            >
              {countryCodes?.map((country, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    setSelectedValue1(e.target.textContent);
                    setCountryCode(country.code);
                    
                    // updateFormData("countryCode", e.target.textContent);
                    // updateFormData("phoneNumber", country.code+number);
                    setIsOpen1(false);
                  }}
                  className="px-2 py-2 text-[#fff] font-semibold hover:bg-green-400"
                >
                  {country.shortForm}({country.code})
                </div>
              ))}
            </div>
          </div>

          <div className=" w-full ">
            <input
              type="number"
              defaultValue={userData?.number}
              onChange={(e) => {
                setNumber(e.target.value);
                
                // updateFormData("number", e.target.value);
                // updateFormData("phoneNumber", code+e.target.value);
              }}
              required
              placeholder="Enter your contact no."
              className=" w-full outline-none border bg-green-500/5 rounded-md py-2 px-3  "
            />
          </div>
        </div>
          </div>



          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Address
            </label>
            <input
              onChange={(e) => setAddressLIne1(e.target.value)}
              defaultValue={userData?.addressLine1}
              type="text"
              name=""
              required
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Address line 2
            </label>
            <input
              onChange={(e) => setAddressLIne2(e.target.value)}
              defaultValue={userData?.addressLine2}
              type="text"
              name=""
              
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Postal Code
            </label>
            <input
              onChange={(e) => setPostalCode(e.target.value)}
              defaultValue={userData?.postalCode}
              type="number"
              name=""
              required
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              City
            </label>
            <input
              onChange={(e) => setCity(e.target.value)}
              defaultValue={userData?.city}
              type="text"
              name=""
              required
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              State
            </label>
            <input
              onChange={(e) => setState(e.target.value)}
              defaultValue={userData?.state}
              type="text"
              name=""
              required
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Country
            </label>
            <input
              onChange={(e) => setCountry(e.target.value)}
              defaultValue={userData?.country}
              type="text"
              name=""
              required
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          
          {/* <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Email
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              readOnly
              type="email"
              name=""
              required
              id=""
              placeholder="shahed@gmail.com"
              defaultValue={userData?.email}
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div> */}
          
              <div>
                <button className=' w-full bg-green-500 text-[#fff] font-semibold py-2 rounded-md mt-7 '>Submit</button>
              </div>
          
        </div>
      </form>
    </div>
  )
}

export default PaymentSetting