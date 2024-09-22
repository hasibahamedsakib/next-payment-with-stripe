import upload from '@/utils/cloudinary';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const result = await new Promise((resolve, reject) => {
        upload.single('image')(req, {}, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(req.file);
        });
    });

    // Ensure req.file exists
    if (!result) {
        return NextResponse.json({ message: 'File upload failed' }, { status: 400 });
    }

    // Get the uploaded image URL from Cloudinary
    const imageUrl = result.path;

    // Return the image URL in the response
    return NextResponse.json({ message: 'Image uploaded successfully', imageUrl });
}
