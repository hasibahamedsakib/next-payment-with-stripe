// import cron from 'node-cron';
// import Listing from '@/models/listingModel';
// import mongoose from 'mongoose';
// import { connectDB } from '@/dbConfig/dbConfig';


// connectDB();


// async function updateListingStatuses() {
//   try {
//     const now = new Date();
//     console.log('Current Date & Time:', now); 
//     const listings = await Listing.find();

//     listings.forEach(async (listing) => {
//       const { startDate, startTime, endDate, endTime } = listing?.unavailability;

//       if (startDate && startTime && endDate && endTime) {
       
//         const start = new Date(`${startDate.split('T')[0]}T${startTime}:00.000Z`);
//         const end = new Date(`${endDate.split('T')[0]}T${endTime}:00.000Z`);

//         console.log('Start:', start, 'End:', end);

        
//         if (now >= start && now <= end) {
//           console.log(`Updating status to false for listing ${listing._id}`);
//           listing.status = false;
//         } else {
//           console.log(`Updating status to true for listing ${listing._id}`);
//           listing.status = true;
//         }

//         await listing.save();
//       }
//     });

//     console.log('Listing statuses updated successfully.');
//   } catch (error) {
//     console.error('Error updating listings:', error);
//   }
// }


// cron.schedule('* * * * *', () => {
//   console.log('Running the update job...');
//   updateListingStatuses();
// });
