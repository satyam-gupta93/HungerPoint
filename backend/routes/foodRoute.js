import express from "express"
import upload from "../middlewares/multer.js";
import { addFood, listFood, removeFood } from "../controllers/foodControllers.js"


const foodRouter = express.Router();




foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)







export default foodRouter;