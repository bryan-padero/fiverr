import createError from "../utils/createError.js"
import Order from '../models/order.model.js'
import Gig from '../models/gig.model.js'
import User from '../models/user.model.js'

export const createOrder = async (req, res, next) => {
    try {

        const gig = await Gig.findById(req.params.gigId)
        if(!gig) return res.status(404).send("Gig not found")

        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: "temporary",
        })
        
        await newOrder.save()
        res.status(200).send("successful")
    } catch(err) {
        next(createError)
    }
}

export const getOrders = async (req, res, next) => {
    try {

        const orders = await Order.find({
            ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId}),
            isCompleted: true
        })
        if(!orders) return res.status(404).send("No orders found")

        res.status(200).send(orders)
        
    } catch(err) {
        return next(err)
    }
}