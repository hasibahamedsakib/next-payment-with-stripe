import mongoose from "mongoose";

export async function connectDB() {
    try {
        
        // mongoose.connect(process.env.MONGODB_URI)
        mongoose.connect(process.env.MONGODB_URL)
        const connection = mongoose.connection

        connection.setMaxListeners(30);

        connection.on('connected', ()=> {
            console.log("MongoDB connected");
            
        })

        connection.on('error', (err)=> {
            console.log(`MongoDB connection failed: ` + err );
            process.exit()
        })

    } catch (error) {
        console.log(`Connect DB error, ${error}`);
        
    }
}