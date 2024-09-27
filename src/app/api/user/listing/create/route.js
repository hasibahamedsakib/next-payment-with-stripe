import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";

connectDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();

    const {
      userId,
      carName,
      carModel,
      yearOfRegistation,
      mileage,
      city,
      plateNumber,
      countryOfRegistation,
      state,
      fuel,
      gearbox,
      numberOfDoors,
      numberOfSeats,
      otherFeatures,
      registeredBusiness,
      phoneNumber,
      availableWeekends,
      meetingPoint,
    } = reqBody;

    console.log(userId);
    


    const listings = await Listing.findOne({ plateNumber });

    if(listings){
      return NextResponse.json(
        {
          message: "The car already listed, number plate should be unique",
          success: false,
        }
      );
    }

    const newListing = new Listing({
      userId,
      carName,
      carModel,
      yearOfRegistation,
      mileage,
      city,
      plateNumber,
      countryOfRegistation,
      state,
      fuel,
      gearbox,
      numberOfDoors,
      numberOfSeats,
      otherFeatures,
      registeredBusiness,
      phoneNumber,
      availableWeekends,
      meetingPoint,
  });

  await newListing.save();

  return NextResponse.json({
    message: "The car listed Successfully",
    success: true,
});




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
