"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoMdCamera } from "react-icons/io";

const EditProfile = ({userData}) => {
  
  const [file, setFile] = useState("");
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

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [imageUploadStatus, setImageUploadStatus] = useState(false);
  const [imageUploadedUrl, setImageUploadedUrl] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file)); 
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault()
    setImageUploadStatus(true)
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('/api/user/uploadimage', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
      
      setImageUploadedUrl(response.data.imageUrl);
      setImageUploadStatus(false)
      console.log(response.data.imageUrl);
    } catch (error) {
      console.error('Image Upload failed:', error);
      setImageUploadStatus(false);
    }
  };


  const fileRef = useRef(null);

  console.log(`imag url: ${imageUploadedUrl}`);

  

  console.log(userData);

  const handleSubmit = async () => {

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
      window.location.reload()
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
          <div className=" flex flex-col gap-1 ">
            <label htmlFor="" className=" font-light ">
              Number
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              defaultValue={userData?.phoneNumber}
              type="number"
              name=""
              id=""
              className=" outline-none px-2 py-2 rounded-md bg-green-500/5 "
            />
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

export default EditProfile;
