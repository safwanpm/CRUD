import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import connectDB from './src/config/db.js';
import registerRoutes from './src/routes/registerRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app=express();



app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}));

connectDB()


app.use('/register',registerRoutes)
app.use('/auth',authRoutes)


const PORT=process.env.PORT||5000
app.listen(PORT,()=>
console.log(`server running on port ${PORT}`))

