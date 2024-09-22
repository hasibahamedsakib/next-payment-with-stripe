import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'; // Ensure you have installed jsonwebtoken library
import User from '@/models/userModel';
import { connectDB } from '@/dbConfig/dbConfig';


connectDB()

export async function POST(req) {
  try {
    // Step 1: Extract the JWT token from cookies
    const cookie = req.cookies.get('token'); // Assuming 'token' is the name of the cookie

    if (!cookie) {
      return NextResponse.json({ message: 'Unauthorized, no token found' }, { status: 401 });
    }

    const token = cookie.value;

    // Step 2: Verify the JWT token and extract userId
    // Your JWT secret key
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); 
    } catch (err) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const { id } = decoded; 

    
    const body = await req.json(); 
    const { userId } = body;

    if (userId !== id) {
      return NextResponse.json({ message: 'Unauthorized, user mismatch' }, { status: 403 });
    }

    // Step 4: Connect to MongoDB and delete the user
    

    const user = await User.findByIdAndDelete(userId); // Delete user by ID

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Step 5: Remove the token from the cookies
    const response = NextResponse.json({ message: 'Account deleted successfully',
      success: true
     }, { status: 200 });
    
    // Setting the token cookie to expire immediately
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0)
  })

    return response;

  } catch (error) {
    console.error('Error deleting account:', error);
    return NextResponse.json({ message: 'Server error',
      success: false
     }, { status: 500 });
  }
}
