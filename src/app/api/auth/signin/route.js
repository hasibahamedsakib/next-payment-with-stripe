
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";


connectDB();


export async function POST(req) {
    
    try {
        
        const reqBody = await req.json()

        const { email, password } = reqBody;

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                error: "User not exist"
            }, {
                status: 400
            });
        }

        const comparedPassword = await bcryptjs.compare(password, user.password)
        if (!comparedPassword) {
            return NextResponse.json({
                error: "Password is wrong"
            }, {
                status: 400
            });
        }

        const tokenData = {
            id: user._id,
            email: user.email,
            profileImg: user.profileImg
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: '10d'});

        const response = NextResponse.json({
            message: "User Logged in Successfully",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response


    } catch (error) {
        return NextResponse.json({
            error: error.message
        },{
            status:500
        })
    }

}