import mongoose from "mongoose";


const registerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
})

const registerModel = mongoose.model('Users', registerSchema)
export default registerModel