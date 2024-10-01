import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";


connectDB();

export async function POST(req) {

    try {

        
        
        const { plateNumber } = await req.json()

        if(!plateNumber){
            return NextResponse.json({
                success: false,
                message: "plate number is not given"
            })
        }
        

        const listing = await Listing.findOne({plateNumber})

        // console.log("listings", listings);
        

        if(!listing){
            return NextResponse.json({
                success: false,
                message: "Listing not found"
            })
        }

        return NextResponse.json({
            success: true,
            message: "Listing found successfully",
            data: listing
        })


    } catch (error) {
        return NextResponse.json({
            error: error.message
        },{
            status:500
        })
    }

}