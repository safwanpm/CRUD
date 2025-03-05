import express from 'express'
import { login } from '../controllers/authController.js'
import { verifyToken } from '../middleware/checkAuth.js';

const authRoutes = express.Router()

authRoutes.post('/login', login)
authRoutes.get('/verify', verifyToken, (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user, // User details decoded from token
        message: "Authorized",
    });
});

export default authRoutes