"use client";
import { useUserDataContext } from "@/context/UserDataContext";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoMdCamera } from "react-icons/io";

const Page = () => {

  const { userData, updateUserData } = useUserDataContext();

  // console.log("edit profile", userData);
  
  
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseIssueDate, setLicenseIssueDate] = useState("");
  const [licenseIssueCountry, setLicenseIssueCountry] = useState("");
  const [addressLine1, setAddressLIne1] = useState("");
  const [addressLine2, setAddressLIne2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [imageUploadStatus, setImageUploadStatus] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState( userData?.countryWithCode ? userData?.countryWithCode : "AF(+93)");
  const [countryCode, setCountryCode] = useState(userData?.countryCode ? userData?.countryCode : '+93')
  const [number, setNumber] = useState(userData?.number ? userData?.number : 0)

  const router = useRouter()


  const handleImageChange = (e) => {
    

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile); 
      reader.onloadend = () => {
        setFile(reader.result); 
      };
         setPreviewUrl(URL.createObjectURL(selectedFile)); 
    }
  };


  const handleImageSubmit = async (e) => {
    
    setImageUploadStatus(true)
    try {
      const res = await axios.post('/api/user/uploadimage', { image: file }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('res');
      
      console.log(res);
      if(res.data.success){
        setImageUrl(res.data.imageUrl); 
      }
      toast.success("Image uploaded successfully")
      setImageUploadStatus(false)

    } catch (error) {
      console.error('Error uploading image:', error);
      setImageUploadStatus(false)
      toast.error('Image uploaded failed')

    }
  };


  const fileRef = useRef(null);

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



  
console.log('how how');

  // console.log(userData);

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
          birthPlace,
          licenseNumber,
          licenseIssueDate,
          licenseIssueCountry,
          addressLine1,
          addressLine2,
          postalCode,
          city,
          state,
          aboutMe,
          profileImg: imageUrl,
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
        toast.success("User Updated Successfully", {
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
  // console.log(validBirthDate);
  

  return (
    <div className=" px-3 py-8 ">
      <div>
        <p className=" font-light bg-[#fff] py-10 px-5 border-l-4 border-green-500 shadow-md ">
          Some of this information appear on your profile. Owners will access
          your profile when you send them a booking request. If you publish a
          car listing, your profile becomes public so that drivers can access a
          recap of your reviews.
        </p>
      </div>
      <div className=" mt-10 ">
        <h3 className=" text-[1.4rem] ">Your Photo</h3>
        <div className=" mt-5 ">
          <span className="  ">picture</span>
          <div className=" relative w-[150px] h-[150px] group z-40 ">
            <input
              onChange={handleImageChange}
              type="file"
              ref={fileRef}
              hidden
            />
            <Image
              onClick={() => fileRef.current.click()}
              src={previewUrl ? previewUrl : userData?.profileImg}
              width={150}
              alt="Profile Image"
              height={150}
              className=" cursor-pointer bg-slate-100 object-cover mt-2 -z-40 relative before:left-0 before:top-0 before:w-full before:h-full before:absolute before:bg-black/50   "
            />
            <div className={` ${previewUrl ? 'block' : 'hidden'} `}>
              <button onClick={handleImageSubmit} disabled={imageUploadStatus} className=" bg-green-500 py-2 px-6 mt-5 text-[#fff] ">
                {
                  imageUploadStatus ? 'Uploading' : "Upload Image"
                }
              </button>
            </div>
            {/* <div className=' absolute right-[150px] bottom-[150px] bg-black/10 z-50 '>
          <IoMdCamera className=' ' />

          </div> */}
          </div>
        </div>
      </div>
      <div className=" mt-10 ">
        <h3 className=" text-[1.4rem] ">Personal Information</h3>
        <div className=" mt-5 flex flex-col gap-4 ">
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name=""
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
              type="date"
              name=""
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Place of Birth
            </label>
            <input
              onChange={(e) => setBirthPlace(e.target.value)}
              defaultValue={userData?.birthPlace}
              type="text"
              name=""
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
        </div>
      </div>

      <div className=" mt-10 ">
        <h3 className=" text-[1.4rem] ">Driving license</h3>
        <div className=" mt-5 flex flex-col gap-4 ">
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              License number
            </label>
            <input
              onChange={(e) => setLicenseNumber(e.target.value)}
              defaultValue={userData?.licenseNumber}
              type="text"
              name=""
              id=""
              placeholder="e.g: 121075012xxx"
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              First issue date
            </label>
            <input
              onChange={(e) => setLicenseIssueDate(e.target.value)}
              defaultValue={validLicenseIssueDate}
              type="date"
              name=""
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Country of issue
            </label>
            <input
              onChange={(e) => setLicenseIssueCountry(e.target.value)}
              defaultValue={userData?.licenseIssueCountry}
              type="text"
              name=""
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
        </div>
      </div>

      <div className=" mt-10 ">
        <h3 className=" text-[1.4rem] ">Contact</h3>
        <div className=" mt-5 flex flex-col gap-4 ">
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Email
            </label>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              readOnly
              type="email"
              name=""
              id=""
              placeholder="shahed@gmail.com"
              defaultValue={userData?.email}
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
                <h1 className="font-medium text-gray-600">{userData?.countryWithCode ? userData?.countryWithCode : selectedValue1}</h1>
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












        </div>
      </div>

      <div className=" mt-10 ">
        <h3 className=" text-[1.4rem] ">Address</h3>
        <div className=" mt-5 flex flex-col gap-4 ">
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Address
            </label>
            <input
              onChange={(e) => setAddressLIne1(e.target.value)}
              defaultValue={userData?.addressLine1}
              type="text"
              name=""
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
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
          </div>
        </div>
      </div>

      <div className=" mt-10 ">
        <h3 className=" text-[1.4rem] ">Additional details</h3>
        <div className=" mt-5 flex flex-col gap-4 ">
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              About Me
            </label>
            <textarea
              onChange={(e) => setAboutMe(e.target.value)}
              defaultValue={userData?.aboutMe}
              name=""
              id=""
              rows={6}
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5  "
            ></textarea>
          </div>
        </div>
      </div>

      <div className=" mt-10 ">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className=" w-full py-2 bg-green-500 rounded-md text-[#fff] "
        >
          {loading ? "Loading" : "Update My Profile"}
        </button>
      </div>
    </div>
  );
};

export default Page

