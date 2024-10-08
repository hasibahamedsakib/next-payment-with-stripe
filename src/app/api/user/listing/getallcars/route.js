import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";

connectDB();

export async function POST(req) {
  try {
    const { location } = await req.json();

    if (location) {
      // Split location into parts and clean whitespace, filter out empty strings
      const locationParts = location
        ?.split(",")
        ?.map((part) => part.trim().toLowerCase())
        .filter(Boolean);
      // console.log(locationParts);

      if (locationParts?.length === 0) {
        return NextResponse.json({
          message: "Location not provided or invalid",
          success: false,
        });
      }

      // Build $or query for partial matching in meetingPoint, city, and state fields
      const regexQueries = locationParts?.map((part) => ({
        $or: [
          { meetingPoint: { $regex: part, $options: "i" } },
          { city: { $regex: part, $options: "i" } },
          { state: { $regex: part, $options: "i" } },
        ],
      }));

      // Create a query to find listings that match any of the location parts in meetingPoint, city, or state
      const query = {
        $or: regexQueries,
      };

      // Fetch cars that match the partial location search
      const allListedCars = await Listing.find(query);

      if (allListedCars.length === 0) {
        return NextResponse.json({
          message: "No listed car found for the given location",
          success: false,
        });
      }

      return NextResponse.json({
        message: "Listed cars found successfully",
        success: true,
        allListedCars,
      });
    } else {
      // Fetch all listed cars
      const allListedCars = await Listing.find();

      if (allListedCars.length === 0) {
        return NextResponse.json({
          message: "No listed car found for the given location",
          success: false,
        });
      }

      return NextResponse.json({
        message: "All Listed cars Retrive successfully",
        success: true,
        allListedCars,
      });
    }
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
