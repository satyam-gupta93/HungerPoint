import foodModel from "../models/FoodModel.js";
import orderModel from "../models/orderModel.js";
import userModel from "../models/UserModel.js";
import stripe from "stripe";

const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)

// Placing userOrder 
const placeOrder = async (req,res) =>{

    const frontend_url = "http://localhost:5173"
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80,
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100
            },
            quantity:1
        })
        const session = await stripeInstance.checkout.sessions.create({
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${appointmentData._id}`,
            line_items: line_items,
            mode: 'payment',
        })
        res.json({succcess:"true",session_url:session.url})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

const verifyOrder = async (req, res) => {
    const {orderId,succcess} = req.body;
    try {
        if(succcess=="true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({succcess:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({succcessq:false,message:"Not paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({succcessq:false,message:"Error"})
    }

}

export {placeOrder,verifyOrder}