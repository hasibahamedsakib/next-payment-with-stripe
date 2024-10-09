// import upload from '@/utils/cloudinary';
import cloudinary from '@/utils/cloudinary';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const data = await req.json();
    console.log(data); // Log the entire body to ensure it's in the correct format
    const { image } = data;

    // console.log(image);
    
        
    
        if (!image) {
          return NextResponse.json({ error: 'No image provided',
            success: false
           }, { status: 400 });
        }
    
        // Extract base64 string without the data prefix (e.g., "data:image/png;base64,")
        const base64Data = image.split(',')[1];
    
        // Upload the image to Cloudinary
        const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${base64Data}`, {
          folder: 'people',
        });
    
        return NextResponse.json({ imageUrl: result.secure_url,
            success: true,
            message: "Image uploader successfully"
         });
      } catch (error) {
        return NextResponse.json({ error: 'Failed to upload image',
            success: false
         }, { status: 500 });
      }
}
