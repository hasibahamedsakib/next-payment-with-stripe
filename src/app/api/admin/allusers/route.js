import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();

export async function GET(req) {
  try {
    const users = await User.find();

    // Handle CORS preflight request
    const res = NextResponse.json(
      { success: true, message: "Users fetched successfully", data: users },
      { status: 200 }
    );

    res.headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return res;
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
