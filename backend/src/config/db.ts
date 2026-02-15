import mongoose from "mongoose";

const ConnectDB = async () =>{
    try {
        await mongoose.connect(process.env.Mongo_URI!)
        console.log("DB Connected!")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default ConnectDB