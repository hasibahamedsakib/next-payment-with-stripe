import { NextResponse } from "next/server";
// import multer from "multer";
// import { storage } from "@/utils/cloudinary";
import { connectDB } from "@/dbConfig/dbConfig";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import jwt from 'jsonwebtoken'

// const upload = multer({ storage });
connectDB();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req) {
  // const uploadPromise = new Promise((resolve, reject) => {
  //   upload.single('file')(req, {}, function (err) {
  //     if (err) return reject(err);
  //     resolve();
  //   });
  // });

  try {
    // await uploadPromise;

    const reqBody = await req.json();

    // const {userId, firstName, lastName} = reqbody

    const {
      userId,
      firstName,
      lastName,
      email,
      password,
      birthDate,
      birthPlace,
      licenseNumber,
      licenseIssueDate,
      licenseIssueCountry,
      phoneNumber,
      addressLine1,
      addressLine2,
      postalCode,
      city,
      state,
      aboutMe,
      oldPassword,
      newPassword,
      profileImg
    } = reqBody;

    console.log(password, userId);

    let updateData = {};

    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;

    if (password) {
      const user = await User.findOne({ _id: userId });
      console.log(`user: ${user}`);
      if (!user) {
        return NextResponse.json(
          {
            error: "User not exist",
          },
          {
            status: 400,
          }
        );
      }

      const comparedPassword = await bcryptjs.compare(password, user.password);
      if (!comparedPassword) {
        return NextResponse.json(
          {
            error: "Wrong Credentials",
          },
          {
            status: 400,
          }
        );
      }
      if (email) updateData.email = email;
    }
    if (oldPassword) {
      const user = await User.findOne({ _id: userId });
      console.log(`user: ${user}`);
      if (!user) {
        return NextResponse.json(
          {
            error: "User not exist",
          },
          {
            status: 400,
          }
        );
      }

      const comparedPassword = await bcryptjs.compare(
        oldPassword,
        user.password
      );
      if (!comparedPassword) {
        return NextResponse.json(
          {
            error: "Wrong Credentials",
          },
          {
            status: 400,
          }
        );
      }
      // updateData.password = newPassword;
      if (newPassword) {
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(newPassword, salt);
        updateData.password = hashedPassword;
      }
    }
    if (birthDate) updateData.birthDate = birthDate;
    if (birthPlace) updateData.birthPlace = birthPlace;
    if (licenseNumber) updateData.licenseNumber = licenseNumber;
    if (licenseIssueDate) updateData.licenseIssueDate = licenseIssueDate;
    if (licenseIssueCountry)
      updateData.licenseIssueCountry = licenseIssueCountry;
    if (addressLine1) updateData.addressLine1 = addressLine1;
    if (addressLine2) updateData.addressLine2 = addressLine2;
    if (postalCode) updateData.postalCode = postalCode;
    if (city) updateData.city = city;
    if (state) updateData.state = state;
    if (aboutMe) updateData.aboutMe = aboutMe;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;
    if (profileImg) updateData.profileImg = profileImg;

    // Handle file upload
    // if (req.file && req.file.path) {
    //   updateData.profileImage = req.file.path;
    // }

    // console.log(updateData);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        {
          status: 405,
        }
      );
    }

    const tokenData = {
      id: updatedUser._id,
      email: updatedUser.email,
      profileImg: updatedUser.profileImg
  }

  const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: '10d'});

    const response = NextResponse.json(
      {
        message: "User updated successfully",
        success: true,
        user: updatedUser,
      },
      {
        status: 200,
      }
    );

    response.cookies.set("token", token, {
      httpOnly: true
  })

  return response


  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
