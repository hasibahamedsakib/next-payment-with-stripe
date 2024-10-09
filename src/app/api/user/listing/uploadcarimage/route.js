import Listing from "@/models/listingModel";
import cloudinary from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { images, plateNumber } = await req.json();

    // console.log(images);

    if (!plateNumber) {
      return NextResponse.json({
        success: false,
        message: "plate number is not given",
      });
    }

    if (!images || images.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No images provided",
        },
        { status: 400 }
      );
    }

    const uploadedImages = [];

    for (let image of images) {
      if (image) {
        const base64Data = image.split(",")[1]; // Extract base64 part
        const result = await cloudinary.uploader.upload(
          `data:image/jpeg;base64,${base64Data}`,
          {
            folder: "people",
          }
        );
        uploadedImages.push(result.secure_url);
      } else {
        uploadedImages.push(null);
      }
    }

    let updateData = {};

    const listing = await Listing.findOne({ plateNumber });

    // console.log("listings", listings);

    if (!listing) {
      return NextResponse.json({
        success: false,
        message: "Listing not found",
      });
    }

    if (uploadedImages[0]) {
      updateData.image1 = uploadedImages[0];
    }
    if (uploadedImages[1]) {
      updateData.image2 = uploadedImages[1];
    }
    if (uploadedImages[2]) {
      updateData.image3 = uploadedImages[2];
    }
    if (uploadedImages[3]) {
      updateData.image4 = uploadedImages[3];
    }

    await Listing.findByIdAndUpdate(
      listing?._id,
      { $set: updateData },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Images uploaded successfully",
      imageUrls: uploadedImages,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to upload images",
      },
      { status: 500 }
    );
  }
}
