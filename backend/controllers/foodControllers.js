import foodModel from "../models/FoodModel.js";

import { v2 as cloudinary } from "cloudinary";



//add Food item

const addFood = async(req,res) =>{
       
    const imageFile = req.file
     // upload image to cloudinary
     const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
     const imageUrl = imageUpload.secure_url

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:imageUrl,
        category:req.body.category
    })    

    try{
        await food.save();
        console.log(food);
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
    
}

// all food list 
const listFood = async (req,res) =>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
//remove food item 
const removeFood = async (req,res)=>{
    try {
        // const food = await foodModel.find(req.body.id);
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:"true",message:"Food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:"false",message:error.message})
    }
}

export {addFood,listFood,removeFood}
