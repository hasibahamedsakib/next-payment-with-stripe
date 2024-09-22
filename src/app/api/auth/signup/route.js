import { connectDB } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


connectDB()


export async function POST(req) {

    try {
        
        const reqBody = await req.json();
        const { firstName, lastName, email, password } = reqBody;

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({
                error: "User already exists"
            }, {
                status: 400
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        await newUser.save();

        const tokenData = {
            id: newUser._id,
            email: newUser.email,
            profileImg: newUser.profileImg
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: '10d'});


        // await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id });

        const response = NextResponse.json({
            message: "User Registered Successfully",
            success: true,
        });

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response

    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error: error.message
        }, {
            status: 500
        });
    }

}