import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token, 'tokenn');
    const JWT_SECRET = process.env.JWT_SECRET
    if (!token) {
        return res.status(401).json({
            message: "Unautherised, No token provided"
        })
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next()
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }

}