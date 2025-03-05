import express from 'express'
import { registerUser } from '../controllers/registerContoller.js'



const registerRoutes=express.Router()

registerRoutes.post('/add',registerUser)


export default registerRoutes