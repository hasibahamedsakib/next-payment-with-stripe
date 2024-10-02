import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    
    userId: {
        type: String,
        required: true 
    },
    carName: {
        type: String,
        
    },
    carModel: {
        type: String,
        
    },
    yearOfRegistation: {
        type: String,
        
    },
    mileage: {
        type: String,
        
    },
    city: {
        type: String,
        
    },
    plateNumber: {
        type: String,
    },
    countryOfRegistation: {
        type: String,
        
    },
    state: {
        type: String,
        
    },
    fuel: {
        type: String,
        
    },
    gearbox: {
        type: String,
        
    },
    numberOfDoors: {
        type: String,
        
    },
    numberOfSeats: {
        type: String,
        
    },
    otherFeatures: {
        type: Array,
        
    },
    registeredBusiness: {
        type: String,
        
    },
    phoneNumber: {
        type: String,
        
    },
    availableWeekends: {
        type: String,
        
    },
    meetingPoint: {
        type: String,
        
    },
    image: {
        type: String,
        default: "https://i.imghippo.com/files/Ady0n1727449037.jpg"
    },
    image1: {
        type: String,
        
    },
    image2: {
        type: String,
        
    },
    image3: {
        type: String,
        
    },
    image4: {
        type: String,
        
    },
    uptodate: {
        type: String,
        
    },
    wellMaintained: {
        type: String,
        
    },
    perDayPrice: {
        type: Number,
        
    },
    status: {
        type: Boolean,
        default: true
    },
    unavailability: {
        startDate: {
          type: String,
        },
        startTime: {
          type: String,
        },
        endDate: {
          type: String,
        },
        endTime: {
          type: String,
        },
        reason: {
          type: String,
        }
      }


}, {timestamps: true})



// listingSchema.pre('find', async function (next) {
//     if (!this.getOptions().skipStatusUpdate) {
//       await updateStatuses(this);
//     }
//     next();
//   });
  
//   listingSchema.pre('findOne', async function (next) {
//     if (!this.getOptions().skipStatusUpdate) {
//       await updateStatuses(this);
//     }
//     next();
//   });
  
//   async function updateStatuses(query) {
//     const now = new Date();
//     const listings = await query.lean(); // Use lean to return plain objects
  
//     // Prepare updates in bulk
//     const bulkOps = listings.map((listing) => {
//       const { startDate, startTime, endDate, endTime } = listing?.unavailability || {};
//       if (startDate && startTime && endDate && endTime) {
//         const start = new Date(`${startDate}T${startTime}`);
//         const end = new Date(`${endDate}T${endTime}`);
  
//         const newStatus = now >= start && now <= end ? false : true;
  
//         // Only update if the status has changed
//         if (listing.status !== newStatus) {
//           return {
//             updateOne: {
//               filter: { _id: listing._id },
//               update: { $set: { status: newStatus } },
//               options: { skipStatusUpdate: true } // Prevent re-triggering the middleware
//             }
//           };
//         }
//       }
//     }).filter(Boolean); // Filter out undefined values
  
//     if (bulkOps.length > 0) {
//       // Perform bulk update
//       await Listing.bulkWrite(bulkOps);
//     }
//   }
  
  
  

const Listing = mongoose.models.listings || mongoose.model('listings', listingSchema)

export default Listing