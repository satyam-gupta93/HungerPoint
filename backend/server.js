import 'dotenv/config'
import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import foodRouter from './routes/foodRoute.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'



//app config 
const app = express()
const port =4000 
connectDB()
connectCloudinary()


//middlewares
app.use(express.json())
app.use(cors())


// api endPoints
app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
    res.send("Api Working!");

})


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


// mongodb+srv://satyam:<db_password>@cluster0.nzwkbi2.mongodb.net/?

// console.log(process.env.CLOUDINARY_API_KEY);