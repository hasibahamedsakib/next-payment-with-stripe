import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Listing from "@/models/listingModel";
// import '@/utils/updateListingsStatus'


connectDB();

export async function POST(req) {

    try {

        
        
        const { userId } = await req.json()
        

        const listings = await Listing.find({userId})

        // console.log("listings", listings);
        

        if(listings.length <1){
            return NextResponse.json({
                success: false,
                message: "No listing"
            })
        }

        return NextResponse.json({
            success: true,
            message: "Listing found successfully",
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