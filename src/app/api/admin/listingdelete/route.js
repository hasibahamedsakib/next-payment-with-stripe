import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";

// Connect to the database
connectDB();

export async function POST(req) {
  try {
    // Parse the request body to get the userId
    const reqBody = await req.json();
    const { listingId } = reqBody;

    // Validate userId
    if (!listingId) {
      const res = NextResponse.json(
        { success: false, message: "listing ID is required" },
        { status: 400 }
      );
      res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
      res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return res;
    }

    // Find and delete the user by ID
    const listing = await Listing.findByIdAndDelete(listingId);

    if (!listing) {
      const res = NextResponse.json(
        { success: false, message: "Listing not found" },
        { status: 404 }
      );
      res.headers.set("Access-Control-Allow-Origin", process.env.ADMIN_PANEL_URL);
      res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return res;
    }

    // User successfully deleted
    const res = NextResponse.json(
      { success: true, message: "Listing deleted successfully" },
      { status: 200 }
    );
    res.headers.set("Access-Control-Allow-Origin", process.env.ADMIN_PANEL_URL);
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  } catch (error) {
    console.error("Error deleting listing:", error);

    const res = NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
    res.headers.set("Access-Control-Allow-Origin", process.env.ADMIN_PANEL_URL);
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  }
}

export async function OPTIONS() {
  return new Response("OK", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.ADMIN_PANEL_URL,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
