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

}, {timestamps: true})

const Listing = mongoose.models.listings || mongoose.model('listings', listingSchema)

export default Listing