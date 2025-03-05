import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import registerModel from '../models/registerModel.js';

// Login Controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, 'asaS');

        // Check if user exists
        const user = await registerModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        console.log(user, 'User found');

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }


        const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '2min' })
        res.cookie("token", token, {
            httpOnly: true,

            maxAge: 3600 * 1000,  // 1 hour

        });
        res.status(200).json({
            success: true,
            message: "Login successful",
            user: { id: user._id, name: user.name, email: user.email }
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

