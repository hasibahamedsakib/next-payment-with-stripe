import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { getTokenData } from "@/utils/getTokenData";

connectDB();

export async function POST(req) {
    try {
        
        // const userId = getTokenData(req)
        // console.log(userId);

        const reqBody = await req.json()

        const {userId} = reqBody

        console.log(userId);
        
        

        const user = await User.findOne({ _id: userId }).select("-password")

        if(!user){
            return NextResponse.json({
                message: "user not foound",
                success: false
            },{
                status: 404
            })
        }
        // console.log(user);
        // console.log("user:");
        
        // console.log(user);
        
        

        return NextResponse.json({
            message: "User found successfully",
            success: true,
            data: user
        })

    } catch (error) {
        return NextResponse.json({
            error: error.message
        },{
            status:500
        })
    }
}