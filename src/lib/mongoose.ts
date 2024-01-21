import mongoose  from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL) return console.log("DB NOT FOUND")
    if(isConnected) return console.log("Connect to MongoDB");

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        isConnected = true;
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log(error);
    }
    
}

