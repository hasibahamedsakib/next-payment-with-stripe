import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";

connectDB();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { listingId, unavailability } = reqBody;

    if (!listingId) {
      return NextResponse.json(
        {
          success: false,
          message: "listing id must be provided",
        },
        {
          status: 404,
        }
      );
    }

    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      { unavailability },
      { new: true }
    );

    if (!updatedListing) {
      return NextResponse.json(
        {
          success: false,
          message: "Listing not found",
        },
        {
          status: 404,
        }
      );
    }
    // console.log(updatedListing);

    return NextResponse.json(
      {
        success: true,
        message: "Listing updated successfully",
        data: updatedListing,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
