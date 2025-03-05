import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import registerModel from '../models/registerModel.js';

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const existingUser = await registerModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "email already exist, try another"
            })
        }
        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = new registerModel({
            name, email, password: hashedPass
        })
        await newUser.save()
        return res.status(200).json({
            success: true,
            error: false,
            message: "Registration Success",
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        })

    }
    catch (error) {

        return res.status(400).json({
            error: true,
            success: false,
            message: "An error occurred while Registration",
        })
    }
}