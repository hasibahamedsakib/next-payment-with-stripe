import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";

connectDB();

export async function GET(req) {
  try {
    const listings = await Listing.find();

    // Handle CORS preflight request
    const res = NextResponse.json(
      { success: true, message: "listings fetched successfully", data: listings },
      { status: 200 }
    );

    res.headers.set("Access-Control-Allow-Origin", process.env.ADMIN_PANEL_URL);
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return res;
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
