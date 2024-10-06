import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/dbConfig/dbConfig";

// Connect to the database
connectDB();

export async function POST(req) {
  try {
    // Parse the request body to get the userId
    const reqBody = await req.json();
    const { userId } = reqBody;

    // Validate userId
    if (!userId) {
      const res = NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
      res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
      res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return res;
    }

    // Find and delete the user by ID
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      const res = NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
      res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
      res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.headers.set("Access-Control-Allow-Headers", "Content-Type");
      return res;
    }

    // User successfully deleted
    const res = NextResponse.json(
      { success: true, message: "User deleted successfully" },
      { status: 200 }
    );
    res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  } catch (error) {
    console.error("Error deleting user:", error);

    const res = NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
    res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return res;
  }
}

export async function OPTIONS() {
  return new Response("OK", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
