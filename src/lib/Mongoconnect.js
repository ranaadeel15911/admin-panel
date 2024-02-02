import mongoose from "mongoose"
export const ConnectMongoDB =async ()=>{
//this code means if the mongoose connection already established or already connected than return back otherwise go ahead and connect    
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise()
        
    }

    return await mongoose.connect(process.env.MONGO_URL)

}
