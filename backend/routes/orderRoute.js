import { placeOrder } from "../controllers/orderController.js";
import express from "express"
import authMiddleware from "../middlewares/auth.js";


const orederRouter = express.Router();

orederRouter.post("/place",authMiddleware,placeOrder)
orederRouter.post("/verify",placeOrder)


export default orederRouter

