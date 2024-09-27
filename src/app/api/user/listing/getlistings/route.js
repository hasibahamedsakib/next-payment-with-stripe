import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";

connectDB();

export async function POST(req) {

    try {

        const reqBody = await req.json()
        
        const { userId } = reqBody

        const listings = await Listing.find({userId})

        if(!listings){
            return NextResponse.json({
                message: "No listing"
            })
        }

        return NextResponse.json({
            success: true,
            data: listings
        })


    } catch (error) {
        return NextResponse.json({
            error: error.message
        },{
            status:500
        })
    }

}