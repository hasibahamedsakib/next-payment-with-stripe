import { connectDB } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


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

        // await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id });

        return NextResponse.json({
            message: "User Registered Successfully",
            success: true,
        });

    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            error: error.message
        }, {
            status: 500
        });
    }

}