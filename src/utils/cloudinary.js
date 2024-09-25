import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;


// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary.v2,
//   params: {
//     folder: 'user_images',
//     format: async (req, file) => {
//       // Only allow specific formats
//       const allowedFormats = ['jpg', 'jpeg', 'png', 'gif', 'mov', 'avi'];
//       return allowedFormats.includes(file.mimetype.split('/')[1]) ? file.mimetype.split('/')[1] : 'png'; // Default to 'png'
//     },
//     public_id: (req, file) => file.originalname.split('.')[0],
//   },
// });


// const upload = multer({ storage });

// export default upload;
