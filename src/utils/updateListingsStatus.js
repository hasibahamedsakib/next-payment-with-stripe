import cron from 'node-cron';
import Listing from '@/models/listingModel';
import mongoose from 'mongoose';
import { connectDB } from '@/dbConfig/dbConfig';
import moment from 'moment-timezone';

connectDB();

async function updateListingStatuses() {
  try {
    const now = moment.tz('Europe/Oslo'); // Get current time in Norway's timezone
    console.log('Current Date & Time in Norway:', now.format()); 

    const listings = await Listing.find();

    listings.forEach(async (listing) => {
      const { startDate, startTime, endDate, endTime } = listing?.unavailability;

      if (startDate && startTime && endDate && endTime) {
        // Construct valid ISO date-time strings using template literals
        const start = moment.tz(`${startDate}T${startTime}:00`, 'Europe/Oslo');
        const end = moment.tz(`${endDate}T${endTime}:00`, 'Europe/Oslo');

        // Logging start and end times to check if they are valid
        console.log('Start:', start.format(), 'End:', end.format());

        if (now.isBetween(start, end, null, '[]')) {
          console.log(`Updating status to false for listing ${listing._id}`);
          listing.available = false; 
        } else {
          console.log(`Updating status to true for listing ${listing._id}`);
          listing.available = true;  
        }

        await listing.save();
      } else {
        console.log(`Missing unavailability information for listing ${listing._id}`);
      }
    });

    console.log('Listing statuses updated successfully.');
  } catch (error) {
    console.error('Error updating listings:', error);
  }
}

// Schedule the cron job to run every 5 minutes
cron.schedule('*/5 * * * *', () => {
  console.log('Running the update job...');
  updateListingStatuses();
});
